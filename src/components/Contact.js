import React, { useState } from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";

const WHATSAPP_NUMBER = "5491127227613"; // ← reemplazar con número real
const EMAIL = "gtsoluciones.fibra@gmail.com";
const LOCATION = "Florencio Varela, Buenos Aires, Argentina";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.message) return;
    const text = encodeURIComponent(
      `Hola GT Soluciones! Mi nombre es ${form.name}.\n\nTeléfono: ${form.phone || "-"}\nEmail: ${form.email || "-"}\n\n${form.message}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    background: "#0F2040",
    border: "1px solid rgba(0,212,255,0.2)",
    borderRadius: 8,
    padding: "13px 16px",
    color: "#F0F4F8",
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const INFO = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      val: "11-2722-7613",
      color: "#25D366",
    },
    { icon: Mail, label: "Email", val: EMAIL, color: "#00D4FF" },
    { icon: MapPin, label: "Ubicación", val: LOCATION, color: "#00D4FF" },
  ];

  return (
    <section
      id="contacto"
      style={{
        padding: "100px 2rem",
        background: "#0A1628",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 56,
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: "#00D4FF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Contacto
            </span>
            <h2
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.6vw, 2.6rem)",
                color: "#F0F4F8",
                marginTop: 10,
                marginBottom: 8,
              }}
            >
              Hablemos
            </h2>
            <div
              style={{
                width: 44,
                height: 3,
                background: "#00D4FF",
                borderRadius: 2,
                marginBottom: 22,
              }}
            />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14.5,
                color: "#8AA4C0",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              ¿Tenés un proyecto en mente o necesitás asesoramiento? Escribinos
              y te responderemos a la brevedad.
            </p>

            {/* Info items */}
            {INFO.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  marginBottom: 22,
                }}
              >
                <item.icon
                  size={19}
                  color={item.color}
                  style={{ marginTop: 2, flexShrink: 0 }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#F0F4F8",
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      color: "#8AA4C0",
                    }}
                  >
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "36px 32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16,
              }}
              className="contact-form-row"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nombre"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(0,212,255,0.2)")
                }
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(0,212,255,0.2)")
                }
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(0,212,255,0.2)")
                }
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(0,212,255,0.2)")
                }
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                width: "100%",
                padding: "14px",
                background: sent
                  ? "#25D366"
                  : "linear-gradient(135deg, #00A3FF, #0072D6)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0,163,255,0.3)",
              }}
              onMouseEnter={(e) =>
                !sent && (e.currentTarget.style.filter = "brightness(1.1)")
              }
              onMouseLeave={(e) =>
                !sent && (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              <Send size={16} /> {sent ? "Mensaje enviado" : "Enviar Mensaje"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
