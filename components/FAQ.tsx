export default function FAQ() {
  const questions = [
    {
      question: "¿Qué servicios ofrece Transportes ZUSASA?",
      answer:
        "Ofrecemos soluciones logísticas para contenedores e ISO tanques desde Manzanillo, incluyendo movimiento local, resguardo temporal en patio de maniobras, apoyo operativo y gestión de transporte nacional mediante alianza comercial.",
    },
    {
      question: "¿Transportes ZUSASA ofrece transporte nacional?",
      answer:
        "Sí. Podemos gestionar transporte nacional de contenedores e ISO tanques desde Manzanillo hacia distintos destinos del país mediante alianza comercial con transportista foráneo. El servicio está sujeto a disponibilidad, destino, tipo de carga, documentación y condiciones operativas.",
    },
    {
      question:
        "¿Pueden coordinar el movimiento local y el transporte nacional en una sola operación?",
      answer:
        "Sí. Podemos revisar una solución integral que incluya movimiento local desde el puerto interior, resguardo en patio de maniobras cuando se requiera, apoyo operativo y gestión de transporte nacional. Esto permite al cliente contar con un solo punto de contacto para la coordinación del servicio.",
    },
    {
      question: "¿El transporte nacional lo realiza directamente Transportes ZUSASA?",
      answer:
        "El transporte nacional se gestiona mediante alianza comercial con transportista foráneo. Transportes ZUSASA funciona como punto de contacto para la coordinación, cotización, seguimiento y gestión comercial del servicio.",
    },
    {
      question: "¿En qué zona trabajan actualmente?",
      answer:
        "Nuestra operación local está enfocada en Manzanillo, especialmente en la zona portuaria y logística. Además, mediante alianza comercial, podemos gestionar transporte nacional de contenedores e ISO tanques hacia distintos destinos del país.",
    },
    {
      question: "¿Ofrecen resguardo en patio de maniobras?",
      answer:
        "Sí. Podemos apoyar con el resguardo temporal de contenedores llenos o vacíos en patio de maniobras, sujeto a disponibilidad, condiciones operativas y requerimientos específicos de cada servicio.",
    },
    {
      question: "¿Qué información necesito enviar para solicitar una cotización?",
      answer:
        "Para cotizar con mayor precisión, recomendamos compartir el servicio requerido, tipo de contenedor o ISO tanque, origen, destino local, destino nacional en caso de aplicar, fecha estimada, peso aproximado, si requiere movimiento local previo, si requiere resguardo en patio y cualquier comentario operativo relevante.",
    },
    {
      question: "¿Atienden operaciones urgentes?",
      answer:
        "Sí. Revisamos cada solicitud de acuerdo con la disponibilidad, tiempos, ruta y condiciones reales de la operación. Nuestro objetivo es responder con claridad y apoyar al cliente cuando necesita resolver un movimiento local o una gestión logística desde Manzanillo.",
    },
    {
      question: "¿Dan seguimiento durante el movimiento de la carga?",
      answer:
        "Sí. Mantenemos comunicación directa durante la solicitud, coordinación y cierre del servicio para informar avances, revisar detalles operativos y confirmar el desarrollo de la operación.",
    },
    {
      question: "¿Trabajan con agencias aduanales y operadores logísticos?",
      answer:
        "Sí. Atendemos agencias aduanales, operadores logísticos, transportistas, importadores, exportadores, empresas industriales y comercios que requieren soluciones logísticas para contenedores e ISO tanques desde Manzanillo.",
    },
    {
      question: "¿Pueden apoyar con resguardo o maniobras de contenedores?",
      answer:
        "Podemos apoyar en la coordinación de resguardo, almacenamiento y manejo operativo de contenedores llenos o vacíos, según las necesidades del cliente y las condiciones disponibles para cada servicio.",
    },
    {
      question: "¿Qué diferencia a Transportes ZUSASA?",
      answer:
        "Nos diferencia la atención directa, la comunicación honesta, el conocimiento local de Manzanillo y la posibilidad de coordinar una solución logística más completa, integrando movimiento local, resguardo, apoyo operativo y gestión de transporte nacional mediante alianza comercial.",
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
