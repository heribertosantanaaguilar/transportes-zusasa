export const metadata = {
  title: "Solicitar cotización | Transportes ZUSASA",
  description:
    "Solicita una cotización para transporte local de carga contenerizada en Manzanillo, Colima. Comparte tipo de contenedor, origen, destino y fecha estimada.",
};

export default function CotizacionPage() {
  return (
    <main className="quotePage">
      <section className="quotePageHero">
        <a className="quotePageBack" href="/">
          ← Volver al inicio
        </a>

        <div className="quotePageHeroContent">
          <span>Solicitar cotización</span>

          <h1>Cotiza tu movimiento local de carga en Manzanillo.</h1>

          <p>
            Comparte los datos básicos de tu operación y nuestro equipo revisará
            disponibilidad, condiciones y tiempos para darte una respuesta clara.
          </p>

          <div className="quotePageActions">
            <a
              className="quotePageWhatsapp"
              href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar por WhatsApp
            </a>

            <a
              className="quotePageEmail"
              href="mailto:transportes.zusasa@gmail.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transporte%20local%20Manzanillo&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A"
            >
              Enviar por correo
            </a>
          </div>
        </div>
      </section>

      <section className="quotePageBody">
        <div className="quotePageInfo">
          <span>Datos necesarios</span>

          <h2>Información recomendada para cotizar con mayor precisión.</h2>

          <p>
            Mientras más completa sea la información, más rápido podremos
            revisar la operación y darte una respuesta adecuada.
          </p>

          <div className="quotePageGrid">
            <article>
              <strong>01</strong>
              <h3>Datos de contacto</h3>
              <p>Empresa, nombre de contacto, teléfono y correo electrónico.</p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Tipo de contenedor</h3>
              <p>Indica si es contenedor lleno, vacío, 20 pies, 40 pies u otro.</p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Origen y destino</h3>
              <p>Comparte el punto de inicio y el punto final del movimiento.</p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Fecha estimada</h3>
              <p>Indica el día aproximado en que necesitas realizar el servicio.</p>
            </article>

            <article>
              <strong>05</strong>
              <h3>Requerimientos especiales</h3>
              <p>
                Agrega detalles importantes sobre horarios, documentación,
                resguardo o condiciones del servicio.
              </p>
            </article>

            <article>
              <strong>06</strong>
              <h3>Confirmación</h3>
              <p>
                Revisaremos la información para responderte con claridad y dar
                seguimiento a tu solicitud.
              </p>
            </article>
          </div>
        </div>

        <aside className="quotePagePanel">
          <h2>Contacto para cotizaciones</h2>

          <div className="quotePageContactPerson">
            <strong>José Alberto Zúñiga Ramos</strong>
            <span>Gerente General</span>
            <a href="tel:2224556651">222 455 6651</a>
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
              <strong>Ubicación</strong>
              <br />
              Manzanillo, Colima, México
            </p>
          </div>

          <div className="quotePageNote">
            <strong>Nota:</strong> Cada cotización se revisa de acuerdo con la
            disponibilidad, ruta, condiciones y requerimientos reales de la
            operación.
          </div>
        </aside>
      </section>
    </main>
  );
}
