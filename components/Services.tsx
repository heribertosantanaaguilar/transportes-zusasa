export default function Services() {
  const services = [
    {
      title: "Movimiento de contenedores",
      text: "Traslado de contenedores de importación y exportación, incluyendo movimientos entre terminales portuarias.",
    },
    {
      title: "Resguardo y almacenamiento",
      text: "Recepción y resguardo de contenedores llenos y vacíos en patio con circuito cerrado y seguridad 24/7.",
    },
    {
      title: "Seguimiento operativo",
      text: "Monitoreo de cada movimiento mediante GPS en tiempo real y coordinación logística para optimizar tiempos de tránsito.",
    },
  ];

  return (
    <section id="servicios" className="section services">
      <span className="label">Nuestros servicios</span>
      <h2>Soluciones logísticas locales</h2>

      <div className="cards">
        {services.map((service) => (
          <div className="card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
