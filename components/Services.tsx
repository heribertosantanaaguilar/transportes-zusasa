export default function Services() {
  const services = [
    {
      number: "01",
      title: "Movimiento de contenedores",
      text: "Traslado de contenedores de importación y exportación, incluyendo movimientos entre terminales portuarias.",
    },
    {
      number: "02",
      title: "Resguardo y almacenamiento",
      text: "Recepción y resguardo de contenedores llenos y vacíos en patio con seguridad y control operativo.",
    },
    {
      number: "03",
      title: "Seguimiento operativo",
      text: "Monitoreo de cada movimiento mediante GPS en tiempo real y coordinación logística eficiente.",
    },
  ];

  return (
    <section id="servicios" className="zusasaServices">
      <div className="sectionHeader">
        <span>Servicios</span>
        <h2>Soluciones logísticas locales para operaciones portuarias.</h2>
        <p>
          Atendemos movimientos de carga contenerizada con enfoque en seguridad,
          respuesta rápida y comunicación constante.
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
