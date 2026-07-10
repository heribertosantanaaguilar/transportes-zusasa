export const metadata = {
  title: "Solicitar cotización | Transportes ZUSASA",
  description:
    "Solicita una cotización para transporte local de contenedores en Manzanillo, Colima. Atención para carga contenerizada, movimientos locales, resguardo en patio de maniobras, importación y exportación.",
};

export default function CotizacionPage() {
  return (
    <main className="quotePage">
      <section className="quotePageHero">
        <a className="quotePageBack" href="/">
          ← Volver al inicio
        </a>

        <div className="quotePageHeroContent">
          <span>Cotización de transporte local</span>

          <h1>Cotiza tu movimiento de contenedores en Manzanillo.</h1>

          <p>
            Envíanos los datos básicos de tu operación y revisaremos
            disponibilidad, condiciones y tiempos para darte una respuesta clara
            y personalizada.
          </p>

          <div className="quotePageActions">
            <a
              className="quotePageWhatsapp"
              href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Requiere%20resguardo%20en%20patio%3A%0A-%20Comentarios%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar por WhatsApp
            </a>

            <a
              className="quotePageEmail"
              href="mailto:transportes.zusasa@gmail.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transporte%20local%20Manzanillo&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Requiere%20resguardo%20en%20patio%3A%0A-%20Comentarios%3A"
            >
              Enviar por correo
            </a>
          </div>
        </div>
      </section>

      <section className="quotePageBody">
        <div className="quotePageInfo">
          <span>Datos para cotizar</span>

          <h2>Comparte la información necesaria para revisar tu servicio.</h2>

          <p>
            Mientras más completa sea la información, más rápido podremos
            analizar la operación y darte una respuesta adecuada.
          </p>

          <div className="quotePageGrid">
            <article>
              <strong>01</strong>
              <h3>Datos de contacto</h3>
              <p>
                Empresa, nombre de contacto, teléfono y correo electrónico para
                dar seguimiento a tu solicitud.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Tipo de contenedor</h3>
              <p>
                Indica si es contenedor lleno, vacío, 20 pies, 40 pies u otro
                requerimiento específico.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Origen y destino</h3>
              <p>
                Comparte el punto de inicio y el punto final del movimiento
                dentro de la zona de Manzanillo.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Fecha estimada</h3>
              <p>
                Indica el día aproximado en que necesitas realizar el servicio o
                la ventana de atención requerida.
              </p>
            </article>

            <article>
              <strong>05</strong>
              <h3>Resguardo en patio</h3>
              <p>
                Indica si necesitas resguardo temporal del contenedor en patio
                de maniobras, así como el tiempo estimado requerido.
              </p>
            </article>

            <article>
              <strong>06</strong>
              <h3>Detalles operativos</h3>
              <p>
                Agrega horarios, documentación, maniobras, condiciones
                especiales o cualquier dato importante del servicio.
              </p>
            </article>
          </div>

          <div className="quotePageServices">
            <span>¿Qué puedes cotizar?</span>

            <div className="quotePageServicesGrid">
              <article>
                <h3>Movimiento local de contenedores</h3>
                <p>
                  Traslados locales vinculados a operaciones portuarias,
                  importación y exportación.
                </p>
              </article>

              <article>
                <h3>Carga contenerizada</h3>
                <p>
                  Atención para contenedores llenos o vacíos, de acuerdo con las
                  necesidades de cada operación.
                </p>
              </article>

              <article>
                <h3>Resguardo en patio de maniobras</h3>
                <p>
                  Resguardo temporal de contenedores llenos o vacíos, sujeto a
                  disponibilidad y condiciones operativas del patio.
                </p>
              </article>

              <article>
                <h3>Apoyo operativo</h3>
                <p>
                  Coordinación, seguimiento y comunicación durante el movimiento
                  local o resguardo de la carga.
                </p>
              </article>
            </div>
          </div>
        </div>

        <aside className="quotePagePanel">
          <h2>Contacto para cotizaciones</h2>

          <p className="quotePagePanelIntro">
            Para una atención más rápida, envía tu solicitud por WhatsApp con
            los datos básicos de tu movimiento o resguardo.
          </p>

          <div className="quotePageContactPerson">
            <strong>José Alberto Zúñiga Ramos</strong>
            <span>Gerente General</span>
            <a href="tel:2224556651">222 455 6651</a>
          </div>

          <div className="quotePagePanelActions">
            <a
              href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Requiere%20resguardo%20en%20patio%3A%0A-%20Comentarios%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp
            </a>

            <a href="mailto:transportes.zusasa@gmail.com">Enviar correo</a>
          </div>

          <div className="quotePageContactBox">
            <p>
              <strong>Correo</strong>
              <br />
              <a href="mailto:transportes.zusasa@gmail.com">
                transportes.zusasa@gmail.com
              </a>
            </p>

            <p>
              <strong>Zona de atención</strong>
              <br />
              Manzanillo, Colima, México
            </p>

            <p>
              <strong>Enfoque de servicio</strong>
              <br />
              Transporte local, movimiento y resguardo de carga contenerizada.
            </p>
          </div>

          <div className="quotePageNote">
            <strong>Nota:</strong> Cada cotización se revisa de acuerdo con la
            disponibilidad, ruta, condiciones, tiempo de resguardo y
            requerimientos reales de la operación.
          </div>
        </aside>
      </section>
    </main>
  );
}
