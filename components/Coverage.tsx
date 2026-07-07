export default function Coverage() {
  return (
    <section className="zusasaCoverageFinal">
      <div className="zusasaCoverageContent">
        <span>Cobertura</span>

        <h2>Especialistas en operación local en Manzanillo.</h2>

        <p>
          Atendemos movimientos de carga contenerizada dentro de la zona
          portuaria y logística de Manzanillo, Colima.
        </p>

        <p>
          Nuestro enfoque local nos permite responder con agilidad, coordinación
          y conocimiento del entorno portuario.
        </p>

        <div className="zusasaCoverageCards">
          <article>
            <strong>Zona portuaria</strong>
            <p>Operaciones locales vinculadas al Puerto de Manzanillo.</p>
          </article>

          <article>
            <strong>Respuesta ágil</strong>
            <p>Coordinación rápida para movimientos de carga contenerizada.</p>
          </article>
        </div>
      </div>

      <div className="zusasaCoverageVisual">
        <div className="manzanilloMap">
          <div className="mapOcean"></div>

          <div className="mapLand">
            <span className="mapRoute routeOne"></span>
            <span className="mapRoute routeTwo"></span>
            <span className="mapRoute routeThree"></span>

            <div className="portZone">
              <strong>Puerto</strong>
              <span>Zona portuaria</span>
            </div>

            <div className="cityZone">
              <strong>Manzanillo</strong>
              <span>Colima</span>
            </div>

            <div className="logisticsZone">
              <strong>Zona logística</strong>
              <span>Operación local</span>
            </div>
          </div>

          <div className="mapPin">
            <span></span>
            Manzanillo, Colima
          </div>
        </div>

        <div className="coverageBadge">
          <strong>1 puerto clave</strong>
          <p>Manzanillo, punto estratégico para importación y exportación.</p>
        </div>
      </div>
    </section>
  );
}
