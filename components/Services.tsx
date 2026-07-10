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
