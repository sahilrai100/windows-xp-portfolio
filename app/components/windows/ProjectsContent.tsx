'use client';

type Project = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  icon: string;
  url?: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'AI DevOps Agent',
    description: 'AI-powered incident response platform that investigates logs, metrics and Kafka through parallel specialized agents. Features LLM tool-calling, multi-agent root-cause analysis, agent memory, failure simulation and human-approved remediation.',
    tags: ['Python', 'FastAPI', 'Angular', 'LangGraph', 'Kafka', 'PostgreSQL', 'Docker', 'Prometheus', 'RAG'],
    icon: '🤖',
    github: 'https://github.com/sahilrai100/ai-devops-agent',
  },
  {
    id: 2,
    name: 'Zyanya E-commerce',
    description: 'Full-stack e-commerce app with product browsing, cart, wishlist, secure authentication, profile management, Stripe checkout and automated order confirmation emails.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Stripe API', 'Bootstrap', 'Vercel', 'Neon'],
    icon: '🛒',
    url: 'https://zyanya-store.vercel.app',
    github: 'https://github.com/sahilrai100/real-ecommerece-',
  },
  {
    id: 3,
    name: 'PDF Tools Web App',
    description: 'Full-stack PDF tools app with modular REST APIs, a service-layer architecture and middleware-based request handling for scalable PDF processing workflows.',
    tags: ['Node.js', 'Express.js', 'JavaScript', 'REST API', 'MongoDB', 'Render'],
    icon: '📄',
    url: 'https://pdfspark-tools.onrender.com',
    github: 'https://github.com/sahilrai100/pdf-tools-webapp',
  },
  {
    id: 4,
    name: 'Startup Pitcher',
    description: 'A platform where users pitch their startup ideas and others can view, like and comment on them.',
    tags: ['React JS', 'Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Vercel'],
    icon: '🚀',
    url: 'https://startuphub.vercel.app',
    github: 'https://github.com/sahilrai100/startup-pitcher',
  },
];

export default function ProjectsContent() {
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
        <span style={{ fontSize: '24px' }}>📁</span>
        <div>
          <h2 style={{ margin: 0, fontSize: '14px' }}>My Projects</h2>
          <p style={{ margin: '2px 0 0', color: '#666', fontSize: '10px' }}>
            {projects.length} items • Double-click to open
          </p>
        </div>
      </div>

      {/* Project list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {projects.map(project => (
          <div 
            key={project.id} 
            className="xp-project-card"
            style={{ cursor: 'pointer' }}
            onDoubleClick={() => window.open(project.url ?? project.github, '_blank')}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ 
                fontSize: '28px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #f8f8f8 0%, #e8e8e8 100%)',
                borderRadius: '4px',
                border: '1px solid #d0d0d0',
                flexShrink: 0
              }}>
                {project.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ 
                  margin: '0 0 4px', 
                  fontSize: '12px',
                  color: '#0a246a'
                }}>
                  {project.name}
                </h3>
                <p style={{ 
                  margin: '0 0 8px', 
                  fontSize: '11px',
                  color: '#444',
                  lineHeight: 1.4
                }}>
                  {project.description}
                </p>
                <div className="xp-project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="xp-project-tag">{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: '8px', display: 'flex', gap: '10px' }}>
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '10px' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 Visit Site
                    </a>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '10px' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    💻 Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info bar */}
      <div style={{ 
        marginTop: '12px', 
        padding: '8px 10px', 
        background: '#fffde8', 
        border: '1px solid #e8d54e',
        borderRadius: '2px',
        fontSize: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span style={{ fontSize: '14px' }}>💡</span>
        <span><strong>Tip:</strong> Double-click a project to open it!</span>
      </div>
    </div>
  );
}
