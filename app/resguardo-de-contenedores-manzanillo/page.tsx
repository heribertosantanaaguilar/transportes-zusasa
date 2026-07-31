import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata = {
  title: "Resguardo de contenedores en Manzanillo | Transportes ZUSASA",
  description:
    "Resguardo temporal de contenedores en patio de maniobras en Manzanillo, integrado con movimiento local, apoyo operativo y gestión de transporte nacional de contenedores e ISO tanques.",
};

export default function ResguardoContenedoresPage() {
  const whatsappMessage = [
    "Hola, quiero solicitar informacion o una cotizacion con Transportes ZUSASA.",
    "",
    "Servicio que necesito:",
    "- Resguardo en patio de maniobras:",
    "- Movimiento local previo en Manzanillo:",
    "- Transporte nacional de contenedores e ISO tanques:",
    "",
    "Datos del servicio:",
    "- Empresa:",
    "- Nombre de contacto:",
    "- Telefono:",
    "- Tipo de contenedor o ISO tanque:",
    "- Origen:",
    "- Destino local:",
    "- Destino nacional:",
    "- Fecha estimada:",
    "- Peso aproximado:",
    "- Tiempo estimado de resguardo:",
    "- Requiere transporte nacional:",
    "- Comentarios o necesidades operativas adicionales:",
  ].join("\n");

  const whatsappLink = `https://wa.me/522224556651?${new URLSearchParams({
    text: whatsappMessage,
  }).toString()}`;

  const services = [
    {
      title: "Resguardo temporal",
      text: "Apoyo para resguardar contenedores llenos o vacíos en patio de maniobras, sujeto a disponibilidad y condiciones operativas.",
    },
    {
      title: "Movimiento local previo",
      text: "Coordinación del traslado local desde el puerto interior hacia patio de maniobras o punto operativo dentro de Manzanillo.",
    },
    {
      title: "Apoyo operativo",
      text: "Seguimiento, comunicación y coordinación durante la solicitud, recepción, resguardo y salida del contenedor.",
    },
    {
      title: "Conexión con transporte nacional",
      text: "Cuando el cliente lo requiere, podemos integrar el resguardo con la gestión de transporte nacional mediante alianza comercial.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Recibimos tu solicitud",
      text: "Nos compartes tipo de contenedor o ISO tanque, origen, fecha estimada, tiempo de resguardo y requerimientos operativos.",
    },
    {
      number: "02",
      title: "Revisamos disponibilidad",
      text: "Validamos condiciones del patio, tiempos, documentación, peso, necesidades de movimiento local y posibles servicios adicionales.",
    },
    {
      number: "03",
      title: "Coordinamos el ingreso y resguardo",
      text: "Organizamos el movimiento local, la recepción en patio y el seguimiento operativo durante el periodo de resguardo.",
    },
    {
      number: "04",
      title: "Coordinamos salida o siguiente movimiento",
      text: "Al finalizar el resguardo, apoyamos con la salida del contenedor o la gestión de transporte nacional cuando aplique.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="storagePage">
        <section className="storageHero">
          <div className="storageHeroContent">
            <span>Resguardo en Manzanillo</span>

            <h1>Resguardo de contenedores en patio de maniobras.</h1>

            <p>
              En Transportes ZUSASA apoyamos operaciones que requieren resguardo
              temporal de contenedores en Manzanillo, integrando movimiento
              local, coordinación operativa y, cuando se requiere, gestión de
              transporte nacional mediante alianza comercial.
            </p>

            <div className="storageActions">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Cotizar resguardo →
              </a>

              <a href="/#servicios">Ver servicios</a>
            </div>
          </div>
        </section>

        <section className="storageIntro">
          <div className="storageIntroText">
            <span>Servicio conectado a tu operación</span>

            <h2>Del puerto interior al patio, y del patio al siguiente destino.</h2>

            <p>
              El resguardo en patio de maniobras puede formar parte de una
              solución logística más completa. Podemos coordinar el movimiento
              local del contenedor desde el puerto interior hacia patio y,
              posteriormente, apoyar con la salida, entrega local o gestión de
              transporte nacional hacia otro destino del país.
            </p>

            <p>
              Cada solicitud se revisa de forma particular, considerando
              disponibilidad, tipo de contenedor o ISO tanque, documentación,
              tiempos, peso, condiciones operativas y requerimientos del cliente.
            </p>
          </div>

          <div className="storageIntroCard">
            <strong>Movimiento local → resguardo → destino nacional</strong>

            <p>
              Una alternativa para clientes que requieren mantener control,
              trazabilidad y coordinación durante su operación logística desde
              Manzanillo.
            </p>
          </div>
        </section>

        <section className="storageServices">
          <div className="sectionHeader">
            <span>Alcance del servicio</span>

            <h2>Resguardo integrado con coordinación operativa.</h2>

            <p>
              Nuestro objetivo es que el cliente cuente con atención directa,
              información clara y seguimiento durante el proceso de resguardo y
              los movimientos relacionados con su contenedor.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((item) => (
              <article className="serviceCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="storageProcess">
          <div className="sectionHeader white">
            <span>Proceso de trabajo</span>

            <h2>Coordinamos cada etapa con claridad.</h2>

            <p>
              Revisamos cada operación antes de confirmar el servicio para
              asegurar que las condiciones, tiempos y requerimientos estén
              claramente definidos.
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

        <section className="storageValue">
          <div>
            <span>Valor agregado</span>

            <h2>Portal de monitoreo y control operativo.</h2>

            <p>
              Como parte del servicio de resguardo, Transportes ZUSASA puede
              ofrecer acceso a un portal de monitoreo mediante usuario y
              contraseña. Esta herramienta permite consultar evidencia
              fotográfica y videográfica, así como apoyar el control de
              operaciones mediante códigos QR.
            </p>
          </div>

          <div>
            <span>Seguimiento</span>

            <h2>Comunicación durante la operación.</h2>

            <p>
              Mantenemos comunicación directa para revisar el ingreso,
              permanencia, salida o siguiente movimiento del contenedor,
              brindando mayor claridad durante el servicio.
            </p>
          </div>
        </section>

        <section className="storageNotice">
          <span>Importante</span>

          <h2>Servicio sujeto a disponibilidad y condiciones operativas.</h2>

          <p>
            El resguardo, movimiento local y gestión de transporte nacional se
            revisan de acuerdo con las características de cada operación. Antes
            de confirmar el servicio se validan disponibilidad, documentación,
            tipo de carga, peso, tiempos, ruta y condiciones aplicables.
          </p>
        </section>

        <section className="storageQuote">
          <h2>Solicita una cotización para resguardo.</h2>

          <p>
            Compártenos los datos de tu operación y revisaremos disponibilidad,
            condiciones del servicio, movimiento local previo y posible conexión
            con transporte nacional.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Cotizar por WhatsApp →
          </a>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .storagePage {
          background: #f5f6f7;
          color: #0a1d36;
        }

        .storageHero {
          min-height: 720px;
          padding: 160px 7% 110px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(10, 29, 54, 0.88) 0%,
              rgba(10, 29, 54, 0.72) 48%,
              rgba(10, 29, 54, 0.48) 72%,
              rgba(10, 29, 54, 0.28) 100%
            ),
            url("/images/patio-maniobras-zusasa-1.jpg");
          background-size: cover;
          background-position: center center;
          color: #ffffff;
        }

        .storageHeroContent {
          max-width: 1040px;
        }

        .storageHero span,
        .storageIntroText span,
        .sectionHeader span,
        .storageValue span,
        .storageNotice span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .storageHero h1 {
          max-width: 1050px;
          margin: 0 0 26px;
          color: #ffffff;
          font-size: clamp(44px, 7vw, 86px);
          line-height: 0.98;
          letter-spacing: -2.4px;
          font-weight: 900;
        }

        .storageHero p {
          max-width: 900px;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.7;
        }

        .storageActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 38px;
        }

        .storageActions a,
        .storageQuote a {
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

        .storageActions a:first-child,
        .storageQuote a {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .storageActions a:last-child {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.12);
        }

        .storageIntro {
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

        .storageIntroText h2,
        .sectionHeader h2,
        .storageValue h2,
        .storageNotice h2,
        .storageQuote h2 {
          margin: 0 0 22px;
          color: #0a1d36;
          font-size: clamp(38px, 5vw, 66px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .storageIntroText p,
        .sectionHeader p,
        .storageValue p,
        .storageNotice p,
        .storageQuote p {
          margin: 0 0 16px;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.7;
        }

        .storageIntroCard {
          padding: 36px 34px;
          border-radius: 32px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          border-left: 7px solid #f26522;
        }

        .storageIntroCard strong {
          display: block;
          margin-bottom: 16px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .storageIntroCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 16px;
          line-height: 1.65;
        }

        .storageServices {
          padding: 0 7% 110px;
        }

        .sectionHeader {
          max-width: 980px;
          margin-bottom: 54px;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .serviceCard {
          min-height: 285px;
          padding: 34px 30px;
          border-radius: 30px;
          background: #ffffff;
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-bottom: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .serviceCard h3 {
          margin: 0 0 16px;
          color: #0a1d36;
          font-size: 25px;
          line-height: 1.14;
          font-weight: 900;
        }

        .serviceCard p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        .storageProcess {
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

        .storageValue {
          margin: 110px 7%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .storageValue > div {
          padding: 44px 40px;
          border-radius: 34px;
          background: #ffffff;
          border-left: 8px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .storageValue h2 {
          font-size: clamp(30px, 4vw, 48px);
        }

        .storageNotice {
          margin: 0 7% 110px;
          padding: 50px;
          border-radius: 36px;
          background: #ffffff;
          border-left: 8px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .storageNotice p {
          max-width: 980px;
        }

        .storageQuote {
          margin: 0 7% 110px;
          padding: 56px 48px;
          border-radius: 38px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          text-align: center;
          box-shadow: 0 28px 75px rgba(8, 34, 74, 0.2);
        }

        .storageQuote h2 {
          color: #ffffff;
        }

        .storageQuote p {
          max-width: 820px;
          margin: 0 auto 30px;
          color: rgba(255, 255, 255, 0.82);
        }

        @media (max-width: 1100px) {
          .servicesGrid,
          .processGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .storageIntro,
          .storageValue {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .storageHero {
            min-height: auto;
            padding: 140px 7% 110px;
            background-position: center center;
          }

          .storageHero h1 {
            font-size: clamp(38px, 12vw, 56px);
            letter-spacing: -1.2px;
          }

          .storageHero p {
            font-size: 17px;
          }

          .storageActions a,
          .storageQuote a {
            width: 100%;
            text-align: center;
          }

          .storageIntro {
            margin: -50px 7% 84px;
            padding: 32px 24px;
            border-radius: 30px;
          }

          .storageIntroText h2,
          .sectionHeader h2,
          .storageValue h2,
          .storageNotice h2,
          .storageQuote h2 {
            font-size: clamp(32px, 11vw, 48px);
            letter-spacing: -1px;
          }

          .storageIntroText p,
          .sectionHeader p,
          .storageValue p,
          .storageNotice p,
          .storageQuote p {
            font-size: 16px;
          }

          .storageIntroCard {
            padding: 30px 24px;
            border-radius: 26px;
          }

          .storageIntroCard strong {
            font-size: 25px;
          }

          .storageServices {
            padding: 0 7% 84px;
          }

          .servicesGrid,
          .processGrid {
            grid-template-columns: 1fr;
          }

          .serviceCard,
          .processCard {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 26px;
          }

          .storageProcess {
            padding: 84px 7%;
          }

          .storageValue {
            margin: 84px 7%;
          }

          .storageValue > div {
            padding: 32px 24px;
            border-radius: 28px;
          }

          .storageNotice {
            margin: 0 7% 84px;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .storageQuote {
            margin: 0 7% 84px;
            padding: 40px 24px;
            border-radius: 30px;
          }
        }
      `}</style>
    </>
  );
}
