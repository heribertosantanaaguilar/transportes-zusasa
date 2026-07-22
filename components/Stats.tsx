export default function Stats() {
  const stats = [
    {
      number: "Local",
      label: "Enfoque en Manzanillo",
      text: "Atención especializada en la zona portuaria y logística de Manzanillo, Colima.",
    },
    {
      number: "Ágil",
      label: "Respuesta operativa",
      text: "Revisamos cada solicitud de acuerdo con disponibilidad, tiempos y condiciones reales.",
    },
    {
      number: "Directa",
      label: "Comunicación con el cliente",
      text: "Mantenemos contacto claro durante la solicitud, coordinación y seguimiento del servicio.",
    },
    {
      number: "Seria",
      label: "Compromiso operativo",
      text: "Trabajamos con responsabilidad, honestidad y enfoque en cada movimiento de carga contenerizada.",
    },
  ];

  return (
    <section
      className="zusasaStats"
      style={{
        padding: "110px 7%",
        background: "#f5f6f7",
      }}
    >
      <div
        className="zusasaStatsHeader"
        style={{
          maxWidth: "980px",
          marginBottom: "54px",
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
          Indicadores de servicio
        </span>

        <h2
          style={{
            maxWidth: "1000px",
            color: "#0a1d36",
            fontSize: "clamp(42px, 5vw, 70px)",
            lineHeight: 1.04,
            letterSpacing: "-2px",
            margin: "0 0 26px",
            fontWeight: 900,
          }}
        >
          Un enfoque operativo claro, local y confiable.
        </h2>

        <p
          style={{
            maxWidth: "920px",
            color: "#3b4a5a",
            fontSize: "20px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Nuestro objetivo es brindar atención directa, respuesta oportuna y
          seguimiento claro para cada solicitud de transporte, resguardo o apoyo
          operativo en Manzanillo.
        </p>
      </div>

      <div
        className="zusasaStatsGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {stats.map((item) => (
          <article
            className="zusasaStatCard"
            key={item.label}
            style={{
              minHeight: "260px",
              padding: "34px 30px",
              borderRadius: "28px",
              background: "#ffffff",
              border: "1px solid rgba(10, 29, 54, 0.08)",
              borderTop: "6px solid #f26522",
              boxShadow: "0 24px 65px rgba(10, 29, 54, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#f26522",
                fontSize: "42px",
                lineHeight: 1,
                fontWeight: 900,
                marginBottom: "22px",
              }}
            >
              {item.number}
            </strong>

            <h3
              style={{
                color: "#0a1d36",
                fontSize: "24px",
                lineHeight: 1.15,
                margin: "0 0 16px",
                fontWeight: 900,
              }}
            >
              {item.label}
            </h3>

            <p
              style={{
                color: "#3b4a5a",
                fontSize: "16px",
                lineHeight: 1.65,
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
