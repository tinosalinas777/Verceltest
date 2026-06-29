import React, { useEffect, useRef } from 'react';

const SERVICES = [
  {
    icon: '/fibra1.png',
    title: 'Tendido de Fibra Óptica',
    desc: 'Instalación y tendido de cables de fibra óptica para redes de alta velocidad en entornos industriales, comerciales y residenciales.',
    features: ['Fibra monomodo y multimodo', 'Cables aéreos y subterráneos', 'Grandes extensiones de red'],
  },
  {
    icon: '/fibrafusion 1.png',
    title: 'Fusionado de Fibra Óptica',
    desc: 'Empalme y fusión de fibras con equipos de última tecnología para garantizar señales sin pérdidas y máxima continuidad de la red.',
    features: ['Fusión por arco eléctrico', 'Certificación de pérdidas OTDR', 'Empalmes mecánicos y ópticos'],
  },
  {
    icon: '/domo.png',
    title: 'Cámaras IP',
    desc: 'Diseño e instalación de sistemas de videovigilancia IP de alta resolución con acceso remoto desde cualquier dispositivo.',
    features: ['Resolución 4K / 8MP', 'Visión nocturna IR', 'Almacenamiento en NVR y nube'],
  },
  {
    icon: '/nube.png',
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
              {/* Imagen del icono */}
              <div style={{ marginBottom: 20 }}>
                <img
                  src={s.icon}
                  alt={s.title}
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: 'contain',
                  }}
                />
              </div>
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