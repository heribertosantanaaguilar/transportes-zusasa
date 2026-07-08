export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Solicitud del servicio",
      text: "Recibimos los datos de tu operación: tipo de contenedor, origen, destino, fecha estimada y requerimientos específicos.",
    },
    {
      number: "02",
      title: "Revisión y coordinación",
      text: "Analizamos disponibilidad, tiempos y condiciones operativas para darte una respuesta clara y realista.",
    },
    {
      number: "03",
      title: "Ejecución del movimiento",
      text: "Coordinamos el traslado local de la carga contenerizada con seguimiento operativo y comunicación constante.",
    },
    {
      number: "04",
      title: "Confirmación y cierre",
      text: "Validamos el cumplimiento del servicio, confirmamos el movimiento y damos cierre a la operación.",
    },
  ];

  return (
    <section className="zusasaFlowSection">
      <div className="zusasaFlowHeader">
        <span>Proceso operativo</span>

        <h2>Un proceso claro para coordinar tu carga con confianza.</h2>

        <p>
          Desde la solicitud inicial hasta la confirmación final, trabajamos con
          orden, comunicación directa y seguimiento puntual para que tu operación
          avance con claridad.
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
