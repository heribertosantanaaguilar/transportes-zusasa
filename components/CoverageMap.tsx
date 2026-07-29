export default function CoverageMap() {
  return (
    <section className="zusasaCoverageMap">
      <div className="zusasaCoverageMapContainer">
        <div className="zusasaCoverageMapHeader">
          <span>Cobertura nacional</span>

          <h2>Coordinamos transporte nacional desde Manzanillo.</h2>

          <p>
            Además del movimiento local y resguardo en Manzanillo, en
            Transportes ZUSASA coordinamos transporte nacional de contenedores e
            ISO tanques mediante alianza comercial, brindando una solución
            logística más completa para nuestros clientes.
          </p>
        </div>

        <div className="zusasaCoverageMapCard">
          <img
            src="/images/cobertura_nacional_desde_manzanillo.png"
            alt="Mapa de cobertura nacional desde Manzanillo de Transportes ZUSASA"
          />
        </div>

        <div className="coverageQuoteBox">
          <div>
            <span>Cotización nacional</span>

            <h3>
              Estamos listos para cotizar el transporte de tu carga hacia la
              ciudad de destino.
            </h3>

            <p>
              Compártenos el tipo de contenedor o ISO tanque, peso aproximado,
              fecha estimada, ciudad de destino y requerimientos de la operación.
              Revisaremos disponibilidad, ruta, condiciones operativas y costo
              del servicio.
            </p>
          </div>

          <a href="/cotizacion">Solicitar cotización →</a>
        </div>
      </div>

      <style>{`
        .zusasaCoverageMap {
          padding: 90px 7%;
          background: #f5f6f7;
        }

        .zusasaCoverageMapContainer {
          max-width: 1240px;
          margin: 0 auto;
        }

        .zusasaCoverageMapHeader {
          max-width: 920px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .zusasaCoverageMapHeader span {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #f26522;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 18px;
        }

        .zusasaCoverageMapHeader h2 {
          margin: 0 0 20px;
          color: #0a1d36;
          font-size: clamp(34px, 5vw, 62px);
          line-height: 1.05;
          letter-spacing: -1.6px;
          font-weight: 900;
        }

        .zusasaCoverageMapHeader p {
          margin: 0 auto;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.75;
          max-width: 860px;
        }

        .zusasaCoverageMapCard {
          background: #ffffff;
          border-radius: 34px;
          padding: 24px;
          border: 1px solid rgba(10, 29, 54, 0.08);
          box-shadow: 0 28px 70px rgba(10, 29, 54, 0.1);
          overflow: hidden;
        }

        .zusasaCoverageMapCard img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 24px;
        }

        .coverageQuoteBox {
          margin-top: 30px;
          padding: 38px 40px;
          border-radius: 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 70px rgba(8, 34, 74, 0.18);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 30px;
          align-items: center;
        }

        .coverageQuoteBox span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .coverageQuoteBox h3 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.08;
          letter-spacing: -0.8px;
          font-weight: 900;
        }

        .coverageQuoteBox p {
          margin: 0;
          max-width: 820px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 17px;
          line-height: 1.65;
        }

        .coverageQuoteBox a {
          min-height: 56px;
          padding: 0 28px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f26522;
          color: #ffffff;
          font-weight: 900;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        @media (max-width: 900px) {
          .coverageQuoteBox {
            grid-template-columns: 1fr;
          }

          .coverageQuoteBox a {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .zusasaCoverageMap {
            padding: 72px 7%;
          }

          .zusasaCoverageMapHeader {
            text-align: left;
            margin-bottom: 28px;
          }

          .zusasaCoverageMapHeader p {
            font-size: 16.5px;
            line-height: 1.7;
          }

          .zusasaCoverageMapCard {
            padding: 14px;
            border-radius: 24px;
          }

          .zusasaCoverageMapCard img {
            border-radius: 16px;
          }

          .coverageQuoteBox {
            margin-top: 24px;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .coverageQuoteBox h3 {
            font-size: 28px;
          }

          .coverageQuoteBox p {
            font-size: 15.8px;
          }
        }
      `}</style>
    </section>
  );
}
