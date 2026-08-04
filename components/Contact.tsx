export default function Contact() {
  return (
    <section className="contactSection" id="contacto">
      <div className="contactContainer">
        <div className="contactContent">
          <span>Contacto</span>

          <h2>Solicita tu cotización y coordinemos tu operación.</h2>

          <p>
            Cuéntanos qué tipo de servicio necesitas, el origen, el destino y la
            fecha estimada de tu operación. En Transportes ZUSASA te brindaremos
            atención directa para revisar tu solicitud y darte una respuesta
            clara.
          </p>

          <div className="contactActions">
            <a
              href="mailto:cotizaciones@transporteszusasa.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transportes%20ZUSASA&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20Transportes%20ZUSASA.%0A%0ATipo%20de%20servicio%3A%0AOrigen%3A%0ADestino%3A%0AFecha%20estimada%3A%0AComentarios%20adicionales%3A"
              className="contactQuote"
            >
              Solicitar cotización
            </a>

            <a
              href="https://wa.me/522224556651?text=Hola,%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Transportes%20ZUSASA."
              target="_blank"
              rel="noopener noreferrer"
              className="contactWhatsApp"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="contactCard">
          <h3>Datos de contacto</h3>

          <div className="contactItem">
            <strong>José Alberto Zúñiga Ramos</strong>
            <span>Gerente General</span>
            <a href="tel:+522224556651">222 455 6651</a>
            <a href="mailto:jzuniga@transporteszusasa.com">
              jzuniga@transporteszusasa.com
            </a>
          </div>

          <div className="contactItem">
            <strong>Sergio Sanmiguel Celis</strong>
            <span>Dirección de Administración y Finanzas</span>
            <a href="tel:+523141069165">314 106 9165</a>
            <a href="mailto:sergio.sanmiguel@transporteszusasa.com">
              sergio.sanmiguel@transporteszusasa.com
            </a>
          </div>

          <div className="contactItem">
            <strong>Heriberto Santana Aguilar</strong>
            <span>Coordinación de Logística</span>
            <a href="tel:+523148721897">314 872 1897</a>
            <a href="mailto:heriberto.santana@transporteszusasa.com">
              heriberto.santana@transporteszusasa.com
            </a>
          </div>

          <div className="contactDivider" />

          <div className="contactItem">
            <strong>Cotizaciones</strong>
            <a href="mailto:cotizaciones@transporteszusasa.com">
              cotizaciones@transporteszusasa.com
            </a>
          </div>

          <div className="contactItem">
            <strong>Ubicación</strong>
            <span>Manzanillo, Colima, México</span>
          </div>
        </div>
      </div>

      <style>{`
        .contactSection {
          width: 100%;
          max-width: 100%;
          padding: 110px 7%;
          background: radial-gradient(circle at top left, rgba(242, 101, 34, 0.12), transparent 32%), #f5f6f8;
          color: #0a1d36;
          overflow: hidden;
        }

        .contactContainer {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 68px;
          align-items: center;
        }

        .contactContent {
          min-width: 0;
        }

        .contactContent span {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #f26522;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 20px;
        }

        .contactContent span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
        }

        .contactContent h2 {
          margin: 0 0 26px;
          color: #0a1d36;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .contactContent p {
          margin: 0;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.75;
        }

        .contactActions {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .contactActions a {
          min-height: 60px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          font-size: 17px;
          font-weight: 900;
          text-decoration: none;
          text-align: center;
        }

        .contactQuote {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .contactWhatsApp {
          background: #ffffff;
          color: #0a1d36;
          border: 2px solid #0a1d36;
        }

        .contactCard {
          background: #ffffff;
          padding: 42px;
          border-radius: 34px;
          box-shadow: 0 28px 80px rgba(10, 29, 54, 0.14);
          border-top: 7px solid #f26522;
          min-width: 0;
        }

        .contactCard h3 {
          margin: 0 0 28px;
          color: #0a1d36;
          font-size: 34px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.6px;
        }

        .contactItem {
          display: grid;
          gap: 6px;
          margin-bottom: 22px;
        }

        .contactItem strong {
          color: #0a1d36;
          font-size: 19px;
          line-height: 1.25;
          font-weight: 900;
        }

        .contactItem span {
          color: #3b4a5a;
          font-size: 15.5px;
          line-height: 1.45;
        }

        .contactItem a {
          color: #f26522;
          font-size: 16.5px;
          line-height: 1.45;
          font-weight: 900;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .contactDivider {
          width: 100%;
          height: 1px;
          background: rgba(10, 29, 54, 0.12);
          margin: 8px 0 22px;
        }

        @media (max-width: 950px) {
          .contactContainer {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .contactSection {
            padding: 76px 24px;
          }

          .contactContainer {
            gap: 34px;
          }

          .contactContent h2 {
            font-size: clamp(34px, 11vw, 48px);
            letter-spacing: -1.1px;
          }

          .contactContent p {
            font-size: 17px;
            line-height: 1.7;
          }

          .contactActions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .contactActions a {
            width: 100%;
          }

          .contactCard {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .contactCard h3 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}
