export default function Footer() {
  return (
    <footer className="footerPremium">
      <div>
        <div className="footerLogo">
          <img
            className="footerLogoImage"
            src="/images/logo-zusasa.png"
            alt="Transportes ZUSASA"
          />

          <span>
            <small>TRANSPORTES</small>
            <strong>ZUSASA</strong>
          </span>
        </div>

        <p>
          Transporte local de carga contenerizada para operaciones portuarias,
          logísticas, de importación y exportación en Manzanillo, Colima.
        </p>

        <p className="footerSlogan">
          Transportamos la confianza que mueve tu negocio.
        </p>
      </div>

      <div>
        <h3>Navegación</h3>
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#sectores">Sectores</a>
        <a href="#contacto">Contacto</a>
        <a href="/aviso-de-privacidad">Aviso de privacidad</a>
      </div>

      <div>
        <h3>Áreas de contacto</h3>

        <a href="#gerencia-general">Gerencia General</a>
        <a href="#administracion-finanzas">
          Dirección de Administración y Finanzas
        </a>
        <a href="#coordinacion-logistica">Coordinación de Logística</a>

        <p className="footerEmail">
          <strong>Correo:</strong>
          <br />
          <a href="mailto:transportes.zusasa@gmail.com">
            transportes.zusasa@gmail.com
          </a>
        </p>

        <p>
          <strong>Ubicación:</strong>
          <br />
          Manzanillo, Colima, México
        </p>
      </div>
    </footer>
  );
}
