const quoteEmailLink =
  "mailto:cotizaciones@transporteszusasa.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transportes%20ZUSASA&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20Transportes%20ZUSASA.%0A%0AServicio%20que%20necesito%3A%0A-%20Movimiento%20local%20de%20contenedores%3A%0A-%20Movimiento%20local%20de%20ISO%20tanques%3A%0A-%20Transporte%20nacional%20de%20contenedores%20e%20ISO%20tanques%3A%0A-%20Resguardo%20en%20patio%20de%20maniobras%3A%0A-%20Apoyo%20operativo%3A%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%20o%20ISO%20tanque%3A%0A-%20Origen%3A%0A-%20Destino%20local%3A%0A-%20Destino%20nacional%3A%0A-%20Fecha%20estimada%3A%0A-%20Peso%20aproximado%3A%0A-%20Requiere%20movimiento%20local%20previo%3A%0A-%20Requiere%20resguardo%3A%0A-%20Comentarios%3A";

export default function Quote() {
  return (
    <section className="quoteSection" id="cotizacion-inmediata">
      <div className="quoteContainer">
        <div className="quoteHeader">
          <span>Cotización inmediata</span>

          <h2>
            Solicita una cotización para tu operación logística desde
            Manzanillo.
          </h2>

          <p>
            Cuéntanos qué tipo de servicio necesitas, el origen, el destino y la
            fecha estimada de tu operación. Nuestro equipo revisará la
            información y te dará una respuesta clara para coordinar movimiento
            local, resguardo o transporte nacional de contenedores e ISO
            tanques.
          </p>
        </div>

        <div className="quoteCards">
          <article>
            <h3>Atención directa</h3>
            <p>Te orientamos desde el primer contacto.</p>
          </article>

          <article>
            <h3>Respuesta ágil</h3>
            <p>Revisamos disponibilidad y condiciones operativas.</p>
          </article>

          <article>
            <h3>Información clara</h3>
            <p>Te indicamos tiempos, alcance y datos necesarios.</p>
          </article>
        </div>

        <div className="quoteBox">
          <div>
            <h3>Datos recomendados para cotizar</h3>
            <p>
              Para brindarte una mejor atención, comparte la información básica
              de tu operación.
            </p>

            <ul>
              <li>Tipo de servicio requerido</li>
              <li>Tipo de contenedor o ISO tanque</li>
              <li>Origen del movimiento</li>
              <li>Destino local o nacional</li>
              <li>Fecha estimada del servicio</li>
              <li>Peso aproximado de la carga</li>
              <li>Datos o requerimientos especiales</li>
            </ul>
          </div>

          <div className="quoteActions">
            <a href={quoteEmailLink} className="quotePrimary">
              Solicitar cotización por correo
            </a>

            <a href={quoteEmailLink} className="quoteSecondary">
              Enviar datos de mi operación
            </a>
          </div>
        </div>

        <p className="quoteNote">
          Respuesta personalizada: revisamos cada solicitud de acuerdo con las
          condiciones reales de la operación.
        </p>
      </div>

      <style>{`
        .quoteSection {
          width: 100%;
          max-width: 100%;
          padding: 100px 7%;
          background: #f5f6f8;
          color: #0a1d36;
          overflow: hidden;
        }

        .quoteContainer {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .quoteHeader {
          max-width: 980px;
        }

        .quoteHeader span {
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

        .quoteHeader span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
        }

        .quoteHeader h2 {
          margin: 0 0 26px;
          color: #0a1d36;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .quoteHeader p {
          margin: 0;
          max-width: 940px;
          color: #3b4a5a;
          font-size: 20px;
          line-height: 1.75;
        }

        .quoteCards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-top: 42px;
        }

        .quoteCards article {
          background: #ffffff;
          padding: 30px;
          border-radius: 26px;
          border-top: 6px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .quoteCards h3 {
          margin: 0 0 12px;
          color: #0a1d36;
          font-size: 24px;
          line-height: 1.15;
          font-weight: 900;
        }

        .quoteCards p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.6;
        }

        .quoteBox {
          margin-top: 34px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: center;
          background: #0a1d36;
          color: #ffffff;
          padding: 42px;
          border-radius: 34px;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 80px rgba(10, 29, 54, 0.18);
        }

        .quoteBox h3 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.12;
          font-weight: 900;
        }

        .quoteBox p {
          margin: 0 0 22px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 17px;
          line-height: 1.65;
        }

        .quoteBox ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .quoteBox li {
          position: relative;
          padding-left: 30px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 700;
        }

        .quoteBox li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #f26522;
          font-weight: 900;
        }

        .quoteActions {
          display: grid;
          gap: 16px;
        }

        .quoteActions a {
          min-height: 60px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 26px;
          text-decoration: none;
          font-size: 17px;
          font-weight: 900;
          text-align: center;
        }

        .quotePrimary {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .quoteSecondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.6);
        }

        .quoteNote {
          margin: 24px 0 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .quoteCards,
          .quoteBox {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .quoteSection {
            padding: 74px 24px;
          }

          .quoteHeader h2 {
            font-size: clamp(34px, 11vw, 48px);
            letter-spacing: -1.1px;
          }

          .quoteHeader p {
            font-size: 17px;
            line-height: 1.7;
          }

          .quoteCards {
            gap: 18px;
            margin-top: 34px;
          }

          .quoteCards article {
            padding: 26px 24px;
            border-radius: 24px;
          }

          .quoteBox {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .quoteBox h3 {
            font-size: 26px;
          }

          .quoteActions a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
