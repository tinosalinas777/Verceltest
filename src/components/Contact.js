import React, { useState } from 'react';

const WHATSAPP_NUMBER = '5491127227613'; // ← reemplazar con número real
const INSTAGRAM_USER = 'g_tsoluciones';   // ← reemplazar con usuario real

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.message) return;
    const text = encodeURIComponent(
      `Hola GT Soluciones! Mi nombre es ${form.name}.\n\nAsunto: ${form.subject || 'Consulta'}\n\n${form.message}\n\nEmail: ${form.email}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%', background: '#0F2040',
    border: '1px solid rgba(0,212,255,0.2)', borderRadius: 8,
    padding: '13px 16px', color: '#F0F4F8',
    fontFamily: 'Inter, sans-serif', fontSize: 14,
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <section id="contacto" style={{
      padding: '100px 2rem',
      background: '#0A1628',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
            color: '#00D4FF', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>Hablemos</span>
          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F0F4F8',
            marginTop: 12,
          }}>Contactanos</h2>
          <div style={{ width: 48, height: 3, background: '#00D4FF', margin: '20px auto 0', borderRadius: 2 }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48,
        }} className="contact-grid">

          {/* Left: info */}
          <div>
            <h3 style={{
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
              fontSize: 26, color: '#F0F4F8', marginBottom: 16,
            }}>¿Tenés un proyecto?<br />
              <span style={{ color: '#00D4FF' }}>Escribinos.</span>
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: 14,
              color: '#8AA4C0', lineHeight: 1.8, marginBottom: 36,
            }}>
              Ya sea que necesités tender fibra óptica en tu empresa, instalar cámaras IP o implementar un sistema IVMS, estamos listos para ayudarte. Respondemos en menos de 24 horas.
            </p>

            {/* Info items */}
            {[
              { icon: '📍', label: 'Ubicación', val: 'Argentina — cobertura nacional' },
              { icon: '📞', label: 'WhatsApp', val: '+54 9 11 2722-7613 o 11 2683-8006' },
              { icon: '📷', label: 'Instagram', val: 'g_tsoluciones' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#00D4FF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#F0F4F8' }}>{item.val}</div>
                </div>
              </div>
            ))}

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noreferrer"
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: '#25D366', borderRadius: 8, padding: '12px 0',
                  color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                  fontSize: 15, textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = 0.9; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <WhatsAppIcon /> WhatsApp
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_USER}`}
                target="_blank" rel="noreferrer"
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                  borderRadius: 8, padding: '12px 0',
                  color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
                  fontSize: 15, textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = 0.9; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <InstagramIcon /> Instagram
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: '40px 36px',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8AA4C0', marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Nombre *</label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="Tu nombre"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#00D4FF'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,212,255,0.2)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8AA4C0', marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email</label>
                <input
                  name="email" value={form.email} onChange={handleChange}
                  placeholder="tu@email.com" type="email"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#00D4FF'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,212,255,0.2)'}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8AA4C0', marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Servicio de interés</label>
              <select
                name="subject" value={form.subject} onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={e => e.target.style.borderColor = '#00D4FF'}
                onBlur={e => e.target.style.borderColor = 'rgba(0,212,255,0.2)'}
              >
                <option value="">Seleccioná un servicio</option>
                <option>Tendido de fibra óptica</option>
                <option>Fusionado de fibra óptica</option>
                <option>Instalación de cámaras IP</option>
                <option>Sistema IVMS</option>
                <option>Consulta general</option>
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#8AA4C0', marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mensaje *</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Contanos sobre tu proyecto o consulta..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                onFocus={e => e.target.style.borderColor = '#00D4FF'}
                onBlur={e => e.target.style.borderColor = 'rgba(0,212,255,0.2)'}
              />
            </div>

            <button onClick={handleSubmit} style={{
              width: '100%', padding: '15px',
              background: sent ? '#25D366' : 'linear-gradient(135deg, #00D4FF, #0080CC)',
              color: sent ? '#fff' : '#0A1628',
              fontFamily: 'Rajdhani, sans-serif', fontWeight: 700,
              fontSize: 16, letterSpacing: '0.06em',
              border: 'none', borderRadius: 8, cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 30px rgba(0,212,255,0.25)',
            }}
              onMouseEnter={e => !sent && (e.target.style.boxShadow = '0 0 50px rgba(0,212,255,0.45)')}
              onMouseLeave={e => !sent && (e.target.style.boxShadow = '0 0 30px rgba(0,212,255,0.25)')}
            >
              {sent ? '✓ MENSAJE ENVIADO POR WHATSAPP' : 'ENVIAR VIA WHATSAPP'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
