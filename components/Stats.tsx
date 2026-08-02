export default function Stats() {
  const stats = [
    {
      number: "Local",
      label: "Manzanillo como base",
      text: "Atención enfocada en la zona portuaria y logística.",
    },
    {
      number: "Integral",
      label: "Coordinación completa",
      text: "Movimiento local, resguardo y conexión con transporte nacional.",
    },
    {
      number: "Directa",
      label: "Un solo contacto",
      text: "Comunicación clara para revisar, cotizar y dar seguimiento.",
    },
    {
      number: "Confiable",
      label: "Servicio con claridad",
      text: "Revisamos cada operación antes de confirmar condiciones.",
    },
  ];

  return (
    <section className="zusasaStats">
      <div className="zusasaStatsContainer">
        <div className="zusasaStatsHeader">
          <span className="zusasaStatsEyebrow">
            <span />
            Nuestra forma de trabajo
          </span>

          <h2>Atención directa y coordinación clara.</h2>

          <p>
            Trabajamos cada solicitud con seriedad, revisando disponibilidad,
            condiciones operativas y necesidades reales del servicio.
          </p>
        </div>

        <div className="zusasaStatsGrid">
          {stats.map((item) => (
            <article className="zusasaStatCard" key={item.label}>
              <strong>{item.number}</strong>

              <h3>{item.label}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .zusasaStats {
          padding: 100px 7%;
          background: #f5f6f7;
          overflow: hidden;
        }

        .zusasaStatsContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .zusasaStatsHeader {
          width: 100%;
          max-width: none;
          margin-bottom: 46px;
        }

        .zusasaStatsEyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #f26522;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 15px;
          margin-bottom: 22px;
        }

        .zusasaStatsEyebrow span {
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
        }

        .zusasaStatsHeader h2 {
          max-width: 980px;
          color: #0a1d36;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          margin: 0 0 22px;
          font-weight: 900;
        }

        .zusasaStatsHeader p {
          width: 100%;
          max-width: none;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.7;
          margin: 0;
        }

        .zusasaStatsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .zusasaStatCard {
          min-height: 230px;
          padding: 30px 24px;
          border-radius: 28px;
          background: #ffffff;
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-top: 6px solid #f26522;
          box-shadow: 0 20px 55px rgba(10, 29, 54, 0.09);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .zusasaStatCard strong {
          display: block;
          width: 100%;
          color: #f26522;
          font-size: clamp(34px, 2.55vw, 40px);
          line-height: 1;
          font-weight: 900;
          margin-bottom: 22px;
          white-space: nowrap;
          overflow: visible;
          text-align: center;
          letter-spacing: -0.8px;
        }

        .zusasaStatCard h3 {
          color: #0a1d36;
          font-size: 22px;
          line-height: 1.15;
          margin: 0 0 14px;
          font-weight: 900;
          text-align: center;
        }

        .zusasaStatCard p {
          color: #3b4a5a;
          font-size: 15.8px;
          line-height: 1.6;
          margin: 0;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .zusasaStatsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .zusasaStatCard strong {
            font-size: 40px;
          }
        }

        @media (max-width: 650px) {
          .zusasaStats {
            padding: 72px 7%;
          }

          .zusasaStatsHeader {
            margin-bottom: 34px;
          }

          .zusasaStatsHeader h2 {
            font-size: clamp(34px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .zusasaStatsHeader p {
            font-size: 17px;
            line-height: 1.65;
          }

          .zusasaStatsGrid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .zusasaStatCard {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 26px;
          }

          .zusasaStatCard strong {
            font-size: 38px;
            margin-bottom: 18px;
          }

          .zusasaStatCard h3 {
            font-size: 21px;
          }

          .zusasaStatCard p {
            font-size: 15.5px;
          }
        }
      `}</style>
    </section>
  );
}
