import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

type RutaLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  rutaPrincipal: string;
  zonas: string[];
  servicios: string[];
  sectores: string[];
};

export default function RutaLanding({
  eyebrow,
  title,
  description,
  rutaPrincipal,
  zonas,
  servicios,
  sectores,
}: RutaLandingProps) {
  const emailSubject = `Solicitud de cotización - ${rutaPrincipal}`;

  const emailBody = `Hola, quiero solicitar una cotización con Transportes ZUSASA.

Ruta de interés:
${rutaPrincipal}

Servicio que necesito:
- Transporte nacional de contenedores:
- Transporte nacional de ISO tanques:
- Movimiento local previo en Manzanillo:
- Resguardo en patio de maniobras:

Datos del servicio:
- Empresa:
- Nombre de contacto:
- Teléfono:
- Tipo de contenedor o ISO tanque:
- Origen:
- Destino:
- Fecha estimada:
- Peso aproximado:
- Comentarios o necesidades operativas adicionales:`;

  const quoteEmailLink = `mailto:cotizaciones@transporteszusasa.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const faqs = [
    {
      question: `¿Transportes ZUSASA realiza ${rutaPrincipal.toLowerCase()}?`,
      answer:
        "Sí. Transportes ZUSASA revisa y coordina operaciones de transporte de contenedores e ISO tanques desde Manzanillo, de acuerdo con la ruta, disponibilidad, tipo de unidad, documentación, peso y condiciones operativas del servicio.",
    },
    {
      question: "¿Qué información necesito enviar para solicitar una cotización?",
      answer:
        "Para cotizar es recomendable compartir empresa, nombre de contacto, teléfono, tipo de contenedor o ISO tanque, origen, destino, fecha estimada, peso aproximado, tipo de carga y cualquier requerimiento operativo especial.",
    },
    {
      question: "¿También pueden apoyar con movimiento local en Manzanillo?",
      answer:
        "Sí. Podemos apoyar con movimiento local previo en Manzanillo, sujeto a disponibilidad y condiciones operativas. Esto puede complementar una operación nacional cuando el cliente requiere coordinación desde la zona portuaria o logística.",
    },
    {
      question: "¿Cuentan con apoyo de resguardo en patio de maniobras?",
      answer:
        "Sí. Transportes ZUSASA puede apoyar con opciones de resguardo temporal en patio de maniobras en Manzanillo, sujeto a disponibilidad, tipo de unidad, tipo de carga y condiciones específicas de la operación.",
    },
    {
      question: "¿Cómo solicito una cotización?",
      answer:
        "Puedes solicitar una cotización enviando los datos de tu operación al correo cotizaciones@transporteszusasa.com o utilizando los botones de contacto disponibles en esta página.",
    },
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <Navbar />

      <main className="rutaLandingPage">
        <section className="rutaHero">
          <div className="rutaHeroContent">
            <span>{eyebrow}</span>

            <h1>{title}</h1>

            <p>{description}</p>

            <div className="rutaHeroActions">
              <a href={quoteEmailLink} className="rutaPrimaryButton">
                Solicitar cotización por correo
              </a>

              <a href="/#contacto" className="rutaSecondaryButton">
                Ver datos de contacto
              </a>
            </div>
          </div>
        </section>

        <section className="rutaIntro">
          <div>
            <span>Servicio especializado</span>
            <h2>Coordinación desde Manzanillo con seguimiento operativo.</h2>
          </div>

          <p>
            En Transportes ZUSASA apoyamos a empresas que requieren mover carga
            contenerizada desde Manzanillo hacia destinos industriales del país.
            Revisamos cada solicitud de acuerdo con ruta, tipo de unidad, peso,
            disponibilidad, documentación, condiciones de acceso y requerimientos
            específicos de la operación.
          </p>
        </section>

        <section className="rutaGridSection">
          <div className="rutaInfoCard">
            <h2>Zonas que atendemos en esta ruta</h2>

            <div className="rutaList">
              {zonas.map((zona) => (
                <p key={zona}>{zona}</p>
              ))}
            </div>
          </div>

          <div className="rutaInfoCard dark">
            <h2>Servicios aplicables</h2>

            <div className="rutaList">
              {servicios.map((servicio) => (
                <p key={servicio}>{servicio}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="rutaSectors">
          <div className="rutaSectorsHeader">
            <span>Clientes potenciales</span>
            <h2>
              Una ruta pensada para empresas con operación logística recurrente.
            </h2>
            <p>
              Este servicio puede ser útil para empresas que importan,
              distribuyen, fabrican o reciben carga contenerizada desde el
              puerto de Manzanillo.
            </p>
          </div>

          <div className="rutaSectorsGrid">
            {sectores.map((sector) => (
              <article key={sector}>
                <h3>{sector}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="rutaFaqSection">
          <div className="rutaFaqHeader">
            <span>Preguntas frecuentes</span>

            <h2>Información útil antes de solicitar una cotización.</h2>

            <p>
              Estas preguntas ayudan a aclarar el alcance general del servicio y
              los datos necesarios para revisar una operación logística desde
              Manzanillo.
            </p>
          </div>

          <div className="rutaFaqGrid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rutaQuoteBlock">
          <div>
            <span>Cotización</span>
            <h2>¿Necesitas revisar una operación en esta ruta?</h2>
            <p>
              Envíanos los datos básicos del servicio y con gusto revisamos
              disponibilidad, condiciones operativas y opciones de coordinación.
            </p>
          </div>

          <a href={quoteEmailLink}>Solicitar cotización →</a>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .rutaLandingPage {
          background: #f5f6f8;
          color: #0a1d36;
          overflow: hidden;
        }

        .rutaHero {
          min-height: 660px;
          padding: 120px 7% 90px;
          display: flex;
          align-items: center;
          color: #ffffff;
          background:
            linear-gradient(
              90deg,
              rgba(5, 24, 46, 0.98) 0%,
              rgba(5, 24, 46, 0.9) 42%,
              rgba(5, 24, 46, 0.68) 70%,
              rgba(5, 24, 46, 0.42) 100%
            ),
            url("/images/transporte-nacional-zusasa-2.jpeg");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .rutaHeroContent {
          max-width: 980px;
        }

        .rutaHeroContent > span,
        .rutaIntro span,
        .rutaSectorsHeader span,
        .rutaFaqHeader span,
        .rutaQuoteBlock span {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #f26522;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 15px;
          margin-bottom: 22px;
        }

        .rutaHeroContent > span::before,
        .rutaIntro span::before,
        .rutaSectorsHeader span::before,
        .rutaFaqHeader span::before,
        .rutaQuoteBlock span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
          flex: 0 0 auto;
        }

        .rutaHero h1 {
          margin: 0 0 28px;
          color: #ffffff;
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1.02;
          letter-spacing: -2px;
          font-weight: 900;
          max-width: 1080px;
        }

        .rutaHero p {
          margin: 0;
          max-width: 880px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 20px;
          line-height: 1.72;
        }

        .rutaHeroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
        }

        .rutaPrimaryButton,
        .rutaSecondaryButton,
        .rutaQuoteBlock a {
          min-height: 60px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 900;
          text-decoration: none;
          text-align: center;
        }

        .rutaPrimaryButton,
        .rutaQuoteBlock a {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .rutaSecondaryButton {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.65);
        }

        .rutaIntro {
          padding: 90px 7%;
          background: #ffffff;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 54px;
          align-items: start;
        }

        .rutaIntro h2,
        .rutaInfoCard h2,
        .rutaSectorsHeader h2,
        .rutaFaqHeader h2,
        .rutaQuoteBlock h2 {
          margin: 0;
          color: #0a1d36;
          font-size: clamp(34px, 4.8vw, 64px);
          line-height: 1.05;
          letter-spacing: -1.6px;
          font-weight: 900;
        }

        .rutaIntro p {
          margin: 0;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.78;
        }

        .rutaGridSection {
          padding: 90px 7%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .rutaInfoCard {
          background: #ffffff;
          border-radius: 32px;
          padding: 42px;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
          border-top: 7px solid #f26522;
        }

        .rutaInfoCard.dark {
          background: #0a1d36;
          color: #ffffff;
        }

        .rutaInfoCard.dark h2 {
          color: #ffffff;
        }

        .rutaList {
          display: grid;
          gap: 12px;
          margin-top: 30px;
        }

        .rutaList p {
          margin: 0;
          padding: 16px 18px;
          border-radius: 16px;
          background: #f5f6f8;
          color: #0a1d36;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 800;
        }

        .rutaInfoCard.dark .rutaList p {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9);
        }

        .rutaSectors {
          padding: 90px 7%;
          background: #ffffff;
        }

        .rutaSectorsHeader,
        .rutaFaqHeader {
          max-width: 980px;
          margin-bottom: 46px;
        }

        .rutaSectorsHeader p,
        .rutaFaqHeader p {
          margin: 24px 0 0;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.7;
        }

        .rutaSectorsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .rutaSectorsGrid article {
          background: #f5f6f8;
          border-radius: 22px;
          padding: 26px 24px;
          border-left: 6px solid #f26522;
        }

        .rutaSectorsGrid h3 {
          margin: 0;
          color: #0a1d36;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 900;
        }

        .rutaFaqSection {
          padding: 90px 7%;
          background: #f5f6f8;
        }

        .rutaFaqGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .rutaFaqGrid article {
          background: #ffffff;
          border-radius: 26px;
          padding: 30px;
          border-left: 6px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.08);
        }

        .rutaFaqGrid h3 {
          margin: 0 0 14px;
          color: #0a1d36;
          font-size: 22px;
          line-height: 1.25;
          font-weight: 900;
        }

        .rutaFaqGrid p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.68;
        }

        .rutaQuoteBlock {
          margin: 0 7% 100px;
          padding: 46px;
          border-radius: 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: center;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 80px rgba(10, 29, 54, 0.18);
        }

        .rutaQuoteBlock h2 {
          color: #ffffff;
        }

        .rutaQuoteBlock p {
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 18px;
          line-height: 1.65;
        }

        .rutaQuoteBlock a {
          justify-self: end;
          border-radius: 999px;
        }

        @media (max-width: 950px) {
          .rutaIntro,
          .rutaGridSection,
          .rutaQuoteBlock {
            grid-template-columns: 1fr;
          }

          .rutaSectorsGrid,
          .rutaFaqGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rutaQuoteBlock a {
            justify-self: start;
          }
        }

        @media (max-width: 650px) {
          .rutaHero {
            min-height: auto;
            padding: 86px 24px 74px;
          }

          .rutaHero h1 {
            font-size: clamp(36px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .rutaHero p,
          .rutaIntro p,
          .rutaSectorsHeader p,
          .rutaFaqHeader p,
          .rutaQuoteBlock p {
            font-size: 17px;
            line-height: 1.7;
          }

          .rutaHeroActions {
            flex-direction: column;
          }

          .rutaPrimaryButton,
          .rutaSecondaryButton,
          .rutaQuoteBlock a {
            width: 100%;
          }

          .rutaIntro,
          .rutaGridSection,
          .rutaSectors,
          .rutaFaqSection {
            padding: 74px 24px;
          }

          .rutaInfoCard {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .rutaSectorsGrid,
          .rutaFaqGrid {
            grid-template-columns: 1fr;
          }

          .rutaFaqGrid article {
            padding: 26px 24px;
            border-radius: 24px;
          }

          .rutaFaqGrid h3 {
            font-size: 20px;
          }

          .rutaQuoteBlock {
            margin: 0 24px 80px;
            padding: 32px 24px;
            border-radius: 28px;
          }
        }
      `}</style>
    </>
  );
}
