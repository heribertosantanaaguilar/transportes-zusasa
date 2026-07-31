import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function CotizacionPage() {
  const whatsappMessage = `Hola, quiero solicitar una cotización con Transportes ZUSASA.

Servicio que necesito:
- Movimiento local de contenedores:
- Movimiento local de ISO tanques:
- Transporte nacional de contenedores e ISO tanques:
- Resguardo en patio de maniobras:
- Apoyo operativo:

Datos del servicio:
- Empresa:
- Nombre de contacto:
- Teléfono:
- Tipo de contenedor o ISO tanque:
- Origen:
- Destino local:
- Destino nacional:
- Fecha estimada:
- Peso aproximado:
- Requiere movimiento local previo:
- Requiere resguardo:
- Comentarios:`;

  const whatsappLink = `https://wa.me/522224556651?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const emailSubject = "Solicitud de cotización - Transportes ZUSASA";

  const emailBody = `Hola, quiero solicitar una cotización con Transportes ZUSASA.

Servicio que necesito:
- Movimiento local de contenedores:
- Movimiento local de ISO tanques:
- Transporte nacional de contenedores e ISO tanques:
- Resguardo en patio de maniobras:
- Apoyo operativo:

Datos del servicio:
- Empresa:
- Nombre de contacto:
- Teléfono:
- Tipo de contenedor o ISO tanque:
- Origen:
- Destino local:
- Destino nacional:
- Fecha estimada:
- Peso aproximado:
- Requiere movimiento local previo:
- Requiere resguardo:
- Comentarios:`;

  const emailLink = `mailto:transportes.zusasa@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const services = [
    {
      number: "01",
      title: "Movimiento local de contenedores",
      text: "Traslados locales de carga contenerizada dentro de la zona portuaria y logística de Manzanillo.",
    },
    {
      number: "02",
      title: "Movimiento local de ISO tanques",
      text: "Traslado local de ISO tanques en Manzanillo, sujeto a revisión del tipo de carga, documentación, disponibilidad y condiciones operativas aplicables.",
    },
    {
      number: "03",
      title: "Transporte nacional de contenedores e ISO tanques",
      text: "Gestión del traslado nacional de contenedores e ISO tanques desde Manzanillo hacia distintos destinos del país, mediante alianza comercial con transportista foráneo.",
    },
    {
      number: "04",
      title: "Resguardo en patio de maniobras",
      text: "Resguardo temporal de contenedores llenos o vacíos, sujeto a disponibilidad y condiciones operativas.",
    },
    {
      number: "05",
      title: "Apoyo operativo para contenedores",
      text: "Coordinación de movimientos, maniobras y apoyo local para operaciones de carga contenerizada.",
    },
  ];

  const quoteData = [
    "Servicio requerido",
    "Tipo de contenedor o ISO tanque",
    "Origen",
    "Destino local",
    "Destino nacional",
    "Fecha estimada del servicio",
    "Peso aproximado",
    "Si requiere movimiento local previo",
    "Si requiere resguardo en patio",
    "Comentarios operativos",
  ];

  return (
    <>
      <Navbar />

      <main className="quotePage">
        <section className="quoteHero">
          <div className="quoteHeroInner">
            <span className="quoteEyebrow">Cotización</span>

            <h1>Solicita una cotización para tu operación logística.</h1>

            <p>
              Compártenos los datos de tu servicio y revisaremos disponibilidad,
              condiciones operativas, requerimientos específicos y opciones de
              coordinación local o nacional desde Manzanillo.
            </p>

            <div className="quoteActions">
              <a
                className="primaryQuoteButton"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp →
              </a>

              <a className="secondaryQuoteButton" href={emailLink}>
                Enviar correo
              </a>
            </div>
          </div>
        </section>

        <section className="quoteServices">
          <div className="sectionIntro">
            <span>Servicios que puedes cotizar</span>

            <h2>
              Soluciones logísticas para contenedores e ISO tanques desde
              Manzanillo.
            </h2>

            <p>
              Cada solicitud será revisada de forma particular, considerando el
              tipo de servicio, documentación, disponibilidad, origen, destino,
              peso, ruta, resguardo y condiciones operativas aplicables.
            </p>
          </div>

          <div className="quoteServicesGrid">
            {services.map((service) => (
              <article className="quoteServiceCard" key={service.title}>
                <strong>{service.number}</strong>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="quoteIntegralBlock">
          <div>
            <span>Solución logística integral</span>

            <h2>Del puerto interior en Manzanillo al destino nacional.</h2>

            <p>
              En Transportes ZUSASA podemos coordinar el movimiento local desde
              el puerto interior hacia patio de maniobras y, mediante alianza
              comercial, gestionar el transporte nacional de contenedores e ISO
              tanques hacia distintos destinos del país.
            </p>

            <p>
              Esto permite al cliente contar con un solo punto de contacto para
              revisar disponibilidad, coordinar la operación, recibir
              seguimiento y gestionar la cotización del servicio.
            </p>
          </div>

          <div className="integralSteps">
            <article>
              <strong>01</strong>
              <p>Movimiento local en Manzanillo</p>
            </article>

            <article>
              <strong>02</strong>
              <p>Resguardo y apoyo operativo</p>
            </article>

            <article>
              <strong>03</strong>
              <p>Gestión de transporte nacional</p>
            </article>
          </div>
        </section>

        <section className="quoteInfoBlock">
          <div className="quoteInfoLeft">
            <span>Para cotizar más rápido</span>

            <h2>Compártenos estos datos.</h2>

            <p>
              Mientras más completa sea la información inicial, más ágil será la
              revisión de disponibilidad, condiciones, ruta y costos del
              servicio.
            </p>
          </div>

          <div className="quoteInfoRight">
            {quoteData.map((item) => (
              <div className="quoteDataItem" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="quoteValue">
          <div>
            <span>Valor agregado</span>

            <h2>Seguimiento y comunicación constante.</h2>

            <p>
              En cada servicio mantenemos comunicación directa durante la
              solicitud, coordinación y cierre de la operación, brindando
              claridad sobre tiempos, condiciones y avances del servicio.
            </p>
          </div>

          <div>
            <span>Experiencia especializada</span>

            <h2>Conocimiento operativo en ISO tanques.</h2>

            <p>
              Contamos con experiencia en operaciones relacionadas con ISO
              tanques y con apoyo especializado para revisar requerimientos
              particulares de este tipo de equipo.
            </p>
          </div>
        </section>

        <section className="quoteFinalCta">
          <h2>¿Listo para revisar tu operación?</h2>

          <p>
            Envíanos los datos del servicio y con gusto revisamos disponibilidad,
            condiciones operativas, ruta, requerimientos específicos y opciones
            de coordinación local o nacional.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Iniciar cotización por WhatsApp →
          </a>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .quotePage {
          background: #f5f6f7;
          color: #0a1d36;
        }

      .quoteHero {
  position: relative;
  padding: 150px 7% 100px;
  background:
    linear-gradient(
      90deg,
      rgba(10, 29, 54, 0.96) 0%,
      rgba(10, 29, 54, 0.88) 46%,
      rgba(10, 29, 54, 0.66) 72%,
      rgba(10, 29, 54, 0.48) 100%
    ),
    url("/images/transporte-nacional-zusasa-2.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: #ffffff;
  overflow: hidden;
}

        .quoteHeroInner {
  position: relative;
  z-index: 2;
  max-width: 980px;
}

        .quoteEyebrow,
        .sectionIntro span,
        .quoteInfoLeft span,
        .quoteValue span,
        .quoteIntegralBlock span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .quoteHero h1 {
          max-width: 1000px;
          margin: 0 0 26px;
          font-size: clamp(42px, 6vw, 76px);
          line-height: 1.03;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .quoteHero p {
          max-width: 900px;
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 20px;
          line-height: 1.7;
        }

        .quoteActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
        }

        .primaryQuoteButton,
        .secondaryQuoteButton,
        .quoteFinalCta a {
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

        .primaryQuoteButton,
        .quoteFinalCta a {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .secondaryQuoteButton {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .quoteServices {
          padding: 110px 7%;
        }

        .sectionIntro {
          max-width: 980px;
          margin-bottom: 56px;
        }

        .sectionIntro h2 {
          max-width: 1000px;
          margin: 0 0 24px;
          color: #0a1d36;
          font-size: clamp(40px, 5vw, 70px);
          line-height: 1.04;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .sectionIntro p {
          max-width: 900px;
          margin: 0;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.7;
        }

        .quoteServicesGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .quoteServiceCard {
          min-height: 330px;
          background: #ffffff;
          padding: 34px 30px;
          border-radius: 30px;
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-bottom: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .quoteServiceCard strong {
          display: block;
          color: #f26522;
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 24px;
        }

        .quoteServiceCard h3 {
          margin: 0 0 18px;
          color: #0a1d36;
          font-size: 25px;
          line-height: 1.12;
          font-weight: 900;
        }

        .quoteServiceCard p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        .quoteIntegralBlock {
          margin: 0 7% 110px;
          padding: 48px;
          border-radius: 36px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 38px;
          align-items: center;
          box-shadow: 0 28px 70px rgba(8, 34, 74, 0.18);
          border-left: 8px solid #f26522;
        }

        .quoteIntegralBlock h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .quoteIntegralBlock p {
          margin: 0 0 14px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 17px;
          line-height: 1.65;
        }

        .integralSteps {
          display: grid;
          gap: 18px;
        }

        .integralSteps article {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 22px 24px;
        }

        .integralSteps strong {
          display: block;
          color: #f26522;
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .integralSteps p {
          margin: 0;
          color: #ffffff;
          font-weight: 800;
          line-height: 1.35;
        }

        .quoteInfoBlock {
          margin: 0 7% 110px;
          padding: 48px;
          border-radius: 34px;
          background: #ffffff;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .quoteInfoLeft h2 {
          margin: 0 0 18px;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .quoteInfoLeft p {
          margin: 0;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.65;
        }

        .quoteInfoRight {
          display: grid;
          gap: 14px;
        }

        .quoteDataItem {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 18px;
          background: #f5f6f7;
        }

        .quoteDataItem span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #f26522;
          flex: 0 0 auto;
        }

        .quoteDataItem p {
          margin: 0;
          color: #0a1d36;
          font-weight: 800;
        }

        .quoteValue {
          margin: 0 7% 110px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .quoteValue > div {
          padding: 40px 36px;
          border-radius: 34px;
          background: #ffffff;
          color: #0a1d36;
          border-left: 7px solid #f26522;
          box-shadow: 0 24px 60px rgba(8, 34, 74, 0.1);
        }

        .quoteValue h2 {
          margin: 0 0 16px;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 900;
        }

        .quoteValue p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        .quoteFinalCta {
          margin: 0 7% 110px;
          padding: 54px 48px;
          border-radius: 36px;
          background: #ffffff;
          text-align: center;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .quoteFinalCta h2 {
          margin: 0 0 18px;
          color: #0a1d36;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 1.05;
          font-weight: 900;
        }

        .quoteFinalCta p {
          max-width: 760px;
          margin: 0 auto 30px;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .quoteIntegralBlock,
          .quoteInfoBlock,
          .quoteValue {
            grid-template-columns: 1fr;
          }
        }

       @media (max-width: 768px) {
  .quoteHero {
    padding: 130px 7% 78px;
    background-position: center center;
  }

          .quoteHero h1 {
            font-size: clamp(36px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .quoteHero p,
          .sectionIntro p {
            font-size: 17px;
          }

          .quoteServices {
            padding: 84px 7%;
          }

          .quoteIntegralBlock,
          .quoteInfoBlock,
          .quoteValue,
          .quoteFinalCta {
            margin-left: 7%;
            margin-right: 7%;
            margin-bottom: 84px;
          }

          .quoteIntegralBlock,
          .quoteInfoBlock {
            padding: 32px 24px;
          }

          .quoteValue > div {
            padding: 32px 24px;
          }

          .quoteFinalCta {
            padding: 40px 24px;
          }

          .primaryQuoteButton,
          .secondaryQuoteButton,
          .quoteFinalCta a {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
