export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Recepción",
      text: "Recibimos la solicitud y confirmamos los datos de la operación.",
    },
    {
      number: "02",
      title: "Asignación",
      text: "Coordinamos unidad, operador y tiempos de atención.",
    },
    {
      number: "03",
      title: "Traslado",
      text: "Movemos la carga con seguimiento operativo y comunicación constante.",
    },
    {
      number: "04",
      title: "Confirmación",
      text: "Validamos la entrega y cerramos la operación con el cliente.",
    },
  ];

  return (
    <section className="zusasaProcess">
      <div className="zusasaProcessHeader">
        <span className="zusasaProcessEyebrow">Proceso operativo</span>

        <h2>Orden, comunicación y seguimiento en cada movimiento.</h2>

        <p className="zusasaProcessIntro">
          Nuestro proceso está diseñado para dar claridad, control y confianza
          desde la solicitud hasta la confirmación final.
        </p>
      </div>

      <div className="zusasaProcessGrid">
        {steps.map((step) => (
          <article className="zusasaProcessCard" key={step.title}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
