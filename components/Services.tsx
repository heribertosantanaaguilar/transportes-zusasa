"use client";

export default function Services() {
  const services = [
    {
      title: "Movimiento local de contenedores",
      text: "Traslados locales dentro de la zona portuaria y logística de Manzanillo.",
      cta: "Solicitar cotización",
      href: "/cotizacion",
    },
    {
      title: "Movimiento local de ISO tanques",
      text: "Traslado local de ISO tanques, sujeto a revisión del tipo de carga, documentación y condiciones operativas.",
      cta: "Cotizar servicio",
      href: "/cotizacion",
    },
    {
      title: "Transporte nacional de contenedores e ISO tanques",
      text: "Gestión de traslado nacional desde Manzanillo hacia distintos destinos del país mediante alianza comercial.",
      cta: "Conocer servicio",
      href: "/transporte-nacional-contenedores-iso-tanques",
    },
    {
      title: "Resguardo en patio de maniobras",
      text: "Resguardo temporal de contenedores llenos o vacíos, sujeto a disponibilidad y condiciones del servicio.",
      cta: "Conocer servicio",
      href: "/resguardo-de-contenedores-manzanillo",
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line" />
            <span className="eyebrow">Servicios</span>
          </div>

          <h2>Servicios logísticos desde Manzanillo.</h2>

          <p>
            Atendemos operaciones locales y nacionales relacionadas con
            contenedores e ISO tanques, revisando cada solicitud de acuerdo con
            disponibilidad, ruta, tipo de carga y condiciones operativas.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href={service.href} className="service-link">
                {service.cta} <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="integral-block">
          <div>
            <span>Solución integral</span>

            <h3>Un solo punto de contacto para coordinar tu operación.</h3>

            <p>
              Podemos ayudarte a revisar el movimiento local, el resguardo o el
              traslado nacional que requiere tu carga, integrando la información
              necesaria para cotizar y coordinar el servicio.
            </p>
          </div>

          <a href="/cotizacion">Solicitar cotización →</a>
        </div>

        <div className="services-value-block">
          <div className="value-item">
            <span>Seguimiento</span>

            <h3>Comunicación clara</h3>

            <p>
              Mantenemos contacto durante la solicitud, coordinación y cierre
              del servicio para informar avances y revisar detalles operativos.
            </p>
          </div>

          <div className="value-item">
            <span>Revisión operativa</span>

            <h3>Cada servicio se analiza por separado</h3>

            <p>
              Antes de confirmar una operación revisamos disponibilidad,
              documentación, peso, tiempos, ruta y condiciones aplicables.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
       .services-section {
  background: #f5f6f8;
  padding: 35px 0 90px;
}

        .services-container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .services-header {
          max-width: 940px;
          margin-bottom: 48px;
        }

        .eyebrow-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .eyebrow-line {
          width: 48px;
          height: 4px;
          border-radius: 999px;
          background: #f26522;
          display: inline-block;
        }

        .eyebrow {
          color: #f26522;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 1px;
          font-size: 15px;
        }

        .services-header h2 {
          margin: 0 0 22px;
          color: #08224a;
          font-size: clamp(42px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .services-header p {
          margin: 0;
          max-width: 900px;
          color: #334a68;
          font-size: 20px;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        .service-card {
          background: #ffffff;
          border-radius: 34px;
          padding: 42px 32px 28px;
          box-shadow: 0 18px 45px rgba(8, 34, 74, 0.08);
          border-bottom: 6px solid #f26522;
          display: flex;
          flex-direction: column;
          min-height: 340px;
        }

        .service-card h3 {
          margin: 0 0 20px;
          color: #08224a;
          font-size: 27px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .service-card p {
          margin: 0;
          color: #334a68;
          font-size: 16px;
          line-height: 1.65;
        }

        .service-link {
          margin-top: auto;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 999px;
          background: #f26522;
          color: #ffffff;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .service-link span {
          font-size: 18px;
          line-height: 1;
        }

        .integral-block {
          margin-top: 42px;
          padding: 38px 40px;
          border-radius: 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 70px rgba(8, 34, 74, 0.18);
        }

        .integral-block span,
        .value-item span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .integral-block h3 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .integral-block p {
          margin: 0;
          max-width: 780px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 17px;
          line-height: 1.65;
        }

        .integral-block a {
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

        .services-value-block {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .value-item {
          background: #ffffff;
          border-radius: 34px;
          padding: 34px 32px;
          color: #0a1d36;
          border-left: 7px solid #f26522;
          box-shadow: 0 24px 60px rgba(8, 34, 74, 0.1);
        }

        .value-item h3 {
          margin: 0 0 14px;
          color: #0a1d36;
          font-size: 26px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .value-item p {
          margin: 0;
          color: #334a68;
          font-size: 16px;
          line-height: 1.65;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .integral-block {
            grid-template-columns: 1fr;
          }

          .integral-block a {
            width: 100%;
          }

          .services-value-block {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 84px 0;
          }

          .services-header {
            margin-bottom: 34px;
          }

          .services-header h2 {
            font-size: clamp(34px, 12vw, 54px);
            line-height: 1.02;
            letter-spacing: -1.2px;
          }

          .services-header p {
            font-size: 18px;
            line-height: 1.65;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .service-card {
            min-height: auto;
            padding: 32px 24px 24px;
            border-radius: 28px;
          }

          .service-card h3 {
            font-size: 25px;
            line-height: 1.12;
            margin-bottom: 16px;
          }

          .service-card p {
            font-size: 16px;
            line-height: 1.65;
          }

          .service-link {
            margin-top: 24px;
            padding: 13px 20px;
            font-size: 15px;
          }

          .integral-block {
            margin-top: 32px;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .integral-block h3 {
            font-size: 28px;
          }

          .integral-block p {
            font-size: 15.8px;
          }

          .value-item {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .value-item h3 {
            font-size: 24px;
          }

          .value-item p {
            font-size: 15.5px;
          }
        }
      `}</style>
    </section>
  );
}
