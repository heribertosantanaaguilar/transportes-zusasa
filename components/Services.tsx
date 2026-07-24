"use client";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Movimiento local de contenedores",
      text: "Traslados locales de carga contenerizada dentro de la zona portuaria y logística de Manzanillo.",
      cta: "Solicitar cotización",
      href: "/cotizacion",
    },
    {
      number: "02",
      title: "Movimiento local de ISO tanques",
      text: "Traslado local de ISO tanques en Manzanillo, sujeto a revisión del tipo de carga, documentación, disponibilidad y condiciones operativas aplicables.",
      cta: "Cotizar servicio",
      href: "/cotizacion",
    },
    {
      number: "03",
      title: "Resguardo en patio de maniobras",
      text: "Resguardo temporal de contenedores llenos o vacíos, sujeto a disponibilidad y condiciones operativas.",
      cta: "Conocer servicio",
      href: "/resguardo-de-contenedores-manzanillo",
    },
    {
      number: "04",
      title: "Apoyo operativo para contenedores",
      text: "Coordinación de movimientos, maniobras y apoyo local para operaciones de carga contenerizada.",
      cta: "Cotizar apoyo",
      href: "/cotizacion",
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

          <h2>Soluciones locales para mover y resguardar tu carga.</h2>

          <p>
            Atendemos operaciones de carga contenerizada e ISO tanques en
            Manzanillo con enfoque en coordinación, resguardo, apoyo operativo y
            respuesta clara.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <div className="service-number">{service.number}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href={service.href} className="service-link">
                {service.cta} <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="services-value-block">
          <div className="value-item">
            <span>Valor agregado</span>

            <h3>Seguimiento y comunicación constante</h3>

            <p>
              En cada servicio mantenemos comunicación directa durante la
              solicitud, coordinación y cierre de la operación, brindando
              claridad sobre tiempos, condiciones y avances del servicio.
            </p>
          </div>

          <div className="value-item">
            <span>Experiencia especializada</span>

            <h3>Conocimiento operativo en ISO tanques</h3>

            <p>
              Contamos con experiencia en operaciones relacionadas con ISO
              tanques y con apoyo especializado para revisar requerimientos
              particulares de este tipo de equipo.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: #f5f6f8;
          padding: 110px 0;
        }

        .services-container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .services-header {
          max-width: 920px;
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
          font-size: clamp(42px, 6vw, 84px);
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
          padding: 34px 32px 28px;
          box-shadow: 0 18px 45px rgba(8, 34, 74, 0.08);
          border-bottom: 6px solid #f26522;
          display: flex;
          flex-direction: column;
          min-height: 410px;
        }

        .service-number {
          color: #f26522;
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 28px;
        }

        .service-card h3 {
          margin: 0 0 18px;
          color: #08224a;
          font-size: 27px;
          line-height: 1.08;
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

        .services-value-block {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .value-item {
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          border-radius: 34px;
          padding: 38px 36px;
          color: #ffffff;
          border-left: 7px solid #f26522;
          box-shadow: 0 24px 60px rgba(8, 34, 74, 0.16);
        }

        .value-item span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1px;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .value-item h3 {
          margin: 0 0 16px;
          font-size: 28px;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .value-item p {
          margin: 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 16px;
          line-height: 1.65;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .service-card {
            min-height: 340px;
          }

          .service-card h3 {
            font-size: 26px;
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
            padding: 28px 24px 24px;
            border-radius: 28px;
          }

          .service-number {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .service-card h3 {
            font-size: 26px;
            line-height: 1.12;
            margin-bottom: 14px;
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

          .services-value-block {
            grid-template-columns: 1fr;
            margin-top: 30px;
            gap: 20px;
          }

          .value-item {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .value-item h3 {
            font-size: 25px;
          }

          .value-item p {
            font-size: 15.5px;
          }
        }
      `}</style>
    </section>
  );
}
