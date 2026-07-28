import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata = {
  title:
    "Transporte nacional de contenedores e ISO tanques desde Manzanillo | Transportes ZUSASA",
  description:
    "Gestión de transporte nacional de contenedores e ISO tanques desde Manzanillo mediante alianza comercial. Movimiento local, resguardo, apoyo operativo y coordinación logística integral.",
};

export default function TransporteNacionalPage() {
  const whatsappMessage = [
    "Hola, quiero solicitar informacion o una cotizacion con Transportes ZUSASA.",
    "",
    "Servicio que necesito:",
    "- Transporte nacional de contenedores e ISO tanques:",
    "- Movimiento local previo en Manzanillo:",
    "- Resguardo en patio de maniobras:",
    "- Apoyo operativo:",
    "",
    "Datos del servicio:",
    "- Empresa:",
    "- Nombre de contacto:",
    "- Telefono:",
    "- Tipo de contenedor o ISO tanque:",
    "- Origen en Manzanillo:",
    "- Destino nacional:",
    "- Fecha estimada:",
    "- Peso aproximado:",
    "- Requiere movimiento local previo:",
    "- Requiere resguardo:",
    "- Comentarios:",
  ].join("\n");

  const whatsappLink = `https://wa.me/522224556651?${new URLSearchParams({
    text: whatsappMessage,
  }).toString()}`;

  const benefits = [
    {
      title: "Un solo punto de contacto",
      text: "El cliente puede revisar la operación local y la gestión del transporte nacional desde un mismo canal de atención.",
    },
    {
      title: "Menor desgaste operativo",
      text: "La coordinación local en Manzanillo ayuda a reducir tiempos de espera y movimientos innecesarios para transportistas foráneos.",
    },
    {
      title: "Coordinación local y nacional",
      text: "Integramos movimiento local, resguardo, apoyo operativo y gestión de traslado nacional mediante alianza comercial.",
    },
    {
      title: "Seguimiento claro",
      text: "Mantenemos comunicación durante la solicitud, coordinación, avance y cierre del servicio.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Recibimos la solicitud",
      text: "Revisamos tipo de contenedor o ISO tanque, origen, destino nacional, fecha estimada, peso y requerimientos operativos.",
    },
    {
      number: "02",
      title: "Analizamos condiciones",
      text: "Validamos disponibilidad, ruta, documentación, necesidad de movimiento local, resguardo y condiciones particulares del servicio.",
    },
    {
      number: "03",
      title: "Coordinamos la operación",
      text: "Gestionamos el movimiento local en Manzanillo y el transporte nacional mediante alianza comercial con transportista foráneo.",
    },
    {
      number: "04",
      title: "Damos seguimiento",
      text: "Mantenemos comunicación clara hasta confirmar el avance y cierre de la operación logística.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="nationalPage">
        <section className="nationalHero">
          <div className="nationalHeroContent">
            <span>Servicio nacional desde Manzanillo</span>

            <h1>Transporte nacional de contenedores e ISO tanques.</h1>

            <p>
              En Transportes ZUSASA gestionamos el traslado nacional de
              contenedores e ISO tanques desde Manzanillo hacia distintos
              destinos del país mediante alianza comercial con transportista
              foráneo, integrando movimiento local, resguardo y seguimiento
              operativo.
            </p>

            <div className="nationalActions">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Cotizar transporte nacional →
              </a>

              <a href="/#servicios">Ver otros servicios</a>
            </div>
          </div>
        </section>

        <section className="nationalIntro">
          <div className="nationalIntroText">
            <span>Solución logística integral</span>

            <h2>Del puerto interior en Manzanillo al destino nacional.</h2>

            <p>
              Esta solución permite coordinar el movimiento local desde el
              puerto interior hacia patio de maniobras o punto operativo en
              Manzanillo y, cuando el cliente lo requiere, gestionar el envío
              nacional del contenedor o ISO tanque hacia otro estado del país.
            </p>

            <p>
              El transporte nacional se realiza mediante alianza comercial con
              transportista foráneo. Transportes ZUSASA participa como punto de
              contacto para la coordinación, cotización, seguimiento y gestión
              comercial del servicio.
            </p>
          </div>

          <div className="nationalIntroCard">
            <strong>Puerto interior → patio → destino nacional</strong>

            <p>
              Una opción pensada para clientes que buscan coordinación clara,
              atención directa y una solución logística más completa desde
              Manzanillo.
            </p>
          </div>
        </section>

        <section className="nationalBenefits">
          <div className="sectionHeader">
            <span>Ventajas del servicio</span>

            <h2>Una forma más práctica de coordinar tu operación.</h2>

            <p>
              El objetivo es facilitar la gestión logística para clientes,
              agencias aduanales, operadores logísticos, importadores,
              exportadores y transportistas que requieren mover carga desde
              Manzanillo hacia destinos nacionales.
            </p>
          </div>

          <div className="benefitsGrid">
            {benefits.map((item) => (
              <article className="benefitCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="nationalProcess">
          <div className="sectionHeader white">
            <span>Proceso de coordinación</span>

            <h2>Revisamos cada solicitud de forma particular.</h2>

            <p>
              Cada servicio está sujeto a disponibilidad, destino, ruta, tipo de
              carga, documentación, peso, condiciones operativas y confirmación
              previa.
            </p>
          </div>

          <div className="processGrid">
            {process.map((step) => (
              <article className="processCard" key={step.number}>
                <strong>{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="nationalNotice">
          <div>
            <span>Importante</span>

            <h2>Servicio mediante alianza comercial.</h2>

            <p>
              El transporte nacional de contenedores e ISO tanques se gestiona
              mediante alianza comercial con transportista foráneo. Transportes
              ZUSASA realiza la coordinación comercial y operativa con el
              cliente, revisando disponibilidad, condiciones y requerimientos
              antes de confirmar el servicio.
            </p>
          </div>
        </section>

        <section className="nationalQuote">
          <h2>Solicita una cotización para transporte nacional.</h2>

          <p>
            Compártenos los datos de tu operación y revisaremos la mejor forma
            de coordinar el movimiento local en Manzanillo y el traslado
            nacional de tu contenedor o ISO tanque.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Cotizar por WhatsApp →
          </a>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .nationalPage {
          background: #f5f6f7;
          color: #0a1d36;
        }

        .nationalHero {
          min-height: 760px;
          padding: 160px 7% 110px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(135deg, rgba(10, 29, 54, 0.98), rgba(15, 45, 82, 0.92)),
            url("https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1800&q=85");
          background-size: cover;
          background-position: center;
          color: #ffffff;
        }

        .nationalHeroContent {
          max-width: 1040px;
        }

        .nationalHero span,
        .nationalIntroText span,
        .sectionHeader span,
        .nationalNotice span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .nationalHero h1 {
          max-width: 1050px;
          margin: 0 0 26px;
          color: #ffffff;
          font-size: clamp(44px, 7vw, 86px);
          line-height: 0.98;
          letter-spacing: -2.4px;
          font-weight: 900;
        }

        .nationalHero p {
          max-width: 900px;
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 20px;
          line-height: 1.7;
        }

        .nationalActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 38px;
        }

        .nationalActions a,
        .nationalQuote a {
          min-height: 58px;
          padding: 0 30px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 900;
          font-size: 16px;
        }

        .nationalActions a:first-child,
        .nationalQuote a {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .nationalActions a:last-child {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
        }

        .nationalIntro {
          margin: -70px 7% 110px;
          padding: 50px;
          border-radius: 38px;
          background: #ffffff;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 38px;
          align-items: center;
          box-shadow: 0 28px 75px rgba(8, 34, 74, 0.16);
          position: relative;
          z-index: 2;
        }

        .nationalIntroText h2,
        .sectionHeader h2,
        .nationalNotice h2,
        .nationalQuote h2 {
          margin: 0 0 22px;
          color: #0a1d36;
          font-size: clamp(38px, 5vw, 66px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .nationalIntroText p,
        .sectionHeader p,
        .nationalNotice p,
        .nationalQuote p {
          margin: 0 0 16px;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.7;
        }

        .nationalIntroCard {
          padding: 36px 34px;
          border-radius: 32px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          border-left: 7px solid #f26522;
        }

        .nationalIntroCard strong {
          display: block;
          margin-bottom: 16px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .nationalIntroCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 16px;
          line-height: 1.65;
        }

        .nationalBenefits {
          padding: 0 7% 110px;
        }

        .sectionHeader {
          max-width: 980px;
          margin-bottom: 54px;
        }

        .benefitsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .benefitCard {
          min-height: 285px;
          padding: 34px 30px;
          border-radius: 30px;
          background: #ffffff;
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-bottom: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .benefitCard h3 {
          margin: 0 0 16px;
          color: #0a1d36;
          font-size: 25px;
          line-height: 1.14;
          font-weight: 900;
        }

        .benefitCard p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        .nationalProcess {
          padding: 110px 7%;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
        }

        .sectionHeader.white h2 {
          color: #ffffff;
        }

        .sectionHeader.white p {
          color: rgba(255, 255, 255, 0.82);
        }

        .processGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .processCard {
          min-height: 315px;
          padding: 34px 30px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(0, 0, 0, 0.14);
        }

        .processCard strong {
          display: block;
          margin-bottom: 24px;
          color: #f26522;
          font-size: 26px;
          font-weight: 900;
        }

        .processCard h3 {
          margin: 0 0 16px;
          color: #ffffff;
          font-size: 25px;
          line-height: 1.12;
          font-weight: 900;
        }

        .processCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.65;
        }

        .nationalNotice {
          margin: 110px 7%;
          padding: 50px;
          border-radius: 36px;
          background: #ffffff;
          border-left: 8px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .nationalNotice p {
          max-width: 980px;
        }

        .nationalQuote {
          margin: 0 7% 110px;
          padding: 56px 48px;
          border-radius: 38px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          text-align: center;
          box-shadow: 0 28px 75px rgba(8, 34, 74, 0.2);
        }

        .nationalQuote h2 {
          color: #ffffff;
        }

        .nationalQuote p {
          max-width: 820px;
          margin: 0 auto 30px;
          color: rgba(255, 255, 255, 0.82);
        }

        @media (max-width: 1100px) {
          .benefitsGrid,
          .processGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .nationalIntro {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .nationalHero {
            min-height: auto;
            padding: 140px 7% 110px;
          }

          .nationalHero h1 {
            font-size: clamp(38px, 12vw, 56px);
            letter-spacing: -1.2px;
          }

          .nationalHero p {
            font-size: 17px;
          }

          .nationalActions a,
          .nationalQuote a {
            width: 100%;
            text-align: center;
          }

          .nationalIntro {
            margin: -50px 7% 84px;
            padding: 32px 24px;
            border-radius: 30px;
          }

          .nationalIntroText h2,
          .sectionHeader h2,
          .nationalNotice h2,
          .nationalQuote h2 {
            font-size: clamp(32px, 11vw, 48px);
            letter-spacing: -1px;
          }

          .nationalIntroText p,
          .sectionHeader p,
          .nationalNotice p,
          .nationalQuote p {
            font-size: 16px;
          }

          .nationalIntroCard {
            padding: 30px 24px;
            border-radius: 26px;
          }

          .nationalIntroCard strong {
            font-size: 25px;
          }

          .nationalBenefits {
            padding: 0 7% 84px;
          }

          .benefitsGrid,
          .processGrid {
            grid-template-columns: 1fr;
          }

          .benefitCard,
          .processCard {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 26px;
          }

          .nationalProcess {
            padding: 84px 7%;
          }

          .nationalNotice {
            margin: 84px 7%;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .nationalQuote {
            margin: 0 7% 84px;
            padding: 40px 24px;
            border-radius: 30px;
          }
        }
      `}</style>
    </>
  );
}
