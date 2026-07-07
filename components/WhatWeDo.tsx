export default function WhatWeDo() {
  const items = [
    {
      icon: "▤",
      title: "Transporte local",
      text: "Movimientos dentro de la zona portuaria y alrededores.",
    },
    {
      icon: "▥",
      title: "Carga contenerizada",
      text: "Manejo seguro y eficiente de contenedores.",
    },
    {
      icon: "✓",
      title: "Seguridad en cada operación",
      text: "Unidades en óptimas condiciones y operadores comprometidos.",
    },
    {
      icon: "◷",
      title: "Cumplimiento de tiempos",
      text: "Entregas puntuales y compromisos cumplidos.",
    },
  ];

  return (
    <section className="whatWeDoShowcase">
      <div className="whatWeDoText">
        <span>Lo que hacemos</span>
        <h2>
          Transporte local de carga contenerizada con eficiencia y seguridad.
        </h2>
      </div>

      <div className="whatWeDoCards">
        {items.map((item) => (
          <article key={item.title}>
            <div>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
