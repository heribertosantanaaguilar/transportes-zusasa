export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Recibimos tu solicitud",
      text: "Nos compartes el servicio que necesitas, datos de contacto y detalles básicos de la operación.",
    },
    {
      number: "02",
      title: "Revisamos disponibilidad",
      text: "Analizamos tiempos, condiciones operativas y posibilidades reales para atender tu servicio.",
    },
    {
      number: "03",
      title: "Coordinamos el movimiento o resguardo",
      text: "Organizamos la atención del servicio de acuerdo con la operación requerida en Manzanillo.",
    },
    {
      number: "04",
      title: "Confirmamos el cierre del servicio",
      text: "Mantenemos comunicación clara hasta confirmar el avance y cierre de la operación.",
    },
  ];

  return (
    <section
      style={{
        padding: "110px 7%",
        background:
          "linear-gradient(135deg, rgba(10, 29, 54, 0.98), rgba(15, 45, 82, 0.96))",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          marginBottom: "58px",
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
              width: "48px",
              height: "4px",
              background: "#f26522",
              borderRadius: "999px",
              display: "inline-block",
            }}
          />
          Proceso operativo
        </div>

        <h2
          style={{
            maxWidth: "950px",
            color: "#ffffff",
            fontSize: "clamp(42px, 5vw, 72px)",
            lineHeight: 1.04,
            letterSpacing: "-2px",
            margin: "0 0 26px",
            fontWeight: 900,
          }}
        >
          Así coordinamos tu servicio.
        </h2>

        <p
          style={{
            maxWidth: "900px",
            color: "rgba(255, 255, 255, 0.82)",
            fontSize: "20px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Trabajamos con un proceso claro para revisar tu solicitud, coordinar
          la operación y mantener comunicación durante cada etapa del servicio.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {steps.map((step) => (
          <article
            key={step.title}
            style={{
              minHeight: "280px",
              padding: "34px 30px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderBottom: "6px solid #f26522",
              boxShadow: "0 24px 65px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#f26522",
                fontSize: "28px",
                fontWeight: 900,
                marginBottom: "24px",
              }}
            >
              {step.number}
            </strong>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "25px",
                lineHeight: 1.15,
                margin: "0 0 16px",
                fontWeight: 900,
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.82)",
                fontSize: "16px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
