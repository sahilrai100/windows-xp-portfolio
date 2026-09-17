'use client';

const techStack = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'Django', icon: '🟩', color: '#092e20' },
  { name: 'FastAPI', icon: '⚡', color: '#009688' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'Kafka', icon: '📨', color: '#231f20' },
  { name: 'Redis', icon: '🟥', color: '#dc382d' },
  { name: 'RabbitMQ', icon: '🐇', color: '#ff6600' },
  { name: 'SQL', icon: '🗄️', color: '#4479a1' },
  { name: 'Git', icon: '📦', color: '#f05032' },
];

const categories = [
  {
    name: 'Languages',
    icon: '💬',
    color: '#4a90d9',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    name: 'Backend & Frameworks',
    icon: '⚙️',
    color: '#5cb85c',
    items: ['Django', 'FastAPI', 'Django REST Framework'],
  },
  {
    name: 'Databases',
    icon: '🗄️',
    color: '#9b59b6',
    items: ['MongoDB', 'pgvector', 'MySQL'],
  },
  {
    name: 'Messaging & Async',
    icon: '📨',
    color: '#d9534f',
    items: ['Kafka', 'RabbitMQ', 'Celery', 'Redis'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: '#17a2b8',
    items: ['HTML', 'CSS', 'JavaScript', 'AngularJS', 'Bootstrap'],
  },
  {
    name: 'Tools & Platforms',
    icon: '🔧',
    color: '#f0ad4e',
    items: ['Git', 'GitHub', 'Postman', 'Microsoft Azure'],
  },
];

export default function SkillsContent() {
  return (
    <div>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        marginBottom: '15px',
        paddingBottom: '12px',
        borderBottom: '2px solid #0a246a'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #0078d4 0%, #0a246a 100%)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}>
          💡
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: '16px', color: '#0a246a' }}>Tech Stack</h2>
          <p style={{ margin: '2px 0 0', color: '#666', fontSize: '11px' }}>
            Technologies I work with
          </p>
        </div>
      </div>

      {/* Main Tech Icons */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '10px',
        justifyContent: 'center',
        padding: '15px',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: '6px',
        marginBottom: '15px',
        border: '1px solid #dee2e6'
      }}>
        {techStack.map(tech => (
          <div 
            key={tech.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 12px',
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              minWidth: '65px',
              cursor: 'default',
              transition: 'all 0.2s',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            }}
          >
            <span style={{ fontSize: '20px' }}>{tech.icon}</span>
            <span style={{ fontSize: '9px', fontWeight: 500, color: '#333' }}>{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Skill Categories */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '10px',
        marginBottom: '15px'
      }}>
        {categories.map(category => (
          <div 
            key={category.name}
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              background: category.color,
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span style={{ fontSize: '14px' }}>{category.icon}</span>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '11px' }}>
                {category.name}
              </span>
            </div>
            <div style={{ 
              padding: '10px',
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '4px' 
            }}>
              {category.items.map(item => (
                <span 
                  key={item}
                  style={{
                    background: '#f5f5f5',
                    padding: '3px 8px',
                    fontSize: '10px',
                    borderRadius: '10px',
                    border: '1px solid #e8e8e8',
                    color: '#444'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Section */}
      <div style={{
        background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
        borderRadius: '6px',
        padding: '12px',
        color: 'white',
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          marginBottom: '4px'
        }}>
          <span style={{ fontSize: '18px' }}>📺</span>
          <span style={{ fontWeight: 'bold', fontSize: '12px' }}>YouTube Content</span>
        </div>
        
        <a 
          href="https://www.youtube.com/@sahilrai590" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: '10px',
            padding: '6px',
            background: 'white',
            color: '#cc0000',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Subscribe to Channel
        </a>
      </div>
    </div>
  );
}
