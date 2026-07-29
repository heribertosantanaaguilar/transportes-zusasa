export default function Value() {
  return (
    <section className="valueCleanSection">
      <div className="valueCleanContainer">
        <div className="valueCleanLabel">
          <span />
          <strong>Por qué elegirnos</strong>
        </div>

        <div className="valueCleanContent">
          <h2>Atención directa, comunicación clara y compromiso operativo.</h2>

          <p>
            En Transportes ZUSASA trabajamos con un enfoque cercano, honesto y
            orientado a coordinar cada operación con claridad. Revisamos las
            necesidades del cliente, las condiciones reales del servicio y la
            mejor forma de apoyar su movimiento logístico desde Manzanillo.
          </p>
        </div>
      </div>

      <style>{`
        .valueCleanSection {
          padding: 110px 7%;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          overflow: hidden;
        }

        .valueCleanContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .valueCleanLabel {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 26px;
        }

        .valueCleanLabel span {
          width: 48px;
          height: 4px;
          border-radius: 999px;
          background: #f26522;
          display: inline-block;
        }

        .valueCleanLabel strong {
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 15px;
          font-weight: 900;
        }

        .valueCleanContent {
          max-width: 980px;
        }

        .valueCleanContent h2 {
          margin: 0 0 28px;
          color: #ffffff;
          font-size: clamp(42px, 6vw, 82px);
          line-height: 1.02;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .valueCleanContent p {
          max-width: 900px;
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 20px;
          line-height: 1.75;
        }

        @media (max-width: 768px) {
          .valueCleanSection {
            padding: 84px 7%;
          }

          .valueCleanContent h2 {
            font-size: clamp(34px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .valueCleanContent p {
            font-size: 17px;
            line-height: 1.7;
          }
        }
      `}</style>
    </section>
  );
}
