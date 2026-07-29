export default function CoverageMap() {
  return (
    <section className="zusasaCoverageMap">
      <div className="zusasaCoverageMapContainer">
        <div className="zusasaCoverageMapHeader">
          <span>Cobertura nacional</span>

          <h2>Coordinamos transporte nacional desde Manzanillo.</h2>

          <p>
            Además del movimiento local, resguardo y apoyo operativo en
            Manzanillo, en Transportes ZUSASA coordinamos transporte nacional
            de contenedores e ISO tanques mediante alianza comercial, brindando
            una solución logística más completa para nuestros clientes.
          </p>
        </div>

        <div className="zusasaCoverageMapCard">
         <img
  src="/images/cobertura_nacional_desde_manzanillo.png"
  alt="Mapa de cobertura nacional desde Manzanillo de Transportes ZUSASA"
/>
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
          box-shadow: 0 28px 70px rgba(10, 29, 54, 0.10);
          overflow: hidden;
        }

        .zusasaCoverageMapCard img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 24px;
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
        }
      `}</style>
    </section>
  );
}
