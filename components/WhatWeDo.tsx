export default function WhatWeDo() {
  const items = [
    {
      icon: "▤",
      title: "Transporte local especializado",
      text: "Coordinamos movimientos dentro de la zona portuaria y logística de Manzanillo.",
    },
    {
      icon: "▥",
      title: "Carga contenerizada",
      text: "Atendemos operaciones con contenedores para importación, exportación y movimientos locales.",
    },
    {
      icon: "✓",
      title: "Operación segura",
      text: "Cuidamos cada traslado con comunicación clara, responsabilidad y seguimiento puntual.",
    },
    {
      icon: "◷",
      title: "Respuesta ágil",
      text: "Revisamos disponibilidad y tiempos para ayudarte a resolver tu operación con rapidez.",
    },
  ];

  return (
    <section className="zusasaWhatWeDoFinal">
      <div className="zusasaWhatWeDoContent">
        <span>Lo que hacemos</span>

        <h2>
          Movemos tu carga contenerizada con coordinación, seguridad y respuesta
          inmediata.
        </h2>

        <p>
          En Transportes ZUSASA apoyamos a agencias aduanales, operadores
          logísticos, transportistas, importadores y exportadores que necesitan
          un aliado confiable para sus movimientos locales en Manzanillo.
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
          <span>Soluciones para carga contenerizada en Manzanillo.</span>
        </div>
      </div>
    </section>
  );
}
