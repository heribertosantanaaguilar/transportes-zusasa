export default function Trust() {
  const items = [
    {
      number: "01",
      title: "Seriedad en cada servicio",
      text: "Asumimos cada movimiento con responsabilidad, cuidando los tiempos, la coordinación y los compromisos acordados con el cliente.",
    },
    {
      number: "02",
      title: "Comunicación honesta",
      text: "Compartimos información clara y realista sobre disponibilidad, tiempos de atención, avances y cualquier situación operativa relevante.",
    },
    {
      number: "03",
      title: "Seguimiento operativo",
      text: "Acompañamos cada etapa del movimiento para mantener al cliente informado desde la solicitud hasta la confirmación final.",
    },
    {
      number: "04",
      title: "Atención directa",
      text: "Brindamos trato cercano y respuesta ágil para resolver dudas, coordinar servicios y dar continuidad a cada operación.",
    },
  ];

  return (
    <section className="zusasaTrustSection">
      <div className="zusasaTrustHeader">
        <span>Confianza operativa</span>

        <h2>Información clara, trato directo y compromiso real.</h2>

        <p>
          En Transportes ZUSASA sabemos que una operación logística necesita
          certeza. Por eso trabajamos con comunicación honesta, seguimiento
          puntual y seriedad en cada movimiento de carga contenerizada.
        </p>
      </div>

      <div className="zusasaTrustGrid">
        {items.map((item) => (
          <article className="zusasaTrustCard" key={item.title}>
            <strong>{item.number}</strong>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
