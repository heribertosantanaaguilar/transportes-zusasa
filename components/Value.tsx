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
    <section className="valuePremium">
      <div>
        <span className="sectionTag">¿Por qué elegirnos?</span>

        <h2>
          No solo transportamos contenedores. Transportamos confianza.
        </h2>

        <p>
          Cada operación representa un compromiso. Por eso trabajamos con
          comunicación clara, respuesta inmediata y seguimiento puntual.
        </p>
      </div>

      <div className="valuePremiumGrid">
        {values.map((value) => (
          <div key={value}>✓ {value}</div>
        ))}
      </div>
    </section>
  );
}
