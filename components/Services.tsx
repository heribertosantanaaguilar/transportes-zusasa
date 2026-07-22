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
    <section id="servicios" className="zusasaServices">
      <div className="sectionHeader">
        <span>Servicios</span>

        <h2>Soluciones locales para mover y resguardar tu carga.</h2>

        <p>
          Atendemos operaciones de carga contenerizada en Manzanillo con enfoque
          en coordinación, resguardo, seguimiento y respuesta clara.
        </p>
      </div>

      <div className="zusasaServicesGrid">
        {services.map((service) => (
          <article className="zusasaServiceCard" key={service.title}>
            <strong>{service.number}</strong>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

            <a className="serviceCardLink" href={service.link}>
              {service.button} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
