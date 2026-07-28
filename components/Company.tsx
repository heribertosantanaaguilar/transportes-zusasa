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

          <p>
            A través de nuestros servicios, apoyamos operaciones de movimiento
            local, resguardo en patio de maniobras y apoyo operativo. Además,
            mediante alianza comercial con transportista foráneo, podemos
            gestionar transporte nacional de contenedores e ISO tanques hacia
            distintos destinos del país.
          </p>

          <p>
            Nuestro compromiso es ofrecer al cliente un solo punto de contacto
            para revisar disponibilidad, coordinar la operación, dar seguimiento
            al servicio y gestionar la cotización de acuerdo con las condiciones
            reales de cada movimiento.
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
              Integramos movimiento local en Manzanillo, resguardo, apoyo
              operativo y gestión de transporte nacional mediante alianza
              comercial.
            </span>
          </div>
        </div>
      </div>

      <div className="zusasaCompanyPoints">
        <article>
          <strong>01</strong>
          <h3>Enfoque local</h3>
          <p>
            Conocemos la importancia de atender operaciones dentro de la zona
            logística y portuaria de Manzanillo.
          </p>
        </article>

        <article>
          <strong>02</strong>
          <h3>Solución integral</h3>
          <p>
            Coordinamos movimiento local, resguardo, apoyo operativo y gestión
            de transporte nacional para contenedores e ISO tanques.
          </p>
        </article>

        <article>
          <strong>03</strong>
          <h3>Atención directa</h3>
          <p>
            El cliente cuenta con un solo punto de contacto para revisar su
            operación, solicitar cotización y dar seguimiento al servicio.
          </p>
        </article>

        <article>
          <strong>04</strong>
          <h3>Comunicación honesta</h3>
          <p>
            Hablamos con claridad sobre disponibilidad, tiempos, condiciones
            operativas, alcances del servicio y requerimientos particulares.
          </p>
        </article>
      </div>
    </section>
  );
}
