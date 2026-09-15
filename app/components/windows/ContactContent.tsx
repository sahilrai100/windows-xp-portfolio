'use client';
import { useState, FormEvent } from 'react';
const CONTACT_EMAIL = 'sahil070902@gmail.com';
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const socialLinks = [
  { name: 'GitHub', icon: '💻', url: 'https://github.com/sahilrai100' },
  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/sahilrai100/' },
  { name: 'X (Twitter)', icon: '🐦', url: 'https://x.com/sahilrai17480' },
  { name: 'YouTube', icon: '📺', url: 'https://www.youtube.com/@sahilrai590' },
  { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/_rai_sahil/' },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Without a Web3Forms key, fall back to the visitor's own email app
    if (!WEB3FORMS_KEY) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: 'Portfolio Contact Form',
          subject: `Portfolio: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
      setSubmitted(true);
    } catch {
      setError(`Couldn't send your message. Please email me directly at ${CONTACT_EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ 
          fontSize: '48px', 
          marginBottom: '15px',
        }}>
          ✉️
        </div>
        <h2 style={{ color: '#0a246a', marginBottom: '10px' }}>Message Sent!</h2>
        <p style={{ color: '#444', marginBottom: '20px' }}>
          Thanks for reaching out.<br />
          I&apos;ll get back to you soon!
        </p>
        <button 
          className="xp-button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px',
        marginBottom: '12px',
        paddingBottom: '10px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <span style={{ fontSize: '24px' }}>📧</span>
        <div>
          <h2 style={{ margin: 0, fontSize: '14px' }}>Contact Me</h2>
          <p style={{ margin: '2px 0 0', color: '#666', fontSize: '10px' }}>
            Let&apos;s connect and build something amazing!
          </p>
        </div>
      </div>

      {/* Social Links */}
      <fieldset className="xp-fieldset">
        <legend>Social Links</legend>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '6px',
          fontSize: '11px'
        }}>
          {socialLinks.map(link => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                padding: '4px 6px',
                background: '#f8f8f8',
                border: '1px solid #ddd',
                borderRadius: '2px',
                color: '#0066cc',
                textDecoration: 'none'
              }}
            >
              <span>{link.icon}</span> {link.name}
            </a>
          ))}
        </div>
      </fieldset>

      {/* Direct Email */}
      <fieldset className="xp-fieldset">
        <legend>Direct Email</legend>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          padding: '8px',
          background: '#f0f8ff',
          border: '1px solid #b0d0ff',
          borderRadius: '2px'
        }}>
          <span style={{ fontSize: '20px' }}>📧</span>
          <div>
            <a 
              href="mailto:sahil070902@gmail.com"
              style={{ fontWeight: 'bold', fontSize: '12px' }}
            >
              sahil070902@gmail.com
            </a>
            <p style={{ margin: '2px 0 0', color: '#666', fontSize: '10px' }}>
              Click to open in your email client
            </p>
          </div>
        </div>
      </fieldset>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <fieldset className="xp-fieldset">
          <legend>Quick Message</legend>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '3px', fontSize: '11px' }}>
                Your Name:
              </label>
              <input
                type="text"
                className="xp-input"
                style={{ width: '100%' }}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '3px', fontSize: '11px' }}>
                Your Email:
              </label>
              <input
                type="email"
                className="xp-input"
                style={{ width: '100%' }}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '3px', fontSize: '11px' }}>
              Subject:
            </label>
            <input
              type="text"
              className="xp-input"
              style={{ width: '100%' }}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '3px', fontSize: '11px' }}>
              Message:
            </label>
            <textarea
              className="xp-textarea"
              style={{ width: '100%', height: '70px' }}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          {error && (
            <div style={{ marginBottom: '10px', fontSize: '11px', color: '#c00' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button 
              type="button" 
              className="xp-button" 
              onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
            >
              Clear
            </button>
            <button type="submit" className="xp-button" disabled={sending}>
              {sending ? 'Sending...' : '📤 Send Message'}
            </button>
          </div>
        </fieldset>
      </form>

      <div style={{ 
        marginTop: '10px', 
        fontSize: '10px', 
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic'
      }}>
        Looking forward to hearing from you! 🙌
      </div>
    </div>
  );
}
