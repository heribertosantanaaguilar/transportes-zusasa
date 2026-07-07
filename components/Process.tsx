export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Recepción",
      text: "Recibimos la solicitud, revisamos la información y confirmamos los datos de la operación.",
    },
    {
      number: "02",
      title: "Asignación",
      text: "Coordinamos unidad, operador, tiempos de atención y requerimientos del movimiento.",
    },
    {
      number: "03",
      title: "Traslado",
      text: "Realizamos el movimiento con seguimiento operativo y comunicación constante.",
    },
    {
      number: "04",
      title: "Confirmación",
      text: "Validamos la entrega, cerramos la operación y confirmamos el cumplimiento del servicio.",
    },
  ];

  return (
    <section className="zusasaFlowSection">
      <div className="zusasaFlowHeader">
        <span>Proceso operativo</span>

        <h2>Un proceso claro para mover tu carga con confianza.</h2>

        <p>
          Nuestro proceso está diseñado para dar claridad, control y confianza
          desde la solicitud hasta la confirmación final.
        </p>
      </div>

      <div className="zusasaFlowTrack">
        {steps.map((step) => (
          <article className="zusasaFlowCard" key={step.title}>
            <div className="zusasaFlowNumber">{step.number}</div>

            <div className="zusasaFlowDot"></div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
