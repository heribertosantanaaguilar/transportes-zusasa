export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Recibimos tu solicitud",
      text: "Nos compartes el servicio que necesitas, datos de contacto y detalles básicos de la operación.",
    },
    {
      number: "02",
      title: "Revisamos disponibilidad",
      text: "Analizamos tiempos, condiciones operativas y posibilidades reales para atender tu servicio.",
    },
    {
      number: "03",
      title: "Coordinamos el movimiento o resguardo",
      text: "Organizamos la atención del servicio de acuerdo con la operación requerida en Manzanillo.",
    },
    {
      number: "04",
      title: "Confirmamos el cierre del servicio",
      text: "Mantenemos comunicación clara hasta confirmar el avance y cierre de la operación.",
    },
  ];

  return (
    <section className="zusasaProcess">
      <div className="sectionHeader">
        <span>Proceso operativo</span>

        <h2>Así coordinamos tu servicio.</h2>

        <p>
          Trabajamos con un proceso claro para revisar tu solicitud, coordinar
          la operación y mantener comunicación durante cada etapa del servicio.
        </p>
      </div>

      <div className="processTimeline">
        {steps.map((step) => (
          <article className="processStep" key={step.title}>
            <strong>{step.number}</strong>

            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
