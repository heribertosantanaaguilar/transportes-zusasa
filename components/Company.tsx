export default function Company() {
  return (
    <section id="nosotros" className="zusasaCompanyBlock">
      <div className="zusasaCompanyLeft">
        <span className="zusasaMiniTitle">Nosotros</span>

        <h2>Conectamos operaciones. Cumplimos compromisos.</h2>

        <p>
          Transportes ZUSASA es una empresa mexicana ubicada en Manzanillo,
          Colima, especializada en el autotransporte local de carga para
          operaciones de importación y exportación.
        </p>

        <p>
          Brindamos soluciones logísticas seguras, eficientes y oportunas para
          el traslado de carga contenerizada desde y hacia el Puerto de
          Manzanillo.
        </p>

        <div className="zusasaCompanyPoints">
          <article>
            <strong>01</strong>
            <h3>Operación portuaria</h3>
            <p>Conocimiento local de la zona logística de Manzanillo.</p>
          </article>

          <article>
            <strong>02</strong>
            <h3>Carga contenerizada</h3>
            <p>Movimientos locales para importación y exportación.</p>
          </article>

          <article>
            <strong>03</strong>
            <h3>Respuesta inmediata</h3>
            <p>Atención directa y comunicación constante.</p>
          </article>

          <article>
            <strong>04</strong>
            <h3>Confianza</h3>
            <p>Seriedad, honestidad y cumplimiento operativo.</p>
          </article>
        </div>
      </div>

      <div className="zusasaCompanyRight">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=85"
          alt="Transporte de carga contenerizada"
        />

        <div className="zusasaFloatingCard">
          <strong>Manzanillo, Colima</strong>
          <span>Especialistas en transporte local de carga portuaria.</span>
        </div>
      </div>
    </section>
  );
}
