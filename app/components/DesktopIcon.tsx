'use client';

import { MouseEvent, PointerEvent, useRef, useState, useSyncExternalStore } from 'react';

interface DesktopIconProps {
  icon: string;
  label: string;
  isSelected: boolean;
  onClick: (e: MouseEvent) => void;
  onDoubleClick: () => void;
  onContextMenu?: (e: MouseEvent) => void;
  /** Default spot on the desktop; omit to keep the icon in normal layout flow */
  position?: { x: number; y: number };
}

const DRAG_THRESHOLD = 4; // px moved before a press counts as a drag
const TASKBAR_HEIGHT = 30;

const storageKey = (label: string) => `desktop-icon-offset-v2:${label}`;
const OFFSET_EVENT = 'desktop-icon-offset-change';

function subscribeToOffsets(callback: () => void) {
  window.addEventListener(OFFSET_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(OFFSET_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function readSavedOffset(label: string) {
  try {
    return localStorage.getItem(storageKey(label));
  } catch {
    return null;
  }
}

function parseOffset(saved: string | null) {
  try {
    if (saved) return JSON.parse(saved) as { x: number; y: number };
  } catch {}
  return { x: 0, y: 0 };
}

export default function DesktopIcon({
  icon,
  label,
  isSelected,
  onClick,
  onDoubleClick,
  onContextMenu,
  position,
}: DesktopIconProps) {
  // Position the viewer left this icon at (none during server render)
  const saved = useSyncExternalStore(subscribeToOffsets, () => readSavedOffset(label), () => null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number } | null>(null);
  const offset = dragOffset ?? parseOffset(saved);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ startX: 0, startY: 0, baseX: 0, baseY: 0, rect: null as DOMRect | null, moved: false, last: { x: 0, y: 0 } });

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.preventDefault(); // stop text selection and native image dragging
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: offset.x,
      baseY: offset.y,
      rect: ref.current?.getBoundingClientRect() ?? null,
      moved: false,
      last: offset,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.rect || !e.currentTarget.hasPointerCapture(e.pointerId)) return;

    let dx = e.clientX - d.startX;
    let dy = e.clientY - d.startY;
    if (!d.moved && Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
    if (!d.moved) {
      d.moved = true;
      setIsDragging(true);
    }

    // Keep the icon on screen and above the taskbar
    dx = Math.min(Math.max(dx, -d.rect.left), window.innerWidth - d.rect.right);
    dy = Math.min(Math.max(dy, -d.rect.top), window.innerHeight - TASKBAR_HEIGHT - d.rect.bottom);
    d.last = { x: d.baseX + dx, y: d.baseY + dy };
    setDragOffset(d.last);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    drag.current.rect = null;
    if (drag.current.moved) {
      setIsDragging(false);
      try {
        localStorage.setItem(storageKey(label), JSON.stringify(drag.current.last));
        window.dispatchEvent(new Event(OFFSET_EVENT));
        setDragOffset(null);
      } catch {
        // Storage unavailable: keep the position for this visit only
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`xp-desktop-icon ${isSelected ? 'selected' : ''}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        position: position ? 'absolute' : 'relative',
        left: position?.x,
        top: position?.y,
        zIndex: isDragging ? 10 : undefined,
        opacity: isDragging ? 0.8 : undefined,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={(e) => {
        // A drag ends with a click event; don't treat it as a selection click
        if (drag.current.moved) {
          e.stopPropagation();
          drag.current.moved = false;
          return;
        }
        onClick(e);
      }}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
    >
      <div className="xp-desktop-icon-image" draggable={false}>{icon}</div>
      <span className="xp-desktop-icon-label">{label}</span>
    </div>
  );
}
