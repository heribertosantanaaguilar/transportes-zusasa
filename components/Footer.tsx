export default function Footer() {
  return (
    <footer className="footerPremium">
      <div>
        <div className="footerLogo">
          <span className="logoIcon">Z</span>
          <span>
            <small>TRANSPORTES</small>
            <strong>ZUSASA</strong>
          </span>
        </div>

        <p>
          Soluciones especializadas en autotransporte local de carga en el
          Puerto de Manzanillo.
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

        <p className="footerEmail">transportes.zusasa@gmail.com</p>
        <p>Manzanillo, Colima, México</p>
      </div>
    </footer>
  );
}
