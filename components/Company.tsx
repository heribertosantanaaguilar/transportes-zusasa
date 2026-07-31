export default function Company() {
  return (
    <section id="nosotros" className="zusasaCompanyBlock">
      <div className="zusasaCompanyTop">
        <div className="zusasaCompanyLeft">
          <span className="zusasaMiniTitle">Nosotros</span>

          <h2>Coordinamos soluciones logísticas integrales desde Manzanillo.</h2>

          <p>
            Somos una empresa local enfocada en brindar atención directa,
            comunicación honesta y coordinación operativa para servicios
            logísticos relacionados con contenedores e ISO tanques en
            Manzanillo, Colima.
          </p>
        </div>

        <div className="zusasaCompanyRight">
          <img
            src="/images/camion-rojo-zusasa-nosotros.png"
            alt="Primer camión de Transportes ZUSASA"
          />

          <div className="zusasaFloatingCard">
            <strong>Coordinación local y nacional</strong>
            <span>
              Integramos operación local en Manzanillo con gestión de transporte
              nacional mediante alianza comercial.
            </span>
          </div>
        </div>
      </div>

      <div className="zusasaCompanyFullText">
        <p>
          Apoyamos operaciones de movimiento local, resguardo en patio de
          maniobras y apoyo operativo. Además, mediante alianza comercial con
          transportista foráneo, podemos gestionar transporte nacional de
          contenedores e ISO tanques hacia distintos destinos del país.
        </p>

        <p>
          Nuestro compromiso es ofrecer al cliente un solo punto de contacto
          para revisar disponibilidad, coordinar la operación, dar seguimiento
          al servicio y gestionar la cotización de acuerdo con las condiciones
          reales de cada movimiento.
        </p>
      </div>
    </section>
  );
}
