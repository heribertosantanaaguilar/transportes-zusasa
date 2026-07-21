export default function WhatWeDo() {
  const cards = [
    {
      title: "Entorno portuario",
      text: "Operaciones vinculadas al movimiento local de contenedores dentro de la zona logística de Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Patio de maniobras",
      text: "Coordinación terrestre para atender traslados, resguardo y movimientos de carga contenerizada.",
      image: "/images/patio-maniobras-zusasa-1.jpg",
    },
  ];

  return (
    <section
      id="operacion-logistica"
      style={{
        padding:
          "clamp(64px, 8vw, 110px) clamp(18px, 7vw, 96px)",
        background: "#f5f6f7",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          marginBottom: "clamp(34px, 5vw, 54px)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            color: "#f26522",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            fontSize: "clamp(13px, 2vw, 15px)",
            marginBottom: "22px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              flexShrink: 0,
              width: "clamp(36px, 5vw, 48px)",
              height: "4px",
              background: "#f26522",
              borderRadius: "999px",
            }}
          />

          Operación logística
        </span>

        <h2
          style={{
            maxWidth: "1000px",
            fontSize: "clamp(34px, 5vw, 74px)",
            lineHeight: 1.06,
            letterSpacing: "clamp(-2px, -0.1vw, -1px)",
            margin: "0 0 24px",
            color: "#0a1d36",
            overflowWrap: "break-word",
          }}
        >
          Soluciones para mover y resguardar carga contenerizada.
        </h2>

        <p
          style={{
            maxWidth: "950px",
            color: "#3b4a5a",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Atendemos operaciones vinculadas al movimiento local de contenedores,
          resguardo en patio de maniobras y apoyo operativo para clientes que
          requieren coordinación confiable en Manzanillo.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(22px, 3vw, 34px)",
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              position: "relative",
              width: "100%",
              minWidth: 0,
              minHeight: "clamp(390px, 52vw, 460px)",
              borderRadius: "clamp(22px, 3vw, 30px)",
              overflow: "hidden",
              background: "#0a1d36",
              boxShadow: "0 28px 75px rgba(10, 29, 54, 0.16)",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background:
                  "linear-gradient(180deg, rgba(5, 24, 46, 0.08) 0%, rgba(5, 24, 46, 0.38) 42%, rgba(5, 24, 46, 0.97) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "clamp(22px, 4vw, 38px)",
                right: "clamp(22px, 4vw, 38px)",
                bottom: "clamp(24px, 4vw, 34px)",
                zIndex: 3,
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(25px, 3vw, 30px)",
                  lineHeight: 1.12,
                  fontWeight: 900,
                  margin: "0 0 12px",
                  overflowWrap: "break-word",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.94)",
                  fontSize: "clamp(15px, 2vw, 16px)",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: "680px",
                  overflowWrap: "break-word",
                }}
              >
                {card.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
