export default function Value() {
  const values = [
    {
      number: "01",
      title: "Atención directa",
      text: "Atendemos cada solicitud con comunicación cercana para entender la operación, revisar necesidades y orientar al cliente desde el primer contacto.",
    },
    {
      number: "02",
      title: "Respuesta ágil",
      text: "Revisamos disponibilidad, condiciones y tiempos de servicio para dar una respuesta clara y oportuna a cada operación.",
    },
    {
      number: "03",
      title: "Comunicación honesta",
      text: "Hablamos con claridad sobre tiempos, posibilidades y condiciones reales del servicio, evitando promesas que no podamos cumplir.",
    },
    {
      number: "04",
      title: "Seguimiento operativo",
      text: "Mantenemos informado al cliente durante el proceso para que tenga mayor claridad sobre el avance y cierre del movimiento.",
    },
    {
      number: "05",
      title: "Conocimiento local",
      text: "Nuestro enfoque está en Manzanillo, Colima, una zona clave para operaciones portuarias, logísticas, de importación y exportación.",
    },
    {
      number: "06",
      title: "Seriedad en cada servicio",
      text: "Trabajamos con responsabilidad, compromiso y enfoque operativo para apoyar movimientos locales de carga contenerizada.",
    },
  ];

  return (
    <section
      id="por-que-elegir"
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
          maxWidth: "1050px",
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
          Por qué elegirnos
        </div>

        <h2
          style={{
            maxWidth: "1050px",
            color: "#ffffff",
            fontSize: "clamp(42px, 5vw, 74px)",
            lineHeight: 1.03,
            letterSpacing: "-2px",
            margin: "0 0 26px",
            fontWeight: 900,
          }}
        >
          Atención directa, comunicación clara y compromiso operativo.
        </h2>

        <p
          style={{
            maxWidth: "940px",
            color: "rgba(255, 255, 255, 0.82)",
            fontSize: "20px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          En Transportes ZUSASA sabemos que cada movimiento de carga requiere
          coordinación, confianza y respuesta. Por eso trabajamos con un enfoque
          cercano, honesto y orientado a resolver las necesidades logísticas de
          nuestros clientes en Manzanillo.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {values.map((item) => (
          <article
            key={item.title}
            style={{
              minHeight: "280px",
              padding: "34px 30px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderBottom: "6px solid #f26522",
              boxShadow: "0 24px 65px rgba(0, 0, 0, 0.18)",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#f26522",
                fontSize: "24px",
                fontWeight: 900,
                marginBottom: "20px",
              }}
            >
              {item.number}
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
              {item.title}
            </h3>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.82)",
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
