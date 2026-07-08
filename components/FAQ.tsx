export default function FAQ() {
  const questions = [
    {
      question: "¿Qué tipo de carga transporta Transportes ZUSASA?",
      answer:
        "Nos especializamos en transporte local de carga contenerizada para operaciones vinculadas al Puerto de Manzanillo.",
    },
    {
      question: "¿Trabajan fuera de Manzanillo?",
      answer:
        "Actualmente nuestro enfoque principal es la operación local dentro de la zona portuaria y logística de Manzanillo, Colima.",
    },
    {
      question: "¿Atienden operaciones urgentes?",
      answer:
        "Sí. Brindamos atención rápida para revisar disponibilidad, tiempos y condiciones del movimiento solicitado.",
    },
    {
      question: "¿Cómo puedo solicitar una cotización?",
      answer:
        "Puedes solicitarla por WhatsApp o correo electrónico. Te recomendamos compartir origen, destino, tipo de contenedor, fecha estimada y cualquier detalle importante de la operación.",
    },
    {
      question: "¿Dan seguimiento durante el movimiento?",
      answer:
        "Sí. Trabajamos con seguimiento operativo y comunicación constante para mantener informado al cliente durante el servicio.",
    },
    {
      question: "¿Qué diferencia a Transportes ZUSASA?",
      answer:
        "Nuestra atención directa, comunicación honesta, conocimiento local de Manzanillo y compromiso con cada operación.",
    },
  ];

  return (
    <section className="zusasaFAQSection">
      <div className="zusasaFAQHeader">
        <span>Preguntas frecuentes</span>

        <h2>Resolvemos tus dudas antes de iniciar la operación.</h2>

        <p>
          Estas son algunas preguntas comunes de agencias aduanales, operadores
          logísticos, transportistas e importadores que buscan soluciones locales
          de transporte en Manzanillo.
        </p>
      </div>

      <div className="zusasaFAQGrid">
        {questions.map((item) => (
          <article className="zusasaFAQCard" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
