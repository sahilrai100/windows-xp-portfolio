'use client';

export default function MyComputerContent() {
  const drives = [
    { name: 'Projects (D:)', icon: '📀', size: '4 Projects', used: '100%', type: 'Project Storage' },
    { name: 'Skills (E:)', icon: '💿', size: '6 Categories', used: '100%', type: 'Skill Database' },
  ];

  const systemInfo = [
    { label: 'Computer Name', value: 'SAHIL-PC' },
    { label: 'Owner', value: 'Sahil Rai' },
    { label: 'Role', value: 'Software Engineer' },
    { label: 'Company', value: 'Everestims Technologies' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Core Stack', value: 'Python, Django, FastAPI' },
  ];

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
        <span style={{ fontSize: '24px' }}>💻</span>
        <div>
          <h2 style={{ margin: 0, fontSize: '14px' }}>My Computer</h2>
          <p style={{ margin: '2px 0 0', color: '#666', fontSize: '10px' }}>
            System Overview
          </p>
        </div>
      </div>

      {/* Drives */}
      <fieldset className="xp-fieldset">
        <legend>Hard Disk Drives</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {drives.map(drive => (
            <div 
              key={drive.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px',
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '28px' }}>{drive.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '11px' }}>{drive.name}</div>
                <div style={{ fontSize: '10px', color: '#666' }}>{drive.type}</div>
                <div style={{ 
                  marginTop: '4px',
                  height: '12px',
                  background: '#ddd',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: drive.used,
                    height: '100%',
                    background: 'linear-gradient(180deg, #6699ff 0%, #3366cc 100%)',
                  }} />
                </div>
              </div>
              <div style={{ fontSize: '10px', color: '#666', textAlign: 'right' }}>
                {drive.size}
              </div>
            </div>
          ))}
        </div>
      </fieldset>

      {/* System Info */}
      <fieldset className="xp-fieldset">
        <legend>System Information</legend>
        <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse' }}>
          <tbody>
            {systemInfo.map(info => (
              <tr key={info.label}>
                <td style={{ padding: '4px 8px 4px 0', color: '#555', width: '120px' }}>
                  {info.label}:
                </td>
                <td style={{ padding: '4px 0' }}>{info.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>

      <div style={{ 
        marginTop: '10px', 
        textAlign: 'center',
        color: '#666',
        fontSize: '10px',
        fontStyle: 'italic'
      }}>
        Windows XP Portfolio Edition
      </div>
    </div>
  );
}
