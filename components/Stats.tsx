export default function Stats() {
  const stats = [
    {
      number: "100%",
      label: "Compromiso",
      text: "En cada operación.",
    },
    {
      number: "24/7",
      label: "Disponibilidad",
      text: "Atención operativa.",
    },
    {
      number: "GPS",
      label: "Seguimiento",
      text: "Control en tiempo real.",
    },
    {
      number: "1",
      label: "Puerto clave",
      text: "Manzanillo, Colima.",
    },
  ];

  return (
    <section className="zusasaStatsFinal">
      {stats.map((stat) => (
        <article className="zusasaStatCard" key={stat.label}>
          <strong>{stat.number}</strong>
          <h3>{stat.label}</h3>
          <p>{stat.text}</p>
        </article>
      ))}
    </section>
  );
}
