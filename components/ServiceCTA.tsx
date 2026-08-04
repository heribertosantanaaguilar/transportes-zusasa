const quoteEmailLink =
  "mailto:cotizaciones@transporteszusasa.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transportes%20ZUSASA&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20Transportes%20ZUSASA.%0A%0AServicio%20que%20necesito%3A%0A-%20Movimiento%20local%20de%20contenedores%3A%0A-%20Movimiento%20local%20de%20ISO%20tanques%3A%0A-%20Transporte%20nacional%20de%20contenedores%20e%20ISO%20tanques%3A%0A-%20Resguardo%20en%20patio%20de%20maniobras%3A%0A-%20Apoyo%20operativo%3A%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%20o%20ISO%20tanque%3A%0A-%20Origen%3A%0A-%20Destino%20local%3A%0A-%20Destino%20nacional%3A%0A-%20Fecha%20estimada%3A%0A-%20Peso%20aproximado%3A%0A-%20Requiere%20movimiento%20local%20previo%3A%0A-%20Requiere%20resguardo%3A%0A-%20Comentarios%3A";

export default function ServiceCTA() {
  return (
    <section className="serviceCtaBlock">
      <div className="serviceCtaContent">
        <div className="serviceCtaText">
          <span>Cotización</span>

          <h2>¿Necesitas coordinar una operación desde Manzanillo?</h2>

          <p>
            Revisamos tu solicitud y te orientamos sobre movimiento local,
            resguardo o transporte nacional de contenedores e ISO tanques.
          </p>
        </div>

        <div className="serviceCtaCard">
          <strong>Atención directa para tu operación</strong>

          <p>
            Compártenos los datos básicos del servicio y revisaremos
            disponibilidad, condiciones operativas y opciones de coordinación.
          </p>

          <a href={quoteEmailLink}>
            Solicitar cotización por correo →
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
