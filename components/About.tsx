export default function About() {
  return (
    <section id="nosotros" className="zusasaAbout">
      <div className="zusasaAboutText">
        <span>Nosotros</span>

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

        <div className="zusasaAboutList">
          <article>Operaciones portuarias</article>
          <article>Transporte local de contenedores</article>
          <article>Atención personalizada</article>
          <article>Respuesta inmediata</article>
        </div>
      </div>

      <div className="zusasaAboutImage">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=85"
          alt="Transporte de carga con contenedores"
        />

        <div className="zusasaAboutBadge">
          <strong>Manzanillo</strong>
          <span>Especialistas en operación local portuaria</span>
        </div>
      </div>
    </section>
  );
}
