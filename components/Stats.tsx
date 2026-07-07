export default function Stats() {
  const stats = [
    {
      number: "100%",
      text: "Compromiso con cada operación",
    },
    {
      number: "24/7",
      text: "Disponibilidad operativa",
    },
    {
      number: "GPS",
      text: "Seguimiento en tiempo real",
    },
    {
      number: "1",
      text: "Puerto clave: Manzanillo",
    },
  ];

  return (
    <section className="statsPremium">
      {stats.map((stat) => (
        <div key={stat.number}>
          <strong>{stat.number}</strong>
          <span>{stat.text}</span>
        </div>
      ))}
    </section>
  );
}
