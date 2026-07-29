export default function Stats() {
  const stats = [
    {
      number: "Local",
      label: "Manzanillo como base",
      text: "Atención enfocada en la zona portuaria y logística.",
    },
    {
      number: "Integral",
      label: "Coordinación completa",
      text: "Movimiento local, resguardo y conexión con transporte nacional.",
    },
    {
      number: "Directa",
      label: "Un solo contacto",
      text: "Comunicación clara para revisar, cotizar y dar seguimiento.",
    },
    {
      number: "Confiable",
      label: "Servicio con claridad",
      text: "Revisamos cada operación antes de confirmar condiciones.",
    },
  ];

  return (
    <section
      className="zusasaStats"
      style={{
        padding: "100px 7%",
        background: "#f5f6f7",
      }}
    >
      <div
        className="zusasaStatsHeader"
        style={{
          maxWidth: "900px",
          marginBottom: "46px",
        }}
      >
        <span
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
              width: "48px",
              height: "4px",
              background: "#f26522",
              borderRadius: "999px",
              display: "inline-block",
            }}
          />
          Nuestra forma de trabajo
        </span>

        <h2
          style={{
            maxWidth: "900px",
            color: "#0a1d36",
            fontSize: "clamp(38px, 5vw, 64px)",
            lineHeight: 1.04,
            letterSpacing: "-1.8px",
            margin: "0 0 22px",
            fontWeight: 900,
          }}
        >
          Atención directa y coordinación clara.
        </h2>

        <p
          style={{
            maxWidth: "820px",
            color: "#3b4a5a",
            fontSize: "19px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Trabajamos cada solicitud con seriedad, revisando disponibilidad,
          condiciones operativas y necesidades reales del servicio.
        </p>
      </div>

      <div
        className="zusasaStatsGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "22px",
        }}
      >
        {stats.map((item) => (
          <article
            className="zusasaStatCard"
            key={item.label}
            style={{
              minHeight: "230px",
              padding: "30px 28px",
              borderRadius: "28px",
              background: "#ffffff",
              border: "1px solid rgba(10, 29, 54, 0.08)",
              borderTop: "6px solid #f26522",
              boxShadow: "0 20px 55px rgba(10, 29, 54, 0.09)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#f26522",
                fontSize: "36px",
                lineHeight: 1,
                fontWeight: 900,
                marginBottom: "20px",
              }}
            >
              {item.number}
            </strong>

            <h3
              style={{
                color: "#0a1d36",
                fontSize: "23px",
                lineHeight: 1.15,
                margin: "0 0 14px",
                fontWeight: 900,
              }}
            >
              {item.label}
            </h3>

            <p
              style={{
                color: "#3b4a5a",
                fontSize: "15.8px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
