export default function Contact() {
  const whatsappMessage =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20informaci%C3%B3n%20y%2Fo%20cotizaci%C3%B3n%20con%20Transportes%20ZUSASA%20para%20un%20servicio%20en%20Manzanillo.%0A%0AServicio%20que%20necesito%3A%0A-%20Movimiento%20local%20de%20contenedores%3A%0A-%20Resguardo%20en%20patio%20de%20maniobras%3A%0A-%20Apoyo%20operativo%20para%20contenedores%3A%0A-%20Seguimiento%20de%20operaci%C3%B3n%3A%0A-%20Otro%3A%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  const orangeIconStyle = {
    width: "44px",
    height: "44px",
    minWidth: "44px",
    maxWidth: "44px",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f26522",
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 900,
    flex: "0 0 44px",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "18px",
  };

  const textBoxStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    minWidth: 0,
  };

  const titleStyle = {
    display: "block",
    color: "#0a1d36",
    fontSize: "22px",
    fontWeight: 900,
    lineHeight: 1.15,
  };

  const textStyle = {
    display: "block",
    color: "#3b4a5a",
    fontSize: "19px",
    lineHeight: 1.45,
    textDecoration: "none",
  };

  const emailTextStyle = {
    display: "block",
    color: "#3b4a5a",
    fontSize: "20px",
    lineHeight: 1.45,
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
    wordBreak: "normal" as const,
    overflowWrap: "normal" as const,
  };

  return (
    <section id="contacto" className="zusasaContactFinal">
      <div className="zusasaContactContent">
        <span>Contacto</span>

        <h2>Solicita tu cotización y coordinemos tu operación.</h2>

        <p>
          Cuéntanos qué tipo de contenedor necesitas mover, el origen, el
          destino y la fecha estimada del servicio. En Transportes ZUSASA te
          brindaremos atención directa para revisar tu operación y darte una
          respuesta clara.
        </p>

        <div className="zusasaContactActions">
          <a
            className="contactWhatsapp"
            href={whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar por WhatsApp
          </a>

          <a
            className="contactEmail"
            href="mailto:transportes.zusasa@gmail.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transportes%20ZUSASA&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20con%20Transportes%20ZUSASA.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20servicio%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A"
          >
            Enviar correo
          </a>
        </div>
      </div>

      <div className="zusasaContactPanel">
        <h3>Datos de contacto</h3>

        <div id="gerencia-general" className="contactPerson">
          <strong>José Alberto Zúñiga Ramos</strong>
          <span>Gerente General</span>
          <a href="tel:2224556651">222 455 6651</a>
        </div>

        <div id="administracion-finanzas" className="contactPerson">
          <strong>Sergio Sanmiguel Celis</strong>
          <span>Dirección de Administración y Finanzas</span>
          <a href="tel:3141069165">314 106 9165</a>
        </div>

        <div id="coordinacion-logistica" className="contactPerson">
          <strong>Heriberto Santana Aguilar</strong>
          <span>Coordinación de Logística</span>
          <a href="tel:3148721897">314 872 1897</a>
        </div>

        <div
          className="contactInfoBox"
          style={{
            rowGap: "18px",
          }}
        >
          <div
            className="contactInfoItem"
            style={{
              ...itemStyle,
              gridColumn: "1 / -1",
              minHeight: "auto",
              paddingTop: "22px",
              paddingBottom: "22px",
              alignItems: "center",
            }}
          >
            <div className="contactInfoIcon" style={orangeIconStyle}>
              ✉
            </div>

            <div style={textBoxStyle}>
              <strong style={titleStyle}>Correo</strong>

              <a
                href="mailto:transportes.zusasa@gmail.com"
                style={emailTextStyle}
              >
                transportes.zusasa@gmail.com
              </a>
            </div>
          </div>

          <div className="contactInfoItem" style={itemStyle}>
            <div className="contactInfoIcon" style={orangeIconStyle}>
              📍
            </div>

            <div style={textBoxStyle}>
              <strong style={titleStyle}>Ubicación</strong>

              <span style={textStyle}>Manzanillo, Colima, México</span>
            </div>
          </div>

          <div className="contactInfoItem" style={itemStyle}>
            <div
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                maxWidth: "44px",
                minHeight: "44px",
                maxHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "8px",
                flex: "0 0 44px",
              }}
            >
              <img
                src="/images/logo-linkedin.png.webp"
                alt="LinkedIn"
                width={44}
                height={44}
                style={{
                  width: "44px",
                  height: "44px",
                  maxWidth: "44px",
                  maxHeight: "44px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            <div style={textBoxStyle}>
              <strong style={titleStyle}>LinkedIn</strong>

              <a
                href="https://www.linkedin.com/company/transportes-zusasa/"
                target="_blank"
                rel="noopener noreferrer"
                style={textStyle}
              >
                Transportes ZUSASA
              </a>
            </div>
          </div>

          <div className="contactInfoItem" style={itemStyle}>
            <div
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                maxWidth: "44px",
                minHeight: "44px",
                maxHeight: "44px",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1877f2",
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: 900,
                fontFamily: "Arial, sans-serif",
                flex: "0 0 44px",
                lineHeight: 1,
              }}
            >
              f
            </div>

            <div style={textBoxStyle}>
              <strong style={titleStyle}>Facebook</strong>

              <a
                href="https://www.facebook.com/profile.php?id=61591897865110"
                target="_blank"
                rel="noopener noreferrer"
                style={textStyle}
              >
                Transportes ZUSASA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
