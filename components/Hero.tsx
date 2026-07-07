export default function Hero() {
  return (
    <section id="inicio" className="heroPremium heroV2">
      <div className="heroInner">
        <span className="heroBadge">Puerto de Manzanillo · Transporte local de carga</span>

        <h1>Transportamos la confianza que mueve tu negocio.</h1>

        <p>
          Soluciones especializadas en autotransporte local de carga para
          operaciones de importación y exportación dentro de la zona portuaria
          de Manzanillo.
        </p>

        <div className="heroActions">
          <a className="primary" href="mailto:transportes.zusasa@gmail.com">
            Solicitar cotización
          </a>
          <a className="secondary" href="#servicios">
            Conocer servicios
          </a>
        </div>
      </div>

      <div className="heroHighlights">
        <div>Respuesta inmediata</div>
        <div>Operación 24/7</div>
        <div>Seguimiento operativo</div>
        <div>Especialistas en Manzanillo</div>
      </div>
    </section>
  );
}
