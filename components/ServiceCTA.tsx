export default function ServiceCTA() {
  const whatsappLink =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20con%20Transportes%20ZUSASA.%0A%0AServicio%20que%20necesito%3A%0A-%20Movimiento%20local%20de%20contenedores%3A%0A-%20Resguardo%20en%20patio%20de%20maniobras%3A%0A-%20Apoyo%20operativo%3A%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  return (
    <section
      style={{
        padding: "0 7% 110px",
        background: "#f5f6f7",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(10, 29, 54, 0.98), rgba(15, 45, 82, 0.96))",
          borderRadius: "34px",
          padding: "46px 50px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "32px",
          alignItems: "center",
          boxShadow: "0 28px 75px rgba(10, 29, 54, 0.18)",
          borderLeft: "8px solid #f26522",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              color: "#f26522",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "1.2px",
              fontSize: "14px",
              marginBottom: "14px",
            }}
          >
            Cotización rápida
          </span>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(30px, 3vw, 46px)",
              lineHeight: 1.08,
              margin: "0 0 16px",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            ¿Necesitas mover o resguardar un contenedor en Manzanillo?
          </h2>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.84)",
              fontSize: "18px",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: "850px",
            }}
          >
            Envíanos los datos de tu operación y revisamos disponibilidad,
            tiempos y condiciones para darte una respuesta clara.
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            minHeight: "58px",
            padding: "0 30px",
            borderRadius: "999px",
            background: "#f26522",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 900,
            fontSize: "16px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            boxShadow: "0 18px 40px rgba(242, 101, 34, 0.34)",
          }}
        >
          Cotizar por WhatsApp →
        </a>
      </div>
    </section>
  );
}
