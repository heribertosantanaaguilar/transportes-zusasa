export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="badge">Puerto de Manzanillo, Colima</div>

        <h1>Transportes ZUSASA</h1>

        <h2>
          Movimiento local de contenedores con atención personalizada y respuesta inmediata.
        </h2>

        <p>
          Somos una empresa especializada en autotransporte local de carga para operaciones
          de importación y exportación dentro de la zona portuaria y logística de Manzanillo.
        </p>

        <div className="buttons">
          <a href="https://wa.me/523148721897" className="primary">
            Hablar por WhatsApp
          </a>
          <a href="mailto:transportes.zusasa@gmail.com" className="secondary">
            Solicitar cotización
          </a>
        </div>
      </section>

      <section className="cards">
        <div>
          <h3>Atención personalizada</h3>
          <p>Seguimiento directo y comunicación clara en cada operación.</p>
        </div>

        <div>
          <h3>Respuesta inmediata</h3>
          <p>Disponibilidad para atender requerimientos operativos urgentes.</p>
        </div>

        <div>
          <h3>Operación confiable</h3>
          <p>Honestidad, puntualidad y compromiso en cada movimiento.</p>
        </div>
      </section>

      <footer>
        <p>Transportes ZUSASA · Manzanillo, Colima, México</p>
        <p>Tel. 314 872 1897 · transportes.zusasa@gmail.com</p>
      </footer>
    </main>
  );
}
