export default function CoverageMap() {
  return (
    <section id="cobertura" className="coverageSection">
      <div className="coverageContainer">
        <div className="coverageHeader">
          <span>Cobertura nacional</span>

          <h2>Rutas gestionadas desde Manzanillo.</h2>

          <p>
            Coordinamos soluciones logísticas desde el puerto de Manzanillo
            hacia distintos destinos del país mediante alianza comercial con
            transportistas especializados.
          </p>
        </div>

        <div className="coverageMapFrame">
          <iframe
            src="/mapa-rutas-zusasa.html"
            title="Mapa de rutas nacionales Transportes ZUSASA"
            loading="lazy"
          />
        </div>

        <div className="coverageQuoteBox">
          <div className="coverageQuoteText">
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

          <a href="/cotizacion" className="coverageQuoteButton">
            Solicitar cotización →
          </a>
        </div>
      </div>

      <style>{`
        .coverageSection {
          padding: 80px 7% 95px;
          background: #f5f6f8;
          overflow: hidden;
        }

        .coverageContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .coverageHeader {
          width: 100%;
          max-width: none;
          margin-bottom: 44px;
        }

        .coverageHeader span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .coverageHeader h2 {
          margin: 0 0 22px;
          color: #0a1d36;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.02;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .coverageHeader p {
          margin: 0;
          width: 100%;
          max-width: none;
          color: #3b4a5a;
          font-size: 20px;
          line-height: 1.7;
        }

        .coverageMapFrame {
          width: 100%;
          height: 520px;
          border-radius: 36px;
          overflow: hidden;
          background: #ffffff;
          border: 2px dashed rgba(10, 29, 54, 0.14);
          box-shadow: 0 28px 75px rgba(8, 34, 74, 0.13);
          padding: 22px;
        }

        .coverageMapFrame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          border-radius: 26px;
          display: block;
          background: #ffffff;
        }

        .coverageQuoteBox {
          position: relative;
          z-index: 5;
          margin-top: 34px;
          padding: 46px 48px;
          border-radius: 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 70px rgba(8, 34, 74, 0.18);
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 26px;
        }

        .coverageQuoteText {
          width: 100%;
          max-width: none;
        }

        .coverageQuoteText span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .coverageQuoteText h3 {
          margin: 0 0 22px;
          color: #ffffff;
          font-size: clamp(34px, 4.8vw, 58px);
          line-height: 1.06;
          letter-spacing: -1.6px;
          font-weight: 900;
          max-width: 980px;
        }

        .coverageQuoteText p {
          margin: 0;
          width: 100%;
          max-width: none;
          color: rgba(255, 255, 255, 0.86);
          font-size: 19px;
          line-height: 1.75;
          text-align: justify;
          text-justify: inter-word;
        }

        .coverageQuoteButton {
          align-self: flex-end;
          position: relative;
          z-index: 10;
          min-height: 58px;
          padding: 0 34px;
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
          cursor: pointer;
          pointer-events: auto;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .coverageQuoteButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 46px rgba(242, 101, 34, 0.34);
        }

        @media (max-width: 900px) {
          .coverageMapFrame {
            height: 460px;
          }

          .coverageQuoteBox {
            padding: 38px 32px;
          }

          .coverageQuoteButton {
            align-self: stretch;
            width: 100%;
          }
        }

        @media (max-width: 650px) {
          .coverageSection {
            padding: 64px 7% 76px;
          }

          .coverageHeader {
            margin-bottom: 32px;
          }

          .coverageHeader h2 {
            font-size: clamp(34px, 11vw, 52px);
            letter-spacing: -1.2px;
          }

          .coverageHeader p {
            font-size: 17px;
            line-height: 1.65;
          }

          .coverageMapFrame {
            height: 420px;
            border-radius: 28px;
            padding: 14px;
          }

          .coverageMapFrame iframe {
            border-radius: 20px;
          }

          .coverageQuoteBox {
            margin-top: 28px;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .coverageQuoteText h3 {
            font-size: clamp(28px, 10vw, 42px);
            letter-spacing: -1px;
          }

          .coverageQuoteText p {
            font-size: 16px;
            line-height: 1.65;
            text-align: left;
          }

          .coverageQuoteButton {
            min-height: 54px;
            padding: 0 24px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
