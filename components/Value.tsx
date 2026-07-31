export default function Value() {
  return (
    <section className="valueCleanSection">
      <div className="valueCleanContainer">
        <div className="valueCleanLabel">
          <span />
          <strong>Por qué elegirnos</strong>
        </div>

        <div className="valueCleanContent">
          <h2>
            Facilitamos la gestión logística para que tu carga llegue a su
            destino.
          </h2>

          <p>
            En Transportes ZUSASA ayudamos a coordinar las etapas necesarias
            para que tu contenedor o ISO tanque avance desde Manzanillo hacia su
            siguiente destino. Revisamos el movimiento local, el resguardo, las
            condiciones operativas y, cuando se requiere, la gestión de
            transporte nacional mediante alianza comercial.
          </p>

          <p>
            Nuestro objetivo es que el cliente cuente con un solo punto de
            contacto para revisar disponibilidad, cotizar, coordinar y dar
            seguimiento a su operación logística con mayor claridad.
          </p>
        </div>
      </div>

      <style>{`
        .valueCleanSection {
          padding: 55px 7% 95px;
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
          max-width: 1020px;
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
          max-width: 940px;
          margin: 0 0 20px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 20px;
          line-height: 1.75;
        }

        .valueCleanContent p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .valueCleanSection {
            padding: 48px 7% 72px;
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
