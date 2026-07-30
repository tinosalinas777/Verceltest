import React, { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5491127227613";

const PRODUCTS = [
  {
    brand: "DAHUA",
    photo: "/dahua-kit4.webp",
    title: "Kit CCTV 4 cámaras + XVR",
    desc: "DVR XVR1B04-I + disco 320GB + 4 cámaras + accesorios de instalación (cable, balunes, splitter, fuente).",
    price: "500.000",
  },
  {
    brand: "HIKVISION",
    photo: "/hikvision.png",
    title: "Kit WiFi 4MP — Bullet + Domo PTZ (NKS424W03H)",
    desc: "Sin cableado: 1 cámara fija + 1 domo PTZ (se mueve y sigue desde el celular). Audio bidireccional, IR 30m, admite Hik-Connect.",
    price: "285.000",
  },
  {
    brand: "EZVIZ",
    photo: "/ezviz.png",
    title: "Cámara WiFi Exterior — H8C Pro 2K",
    desc: "Sin cableado: solo WiFi y enchufe. Visión nocturna a color, detección de personas, sirena y luz disuasiva. Ideal para quien busca cuidar su casa sin gastar de más.",
    price: "130.000",
  },
  {
    brand: "HIKVISION",
    photo: "/hikvision2.png",
    title: "Kit WiFi 1080p — 2 Cámaras Fijas (NKS422W0H)",
    desc: "Sin cableado: 1 cámara fija + 1 domo PTZ (se mueve y sigue desde el celular). Audio bidireccional, IR 30m, admite Hik-Connect.",
    price: "245.000",
  },
  {
    brand: "TP-Link",
    photo: "/deco-x20.png",
    title: "WiFi Hogar — Deco X20 (1-pack)",
    desc: "Sistema mesh autónomo, ideal para departamentos y casas chicas. Instalación express: sin cableado estructurado.",
    price: "180.000",
  },
  {
    brand: "TP-Link",
    photo: "/deco-x50.png",
    title: "WiFi Mesh Hogar/Oficina — Deco X50 (2-pack)",
    desc: "Cobertura ampliada para casas grandes, locales u oficinas. Hasta 150 dispositivos conectados.",
    price: "375.000",
  },
  {
    brand: "TP-Link",
    photo: "/deco-x20-3pack.webp",
    title: "WiFi Mesh Casa Grande — Deco X20 (3-pack)",
    desc: "Mayor alcance (hasta 540m) para casas de varios ambientes, PH o locales con paredes gruesas.",
    price: "455.000",
  },
  {
    brand: "TP-Link",
    photo: "/deco-x50-outdoor.webp",
    title: "WiFi Exterior — Deco X50 Outdoor",
    desc: "Nodo apto intemperie (IP65) para sumar cobertura en patio, quincho o jardín. Complementa una red mesh existente.",
    price: "325.000",
  },
];

export default function Products() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipos"
      style={{ padding: "100px 2rem", background: "#0D1E38" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Equipos
          </span>
          <h2
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F0F4F8",
              marginTop: 12,
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Equipamiento recomendado
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#00D4FF",
              margin: "0 auto 20px",
              borderRadius: 2,
            }}
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14.5,
              color: "#8AA4C0",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            CCTV y redes WiFi con marcas reconocidas y buenos precios de
            proveedor. Consultame el equipo que necesitás y te cotizo a medida
            de tu sitio.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {PRODUCTS.map((p, i) => {
            const waText = encodeURIComponent(
              `Hola GT Soluciones! Quiero consultar precio de: ${p.title} (${p.brand}).`,
            );
            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.2s, box-shadow 0.2s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0,212,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Product photo */}
                <div
                  style={{
                    width: "100%",
                    height: 200,
                    overflow: "hidden",
                    background: "#0A1628",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={p.photo}
                    alt={p.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      padding: 12,
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "24px 26px 26px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#00D4FF",
                      letterSpacing: "0.12em",
                      marginBottom: 8,
                    }}
                  >
                    {p.brand}
                  </span>

                  <h3
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontWeight: 700,
                      fontSize: 19,
                      color: "#F0F4F8",
                      marginBottom: 10,
                      lineHeight: 1.25,
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 13.5,
                      color: "#8AA4C0",
                      lineHeight: 1.65,
                      marginBottom: 20,
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>

                  <div style={{ marginBottom: 16 }}>
                    <span
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        color: "#F0F4F8",
                      }}
                    >
                      Desde ${p.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        color: "#8AA4C0",
                        marginLeft: 6,
                      }}
                    >
                      instalación y configuración incluidas
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      width: "100%",
                      padding: "12px",
                      boxSizing: "border-box",
                      background: "#0A1628",
                      border: "1px solid rgba(0,212,255,0.25)",
                      color: "#F0F4F8",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 13.5,
                      borderRadius: 8,
                      letterSpacing: "0.02em",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#122038";
                      e.currentTarget.style.borderColor = "#00D4FF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0A1628";
                      e.currentTarget.style.borderColor =
                        "rgba(0,212,255,0.25)";
                    }}
                  >
                    <MessageCircle size={15} /> CONSULTAR PRECIO
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
