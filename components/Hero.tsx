export default function Hero() {
  return (
    <section id="inicio" className="heroShowcase">
      <div className="heroShowcaseContent">
        <span className="heroLine">Puerto de Manzanillo</span>

        <h1>
          Transportamos <span>la confianza</span> que mueve tu negocio.
        </h1>

        <p>
          Coordinamos movimientos locales de carga contenerizada para agencias
          aduanales, operadores logísticos, importadores y exportadores que
          necesitan seguridad, comunicación clara y cumplimiento en Manzanillo.
        </p>

        <div className="heroShowcaseActions">
          <a
            className="mainCta"
            href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo."
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar cotización
          </a>

          <a className="ghostCta" href="#servicios">
            Conocer servicios →
          </a>
        </div>
      </div>

      <div className="heroShowcaseBar">
        <article>
          <strong>Atención directa</strong>
          <p>Comunicación clara desde la solicitud hasta el cierre del servicio.</p>
        </article>

        <article>
          <strong>Respuesta inmediata</strong>
          <p>Revisamos disponibilidad y condiciones para atender tu operación.</p>
        </article>

        <article>
          <strong>Seguimiento operativo</strong>
          <p>Te mantenemos informado durante cada etapa del movimiento.</p>
        </article>

        <article>
          <strong>Especialistas en Manzanillo</strong>
          <p>Conocimiento local de la zona portuaria y logística.</p>
        </article>
      </div>
    </section>
  );
}
