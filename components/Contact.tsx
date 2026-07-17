export default function Contact() {
  const whatsappMessage =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20informaci%C3%B3n%20y%2Fo%20cotizaci%C3%B3n%20con%20Transportes%20ZUSASA%20para%20un%20servicio%20en%20Manzanillo.%0A%0AServicio%20que%20necesito%3A%0A-%20Movimiento%20local%20de%20contenedores%3A%0A-%20Resguardo%20en%20patio%20de%20maniobras%3A%0A-%20Apoyo%20operativo%20para%20contenedores%3A%0A-%20Seguimiento%20de%20operaci%C3%B3n%3A%0A-%20Otro%3A%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

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

        <div className="contactInfoBox">
          <div
            className="contactInfoItem"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <div
              className="contactInfoIcon"
              style={{
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
              }}
            >
              ✉
            </div>

            <div>
              <strong>Correo</strong>
              <a href="mailto:transportes.zusasa@gmail.com">
                transportes.zusasa@gmail.com
              </a>
            </div>
          </div>

          <div
            className="contactInfoItem"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <div
              className="contactInfoIcon"
              style={{
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
              }}
            >
              📍
            </div>

            <div>
              <strong>Ubicación</strong>
              <span>Manzanillo, Colima, México</span>
            </div>
          </div>

          <div
            className="contactInfoItem"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
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

            <div>
              <strong>LinkedIn</strong>
              <a
                href="https://www.linkedin.com/company/transportes-zusasa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Transportes ZUSASA en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
