export default function Services() {
  const services = [
    {
      number: "01",
      title: "Movimiento local de contenedores",
      text: "Traslados locales de carga contenerizada dentro de la zona portuaria y logística de Manzanillo.",
      link: "/cotizacion",
      button: "Solicitar cotización",
    },
    {
      number: "02",
      title: "Resguardo en patio de maniobras",
      text: "Resguardo temporal de contenedores llenos o vacíos, sujeto a disponibilidad y condiciones operativas.",
      link: "/resguardo-de-contenedores-manzanillo",
      button: "Conocer servicio",
    },
    {
      number: "03",
      title: "Apoyo operativo para contenedores",
      text: "Coordinación de movimientos, maniobras y apoyo local para operaciones de carga contenerizada.",
      link: "/cotizacion",
      button: "Cotizar apoyo",
    },
    {
      number: "04",
      title: "Seguimiento y comunicación constante",
      text: "Comunicación directa durante la solicitud, coordinación y cierre de cada servicio.",
      link: "/cotizacion",
      button: "Solicitar atención",
    },
  ];

  return (
    <section
      id="servicios"
      style={{
        padding: "110px 7%",
        background: "#f5f6f7",
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
          Servicios
        </div>

        <h2
          style={{
            maxWidth: "1000px",
            color: "#0a1d36",
            fontSize: "clamp(42px, 5vw, 72px)",
            lineHeight: 1.04,
            letterSpacing: "-2px",
            margin: "0 0 26px",
            fontWeight: 900,
          }}
        >
          Soluciones locales para mover y resguardar tu carga.
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
          Atendemos operaciones de carga contenerizada en Manzanillo con enfoque
          en coordinación, resguardo, seguimiento y respuesta clara.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "24px",
        }}
      >
        {services.map((service) => (
          <article
            key={service.title}
            style={{
              minHeight: "380px",
              padding: "34px 30px",
              borderRadius: "30px",
              background: "#ffffff",
              border: "1px solid rgba(10, 29, 54, 0.08)",
              borderBottom: "7px solid #f26522",
              boxShadow: "0 24px 65px rgba(10, 29, 54, 0.10)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <strong
              style={{
                display: "block",
                color: "#f26522",
                fontSize: "24px",
                fontWeight: 900,
                marginBottom: "24px",
              }}
            >
              {service.number}
            </strong>

            <h3
              style={{
                color: "#0a1d36",
                fontSize: "28px",
                lineHeight: 1.12,
                fontWeight: 900,
                margin: "0 0 20px",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: "#3b4a5a",
                fontSize: "16px",
                lineHeight: 1.62,
                margin: 0,
              }}
            >
              {service.text}
            </p>

            <a
              href={service.link}
              style={{
                marginTop: "auto",
                minHeight: "54px",
                width: "fit-content",
                maxWidth: "100%",
                padding: "0 24px",
                borderRadius: "999px",
                background: "#f26522",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 900,
                fontSize: "15px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 18px 40px rgba(242, 101, 34, 0.28)",
              }}
            >
              {service.button} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
