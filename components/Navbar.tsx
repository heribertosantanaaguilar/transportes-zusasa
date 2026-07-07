export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="brand">
        <span className="brandMark">Z</span>
        <span>
          <small>TRANSPORTES</small>
          <strong>ZUSASA</strong>
        </span>
      </a>

      <nav className="navlinks">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a className="navWhatsapp" href="https://wa.me/523148721897">
        WhatsApp
      </a>
    </header>
  );
}
