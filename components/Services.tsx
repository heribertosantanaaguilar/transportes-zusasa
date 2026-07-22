export default function Services() {
  const services = [
    {
      number: "01",
      title: "Movimiento local de contenedores",
      text: "Traslados locales de carga contenerizada dentro de la zona portuaria y logística de Manzanillo.",
      cta: "Solicitar cotización",
      href: "#contacto",
    },
    {
      number: "02",
      title: "Resguardo en patio de maniobras",
      text: "Resguardo temporal de contenedores llenos o vacíos, sujeto a disponibilidad y condiciones operativas.",
      cta: "Conocer servicio",
      href: "#contacto",
    },
    {
      number: "03",
      title: "Apoyo operativo para contenedores",
      text: "Coordinación de movimientos, maniobras y apoyo local para operaciones de carga contenerizada.",
      cta: "Cotizar apoyo",
      href: "#contacto",
    },
    {
      number: "04",
      title: "Seguimiento y comunicación constante",
      text: "Comunicación directa durante la solicitud, coordinación y cierre de cada servicio.",
      cta: "Solicitar atención",
      href: "#contacto",
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

          <h2>
            Soluciones locales para mover y resguardar tu carga.
          </h2>

          <p>
            Atendemos operaciones de carga contenerizada en Manzanillo con
            enfoque en coordinación, resguardo, seguimiento y respuesta clara.
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
          min-height: 100%;
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
          font-size: 30px;
          line-height: 1.06;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .service-card p {
          margin: 0;
          color: #334a68;
          font-size: 18px;
          line-height: 1.7;
        }

        .service-link {
          margin-top: auto;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          padding: 14px 22px;
          border-radius: 999px;
          background: rgba(242, 101, 34, 0.12);
          color: #f26522;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .service-link:hover {
          background: #f26522;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .service-link span {
          font-size: 18px;
          line-height: 1;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
            gap: 20px;
          }

          .service-card {
            padding: 26px 22px 22px;
            border-radius: 28px;
          }

          .service-number {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .service-card h3 {
            font-size: 22px;
            line-height: 1.12;
            margin-bottom: 14px;
          }

          .service-card p {
            font-size: 16px;
            line-height: 1.65;
          }

          .service-link {
            margin-top: 22px;
            padding: 12px 18px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
