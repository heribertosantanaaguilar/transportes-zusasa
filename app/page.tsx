export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">TRANSPORTES <strong>ZUSASA</strong></div>
        <div className="navlinks">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="whatsapp" href="https://wa.me/523148721897">WhatsApp</a>
      </nav>

      <section id="inicio" className="hero">
        <div className="heroContent">
          <h1>El aliado logístico que mantiene en movimiento su operación en el Puerto de Manzanillo.</h1>
          <p>Soluciones especializadas en autotransporte local de carga.</p>
          <div className="buttons">
            <a className="primary" href="mailto:transportes.zusasa@gmail.com">Solicitar cotización</a>
            <a className="secondary" href="https://wa.me/523148721897">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>Seguridad en cada traslado</div>
        <div>Cumplimiento de tiempos</div>
        <div>Expertos en Manzanillo</div>
        <div>Atención personalizada</div>
        <div>Operación 24/7</div>
      </section>

      <section id="nosotros" className="section grid">
        <div>
          <span className="label">¿Quiénes somos?</span>
          <h2>Transportes ZUSASA</h2>
          <p>
            Somos una empresa mexicana ubicada en Manzanillo, Colima, especializada en el
            autotransporte local de carga para operaciones de importación y exportación.
          </p>
          <p>
            Brindamos soluciones logísticas seguras, eficientes y oportunas para el traslado
            de carga contenerizada desde y hacia el Puerto de Manzanillo.
          </p>
        </div>

        <div className="imageBox">
          Operación portuaria · Contenedores · Manzanillo
        </div>
      </section>

      <section id="servicios" className="section">
        <span className="label">Nuestros servicios</span>
        <h2>Soluciones logísticas locales</h2>

        <div className="cards">
          <div className="card">
            <h3>Movimiento de contenedores</h3>
            <p>Traslado de contenedores de importación y exportación, incluyendo movimientos entre terminales portuarias.</p>
          </div>
          <div className="card">
            <h3>Resguardo y almacenamiento</h3>
            <p>Recepción y resguardo de contenedores llenos y vacíos en patio con circuito cerrado y seguridad 24/7.</p>
          </div>
          <div className="card">
            <h3>Seguimiento operativo</h3>
            <p>Monitoreo de cada movimiento mediante GPS en tiempo real y coordinación logística eficiente.</p>
          </div>
        </div>
      </section>

      <section className="value">
        <h2>Nuestra propuesta de valor</h2>
        <div className="valueGrid">
          <p>✓ Atención personalizada</p>
          <p>✓ Respuesta rápida</p>
          <p>✓ Experiencia portuaria</p>
          <p>✓ Seguridad en la carga</p>
          <p>✓ Cumplimiento de tiempos</p>
          <p>✓ Mejora continua</p>
        </div>
      </section>

      <section className="section">
        <span className="label">Nuestro proceso</span>
        <h2>Así gestionamos cada operación</h2>
        <div className="process">
          <div><strong>1</strong><p>Recepción</p></div>
          <div><strong>2</strong><p>Asignación</p></div>
          <div><strong>3</strong><p>Traslado</p></div>
          <div><strong>4</strong><p>Confirmación</p></div>
        </div>
      </section>

      <section className="stats">
        <div><strong>100%</strong><span>Compromiso</span></div>
        <div><strong>24/7</strong><span>Disponibilidad</span></div>
        <div><strong>1</strong><span>Puerto clave: Manzanillo</span></div>
      </section>

      <footer id="contacto">
        <div>
          <h2>Transportes ZUSASA</h2>
          <p>Moviendo la logística que impulsa tu negocio.</p>
        </div>
        <div>
          <p><strong>Contacto</strong></p>
          <p>222 455 6651</p>
          <p>314 106 9165</p>
          <p>314 872 1897</p>
          <p>transportes.zusasa@gmail.com</p>
          <p>Manzanillo, Colima, México</p>
        </div>
      </footer>
    </main>
  );
}
