export default function WhatWeDo() {
  const cards = [
    {
      title: "Entorno portuario",
      text: "Operaciones locales vinculadas a la zona logística y portuaria de Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Patio de maniobras",
      text: "Apoyo para resguardo, coordinación y movimientos de carga contenerizada.",
      image: "/images/patio-maniobras-zusasa-1.jpg",
    },
    {
      title: "Unidad operativa",
      text: "Nuestro primer camión forma parte del arranque operativo de Transportes ZUSASA.",
      image: "/images/camion-rojo-zusasa-nosotros.png",
    },
  ];

  return (
    <section
      id="operacion-logistica"
      style={{
        padding: "110px 7%",
        background: "#f5f6f7",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          marginBottom: "54px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            color: "#f26522",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            fontSize: "15px",
            marginBottom: "22px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "48px",
              height: "4px",
              background: "#f26522",
              borderRadius: "999px",
            }}
          />
          Operación logística
        </div>

        <h2
          style={{
            maxWidth: "1000px",
            fontSize: "clamp(42px, 5vw, 74px)",
            lineHeight: 1.03,
            letterSpacing: "-2px",
            margin: "0 0 26px",
            color: "#0a1d36",
            fontWeight: 900,
          }}
        >
          Presencia local para mover y resguardar carga en Manzanillo.
        </h2>

        <p
          style={{
            maxWidth: "900px",
            color: "#3b4a5a",
            fontSize: "20px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Integramos operación local, patio de maniobras y unidad disponible
          para apoyar servicios de carga contenerizada en la zona logística de
          Manzanillo.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              position: "relative",
              minHeight: "360px",
              borderRadius: "30px",
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
                  "linear-gradient(180deg, rgba(5, 24, 46, 0.04) 0%, rgba(5, 24, 46, 0.42) 48%, rgba(5, 24, 46, 0.92) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "30px",
                right: "30px",
                bottom: "30px",
                zIndex: 3,
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "28px",
                  lineHeight: 1.1,
                  fontWeight: 900,
                  margin: "0 0 14px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "15px",
                  lineHeight: 1.55,
                  margin: 0,
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
