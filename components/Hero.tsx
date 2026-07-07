export default function Hero() {
  return (
    <section id="inicio" className="heroPremium">
      <div className="heroOverlay" />

      <div className="heroInner">
        <span className="heroBadge">Puerto de Manzanillo, Colima</span>

        <h1>
          El aliado logístico que mantiene en movimiento su operación.
        </h1>

        <p>
          Soluciones especializadas en autotransporte local de carga para
          operaciones de importación y exportación dentro de la zona portuaria
          de Manzanillo.
        </p>

        <div className="heroActions">
          <a className="primary" href="mailto:transportes.zusasa@gmail.com">
            Solicitar cotización
          </a>

          <a className="secondary" href="https://wa.me/523148721897">
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      <div className="heroHighlights">
        <div>Respuesta inmediata</div>
        <div>Atención personalizada</div>
        <div>Operación confiable</div>
        <div>Puerto de Manzanillo</div>
      </div>
    </section>
  );
}
