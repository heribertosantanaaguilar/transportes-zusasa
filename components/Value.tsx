export default function Value() {
  const values = [
    {
      number: "01",
      title: "Atención directa",
      text: "Atendemos cada solicitud con comunicación cercana para entender la operación, revisar necesidades y orientar al cliente desde el primer contacto.",
    },
    {
      number: "02",
      title: "Respuesta ágil",
      text: "Revisamos disponibilidad, condiciones y tiempos de servicio para dar una respuesta clara y oportuna a cada operación.",
    },
    {
      number: "03",
      title: "Comunicación honesta",
      text: "Hablamos con claridad sobre tiempos, posibilidades y condiciones reales del servicio, evitando promesas que no podamos cumplir.",
    },
    {
      number: "04",
      title: "Seguimiento operativo",
      text: "Mantenemos informado al cliente durante el proceso para que tenga mayor claridad sobre el avance y cierre del movimiento.",
    },
    {
      number: "05",
      title: "Conocimiento local",
      text: "Nuestro enfoque está en Manzanillo, Colima, una zona clave para operaciones portuarias, logísticas, de importación y exportación.",
    },
    {
      number: "06",
      title: "Seriedad en cada servicio",
      text: "Trabajamos con responsabilidad, compromiso y enfoque operativo para apoyar movimientos locales de carga contenerizada.",
    },
  ];

  return (
    <section id="por-que-elegir" className="zusasaUnifiedValue">
      <div className="zusasaUnifiedValueHeader">
        <span>Por qué elegirnos</span>

        <h2>Atención directa, comunicación clara y compromiso operativo.</h2>

        <p>
          En Transportes ZUSASA sabemos que cada movimiento de carga requiere
          coordinación, confianza y respuesta. Por eso trabajamos con un enfoque
          cercano, honesto y orientado a resolver las necesidades logísticas de
          nuestros clientes en Manzanillo.
        </p>
      </div>

      <div className="zusasaUnifiedValueGrid">
        {values.map((item) => (
          <article className="zusasaUnifiedValueCard" key={item.title}>
            <strong>{item.number}</strong>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
