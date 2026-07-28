export default function ServiceCTA() {
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
    <section className="serviceCtaBlock">
      <div className="serviceCtaContent">
        <div className="serviceCtaText">
          <span>Solución logística integral</span>

          <h2>Coordinemos tu operación desde Manzanillo.</h2>

          <p>
            Podemos ayudarte a revisar movimiento local de contenedores e ISO
            tanques, resguardo en patio de maniobras, apoyo operativo y gestión
            de transporte nacional mediante alianza comercial.
          </p>
        </div>

        <div className="serviceCtaCard">
          <strong>Puerto interior → patio → destino nacional</strong>

          <p>
            Integramos la operación local en Manzanillo con la gestión del
            traslado nacional para que el cliente tenga un solo punto de
            contacto durante la coordinación del servicio.
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Solicitar información por WhatsApp →
          </a>
        </div>
      </div>

      <style>{`
        .serviceCtaBlock {
          padding: 40px 7% 110px;
          background: #f5f6f8;
          overflow: hidden;
        }

        .serviceCtaContent {
          width: min(1180px, 100%);
          margin: 0 auto;
          padding: 52px;
          border-radius: 38px;
          background:
            linear-gradient(135deg, rgba(10, 29, 54, 0.96), rgba(15, 45, 82, 0.94)),
            url("https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85");
          background-size: cover;
          background-position: center;
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          box-shadow: 0 28px 75px rgba(8, 34, 74, 0.2);
          border-left: 8px solid #f26522;
        }

        .serviceCtaText span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1.2px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .serviceCtaText h2 {
          margin: 0 0 22px;
          color: #ffffff;
          font-size: clamp(34px, 5vw, 62px);
          line-height: 1.04;
          letter-spacing: -1.6px;
          font-weight: 900;
        }

        .serviceCtaText p {
          margin: 0;
          max-width: 720px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 18px;
          line-height: 1.7;
        }

        .serviceCtaCard {
          background: rgba(255, 255, 255, 0.96);
          color: #0a1d36;
          border-radius: 30px;
          padding: 34px 32px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
          border-bottom: 7px solid #f26522;
        }

        .serviceCtaCard strong {
          display: block;
          margin-bottom: 16px;
          color: #0a1d36;
          font-size: 26px;
          line-height: 1.15;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .serviceCtaCard p {
          margin: 0 0 26px;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        .serviceCtaCard a {
          min-height: 56px;
          padding: 0 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f26522;
          color: #ffffff;
          font-weight: 900;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        @media (max-width: 950px) {
          .serviceCtaContent {
            grid-template-columns: 1fr;
            padding: 42px 34px;
          }
        }

        @media (max-width: 650px) {
          .serviceCtaBlock {
            padding: 30px 7% 84px;
          }

          .serviceCtaContent {
            padding: 34px 24px;
            border-radius: 30px;
          }

          .serviceCtaText h2 {
            font-size: clamp(32px, 11vw, 48px);
            letter-spacing: -1px;
          }

          .serviceCtaText p {
            font-size: 16.5px;
          }

          .serviceCtaCard {
            padding: 28px 24px;
            border-radius: 26px;
          }

          .serviceCtaCard strong {
            font-size: 23px;
          }

          .serviceCtaCard a {
            width: 100%;
            text-align: center;
            padding: 0 20px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
