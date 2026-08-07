const rutas = [
  {
    title: "Manzanillo → Guadalajara / El Salto",
    text: "Transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, El Salto, Zapopan y zona metropolitana.",
    href: "/transporte-contenedores-manzanillo-guadalajara",
  },
  {
    title: "Manzanillo → Monterrey / Apodaca",
    text: "Coordinación de transporte nacional desde Manzanillo hacia Monterrey, Apodaca, Santa Catarina y zonas industriales de Nuevo León.",
    href: "/transporte-contenedores-manzanillo-monterrey",
  },
  {
    title: "Manzanillo → Querétaro / Bajío",
    text: "Servicio para empresas que requieren traslado de carga contenerizada desde Manzanillo hacia Querétaro, San Juan del Río y Bajío.",
    href: "/transporte-contenedores-manzanillo-queretaro",
  },
  {
    title: "Manzanillo → CDMX / Estado de México",
    text: "Transporte de contenedores desde Manzanillo hacia CDMX, Cuautitlán, Tultitlán, Naucalpan y zonas industriales del Estado de México.",
    href: "/transporte-nacional-contenedores-iso-tanques",
  },
  {
    title: "Manzanillo → Toluca / Lerma",
    text: "Coordinación de carga contenerizada desde Manzanillo hacia Toluca, Lerma y corredores industriales del centro del país.",
    href: "/transporte-nacional-contenedores-iso-tanques",
  },
  {
    title: "Manzanillo → Puebla",
    text: "Transporte nacional desde Manzanillo hacia Puebla, Huejotzingo, San Martín Texmelucan y zonas industriales cercanas.",
    href: "/transporte-nacional-contenedores-iso-tanques",
  },
];

export default function RutasNacionales() {
  return (
    <section className="rutasNacionalesSection" id="rutas-nacionales">
      <div className="rutasNacionalesHeader">
        <span>Rutas nacionales</span>

        <h2>Transporte de contenedores desde Manzanillo hacia zonas industriales del país.</h2>

        <p>
          Coordinamos transporte nacional de contenedores e ISO tanques desde
          Manzanillo hacia destinos estratégicos como Guadalajara, El Salto,
          Monterrey, Apodaca, Querétaro, Bajío, CDMX, Toluca y Puebla.
        </p>
      </div>

      <div className="rutasNacionalesGrid">
        {rutas.map((ruta) => (
          <a href={ruta.href} className="rutaNacionalCard" key={ruta.title}>
            <strong>{ruta.title}</strong>
            <p>{ruta.text}</p>
            <span>Ver ruta →</span>
          </a>
        ))}
      </div>

      <style>{`
        .rutasNacionalesSection {
          width: 100%;
          max-width: 100%;
          padding: 100px 7%;
          background: #ffffff;
          color: #0a1d36;
          overflow: hidden;
        }

        .rutasNacionalesHeader {
          width: 100%;
          max-width: 1080px;
          margin-bottom: 52px;
        }

        .rutasNacionalesHeader > span {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #f26522;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 15px;
          margin-bottom: 20px;
        }

        .rutasNacionalesHeader > span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
        }

        .rutasNacionalesHeader h2 {
          margin: 0 0 26px;
          color: #0a1d36;
          font-size: clamp(40px, 5.2vw, 72px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .rutasNacionalesHeader p {
          margin: 0;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.75;
          max-width: 980px;
        }

        .rutasNacionalesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .rutaNacionalCard {
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #f5f6f8;
          border-radius: 28px;
          padding: 32px 30px;
          text-decoration: none;
          border: 1px solid rgba(10, 29, 54, 0.08);
          border-top: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .rutaNacionalCard:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(10, 29, 54, 0.14);
        }

        .rutaNacionalCard strong {
          display: block;
          color: #0a1d36;
          font-size: 24px;
          line-height: 1.15;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .rutaNacionalCard p {
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
          margin: 0 0 24px;
        }

        .rutaNacionalCard span {
          color: #f26522;
          font-size: 16px;
          font-weight: 900;
        }

        @media (max-width: 1050px) {
          .rutasNacionalesGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .rutasNacionalesSection {
            padding: 76px 24px;
          }

          .rutasNacionalesHeader h2 {
            font-size: clamp(34px, 11vw, 50px);
            letter-spacing: -1.1px;
          }

          .rutasNacionalesHeader p {
            font-size: 17px;
            line-height: 1.7;
          }

          .rutasNacionalesGrid {
            grid-template-columns: 1fr;
          }

          .rutaNacionalCard {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 24px;
          }

          .rutaNacionalCard strong {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}
