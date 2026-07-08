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

      <a
  className="quoteButton"
  href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo."
  target="_blank"
  rel="noopener noreferrer"
>
  Cotizar ahora
</a>
  );
}
