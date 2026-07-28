export default function Footer() {
  const whatsappMessage = [
    "Hola, quiero solicitar informacion o una cotizacion con Transportes ZUSASA.",
    "",
    "Servicio que necesito:",
    "- Movimiento local de contenedores:",
    "- Movimiento local de ISO tanques:",
    "- Transporte nacional de contenedores e ISO tanques:",
    "- Resguardo en patio de maniobras:",
    "- Apoyo operativo:",
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
    "- Requiere movimiento local previo:",
    "- Requiere resguardo:",
    "- Comentarios:",
  ].join("\n");

  const whatsappLink = `https://wa.me/522224556651?${new URLSearchParams({
    text: whatsappMessage,
  }).toString()}`;

  return (
    <footer className="zusasaFooter">
      <div className="footerContainer">
        <div className="footerBrand">
          <img
            className="footerLogoImage"
            src="/images/logo-zusasa.png"
            alt="Transportes ZUSASA"
          />

          <div>
            <h2>Transportes ZUSASA</h2>

            <p>
              Coordinamos soluciones logísticas para contenedores e ISO tanques
              desde Manzanillo, integrando movimiento local, resguardo, apoyo
              operativo y gestión de transporte nacional mediante alianza
              comercial.
            </p>
          </div>
        </div>

        <div className="footerGrid">
          <div className="footerColumn">
            <h3>Servicios</h3>

            <a href="/#servicios">Movimiento local de contenedores</a>
            <a href="/#servicios">Movimiento local de ISO tanques</a>
            <a href="/#servicios">
              Transporte nacional de contenedores e ISO tanques
            </a>
            <a href="/resguardo-de-contenedores-manzanillo">
              Resguardo en patio de maniobras
            </a>
            <a href="/#servicios">Apoyo operativo</a>
          </div>

          <div className="footerColumn">
            <h3>Contacto</h3>

            <p>
              <strong>José Alberto Zúñiga Ramos</strong>
              <br />
              Gerente General
              <br />
              <a href="tel:+522224556651">222 455 6651</a>
            </p>

            <p>
              <strong>Correo:</strong>
              <br />
              <a href="mailto:transportes.zusasa@gmail.com">
                transportes.zusasa@gmail.com
              </a>
            </p>

            <a
              className="footerWhatsApp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar por WhatsApp →
            </a>
          </div>

          <div className="footerColumn">
            <h3>Ubicación</h3>

            <p>
              Manzanillo, Colima, México.
              <br />
              Zona portuaria y logística.
            </p>

            <p>
              <strong>Patio de maniobras:</strong>
              <br />
              Calle Algodón #67, Interior 3,
              <br />
              C.P. 28239, Tapeixtles,
              <br />
              Manzanillo, Colima.
            </p>
          </div>

          <div className="footerColumn">
            <h3>Redes sociales</h3>

            <a
              href="https://www.linkedin.com/company/transportes-zusasa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591897865110"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            © {new Date().getFullYear()} Transportes ZUSASA. Todos los derechos
            reservados.
          </p>

          <p>Transportamos la confianza que mueve tu negocio.</p>
        </div>
      </div>

      <style>{`
        .zusasaFooter {
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          padding: 72px 7% 34px;
          overflow: hidden;
        }

        .footerContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .footerBrand {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          align-items: center;
          padding-bottom: 44px;
          margin-bottom: 44px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .footerLogoImage {
          width: 96px;
          height: 96px;
          object-fit: cover;
          background: #ffffff;
          border-radius: 20px;
          padding: 0;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }

        .footerBrand h2 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: 34px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .footerBrand p {
          max-width: 850px;
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.65;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.1fr 1.1fr 1fr 0.8fr;
          gap: 34px;
        }

        .footerColumn h3 {
          margin: 0 0 20px;
          color: #f26522;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footerColumn p {
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 15.5px;
          line-height: 1.65;
        }

        .footerColumn strong {
          color: #ffffff;
          font-weight: 900;
        }

        .footerColumn a {
          display: block;
          margin-bottom: 12px;
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 15.5px;
          line-height: 1.45;
          transition: color 0.2s ease;
        }

        .footerColumn a:hover {
          color: #f26522;
        }

        .footerWhatsApp {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          margin-top: 8px;
          border-radius: 999px;
          background: #f26522;
          color: #ffffff !important;
          font-weight: 900;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.26);
        }

        .footerBottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 52px;
          padding-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .footerBottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 1000px) {
          .footerGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .zusasaFooter {
            padding: 64px 7% 30px;
          }

          .footerBrand {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .footerLogoImage {
            width: 78px;
            height: 78px;
          }

          .footerBrand h2 {
            font-size: 28px;
          }

          .footerBrand p {
            font-size: 15.8px;
          }

          .footerGrid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footerBottom {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
