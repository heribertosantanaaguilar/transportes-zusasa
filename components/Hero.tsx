export default function Hero() {
  return (
    <section id="inicio" className="heroShowcase">
      <div className="heroShowcaseContent">
        <span className="heroLine">Puerto de Manzanillo</span>

        <h1>
          Transportamos <span>la confianza</span> que mueve tu negocio.
        </h1>

        <p>
          Soluciones especializadas en autotransporte local de carga para
          operaciones de importación y exportación dentro de la zona portuaria
          de Manzanillo.
        </p>

        <div className="heroShowcaseActions">
          <a className="mainCta" href="mailto:transportes.zusasa@gmail.com">
            Solicitar cotización
          </a>

          <a className="ghostCta" href="#servicios">
            Conocer servicios →
          </a>
        </div>
      </div>

      <div className="heroShowcaseBar">
        <article>
          <strong>Respuesta inmediata</strong>
          <p>Atención rápida y personalizada.</p>
        </article>

        <article>
          <strong>Operación 24/7</strong>
          <p>Disponibilidad total para tu carga.</p>
        </article>

        <article>
          <strong>Seguimiento operativo</strong>
          <p>Comunicación constante en cada movimiento.</p>
        </article>

        <article>
          <strong>Especialistas en Manzanillo</strong>
          <p>Conocimiento local que marca la diferencia.</p>
        </article>
      </div>
    </section>
  );
}
