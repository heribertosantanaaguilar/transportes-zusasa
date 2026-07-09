export default function FAQ() {
  const questions = [
    {
      question: "¿Qué tipo de servicio ofrece Transportes ZUSASA?",
      answer:
        "Ofrecemos transporte local de carga contenerizada en Manzanillo, Colima, principalmente para operaciones vinculadas al Puerto de Manzanillo, importación, exportación y movimientos locales.",
    },
    {
      question: "¿En qué zona trabajan actualmente?",
      answer:
        "Nuestra operación está enfocada en Manzanillo, especialmente en la zona portuaria y logística. Este enfoque local nos permite brindar atención cercana, coordinación ágil y conocimiento operativo de la zona.",
    },
    {
      question: "¿Qué información necesito enviar para solicitar una cotización?",
      answer:
        "Para cotizar con mayor precisión, recomendamos compartir el tipo de contenedor, origen, destino, fecha estimada del servicio y cualquier requerimiento especial relacionado con la operación.",
    },
    {
      question: "¿Atienden operaciones urgentes?",
      answer:
        "Sí. Revisamos cada solicitud de acuerdo con la disponibilidad, tiempos y condiciones reales de la operación. Nuestro objetivo es responder con claridad y apoyar al cliente cuando necesita resolver un movimiento local.",
    },
    {
      question: "¿Dan seguimiento durante el movimiento de la carga?",
      answer:
        "Sí. Mantenemos comunicación directa durante el servicio para informar avances, coordinar detalles operativos y confirmar el cierre del movimiento.",
    },
    {
      question: "¿Trabajan con agencias aduanales y operadores logísticos?",
      answer:
        "Sí. Atendemos agencias aduanales, operadores logísticos, transportistas, importadores, exportadores, empresas industriales y comercios que requieren soluciones locales de transporte en Manzanillo.",
    },
    {
      question: "¿Pueden apoyar con resguardo o maniobras de contenedores?",
      answer:
        "Podemos apoyar en la coordinación de resguardo, almacenamiento y manejo operativo de contenedores llenos o vacíos, según las necesidades del cliente y las condiciones disponibles para cada servicio.",
    },
    {
      question: "¿Qué diferencia a Transportes ZUSASA?",
      answer:
        "Nos diferencia la atención directa, la comunicación honesta, el conocimiento local de Manzanillo y el compromiso de brindar seguimiento claro durante cada operación.",
    },
  ];

  return (
    <section className="zusasaFAQSection">
      <div className="zusasaFAQHeader">
        <span>Preguntas frecuentes</span>

        <h2>Resolvemos tus dudas antes de coordinar tu operación.</h2>

        <p>
          Sabemos que cada movimiento de carga requiere claridad. Por eso
          respondemos las dudas más comunes para que puedas solicitar tu
          cotización con mayor confianza.
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
