export default function Process() {
  const steps = [
    {
      title: "Recepción",
      text: "Recibimos la solicitud y confirmamos los datos de la operación.",
    },
    {
      title: "Asignación",
      text: "Coordinamos unidad, operador y tiempos de atención.",
    },
    {
      title: "Traslado",
      text: "Movemos la carga con seguimiento operativo y comunicación constante.",
    },
    {
      title: "Confirmación",
      text: "Validamos la entrega y cerramos la operación con el cliente.",
    },
  ];

  return (
    <section className="processPremium">
      <span className="sectionTag">Proceso operativo</span>

      <h2>Orden, comunicación y seguimiento en cada movimiento.</h2>

      <div className="processTimeline">
        {steps.map((step, index) => (
          <article className="processCard" key={step.title}>
            <strong>{index + 1}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
