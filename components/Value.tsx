export default function Value() {
  const values = [
    "Atención personalizada",
    "Respuesta rápida",
    "Experiencia portuaria",
    "Seguridad en la carga",
    "Cumplimiento de tiempos",
    "Mejora continua",
  ];

  return (
    <section className="zusasaValue">
      <div className="zusasaValueText">
        <span>¿Por qué elegirnos?</span>
        <h2>No solo transportamos contenedores. Transportamos confianza.</h2>
        <p>
          Cada operación representa un compromiso. Por eso trabajamos con
          comunicación clara, respuesta inmediata y seguimiento puntual.
        </p>
      </div>

      <div className="zusasaValueGrid">
        {values.map((value) => (
          <article key={value}>
            <strong>✓</strong>
            <p>{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
