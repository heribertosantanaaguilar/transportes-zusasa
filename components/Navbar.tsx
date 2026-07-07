export default function Navbar() {
  return (
    <header className="topNavbar">
      <a href="#inicio" className="zusasaLogo">
        <img
          className="navbarLogoImage"
          src="/images/logo-zusasa.png"
          alt="Transportes ZUSASA"
        />

        <span className="logoText">
          <small>TRANSPORTES</small>
          <strong>ZUSASA</strong>
        </span>
      </a>

      <nav className="topNavlinks">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#sectores">Sectores</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="quoteButton" href="https://wa.me/523148721897">
        Cotizar ahora
      </a>
    </header>
  );
}
