export default function Value() {
  const values = [
    {
      title: "Atención personalizada",
      text: "Escuchamos las necesidades de cada cliente para coordinar soluciones acordes a su operación.",
    },
    {
      title: "Respuesta rápida",
      text: "Revisamos disponibilidad, tiempos y condiciones para atender tus movimientos con agilidad.",
    },
    {
      title: "Comunicación honesta",
      text: "Brindamos información clara y realista sobre tiempos, avances y alcance del servicio.",
    },
    {
      title: "Seguridad en la carga",
      text: "Cuidamos cada movimiento con responsabilidad, seguimiento y enfoque operativo.",
    },
    {
      title: "Conocimiento local",
      text: "Entendemos la dinámica portuaria y logística de Manzanillo para coordinar mejor cada servicio.",
    },
    {
      title: "Compromiso operativo",
      text: "Trabajamos con seriedad para cumplir lo acordado y dar certeza durante toda la operación.",
    },
  ];

  return (
    <section className="zusasaValue">
      <div className="zusasaValueText">
        <span>¿Por qué elegirnos?</span>

        <h2>Un aliado local para mover tu carga con claridad y confianza.</h2>

        <p>
          En ZUSASA sabemos que cada movimiento cuenta. Por eso trabajamos con
          atención directa, comunicación clara y compromiso real para que tu
          operación avance con seguridad.
        </p>
      </div>

      <div className="zusasaValueGrid">
        {values.map((value) => (
          <article key={value.title}>
            <strong>✓</strong>
            <div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
