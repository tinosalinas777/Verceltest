import React from 'react';

const WHATSAPP_NUMBER = '5491127227613';
const INSTAGRAM_USER = 'g_tsoluciones';

export default function Footer() {
  return (
    <footer style={{
      background: '#060E1C',
      borderTop: '1px solid rgba(0,212,255,0.1)',
      padding: '48px 2rem 32px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 40, marginBottom: 48,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 6,
                background: 'linear-gradient(135deg, #00D4FF, #0080CC)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 16, color: '#0A1628',
              }}>GT</div>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 20, color: '#F0F4F8' }}>
                GT<span style={{ color: '#00D4FF' }}>Soluciones</span>
              </span>
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#4A6480', lineHeight: 1.8,
              maxWidth: 280,
            }}>
              Especialistas en fibra óptica, cámaras IP e IVMS. Conectamos y protegemos tu infraestructura tecnológica.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 16, color: '#F0F4F8', marginBottom: 16, letterSpacing: '0.05em' }}>SERVICIOS</h4>
            {['Tendido de fibra óptica', 'Fusionado de fibra óptica', 'Cámaras IP', 'Sistemas IVMS'].map(s => (
              <a key={s} href="#servicios" style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#4A6480', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#00D4FF'}
                onMouseLeave={e => e.target.style.color = '#4A6480'}
              >{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 16, color: '#F0F4F8', marginBottom: 16, letterSpacing: '0.05em' }}>REDES</h4>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
              color: '#25D366', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: 13,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.75}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              <span style={{ fontSize: 16 }}>📱</span> WhatsApp
            </a>
            <a href={`https://instagram.com/${INSTAGRAM_USER}`} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 10,
              color: '#FD1D1D', textDecoration: 'none', fontFamily: 'Inter, sans-serif', fontSize: 13,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.75}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              <span style={{ fontSize: 16 }}>📷</span> @{INSTAGRAM_USER}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#2A3E54' }}>
            © {new Date().getFullYear()} GT Soluciones. Todos los derechos reservados.
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#2A3E54' }}>
            Argentina
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
