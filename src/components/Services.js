import React, { useEffect, useRef } from 'react';

const SERVICES = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M5 20 C5 20 10 8 20 8 C30 8 35 20 35 20" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 24 C8 24 12 14 20 14 C28 14 32 24 32 24" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
        <circle cx="20" cy="28" r="3" fill="#00D4FF"/>
        <line x1="20" y1="31" x2="20" y2="36" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="36" x2="24" y2="36" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tendido de Fibra Óptica',
    desc: 'Instalación y tendido de cables de fibra óptica para redes de alta velocidad en entornos industriales, comerciales y residenciales.',
    features: ['Fibra monomodo y multimodo', 'Cables aéreos y subterráneos', 'Grandes extensiones de red'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="5" fill="none" stroke="#00D4FF" strokeWidth="2"/>
        <path d="M20 15 L20 5" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 35 L20 25" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M15 20 L5 20" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M35 20 L25 20" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="5" r="2" fill="#00D4FF"/>
        <circle cx="35" cy="20" r="2" fill="#00D4FF"/>
        <path d="M13 13 L7 7" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
        <path d="M27 27 L33 33" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Fusionado de Fibra Óptica',
    desc: 'Empalme y fusión de fibras con equipos de última tecnología para garantizar señales sin pérdidas y máxima continuidad de la red.',
    features: ['Fusión por arco eléctrico', 'Certificación de pérdidas OTDR', 'Empalmes mecánicos y ópticos'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="14" width="18" height="13" rx="2" stroke="#00D4FF" strokeWidth="2"/>
        <path d="M26 18 L34 14 L34 26 L26 22" stroke="#00D4FF" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="17" cy="20" r="3" fill="none" stroke="#00D4FF" strokeWidth="1.5"/>
        <line x1="12" y1="30" x2="28" y2="30" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cámaras IP',
    desc: 'Diseño e instalación de sistemas de videovigilancia IP de alta resolución con acceso remoto desde cualquier dispositivo.',
    features: ['Resolución 4K / 8MP', 'Visión nocturna IR', 'Almacenamiento en NVR y nube'],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="20" rx="3" stroke="#00D4FF" strokeWidth="2"/>
        <rect x="10" y="12" width="8" height="6" rx="1" fill="rgba(0,212,255,0.2)" stroke="#00D4FF" strokeWidth="1"/>
        <rect x="22" y="12" width="8" height="6" rx="1" fill="rgba(0,212,255,0.2)" stroke="#00D4FF" strokeWidth="1"/>
        <rect x="10" y="20" width="20" height="3" rx="1" fill="rgba(0,212,255,0.15)"/>
        <line x1="14" y1="28" x2="14" y2="33" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="26" y1="28" x2="26" y2="33" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="33" x2="30" y2="33" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Sistemas IVMS',
    desc: 'Implementación de plataformas IVMS (Intelligent Video Management System) para gestión centralizada de múltiples cámaras y sitios.',
    features: ['Gestión multi-sitio', 'Alertas y detección inteligente', 'Compatibilidad Hikvision / Dahua'],
  },
];

export default function Services() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    refs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" style={{ padding: '100px 2rem', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
            color: '#00D4FF', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>Lo que hacemos</span>
          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F0F4F8',
            marginTop: 12, lineHeight: 1.1,
          }}>Nuestros Servicios</h2>
          <div style={{ width: 48, height: 3, background: '#00D4FF', margin: '20px auto 0', borderRadius: 2 }} />
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              ref={el => refs.current[i] = el}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '36px 28px',
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)';
                e.currentTarget.style.background = '#122038';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'var(--bg-card)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                fontSize: 22, color: '#F0F4F8', marginBottom: 12,
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14,
                color: '#8AA4C0', lineHeight: 1.7, marginBottom: 20,
              }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00D4FF', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#8AA4C0' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
