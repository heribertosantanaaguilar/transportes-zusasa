import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata = {
  title:
    "Transporte nacional de contenedores e ISO tanques | Transportes ZUSASA",
  description:
    "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo mediante alianza comercial con transportistas especializados.",
};

export default function TransporteNacionalPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="nationalHero">
          <div className="nationalHeroOverlay" />

          <div className="nationalHeroContent">
            <span>Servicio nacional desde Manzanillo</span>

            <h1>Transporte nacional de contenedores e ISO tanques.</h1>

            <p>
              En Transportes ZUSASA gestionamos el traslado nacional de
              contenedores e ISO tanques desde Manzanillo hacia distintos
              destinos del país mediante alianza comercial con transportistas
              especializados, integrando movimiento local, resguardo y
              seguimiento operativo.
            </p>

            <div className="nationalHeroActions">
              <a
                href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20transporte%20nacional%20de%20contenedores%20desde%20Manzanillo."
                target="_blank"
                rel="noopener noreferrer"
                className="primaryButton"
              >
                Cotizar transporte nacional →
              </a>

              <a href="/#servicios" className="secondaryButton">
                Ver otros servicios
              </a>
            </div>
          </div>
        </section>

        <section className="nationalIntro">
          <div className="nationalContainer introGrid">
            <div>
              <span className="sectionEyebrow">Solución logística nacional</span>

              <h2>Coordinamos movimientos foráneos desde Manzanillo.</h2>

              <p>
                Nuestro servicio de transporte nacional está diseñado para
                clientes que requieren mover contenedores o ISO tanques desde
                Manzanillo hacia distintos puntos del país, con atención
                directa, comunicación clara y seguimiento operativo.
              </p>

              <p>
                Este servicio se realiza mediante alianza comercial con
                transportistas especializados, sujeto a disponibilidad de
                unidades, ruta, tipo de carga, condiciones operativas y
                requerimientos documentales de cada operación.
              </p>
            </div>

            <div className="introCard">
              <h3>Servicio sujeto a análisis particular</h3>

              <p>
                Cada cotización se revisa de forma individual para confirmar
                viabilidad, disponibilidad, tipo de unidad, maniobras,
                condiciones de ruta, peso, documentación y tiempos de servicio.
              </p>
            </div>
          </div>
        </section>

        <section className="includedSection">
          <div className="nationalContainer">
            <div className="includedHeader">
              <span className="sectionEyebrow">Qué contempla el servicio</span>

              <h2>Coordinación, seguimiento y apoyo operativo.</h2>

              <p>
                Integramos los elementos necesarios para dar mayor claridad y
                control durante la operación nacional desde Manzanillo.
              </p>
            </div>

            <div className="includedGrid">
              <article>
                <span>01</span>
                <h3>Monitoreo GPS</h3>
                <p>
                  Seguimiento vía GPS durante el traslado para contar con mayor
                  visibilidad de la unidad durante la operación.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Movimiento en Manzanillo</h3>
                <p>
                  Coordinación del movimiento local requerido en Manzanillo
                  previo al traslado nacional, según las condiciones de cada
                  servicio.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Maniobra en Manzanillo</h3>
                <p>
                  Apoyo para maniobras locales relacionadas con la operación,
                  sujeto a disponibilidad, tipo de carga y condiciones
                  operativas.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Unidades de rescate</h3>
                <p>
                  Disponibilidad de apoyo operativo o unidades de rescate
                  conforme a ruta, condiciones del servicio y disponibilidad de
                  la red aliada.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="photoSection">
          <div className="nationalContainer photoGrid">
            <article className="photoCard large">
              <img
                src="/images/transporte-nacional-zusasa-2.jpeg"
                alt="Unidades aliadas para transporte nacional desde Manzanillo"
              />
              <div>
                <h3>Unidades aliadas para rutas nacionales</h3>
                <p>
                  Coordinación con transportistas especializados para servicios
                  foráneos de carga contenerizada.
                </p>
              </div>
            </article>

            <article className="photoCard">
              <img
                src="/images/transporte-nacional-zusasa-1.jpeg"
                alt="Transporte nacional de contenedores mediante alianza comercial"
              />
              <div>
                <h3>Capacidad operativa nacional</h3>
                <p>
                  Servicios sujetos a disponibilidad, ruta, condiciones
                  operativas y análisis particular de cada cotización.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="processSection">
          <div className="nationalContainer">
            <div className="processHeader">
              <span className="sectionEyebrow">Proceso de atención</span>

              <h2>Así coordinamos tu servicio nacional.</h2>
            </div>

            <div className="processSteps">
              <div>
                <span>01</span>
                <h3>Recibimos tu solicitud</h3>
                <p>
                  Nos compartes origen, destino, tipo de contenedor, peso,
                  fecha estimada y datos generales de la operación.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Revisamos disponibilidad</h3>
                <p>
                  Analizamos ruta, unidad requerida, condiciones operativas,
                  documentación y viabilidad del servicio.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Emitimos cotización</h3>
                <p>
                  Presentamos una propuesta clara considerando el alcance del
                  servicio, tiempos, condiciones y costos aplicables.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Coordinamos la operación</h3>
                <p>
                  Damos seguimiento al movimiento y mantenemos comunicación
                  durante las etapas principales del servicio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="quoteBand">
          <div className="nationalContainer quoteBandContent">
            <div>
              <span className="sectionEyebrow light">Cotización nacional</span>

              <h2>¿Necesitas mover un contenedor desde Manzanillo?</h2>

              <p>
                Envíanos los datos de tu operación y revisaremos disponibilidad,
                ruta, condiciones, maniobras y costos aplicables.
              </p>
            </div>

            <a
              href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20transporte%20nacional%20de%20contenedores%20desde%20Manzanillo.%20Mis%20datos%20son%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .nationalHero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: center;
          background-image: url("/images/transporte-nacional-zusasa-2.jpeg");
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .nationalHeroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(5, 22, 45, 0.94) 0%,
              rgba(5, 22, 45, 0.86) 42%,
              rgba(5, 22, 45, 0.58) 68%,
              rgba(5, 22, 45, 0.36) 100%
            );
        }

        .nationalHeroContent {
          position: relative;
          z-index: 2;
          width: min(1180px, 88%);
          margin: 0 auto;
          padding: 120px 0 90px;
        }

        .nationalHeroContent span,
        .sectionEyebrow {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .nationalHeroContent h1 {
          max-width: 980px;
          margin: 0 0 30px;
          color: #ffffff;
          font-size: clamp(52px, 8vw, 112px);
          line-height: 0.98;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .nationalHeroContent p {
          max-width: 880px;
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 22px;
          line-height: 1.55;
        }

        .nationalHeroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 42px;
        }

        .primaryButton,
        .secondaryButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          padding: 0 34px;
          border-radius: 999px;
          font-size: 17px;
          font-weight: 900;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primaryButton {
          color: #ffffff;
          background: #f26522;
          box-shadow: 0 18px 42px rgba(242, 101, 34, 0.28);
        }

        .secondaryButton {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
          transform: translateY(-2px);
        }

        .nationalIntro,
        .includedSection,
        .photoSection,
        .processSection {
          padding: 95px 0;
          background: #f5f6f8;
        }

        .nationalContainer {
          width: min(1180px, 88%);
          margin: 0 auto;
        }

        .introGrid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 46px;
          align-items: stretch;
        }

        .nationalIntro h2,
        .includedHeader h2,
        .processHeader h2,
        .quoteBand h2 {
          margin: 0 0 24px;
          color: #0a1d36;
          font-size: clamp(38px, 5.3vw, 72px);
          line-height: 1.02;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .nationalIntro p,
        .includedHeader p,
        .quoteBand p {
          margin: 0 0 22px;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.75;
        }

        .introCard {
          background: #ffffff;
          border-radius: 34px;
          padding: 38px;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
          border-bottom: 7px solid #f26522;
        }

        .introCard h3 {
          margin: 0 0 18px;
          color: #0a1d36;
          font-size: 28px;
          line-height: 1.12;
          font-weight: 900;
        }

        .introCard p {
          margin: 0;
          font-size: 17px;
          line-height: 1.65;
        }

        .includedSection {
          background: #ffffff;
        }

        .includedHeader {
          max-width: 920px;
          margin-bottom: 44px;
        }

        .includedGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .includedGrid article,
        .processSteps div {
          background: #ffffff;
          border-radius: 30px;
          padding: 32px 28px;
          box-shadow: 0 22px 60px rgba(10, 29, 54, 0.09);
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-bottom: 7px solid #f26522;
        }

        .includedGrid article span,
        .processSteps div span {
          display: inline-block;
          color: #f26522;
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 28px;
        }

        .includedGrid article h3,
        .processSteps div h3 {
          margin: 0 0 14px;
          color: #0a1d36;
          font-size: 25px;
          line-height: 1.1;
          font-weight: 900;
        }

        .includedGrid article p,
        .processSteps div p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.6;
        }

        .photoSection {
          background: #f5f6f8;
        }

        .photoGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
        }

        .photoCard {
          position: relative;
          min-height: 430px;
          border-radius: 36px;
          overflow: hidden;
          background: #0a1d36;
          box-shadow: 0 28px 70px rgba(10, 29, 54, 0.18);
        }

        .photoCard.large {
          min-height: 520px;
        }

        .photoCard img {
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
          display: block;
        }

        .photoCard::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 29, 54, 0.02) 0%,
            rgba(10, 29, 54, 0.48) 58%,
            rgba(10, 29, 54, 0.9) 100%
          );
        }

        .photoCard div {
          position: absolute;
          left: 32px;
          right: 32px;
          bottom: 32px;
          z-index: 2;
        }

        .photoCard h3 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.08;
          font-weight: 900;
        }

        .photoCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16.5px;
          line-height: 1.55;
        }

        .processSection {
          background: #ffffff;
        }

        .processHeader {
          max-width: 880px;
          margin-bottom: 44px;
        }

        .processSteps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .quoteBand {
          padding: 90px 0;
          background: #0a1d36;
        }

        .quoteBandContent {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 38px;
          align-items: center;
        }

        .sectionEyebrow.light {
          color: #f26522;
        }

        .quoteBand h2 {
          color: #ffffff;
          font-size: clamp(36px, 4.8vw, 62px);
        }

        .quoteBand p {
          max-width: 820px;
          color: rgba(255, 255, 255, 0.84);
        }

        .quoteBand a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 60px;
          padding: 0 34px;
          border-radius: 999px;
          color: #ffffff;
          background: #f26522;
          font-size: 17px;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 18px 42px rgba(242, 101, 34, 0.28);
        }

        @media (max-width: 1000px) {
          .introGrid,
          .photoGrid,
          .quoteBandContent {
            grid-template-columns: 1fr;
          }

          .includedGrid,
          .processSteps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .nationalHero {
            min-height: 720px;
            background-position: center;
          }
        }

        @media (max-width: 650px) {
          .nationalHero {
            min-height: 720px;
            background-position: center;
          }

          .nationalHeroContent {
            width: min(92%, 1180px);
            padding: 100px 0 70px;
          }

          .nationalHeroContent h1 {
            font-size: clamp(42px, 14vw, 66px);
            letter-spacing: -1.6px;
          }

          .nationalHeroContent p {
            font-size: 17px;
            line-height: 1.6;
          }

          .nationalHeroActions {
            gap: 14px;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
            min-height: 54px;
            font-size: 15.5px;
            padding: 0 24px;
          }

          .nationalIntro,
          .includedSection,
          .photoSection,
          .processSection,
          .quoteBand {
            padding: 72px 0;
          }

          .nationalContainer {
            width: 92%;
          }

          .nationalIntro h2,
          .includedHeader h2,
          .processHeader h2,
          .quoteBand h2 {
            font-size: clamp(32px, 11vw, 50px);
            letter-spacing: -1px;
          }

          .nationalIntro p,
          .includedHeader p,
          .quoteBand p {
            font-size: 16.5px;
            line-height: 1.65;
          }

          .includedGrid,
          .processSteps {
            grid-template-columns: 1fr;
          }

          .introCard,
          .includedGrid article,
          .processSteps div {
            border-radius: 28px;
            padding: 28px 24px;
          }

          .photoCard,
          .photoCard.large {
            min-height: 360px;
            border-radius: 28px;
          }

          .photoCard div {
            left: 24px;
            right: 24px;
            bottom: 24px;
          }

          .photoCard h3 {
            font-size: 25px;
          }

          .photoCard p {
            font-size: 15.5px;
          }

          .quoteBand a {
            width: 100%;
            white-space: normal;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
