export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Recibimos tu solicitud",
      text: "Nos compartes el servicio que necesitas, datos de contacto, tipo de contenedor o ISO tanque, origen, destino, fecha estimada y requerimientos operativos.",
    },
    {
      number: "02",
      title: "Revisamos disponibilidad y condiciones",
      text: "Analizamos el tipo de operación, documentación, peso, ruta, destino, disponibilidad, necesidad de resguardo y condiciones reales del servicio.",
    },
    {
      number: "03",
      title: "Coordinamos la operación",
      text: "Organizamos el movimiento local en Manzanillo, resguardo, apoyo operativo o gestión de transporte nacional mediante alianza comercial, según lo requiera el cliente.",
    },
    {
      number: "04",
      title: "Damos seguimiento hasta el cierre",
      text: "Mantenemos comunicación clara durante la coordinación del servicio, informando avances y confirmando el cierre de la operación.",
    },
  ];

  return (
    <section
      style={{
        padding: "110px 7%",
        background:
          "linear-gradient(135deg, rgba(10, 29, 54, 0.98), rgba(15, 45, 82, 0.96))",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            marginBottom: "56px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "#f26522",
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              fontSize: "14px",
              fontWeight: 900,
              marginBottom: "18px",
            }}
          >
            Proceso de trabajo
          </span>

          <h2
            style={{
              margin: "0 0 22px",
              color: "#ffffff",
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-2px",
              fontWeight: 900,
            }}
          >
            Coordinación clara para cada operación logística.
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: "900px",
              color: "rgba(255, 255, 255, 0.82)",
              fontSize: "20px",
              lineHeight: 1.7,
            }}
          >
            Revisamos cada solicitud de forma particular para coordinar
            movimiento local, resguardo, apoyo operativo o gestión de transporte
            nacional desde Manzanillo, de acuerdo con las condiciones reales del
            servicio.
          </p>
        </div>

        <div className="processGrid">
          {steps.map((step) => (
            <article className="processCard" key={step.number}>
              <strong>{step.number}</strong>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .processGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .processCard {
          min-height: 330px;
          padding: 34px 30px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(0, 0, 0, 0.14);
          backdrop-filter: blur(10px);
        }

        .processCard strong {
          display: block;
          margin-bottom: 26px;
          color: #f26522;
          font-size: 28px;
          line-height: 1;
          font-weight: 900;
        }

        .processCard h3 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 26px;
          line-height: 1.12;
          letter-spacing: -0.5px;
          font-weight: 900;
        }

        .processCard p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.65;
        }

        @media (max-width: 1100px) {
          .processGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .processCard {
            min-height: 280px;
          }
        }

        @media (max-width: 650px) {
          .processGrid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .processCard {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 28px;
          }

          .processCard strong {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .processCard h3 {
            font-size: 25px;
          }

          .processCard p {
            font-size: 15.8px;
          }
        }
      `}</style>
    </section>
  );
}
