export default function Contact() {
  return (
    <section id="contacto" className="zusasaContactFinal">
      <div className="zusasaContactContent">
        <span>Contacto</span>

        <h2>Estamos listos para atender tu operación.</h2>

        <p>
          Escríbenos para solicitar una cotización o coordinar un movimiento
          local de carga contenerizada en Manzanillo, Colima.
        </p>

        <div className="zusasaContactActions">
          <a
            className="contactWhatsapp"
            href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20transporte%20local%20de%20carga%20en%20Manzanillo."
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar por WhatsApp
          </a>

          <a className="contactEmail" href="mailto:transportes.zusasa@gmail.com">
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
          <p>
            <strong>Correo</strong>
            <br />
            transportes.zusasa@gmail.com
          </p>

          <p>
            <strong>Ubicación</strong>
            <br />
            Manzanillo, Colima, México
          </p>
        </div>
      </div>
    </section>
  );
}
