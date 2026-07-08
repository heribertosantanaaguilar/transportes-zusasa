export default function Services() {
  const services = [
    {
      number: "01",
      title: "Movimiento local de contenedores",
      text: "Coordinamos traslados de carga contenerizada dentro de la zona portuaria y logística de Manzanillo, atendiendo operaciones de importación, exportación y movimientos locales.",
    },
    {
      number: "02",
      title: "Resguardo y apoyo operativo",
      text: "Apoyamos en la coordinación de resguardo, almacenamiento y manejo operativo de contenedores llenos o vacíos, de acuerdo con las necesidades de cada cliente.",
    },
    {
      number: "03",
      title: "Seguimiento y comunicación constante",
      text: "Mantenemos comunicación directa durante cada etapa del servicio para brindar claridad sobre tiempos, avances y confirmación del movimiento.",
    },
  ];

  return (
    <section id="servicios" className="zusasaServices">
      <div className="sectionHeader">
        <span>Servicios</span>

        <h2>Soluciones locales para mover tu carga con confianza.</h2>

        <p>
          Atendemos operaciones de carga contenerizada con enfoque en
          coordinación, seguridad, respuesta rápida y cumplimiento operativo en
          Manzanillo.
        </p>
      </div>

      <div className="zusasaServicesGrid">
        {services.map((service) => (
          <article className="zusasaServiceCard" key={service.title}>
            <strong>{service.number}</strong>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
