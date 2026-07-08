export default function Quote() {
  return (
    <section className="zusasaQuoteSection">
      <div className="zusasaQuoteContent">
        <span>Cotización inmediata</span>

        <h2>Solicita una cotización para tu movimiento local en Manzanillo.</h2>

        <p>
          Cuéntanos qué tipo de contenedor necesitas mover, el origen, el
          destino y la fecha estimada del servicio. Nuestro equipo revisará la
          información y te dará una respuesta clara para coordinar tu operación.
        </p>

        <div className="zusasaQuoteHighlights">
          <article>
            <strong>Atención directa</strong>
            <p>Te orientamos desde el primer contacto.</p>
          </article>

          <article>
            <strong>Respuesta ágil</strong>
            <p>Revisamos disponibilidad y condiciones operativas.</p>
          </article>

          <article>
            <strong>Información clara</strong>
            <p>Te indicamos tiempos, alcance y datos necesarios.</p>
          </article>
        </div>
      </div>

      <div className="zusasaQuoteBox">
        <h3>Datos recomendados para cotizar</h3>

        <p>
          Para brindarte una mejor atención, comparte la información básica de
          tu operación.
        </p>

        <ul className="zusasaQuoteList">
          <li>Tipo de contenedor</li>
          <li>Origen del movimiento</li>
          <li>Destino del movimiento</li>
          <li>Fecha estimada del servicio</li>
          <li>Datos o requerimientos especiales</li>
        </ul>

        <div className="zusasaQuoteButtons">
          <a
            className="quoteWhatsapp"
            href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar por WhatsApp
          </a>

          <a
            className="quoteEmail"
            href="mailto:transportes.zusasa@gmail.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transporte%20local%20Manzanillo&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A"
          >
            Enviar correo
          </a>
        </div>

        <div className="zusasaQuoteNote">
          <strong>Respuesta personalizada:</strong> revisamos cada solicitud de
          acuerdo con las condiciones reales de la operación.
        </div>
      </div>
    </section>
  );
}
