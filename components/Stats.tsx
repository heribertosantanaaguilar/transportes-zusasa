export default function Stats() {
  const stats = [
    ["100%", "Compromiso con cada operación"],
    ["24/7", "Disponibilidad operativa"],
    ["GPS", "Seguimiento en tiempo real"],
    ["1", "Puerto clave: Manzanillo"],
  ];

  return (
    <section className="statsPremium">
      {stats.map(([number, text]) => (
        <div key={number}>
          <strong>{number}</strong>
          <span>{text}</span>
        </div>
      ))}
    </section>
  );
}
