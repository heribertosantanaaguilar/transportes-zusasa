export default function Quote() {
  return (
    <section className="zusasaQuoteSection">
      <div className="zusasaQuoteContent">
        <span>Cotización inmediata</span>

        <h2>¿Necesitas mover carga local en Manzanillo?</h2>

        <p>
          Solicita una cotización y recibe atención directa para coordinar tu
          operación de carga contenerizada dentro de la zona portuaria y
          logística de Manzanillo.
        </p>

        <div className="zusasaQuoteHighlights">
          <article>
            <strong>Respuesta rápida</strong>
            <p>Atención directa para revisar tu operación.</p>
          </article>

          <article>
            <strong>Comunicación clara</strong>
            <p>Información honesta sobre tiempos y disponibilidad.</p>
          </article>

          <article>
            <strong>Seguimiento operativo</strong>
            <p>Coordinación durante cada movimiento.</p>
          </article>
        </div>
      </div>

      <div className="zusasaQuoteBox">
        <h3>Solicita tu cotización</h3>

        <p>
          Comparte los datos de tu movimiento y nuestro equipo te dará atención
          personalizada.
        </p>

        <div className="zusasaQuoteButtons">
          <a
            className="quoteWhatsapp"
            href="https://wa.me/523148721897?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20movimiento%20local%20de%20carga%20en%20Manzanillo."
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
          <strong>Tip:</strong> Ten a la mano origen, destino, tipo de
          contenedor y fecha estimada del movimiento.
        </div>
      </div>
    </section>
  );
}
