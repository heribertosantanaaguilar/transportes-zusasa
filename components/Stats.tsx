export default function Stats() {
  const stats = [
    {
      number: "Local",
      label: "Enfoque en Manzanillo",
      text: "Atención especializada en la zona portuaria y logística de Manzanillo, Colima.",
    },
    {
      number: "Ágil",
      label: "Respuesta operativa",
      text: "Revisamos cada solicitud de acuerdo con disponibilidad, tiempos y condiciones reales.",
    },
    {
      number: "Directa",
      label: "Comunicación con el cliente",
      text: "Mantenemos contacto claro durante la solicitud, coordinación y seguimiento del servicio.",
    },
    {
      number: "Real",
      label: "Compromiso operativo",
      text: "Trabajamos con seriedad, honestidad y enfoque en cada movimiento de carga contenerizada.",
    },
  ];

  return (
    <section className="zusasaStats">
      <div className="zusasaStatsHeader">
        <span>Indicadores de servicio</span>

        <h2>Un enfoque operativo claro, local y confiable.</h2>

        <p>
          Nuestro objetivo es brindar atención directa, respuesta oportuna y
          seguimiento claro para cada solicitud de transporte, resguardo o apoyo
          operativo en Manzanillo.
        </p>
      </div>

      <div className="zusasaStatsGrid">
        {stats.map((item) => (
          <article className="zusasaStatCard" key={item.label}>
            <strong>{item.number}</strong>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
