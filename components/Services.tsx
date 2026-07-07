export default function Services() {
  const services = [
    {
      title: "Movimiento de contenedores",
      text: "Traslado de contenedores de importación y exportación, incluyendo movimientos entre terminales portuarias.",
    },
    {
      title: "Resguardo y almacenamiento",
      text: "Recepción y resguardo de contenedores llenos y vacíos en patio con seguridad y control operativo.",
    },
    {
      title: "Seguimiento operativo",
      text: "Monitoreo de cada movimiento mediante GPS en tiempo real y coordinación logística eficiente.",
    },
  ];

  return (
    <section id="servicios" className="servicesPremium">
      <span className="sectionTag">Nuestros servicios</span>
      <h2>Soluciones logísticas para operación local en Manzanillo</h2>

      <div className="serviceGrid">
        {services.map((service, index) => (
          <article className="serviceCard" key={service.title}>
            <span className="serviceNumber">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
