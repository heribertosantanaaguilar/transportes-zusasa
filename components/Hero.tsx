export default function Hero() {
  return (
    <section id="inicio" className="heroPremium heroPort">
      <div className="heroInner heroPortInner">
        <span className="heroEyebrow">Puerto de Manzanillo</span>

        <h1>
          Transportamos <span className="accent">la confianza</span> que mueve
          tu negocio.
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

          <a className="secondary" href="#servicios">
            Conocer servicios
          </a>
        </div>
      </div>

      <div className="heroHighlights heroPortHighlights">
        <article>
          <strong>Respuesta inmediata</strong>
          <span>Atención rápida y personalizada.</span>
        </article>

        <article>
          <strong>Operación 24/7</strong>
          <span>Disponibilidad para atender tu carga.</span>
        </article>

        <article>
          <strong>Seguimiento operativo</strong>
          <span>Comunicación constante en cada movimiento.</span>
        </article>

        <article>
          <strong>Especialistas en Manzanillo</strong>
          <span>Conocimiento local que marca la diferencia.</span>
        </article>
      </div>
    </section>
  );
}
