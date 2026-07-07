export default function Process() {
  const steps = ["Recepción", "Asignación", "Traslado", "Confirmación"];

  return (
    <section className="section processSection">
      <span className="label">Nuestro proceso</span>
      <h2>Así gestionamos cada operación</h2>

      <div className="process">
        {steps.map((step, index) => (
          <div key={step}>
            <strong>{index + 1}</strong>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
