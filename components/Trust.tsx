export default function Trust() {
  const items = [
    {
      number: "01",
      title: "Atención directa",
      text: "Comunicación cercana con el equipo responsable de coordinar tu operación.",
    },
    {
      number: "02",
      title: "Comunicación honesta",
      text: "Información clara sobre tiempos, disponibilidad y seguimiento del servicio.",
    },
    {
      number: "03",
      title: "Seguimiento puntual",
      text: "Acompañamiento operativo durante cada etapa del movimiento de carga.",
    },
    {
      number: "04",
      title: "Disponibilidad operativa",
      text: "Respuesta rápida para atender movimientos locales en Manzanillo.",
    },
  ];

  return (
    <section className="zusasaTrustSection">
      <div className="zusasaTrustHeader">
        <span>Confianza operativa</span>

        <h2>Seriedad, claridad y seguimiento en cada movimiento.</h2>

        <p>
          En Transportes ZUSASA entendemos que cada operación requiere
          comunicación precisa, respuesta oportuna y compromiso real. Por eso
          trabajamos con atención directa y procesos enfocados en cumplir.
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
