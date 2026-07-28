export default function WhatWeDo() {
  const cards = [
    {
      title: "Movimiento local en Manzanillo",
      text: "Coordinamos el movimiento local de contenedores e ISO tanques desde el puerto interior hacia patio de maniobras o puntos operativos dentro de Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Resguardo y apoyo operativo",
      text: "Apoyamos operaciones que requieren resguardo temporal, coordinación local, maniobras y seguimiento operativo para carga contenerizada.",
      image: "/images/patio-maniobras-zusasa-1.jpg",
    },
    {
      title: "Transporte nacional mediante alianza",
      text: "Mediante alianza comercial con transportista foráneo, podemos gestionar el traslado nacional de contenedores e ISO tanques hacia distintos destinos del país.",
      image: "/images/camion-rojo-zusasa-nosotros.png",
    },
  ];

  return (
    <section
      id="operacion-logistica"
      style={{
        padding: "110px 7%",
        background: "#f5f6f7",
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
            maxWidth: "980px",
            marginBottom: "52px",
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
            Operación logística
          </span>

          <h2
            style={{
              margin: "0 0 22px",
              color: "#0a1d36",
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-2px",
              fontWeight: 900,
            }}
          >
            Coordinamos soluciones desde Manzanillo hasta el destino nacional.
          </h2>

          <p
            style={{
              margin: 0,
              maxWidth: "900px",
              color: "#3b4a5a",
              fontSize: "20px",
              lineHeight: 1.7,
            }}
          >
            Integramos movimiento local, resguardo, apoyo operativo y gestión de
            transporte nacional para contenedores e ISO tanques, brindando al
            cliente un solo punto de contacto para revisar y coordinar su
            operación.
          </p>
        </div>

        <div className="whatWeDoGrid">
          {cards.map((card) => (
            <article className="whatWeDoCard" key={card.title}>
              <div className="whatWeDoImageWrap">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="whatWeDoContent">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .whatWeDoGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .whatWeDoCard {
          background: #ffffff;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
          border-bottom: 7px solid #f26522;
        }

        .whatWeDoImageWrap {
          height: 250px;
          overflow: hidden;
          background: #0a1d36;
        }

        .whatWeDoImageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .whatWeDoContent {
          padding: 30px 28px 34px;
        }

        .whatWeDoContent h3 {
          margin: 0 0 16px;
          color: #0a1d36;
          font-size: 27px;
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .whatWeDoContent p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        @media (max-width: 1000px) {
          .whatWeDoGrid {
            grid-template-columns: 1fr;
          }

          .whatWeDoImageWrap {
            height: 280px;
          }
        }

        @media (max-width: 650px) {
          .whatWeDoImageWrap {
            height: 220px;
          }

          .whatWeDoContent {
            padding: 26px 24px 30px;
          }

          .whatWeDoContent h3 {
            font-size: 25px;
          }

          .whatWeDoContent p {
            font-size: 15.8px;
          }
        }
      `}</style>
    </section>
  );
}
