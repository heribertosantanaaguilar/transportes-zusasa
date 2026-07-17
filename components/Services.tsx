export default function Services() {
  const services = [
    {
      number: "01",
      title: "Movimiento local de contenedores",
      text: "Coordinamos traslados de carga contenerizada dentro de la zona portuaria y logística de Manzanillo, atendiendo operaciones de importación, exportación y movimientos locales.",
      link: "/transporte-de-contenedores-manzanillo",
      button: "Conocer servicio",
    },
    {
      number: "02",
      title: "Resguardo en patio de maniobras",
      text: "Apoyamos con el resguardo temporal de contenedores llenos o vacíos en patio de maniobras, sujeto a disponibilidad, condiciones operativas y necesidades de cada cliente.",
      link: "/resguardo-de-contenedores-manzanillo",
      button: "Conocer servicio",
    },
    {
      number: "03",
      title: "Apoyo operativo para contenedores",
      text: "Brindamos apoyo en la coordinación de maniobras, movimientos locales y manejo operativo de contenedores vinculados a operaciones portuarias.",
      link: "/cotizacion",
      button: "Cotizar apoyo",
    },
    {
      number: "04",
      title: "Seguimiento y comunicación constante",
      text: "Mantenemos comunicación directa durante cada etapa del servicio para brindar claridad sobre tiempos, avances y confirmación del movimiento.",
      link: "/cotizacion",
      button: "Solicitar atención",
    },
  ];

  const cardLayoutStyle = {
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    minHeight: "620px",
  };

  const bubbleButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    minHeight: "52px",
    marginTop: "auto",
    padding: "0 28px",
    borderRadius: "999px",
    background: "#F26522",
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: 900,
    fontSize: "15px",
    lineHeight: 1.1,
    boxShadow: "0 18px 42px rgba(242, 101, 34, 0.34)",
    border: "2px solid #F26522",
  };

  return (
    <section id="servicios" className="zusasaServices">
      <div className="sectionHeader">
        <span>Servicios</span>

        <h2>Soluciones locales para mover y resguardar tu carga con confianza.</h2>

        <p>
          Atendemos operaciones de carga contenerizada en Manzanillo con enfoque
          en coordinación, seguridad, respuesta ágil, resguardo operativo y
          seguimiento constante.
        </p>
      </div>

      <div className="zusasaServicesGrid">
        {services.map((service) => (
          <article
            className="zusasaServiceCard"
            key={service.title}
            style={cardLayoutStyle}
          >
            <strong>{service.number}</strong>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <a
              className="serviceCardLink"
              href={service.link}
              style={bubbleButtonStyle}
            >
              {service.button} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
