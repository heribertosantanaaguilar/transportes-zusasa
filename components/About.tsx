export default function About() {
  return (
    <section id="nosotros" className="zusasaCompanySection">
      <div className="zusasaCompanyText">
        <span className="zusasaCompanyLabel">Nosotros</span>

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

        <div className="zusasaCompanyFeatures">
          <article>
            <strong>Operación portuaria</strong>
            <span>Conocimiento local de Manzanillo.</span>
          </article>

          <article>
            <strong>Contenedores</strong>
            <span>Movimiento local de carga contenerizada.</span>
          </article>

          <article>
            <strong>Respuesta rápida</strong>
            <span>Atención directa y seguimiento puntual.</span>
          </article>

          <article>
            <strong>Confianza</strong>
            <span>Honestidad, seriedad y compromiso.</span>
          </article>
        </div>
      </div>

      <div className="zusasaCompanyVisual">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=85"
          alt="Transporte de carga con contenedores"
        />

        <div className="zusasaCompanyCard">
          <strong>Manzanillo, Colima</strong>
          <span>Especialistas en transporte local de carga.</span>
        </div>
      </div>
    </section>
  );
}
