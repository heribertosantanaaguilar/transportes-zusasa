export default function Gallery() {
  const photos = [
    {
      title: "Entorno portuario",
      text: "Operaciones vinculadas al movimiento local de contenedores dentro de la zona logística de Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Patio de maniobras",
      text: "Coordinación terrestre para atender traslados, resguardo y movimientos de carga contenerizada.",
      image: "/images/patio-maniobras-zusasa-1.jpg",
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
          maxWidth: "980px",
          marginBottom: "54px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            color: "#f26522",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            fontSize: "15px",
            marginBottom: "22px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "48px",
              height: "4px",
              background: "#f26522",
              borderRadius: "999px",
            }}
          />
          Operación logística
        </span>

        <h2
          style={{
            maxWidth: "1000px",
            fontSize: "clamp(42px, 5vw, 74px)",
            lineHeight: 1.03,
            letterSpacing: "-2px",
            margin: "0 0 26px",
            color: "#0a1d36",
          }}
        >
          Movimiento, resguardo y apoyo operativo en Manzanillo.
        </h2>

        <p
          style={{
            maxWidth: "950px",
            color: "#3b4a5a",
            fontSize: "20px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Nuestra operación está enfocada en atender necesidades locales de
          transporte, coordinación y resguardo de carga contenerizada vinculada
          a actividades portuarias de importación y exportación.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "34px",
        }}
      >
        {photos.map((photo) => (
          <article
            key={photo.title}
            style={{
              position: "relative",
              minHeight: "360px",
              borderRadius: "30px",
              overflow: "hidden",
              background: "#0a1d36",
              boxShadow: "0 28px 75px rgba(10, 29, 54, 0.16)",
            }}
          >
            <img
              src={photo.image}
              alt={photo.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background:
                  "linear-gradient(180deg, rgba(5, 24, 46, 0.08) 0%, rgba(5, 24, 46, 0.45) 48%, rgba(5, 24, 46, 0.92) 100%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "38px",
                right: "38px",
                bottom: "34px",
                zIndex: 3,
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "30px",
                  lineHeight: 1.1,
                  fontWeight: 900,
                  margin: "0 0 14px",
                }}
              >
                {photo.title}
              </h3>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "16px",
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: "680px",
                }}
              >
                {photo.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
