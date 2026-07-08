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
    <section className="zusasaWhatWeDoFinal">
      <div className="zusasaWhatWeDoContent">
        <span>Lo que hacemos</span>

        <h2>
          Transporte local de carga contenerizada con eficiencia y seguridad.
        </h2>

        <p>
          Apoyamos operaciones portuarias con soluciones confiables, atención
          personalizada y respuesta inmediata en Manzanillo.
        </p>

        <div className="zusasaWhatWeDoCards">
          {items.map((item) => (
            <article key={item.title}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="zusasaWhatWeDoImage">
        <img
          src="https://images.openai.com/static-rsc-4/SrrhFV1Q0Q5pbE6Wx__rYAhnB4f47Z7bJTG2rTeQpMN4HXBaIvDj4bVEO2GWjXz_gR5cp8blxxs3GWbqKUs4TtPepcZiK20uqfiEd8F2G7r0ntHhNVWkFMnzKgR7xfQT7T1H2OjIzuEf1f_9XcBh3_3ESmUYcbl6yZEuXrcTvyQ?purpose=inline"
          alt="Camión con contenedor en patio de maniobras"
        />

        <div className="zusasaWhatWeDoBadge">
          <strong>Movimiento local</strong>
          <span>Carga contenerizada con enfoque operativo.</span>
        </div>
      </div>
    </section>
  );
}
