export default function Navbar() {
  return (
    <header className="navbar premiumNavbar">
      <a href="#inicio" className="brand premiumBrand">
        <span className="brandMark">Z</span>
        <span>
          <small>TRANSPORTES</small>
          <strong>ZUSASA</strong>
        </span>
      </a>

      <nav className="navlinks premiumNavlinks">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#sectores">Sectores</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="navWhatsapp premiumButton" href="https://wa.me/523148721897">
        Cotizar
      </a>
    </header>
  );
}
