export default function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div>
        <span className="label">Contacto</span>
        <h2>Estamos listos para ser su socio logístico de confianza</h2>
        <p>
          Escríbanos para solicitar una cotización o coordinar una operación
          local de carga en Manzanillo, Colima.
        </p>

        <div className="buttons">
          <a className="primary" href="https://wa.me/523148721897">
            WhatsApp
          </a>
          <a className="secondaryDark" href="mailto:transportes.zusasa@gmail.com">
            Enviar correo
          </a>
        </div>
      </div>

      <div className="contactCard">
        <p><strong>José Alberto Zúñiga Ramos</strong></p>
        <p>Gerente General · 222 455 6651</p>

        <p><strong>Sergio Sanmiguel Celis</strong></p>
        <p>Dirección de Administración y Finanzas · 314 106 9165</p>

        <p><strong>Heriberto Santana Aguilar</strong></p>
        <p>Coordinación de Logística · 314 872 1897</p>

        <p><strong>Correo:</strong> transportes.zusasa@gmail.com</p>
      </div>
    </section>
  );
}
