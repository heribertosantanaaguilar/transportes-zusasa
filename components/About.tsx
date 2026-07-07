export default function About() {
  return (
    <section id="nosotros" className="aboutPremium">
      <div className="aboutContent">
        <span className="sectionTag">Nosotros</span>
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

        <div className="aboutList">
          <span>✓ Operaciones portuarias</span>
          <span>✓ Transporte local de contenedores</span>
          <span>✓ Atención personalizada</span>
          <span>✓ Respuesta inmediata</span>
        </div>
      </div>

      <div className="aboutPhoto">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
          alt="Transporte de carga con contenedores"
        />
      </div>
    </section>
  );
}
