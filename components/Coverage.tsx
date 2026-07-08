export default function Coverage() {
  return (
    <section className="zusasaCoveragePhoto">
      <div className="zusasaCoverageOverlay">
        <div className="zusasaCoveragePhotoText">
          <span>Cobertura</span>

          <h2>Especialistas en operación local en Manzanillo.</h2>

          <p>
            Atendemos movimientos de carga contenerizada dentro de la zona
            portuaria y logística de Manzanillo, Colima.
          </p>

          <div className="zusasaCoveragePhotoCards">
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

        <div className="zusasaCoverageTruckPhoto">
          <img
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1400&q=90"
            alt="Camión con contenedor en patio portuario"
          />

          <div className="truckPhotoBadge">
            <strong>Transporte local</strong>
            <span>Carga contenerizada en entorno portuario.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
