"use client";

import { useState } from "react";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: "¿Qué servicios ofrece Transportes ZUSASA?",
      answer:
        "Ofrecemos soluciones logísticas para contenedores e ISO tanques desde Manzanillo, incluyendo movimiento local, resguardo temporal en patio de maniobras y gestión de transporte nacional mediante alianza comercial.",
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
        "Sí. Podemos revisar una solución integral que incluya movimiento local desde el puerto interior, resguardo en patio de maniobras cuando se requiera y gestión de transporte nacional. Esto permite al cliente contar con un solo punto de contacto para la coordinación del servicio.",
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
      question: "¿Qué diferencia a Transportes ZUSASA?",
      answer:
        "Nos diferencia la atención directa, la comunicación honesta, el conocimiento local de Manzanillo y la posibilidad de coordinar una solución logística más completa, integrando movimiento local, resguardo y gestión de transporte nacional mediante alianza comercial.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

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

      <div className="zusasaFAQAccordion">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;

          return (
            <article
              className={`zusasaFAQItem ${isOpen ? "open" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                className="zusasaFAQQuestion"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <strong>{isOpen ? "−" : "+"}</strong>
              </button>

              <div className="zusasaFAQAnswer">
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>

      <style jsx>{`
        .zusasaFAQSection {
          padding: 110px 7%;
          background: #f5f6f7;
          color: #0a1d36;
        }

        .zusasaFAQHeader {
          max-width: 980px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .zusasaFAQHeader span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .zusasaFAQHeader h2 {
          margin: 0 0 22px;
          color: #0a1d36;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .zusasaFAQHeader p {
          max-width: 820px;
          margin: 0 auto;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.7;
        }

        .zusasaFAQAccordion {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          gap: 16px;
        }

        .zusasaFAQItem {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(10, 29, 54, 0.08);
          box-shadow: 0 18px 45px rgba(10, 29, 54, 0.08);
          overflow: hidden;
          border-left: 6px solid #f26522;
        }

        .zusasaFAQQuestion {
          width: 100%;
          padding: 24px 28px;
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
        }

        .zusasaFAQQuestion span {
          color: #0a1d36;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 900;
        }

        .zusasaFAQQuestion strong {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f26522;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          font-size: 26px;
          line-height: 1;
          font-weight: 900;
        }

        .zusasaFAQAnswer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.28s ease;
        }

        .zusasaFAQItem.open .zusasaFAQAnswer {
          max-height: 320px;
        }

        .zusasaFAQAnswer p {
          margin: 0;
          padding: 0 28px 26px;
          color: #3b4a5a;
          font-size: 16.5px;
          line-height: 1.7;
        }

        .zusasaFAQItem.open .zusasaFAQQuestion span {
          color: #f26522;
        }

        @media (max-width: 768px) {
          .zusasaFAQSection {
            padding: 84px 7%;
          }

          .zusasaFAQHeader {
            text-align: left;
            margin-bottom: 34px;
          }

          .zusasaFAQHeader h2 {
            font-size: clamp(32px, 11vw, 50px);
            letter-spacing: -1px;
          }

          .zusasaFAQHeader p {
            font-size: 16.5px;
            margin: 0;
          }

          .zusasaFAQQuestion {
            padding: 22px 22px;
          }

          .zusasaFAQQuestion span {
            font-size: 18px;
          }

          .zusasaFAQQuestion strong {
            width: 32px;
            height: 32px;
            font-size: 23px;
          }

          .zusasaFAQAnswer p {
            padding: 0 22px 24px;
            font-size: 15.8px;
          }
        }
      `}</style>
    </section>
  );
}
