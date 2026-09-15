'use client';

export default function AboutContent() {
  return (
    <div style={{ maxWidth: '420px' }}>
      {/* Profile Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px',
        marginBottom: '15px',
        padding: '15px',
        background: 'linear-gradient(135deg, #e8f4ff 0%, #d0e8ff 100%)',
        borderRadius: '8px',
        border: '1px solid #b8d4f0'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #0078d4 0%, #0a246a 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          flexShrink: 0,
          border: '3px solid #fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          👨‍💻
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#0a246a', fontWeight: 'bold' }}>
            Sahil Rai
          </h2>
          <p style={{ margin: 0, color: '#0078d4', fontSize: '12px', fontWeight: 500 }}>
            Software Engineer
          </p>
          <p style={{ margin: '6px 0 0 0', color: '#666', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            📍 Bengaluru, India
          </p>
        </div>
      </div>

      {/* Bio */}
      <div style={{ 
        fontSize: '11px', 
        lineHeight: 1.7, 
        marginBottom: '15px',
        color: '#444'
      }}>
        <p style={{ margin: '0 0 10px' }}>
          I&apos;m a backend-focused Software Engineer working at <strong>Everestims Technologies</strong>, Bengaluru, building and maintaining backend services with Python, Django and FastAPI. I work closely with MongoDB, Kafka, Redis and RabbitMQ for data storage, event-driven workflows and asynchronous processing in production.
        </p>
        <p style={{ margin: '0 0 10px' }}>
          Before this, I completed an intensive Python Full Stack Development program where I built and deployed several live projects.
        </p>
        <p style={{ margin: 0 }}>
          I care about backend code that holds up under real-world conditions, not just in development but once it&apos;s live. I&apos;m growing into larger backend ownership as I take on more complex systems.
        </p>
      </div>

      {/* Info Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
        <div style={{
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '6px',
          padding: '10px',
        }}>
          <div style={{ fontSize: '10px', color: '#888', marginBottom: '4px' }}>Education</div>
          <div style={{ fontSize: '11px', fontWeight: 500, color: '#333' }}>B.Tech in CSE</div>
          <div style={{ fontSize: '10px', color: '#666' }}>Computer Science & Engineering</div>
        </div>
        <div style={{
          background: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '6px',
          padding: '10px',
        }}>
          <div style={{ fontSize: '10px', color: '#888', marginBottom: '4px' }}>Experience</div>
          <div style={{ fontSize: '11px', fontWeight: 500, color: '#333' }}>Software Engineer</div>
          <div style={{ fontSize: '10px', color: '#666' }}>Everestims Technologies</div>
        </div>
      </div>

      {/* Social Links */}
      <div style={{ 
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        <button 
          className="xp-button"
          onClick={() => window.open('https://github.com/sahilrai100', '_blank')}
          style={{ flex: 1 }}
        >
          💻 GitHub
        </button>
        <button 
          className="xp-button"
          onClick={() => window.open('https://www.youtube.com/@sahilrai590', '_blank')}
          style={{ flex: 1 }}
        >
          📺 YouTube
        </button>
        <button 
          className="xp-button"
          onClick={() => window.open('https://www.linkedin.com/in/sahilrai100/', '_blank')}
          style={{ flex: 1 }}
        >
          💼 LinkedIn
        </button>
      </div>

      {/* Portfolio Source */}
      <button 
        className="xp-button"
        onClick={() => window.open('https://github.com/sahilrai100', '_blank')}
        style={{ 
          width: '100%', 
          marginTop: '8px',
          background: 'linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)',
          color: '#fff',
          border: '1px solid #444',
        }}
      >
        ⭐ View My GitHub
      </button>

      <p style={{ 
        fontSize: '9px', 
        color: '#888', 
        textAlign: 'center', 
        marginTop: '15px',
        paddingTop: '10px',
        borderTop: '1px solid #e0e0e0'
      }}>
        © {new Date().getFullYear()} Sahil Rai • Windows XP Portfolio Edition
      </p>
    </div>
  );
}
