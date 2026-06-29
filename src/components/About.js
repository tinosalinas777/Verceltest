import React, { useEffect, useRef } from 'react';

// SVG placeholder avatars with a tech/professional look
const Avatar = ({ initials, gradient }) => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`g-${initials}`} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor={gradient[0]} />
        <stop offset="1" stopColor={gradient[1]} />
      </linearGradient>
      <clipPath id={`clip-${initials}`}>
        <circle cx="100" cy="100" r="100" />
      </clipPath>
    </defs>
    <circle cx="100" cy="100" r="100" fill={`url(#g-${initials})`} />

    {/* Circuit lines decoration */}
    <line x1="20" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <line x1="60" y1="60" x2="60" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <circle cx="60" cy="30" r="3" fill="rgba(255,255,255,0.15)"/>
    <line x1="140" y1="170" x2="180" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <line x1="140" y1="170" x2="140" y2="185" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <circle cx="180" cy="170" r="3" fill="rgba(255,255,255,0.15)"/>

    {/* Body silhouette */}
    <ellipse cx="100" cy="82" rx="28" ry="30" fill="rgba(255,255,255,0.15)"/>
    <ellipse cx="100" cy="160" rx="52" ry="38" fill="rgba(255,255,255,0.12)"/>

    {/* Initials */}
    <text
      x="100" y="92" textAnchor="middle" dominantBaseline="middle"
      fontFamily="Rajdhani, sans-serif" fontWeight="700" fontSize="36"
      fill="rgba(255,255,255,0.9)"
    >{initials}</text>
  </svg>
);

const CEOS = [
  {
    initials: 'G',
    name: 'CEO - Gerente General',
    role: 'Fundador & Director Técnico',
    bio: 'Especialista en redes de fibra óptica con más de 10 años liderando proyectos de infraestructura de telecomunicaciones para empresas del sector energético, industrial y corporativo.',
    gradient: ['#0A3060', '#00D4FF'],
    photo: '/maty.jpeg',
  },
  {
    initials: 'T',
    name: 'CEO - Director de Operaciones',
    role: 'Cofundador & Sistemas de Seguridad',
    bio: 'Experto en sistemas de videovigilancia IP e IVMS, con amplia trayectoria en el diseño e implementación de soluciones de seguridad electrónica para industrias, comercios y edificios.',
    gradient: ['#1A0A40', '#7B2FFF'],
    photo: '/pela.jpeg',
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.ceo-card').forEach((c, i) => {
            setTimeout(() => {
              c.style.opacity = 1;
              c.style.transform = 'translateY(0)';
            }, i * 180);
          });
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={ref} style={{
      padding: '100px 2rem',
      background: 'linear-gradient(180deg, var(--bg-deep) 0%, #0D1E38 100%)',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
            color: '#00D4FF', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>Quiénes somos</span>
          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F0F4F8',
            marginTop: 12, lineHeight: 1.1,
          }}>El equipo detrás de GT Soluciones</h2>
          <div style={{ width: 48, height: 3, background: '#00D4FF', margin: '20px auto 0', borderRadius: 2 }} />
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 15,
            color: '#8AA4C0', marginTop: 20, maxWidth: 560, margin: '20px auto 0',
            lineHeight: 1.7,
          }}>
            Dos profesionales con visión compartida: construir la infraestructura tecnológica que las empresas necesitan hoy y mañana.
          </p>
        </div>

        {/* CEO Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
        }}>
          {CEOS.map((ceo, i) => (
            <div key={i} className="ceo-card" style={{
              opacity: 0, transform: 'translateY(40px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              overflow: 'hidden',
              textAlign: 'center',
            }}>
              {/* Avatar area */}
              <div style={{
                padding: '40px 40px 28px',
                background: 'linear-gradient(180deg, rgba(0,212,255,0.05) 0%, transparent 100%)',
                borderBottom: '1px solid var(--border)',
                display: 'flex', justifyContent: 'center',
              }}>
                <div style={{
                  width: 140, height: 140, borderRadius: '50%',
                  border: '3px solid rgba(0,212,255,0.3)',
                  overflow: 'hidden',
                  boxShadow: '0 0 30px rgba(0,212,255,0.15)',
                }}>
                  {ceo.photo ? (
                <img
                  src={ceo.photo}
                  alt={ceo.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <Avatar initials={ceo.initials} gradient={ceo.gradient} />
              )}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '28px 32px 36px' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                  borderRadius: 100, padding: '4px 14px', marginBottom: 14,
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#00D4FF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {ceo.role}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                  fontSize: 22, color: '#F0F4F8', marginBottom: 14,
                }}>{ceo.name}</h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 14,
                  color: '#8AA4C0', lineHeight: 1.7,
                }}>{ceo.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about photos */}
        <p style={{
          textAlign: 'center', marginTop: 28,
          fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#4A6480',
          fontStyle: 'italic',
        }}>
          
        </p>
      </div>
    </section>
  );
}
