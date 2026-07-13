export const metadata = {
  title: "Solicitar cotización | Transportes ZUSASA",
  description:
    "Solicita una cotización para transporte local de contenedores en Manzanillo, Colima. Atención para carga contenerizada, movimientos locales, resguardo en patio de maniobras, importación y exportación.",
};

export default function CotizacionPage() {
  const whatsappGeneral =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20con%20Transportes%20ZUSASA.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20servicio%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  const whatsappTransporte =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20transporte%20local%20de%20contenedores%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  const whatsappResguardo =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20resguardo%20de%20contenedores%20en%20patio%20de%20maniobras%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Contenedor%20lleno%20o%20vac%C3%ADo%3A%0A-%20Tiempo%20estimado%20de%20resguardo%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  const whatsappApoyo =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20apoyo%20operativo%20para%20contenedores%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20apoyo%20requerido%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  return (
    <main className="quotePage">
      <section className="quotePageHero">
        <a className="quotePageBack" href="/">
          ← Volver al inicio
        </a>

        <div className="quotePageHeroContent">
          <span>Cotización de transporte local</span>

          <h1>Cotiza tu operación de contenedores en Manzanillo.</h1>

          <p>
            Elige el servicio que necesitas y envíanos los datos básicos de tu
            operación. Revisaremos disponibilidad, condiciones y tiempos para
            darte una respuesta clara y personalizada.
          </p>

          <div className="quotePageActions">
            <a
              className="quotePageWhatsapp"
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar por WhatsApp
            </a>

            <a
              className="quotePageEmail"
              href="mailto:transportes.zusasa@gmail.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transportes%20ZUSASA&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20con%20Transportes%20ZUSASA.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20servicio%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A"
            >
              Enviar por correo
            </a>
          </div>
        </div>
      </section>

      <section className="quotePageBody">
        <div className="quotePageInfo">
          <span>Elige el servicio</span>

          <h2>¿Qué necesitas cotizar?</h2>

          <p>
            Selecciona la opción más cercana a tu operación. Si tienes dudas,
            puedes enviarnos tu solicitud general y te orientamos directamente.
          </p>

          <div className="quoteServiceOptions">
            <article>
              <strong>01</strong>
              <h3>Movimiento local de contenedores</h3>
              <p>
                Cotiza traslados locales de carga contenerizada dentro de la
                zona portuaria y logística de Manzanillo.
              </p>

              <div className="quoteServiceActions">
                <a
                  href={whatsappTransporte}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar transporte
                </a>

                <a href="/transporte-de-contenedores-manzanillo">
                  Ver servicio
                </a>
              </div>
            </article>

            <article>
              <strong>02</strong>
              <h3>Resguardo en patio de maniobras</h3>
              <p>
                Consulta disponibilidad para resguardo temporal de contenedores
                llenos o vacíos en patio de maniobras.
              </p>

              <div className="quoteServiceActions">
                <a
                  href={whatsappResguardo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar resguardo
                </a>

                <a href="/resguardo-de-contenedores-manzanillo">
                  Ver servicio
                </a>
              </div>
            </article>

            <article>
              <strong>03</strong>
              <h3>Apoyo operativo para contenedores</h3>
              <p>
                Solicita apoyo en coordinación, maniobras, movimientos locales o
                manejo operativo de contenedores.
              </p>

              <div className="quoteServiceActions">
                <a
                  href={whatsappApoyo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar apoyo
                </a>

                <a href="/#contacto">Contacto</a>
              </div>
            </article>

            <article>
              <strong>04</strong>
              <h3>Seguimiento y comunicación operativa</h3>
              <p>
                Comparte tu necesidad logística y revisamos cómo apoyarte con
                seguimiento claro durante la operación.
              </p>

              <div className="quoteServiceActions">
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar con ZUSASA
                </a>

                <a href="/#por-que-elegir">Por qué elegirnos</a>
              </div>
            </article>
          </div>

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
        </div>

        <aside className="quotePagePanel">
          <h2>Contacto para cotizaciones</h2>

          <p className="quotePagePanelIntro">
            Para una atención más rápida, envía tu solicitud por WhatsApp con
            los datos básicos de tu movimiento, resguardo o apoyo operativo.
          </p>

          <div className="quotePageContactPerson">
            <strong>José Alberto Zúñiga Ramos</strong>
            <span>Gerente General</span>
            <a href="tel:2224556651">222 455 6651</a>
          </div>

          <div className="quotePagePanelActions">
            <a
              href={whatsappGeneral}
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
