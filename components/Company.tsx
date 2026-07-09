export default function Company() {
  return (
    <section id="nosotros" className="zusasaCompanyBlock">
      <div className="zusasaCompanyTop">
        <div className="zusasaCompanyLeft">
          <span className="zusasaMiniTitle">Nosotros</span>

          <h2>Conectamos operaciones. Cumplimos compromisos.</h2>

          <p>
            Transportes ZUSASA es una empresa mexicana ubicada en Manzanillo,
            Colima, especializada en el autotransporte local de carga
            contenerizada para operaciones de importación y exportación.
          </p>

          <p>
            Trabajamos con agencias aduanales, operadores logísticos,
            transportistas, importadores y exportadores que necesitan un aliado
            confiable para coordinar movimientos locales dentro de la zona
            portuaria y logística de Manzanillo.
          </p>

          <p>
            Nuestro compromiso es brindar atención directa, comunicación honesta
            y seguimiento operativo para que cada cliente tenga claridad sobre
            su servicio desde la solicitud hasta la confirmación final.
          </p>
        </div>

        <div className="zusasaCompanyRight">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=85"
            alt="Transporte de carga contenerizada"
          />

          <div className="zusasaFloatingCard">
            <strong>Manzanillo, Colima</strong>
            <span>
              Transporte local especializado para operaciones de carga
              contenerizada.
            </span>
          </div>
        </div>
      </div>

      <div className="zusasaCompanyPoints">
        <article>
          <strong>01</strong>
          <h3>Enfoque local</h3>
          <p>Conocemos la operación logística y portuaria de Manzanillo.</p>
        </article>

        <article>
          <strong>02</strong>
          <h3>Carga contenerizada</h3>
          <p>
            Atendemos movimientos locales vinculados a importación y
            exportación.
          </p>
        </article>

        <article>
          <strong>03</strong>
          <h3>Atención directa</h3>
          <p>
            Comunicación cercana para revisar necesidades, tiempos y
            disponibilidad.
          </p>
        </article>

        <article>
          <strong>04</strong>
          <h3>Seriedad operativa</h3>
          <p>
            Trabajamos con responsabilidad, claridad y compromiso en cada
            movimiento.
          </p>
        </article>
      </div>
    </section>
  );
}
