import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  const reasons = [
    {
      title: "Atención directa",
      text: "Hablamos claro desde el primer contacto para entender tu operación, revisar tus necesidades y darte una respuesta personalizada.",
    },
    {
      title: "Respuesta ágil",
      text: "Sabemos que en logística los tiempos importan. Por eso revisamos disponibilidad, condiciones y alternativas de forma rápida.",
    },
    {
      title: "Comunicación honesta",
      text: "No prometemos tiempos irreales. Te damos información clara para que puedas tomar decisiones con confianza.",
    },
    {
      title: "Conocimiento local",
      text: "Nuestro enfoque está en Manzanillo, Colima, especialmente en operaciones vinculadas a la zona portuaria y logística.",
    },
    {
      title: "Seguimiento operativo",
      text: "Mantenemos comunicación durante el servicio para informar avances, coordinar detalles y confirmar el cierre del movimiento.",
    },
    {
      title: "Compromiso con tu carga",
      text: "Trabajamos con responsabilidad, seriedad y enfoque en el cuidado de cada operación de carga contenerizada.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span>Por qué elegir ZUSASA</span>

        <h2>Un aliado local para mover tu carga con claridad y confianza.</h2>

        <p>
          En Transportes ZUSASA entendemos que cada movimiento de contenedores
          requiere coordinación, comunicación y responsabilidad. Por eso
          acompañamos tu operación con atención directa y seguimiento claro.
        </p>
      </div>

      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <article className={styles.card} key={reason.title}>
            <strong>{String(index + 1).padStart(2, "0")}</strong>

            <h3>{reason.title}</h3>

            <p>{reason.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.callout}>
        <div>
          <span>Servicio local en Manzanillo</span>

          <h3>
            Transporte y resguardo de carga contenerizada para operaciones
            portuarias.
          </h3>
        </div>

        <a href="/cotizacion">Solicitar cotización</a>
      </div>
    </section>
  );
}
