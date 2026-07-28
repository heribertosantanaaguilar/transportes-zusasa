export default function Coverage() {
  const coverageItems = [
    {
      title: "Manzanillo, Colima",
      text: "Coordinamos movimiento local de contenedores e ISO tanques dentro de la zona portuaria, logística y operativa de Manzanillo.",
    },
    {
      title: "Puerto interior y patio de maniobras",
      text: "Apoyamos operaciones que requieren traslado local desde el puerto interior hacia patio de maniobras, resguardo temporal o puntos operativos dentro de Manzanillo.",
    },
    {
      title: "Destinos nacionales",
      text: "Mediante alianza comercial con transportista foráneo, podemos gestionar el transporte nacional de contenedores e ISO tanques hacia distintos destinos del país.",
    },
  ];

  return (
    <section className="coverageSection">
      <div className="coverageContainer">
        <div className="coverageHeader">
          <span>Cobertura</span>

          <h2>Operación local en Manzanillo y gestión nacional.</h2>

          <p>
            Transportes ZUSASA mantiene su enfoque operativo local en
            Manzanillo, Colima, y ahora puede integrar la gestión de transporte
            nacional de contenedores e ISO tanques mediante alianza comercial.
          </p>
        </div>

        <div className="coverageGrid">
          {coverageItems.map((item) => (
            <article className="coverageCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="coverageNote">
          <strong>Solución integral desde Manzanillo</strong>

          <p>
            Revisamos cada solicitud de forma particular, considerando origen,
            destino, tipo de contenedor o ISO tanque, peso, documentación,
            disponibilidad, ruta, resguardo y condiciones operativas aplicables.
          </p>
        </div>
      </div>

      <style>{`
        .coverageSection {
          padding: 110px 7%;
          background: #f5f6f7;
          color: #0a1d36;
          overflow: hidden;
        }

        .coverageContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .coverageHeader {
          max-width: 980px;
          margin-bottom: 54px;
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
          max-width: 900px;
          color: #3b4a5a;
          font-size: 20px;
          line-height: 1.7;
        }

        .coverageGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }

        .coverageCard {
          min-height: 270px;
          background: #ffffff;
          border-radius: 32px;
          padding: 34px 30px;
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-bottom: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
        }

        .coverageCard h3 {
          margin: 0 0 18px;
          color: #0a1d36;
          font-size: 28px;
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .coverageCard p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        .coverageNote {
          margin-top: 34px;
          padding: 38px 40px;
          border-radius: 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 70px rgba(8, 34, 74, 0.18);
        }

        .coverageNote strong {
          display: block;
          margin-bottom: 14px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .coverageNote p {
          margin: 0;
          max-width: 920px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 17px;
          line-height: 1.65;
        }

        @media (max-width: 1000px) {
          .coverageGrid {
            grid-template-columns: 1fr;
          }

          .coverageCard {
            min-height: auto;
          }
        }

        @media (max-width: 650px) {
          .coverageSection {
            padding: 84px 7%;
          }

          .coverageHeader {
            margin-bottom: 36px;
          }

          .coverageHeader h2 {
            font-size: clamp(34px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .coverageHeader p {
            font-size: 17px;
          }

          .coverageCard {
            padding: 28px 24px;
            border-radius: 28px;
          }

          .coverageCard h3 {
            font-size: 25px;
          }

          .coverageCard p {
            font-size: 15.8px;
          }

          .coverageNote {
            padding: 32px 24px;
            border-radius: 28px;
          }

          .coverageNote strong {
            font-size: 25px;
          }

          .coverageNote p {
            font-size: 15.8px;
          }
        }
      `}</style>
    </section>
  );
}
