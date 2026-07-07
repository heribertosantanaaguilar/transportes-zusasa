export default function WhatWeDo() {
  const items = [
    {
      icon: "▣",
      title: "Transporte local",
      text: "Movimientos dentro de la zona portuaria y logística de Manzanillo.",
    },
    {
      icon: "▤",
      title: "Carga contenerizada",
      text: "Manejo seguro y eficiente de contenedores de importación y exportación.",
    },
    {
      icon: "✓",
      title: "Seguridad en cada operación",
      text: "Procesos enfocados en proteger la carga y cumplir cada compromiso.",
    },
    {
      icon: "◷",
      title: "Cumplimiento de tiempos",
      text: "Comunicación clara, coordinación operativa y entregas puntuales.",
    },
  ];

  return (
    <section className="whatWeDo">
      <div className="whatWeDoIntro">
        <span className="sectionTag">Lo que hacemos</span>
        <h2>
          Transporte local de carga contenerizada con eficiencia y seguridad.
        </h2>
        <p>
          Apoyamos operaciones portuarias con soluciones confiables,
          atención personalizada y respuesta inmediata en Manzanillo.
        </p>
      </div>

      <div className="whatWeDoGrid">
        {items.map((item) => (
          <article className="whatWeDoCard" key={item.title}>
            <div className="whatWeDoIcon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
