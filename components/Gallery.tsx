"use client";

export default function Gallery() {
  const photos = [
    {
      title: "Entorno portuario",
      text: "Operaciones vinculadas al movimiento de carga contenerizada dentro de la zona logística de Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fb07d7?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Patio de maniobras",
      text: "Apoyo operativo para resguardo, movimientos y coordinación de contenedores en Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Transporte nacional",
      text: "Coordinación de movimientos foráneos de carga contenerizada desde Manzanillo hacia distintos puntos del país mediante alianza comercial.",
      image: "/images/transporte-nacional-zusasa-1.jpeg",
    },
    {
      title: "Unidades aliadas",
      text: "Unidades disponibles a través de transportistas especializados para servicios nacionales, sujetas a ruta, disponibilidad y condiciones operativas.",
      image: "/images/transporte-nacional-zusasa-2.jpeg",
    },
  ];

  return (
    <section id="operacion-logistica" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line" />
            <span className="eyebrow">Operación logística</span>
          </div>

          <h2>Presencia local y coordinación nacional desde Manzanillo.</h2>

          <p>
            Integramos movimiento local, resguardo en patio de maniobras, apoyo
            operativo y coordinación de transporte nacional mediante alianza
            comercial con transportistas especializados.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <article key={photo.title} className="gallery-card">
              <img src={photo.image} alt={photo.title} />

              <div className="gallery-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-section {
          background: #f5f6f8;
          padding: 110px 0;
        }

        .gallery-container {
          width: min(1180px, 92%);
          margin: 0 auto;
        }

        .gallery-header {
          max-width: 960px;
          margin-bottom: 46px;
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

        .gallery-header h2 {
          margin: 0 0 22px;
          color: #08224a;
          font-size: clamp(40px, 5.8vw, 78px);
          line-height: 1;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .gallery-header p {
          margin: 0;
          max-width: 920px;
          color: #334a68;
          font-size: 20px;
          line-height: 1.7;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .gallery-card {
          position: relative;
          overflow: hidden;
          min-height: 340px;
          border-radius: 34px;
          background: #08224a;
          box-shadow: 0 22px 55px rgba(8, 34, 74, 0.16);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          min-height: 340px;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .gallery-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 34, 74, 0.05) 0%,
            rgba(8, 34, 74, 0.55) 58%,
            rgba(8, 34, 74, 0.92) 100%
          );
        }

        .gallery-card:hover img {
          transform: scale(1.04);
        }

        .gallery-overlay {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 2;
        }

        .gallery-overlay h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.05;
          font-weight: 900;
        }

        .gallery-overlay p {
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 16px;
          line-height: 1.55;
          max-width: 520px;
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 84px 0;
          }

          .gallery-header {
            margin-bottom: 34px;
          }

          .gallery-header h2 {
            font-size: clamp(34px, 11vw, 52px);
            letter-spacing: -1.2px;
          }

          .gallery-header p {
            font-size: 18px;
            line-height: 1.6;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .gallery-card {
            min-height: 300px;
            border-radius: 28px;
          }

          .gallery-card img {
            min-height: 300px;
          }

          .gallery-overlay {
            left: 24px;
            right: 24px;
            bottom: 24px;
          }

          .gallery-overlay h3 {
            font-size: 27px;
          }

          .gallery-overlay p {
            font-size: 15.5px;
          }
        }
      `}</style>
    </section>
  );
}
