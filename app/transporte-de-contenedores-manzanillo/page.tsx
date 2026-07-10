import styles from "./transporte.module.css";

export const metadata = {
  title:
    "Transporte de contenedores en Manzanillo | Transportes ZUSASA",
  description:
    "Servicio de transporte local de contenedores en Manzanillo, Colima. Movimiento de carga contenerizada para operaciones portuarias, importación, exportación y logística local.",
};

export default function TransporteContenedoresPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <a className={styles.back} href="/">
          ← Volver al inicio
        </a>

        <div className={styles.heroContent}>
          <span>Transporte local de contenedores</span>

          <h1>Transporte de contenedores en Manzanillo.</h1>

          <p>
            Coordinamos movimientos locales de carga contenerizada para
            operaciones portuarias, agencias aduanales, operadores logísticos,
            importadores y exportadores dentro de la zona de Manzanillo.
          </p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="/cotizacion">
              Solicitar cotización
            </a>

            <a
              className={styles.secondaryButton}
              href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20transporte%20local%20de%20contenedores%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Requiere%20resguardo%20en%20patio%3A%0A-%20Comentarios%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.mainContent}>
          <span>Servicio principal</span>

          <h2>Movimiento local de carga contenerizada con atención directa.</h2>

          <p>
            En Transportes ZUSASA brindamos apoyo para coordinar movimientos
            locales de contenedores en Manzanillo, Colima. Nuestro enfoque está
            en ofrecer comunicación clara, respuesta ágil y seguimiento
            operativo para que cada cliente pueda mover su carga con confianza.
          </p>

          <div className={styles.cards}>
            <article>
              <strong>01</strong>
              <h3>Movimiento local de contenedores</h3>
              <p>
                Traslados dentro de la zona portuaria y logística de
                Manzanillo, de acuerdo con las necesidades de cada operación.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Carga contenerizada</h3>
              <p>
                Atención para contenedores llenos o vacíos vinculados a
                operaciones de importación, exportación y movimientos locales.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Coordinación operativa</h3>
              <p>
                Revisión de origen, destino, tiempos, disponibilidad y
                requerimientos específicos del servicio.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Seguimiento y comunicación</h3>
              <p>
                Comunicación directa durante cada etapa del movimiento para dar
                claridad al cliente sobre el avance de su operación.
              </p>
            </article>
          </div>

          <div className={styles.infoBlock}>
            <h2>¿Qué información necesitamos para cotizar?</h2>

            <ul>
              <li>Nombre de la empresa y contacto responsable.</li>
              <li>Tipo de contenedor: 20 pies, 40 pies u otro.</li>
              <li>Origen y destino del movimiento local.</li>
              <li>Fecha estimada del servicio.</li>
              <li>Si el contenedor está lleno o vacío.</li>
              <li>Si requiere resguardo en patio de maniobras.</li>
              <li>Comentarios o condiciones especiales de la operación.</li>
            </ul>
          </div>
        </div>

        <aside className={styles.panel}>
          <h2>Cotiza tu movimiento</h2>

          <p>
            Comparte los datos básicos de tu operación y revisaremos
            disponibilidad, condiciones y tiempos para darte una respuesta clara.
          </p>

          <div className={styles.person}>
            <strong>José Alberto Zúñiga Ramos</strong>
            <span>Gerente General</span>
            <a href="tel:2224556651">222 455 6651</a>
          </div>

          <a
            className={styles.whatsappButton}
            href="https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20transporte%20local%20de%20contenedores%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Requiere%20resguardo%20en%20patio%3A%0A-%20Comentarios%3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar por WhatsApp
          </a>

          <a
            className={styles.emailButton}
            href="mailto:transportes.zusasa@gmail.com?subject=Cotizaci%C3%B3n%20de%20transporte%20de%20contenedores%20en%20Manzanillo&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20transporte%20local%20de%20contenedores%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Origen%3A%0A-%20Destino%3A%0A-%20Fecha%20estimada%3A%0A-%20Requiere%20resguardo%20en%20patio%3A%0A-%20Comentarios%3A"
          >
            Enviar correo
          </a>

          <div className={styles.note}>
            <strong>Nota:</strong> Cada cotización se revisa de acuerdo con la
            ruta, disponibilidad, condiciones operativas y requerimientos reales
            del servicio.
          </div>
        </aside>
      </section>
    </main>
  );
}
