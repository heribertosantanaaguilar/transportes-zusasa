import styles from "./resguardo.module.css";

export const metadata = {
  title: "Resguardo de contenedores en Manzanillo | Transportes ZUSASA",
  description:
    "Servicio de resguardo temporal de contenedores en patio de maniobras en Manzanillo, Colima. Apoyo operativo para carga contenerizada, importación, exportación y movimientos locales.",
};

export default function ResguardoContenedoresPage() {
  const whatsappResguardo =
    "https://wa.me/522224556651?text=Hola%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20resguardo%20de%20contenedores%20en%20patio%20de%20maniobras%20en%20Manzanillo.%0A%0ADatos%20del%20servicio%3A%0A-%20Empresa%3A%0A-%20Nombre%20de%20contacto%3A%0A-%20Tel%C3%A9fono%3A%0A-%20Tipo%20de%20contenedor%3A%0A-%20Contenedor%20lleno%20o%20vac%C3%ADo%3A%0A-%20Tiempo%20estimado%20de%20resguardo%3A%0A-%20Fecha%20estimada%3A%0A-%20Comentarios%3A";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <a className={styles.back} href="/">
          ← Volver al inicio
        </a>

        <div className={styles.heroContent}>
          <span>Resguardo en patio de maniobras</span>

          <h1>Resguardo de contenedores en Manzanillo.</h1>

          <p>
            Apoyamos con el resguardo temporal de contenedores llenos o vacíos
            en patio de maniobras, sujeto a disponibilidad, condiciones
            operativas y requerimientos de cada servicio.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primaryButton}
              href={whatsappResguardo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </a>

            <a className={styles.secondaryButton} href="/cotizacion">
              Ir a cotización
            </a>
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.mainContent}>
          <span>Servicio especializado</span>

          <h2>Apoyo operativo para el resguardo temporal de contenedores.</h2>

          <p>
            En Transportes ZUSASA entendemos que las operaciones portuarias y
            logísticas pueden requerir espacios de apoyo para coordinar tiempos,
            movimientos y disponibilidad. Por eso ofrecemos apoyo para el
            resguardo temporal de contenedores en patio de maniobras dentro de
            la zona de Manzanillo.
          </p>

          <div className={styles.cards}>
            <article>
              <strong>01</strong>
              <h3>Contenedores llenos o vacíos</h3>
              <p>
                Apoyamos con resguardo temporal de contenedores llenos o vacíos
                de acuerdo con las condiciones operativas disponibles.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Patio de maniobras</h3>
              <p>
                Coordinación en patio para apoyar necesidades logísticas
                vinculadas al movimiento local de carga contenerizada.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Operación local en Manzanillo</h3>
              <p>
                Enfoque en la zona portuaria y logística de Manzanillo, Colima,
                con atención directa y respuesta ágil.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Seguimiento operativo</h3>
              <p>
                Comunicación clara para revisar disponibilidad, tiempos,
                condiciones y requerimientos específicos del servicio.
              </p>
            </article>
          </div>

          <section className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
              <span>Fotos reales</span>

              <h2>Patio de maniobras para apoyo operativo en Manzanillo.</h2>

              <p>
                Estas imágenes muestran espacios reales de patio de maniobras
                que fortalecen nuestra capacidad de apoyo para operaciones
                locales de carga contenerizada.
              </p>
            </div>

            <div className={styles.galleryGrid}>
              <article>
                <img
                  src="/images/patio-maniobras-zusasa-1.jpg"
                  alt="Patio de maniobras para contenedores en Manzanillo"
                />
                <div>
                  <strong>Patio de maniobras</strong>
                  <p>Espacio operativo para apoyo logístico local.</p>
                </div>
              </article>

              <article>
                <img
                  src="/images/patio-maniobras-zusasa-2.jpg"
                  alt="Área de resguardo y maniobras de contenedores"
                />
                <div>
                  <strong>Resguardo temporal</strong>
                  <p>Apoyo para contenedores llenos o vacíos.</p>
                </div>
              </article>

              <article>
                <img
                  src="/images/patio-maniobras-zusasa-3.jpg"
                  alt="Patio para maniobras logísticas en Manzanillo"
                />
                <div>
                  <strong>Operación local</strong>
                  <p>Coordinación para movimientos en Manzanillo.</p>
                </div>
              </article>
            </div>
          </section>

          <div className={styles.infoBlock}>
            <h2>¿Qué información necesitamos para revisar el resguardo?</h2>

            <ul>
              <li>Nombre de la empresa y contacto responsable.</li>
              <li>Tipo de contenedor: 20 pies, 40 pies u otro.</li>
              <li>Si el contenedor está lleno o vacío.</li>
              <li>Fecha estimada de ingreso al patio.</li>
              <li>Tiempo aproximado de resguardo requerido.</li>
              <li>Requerimientos especiales de la operación.</li>
            </ul>
          </div>
        </div>

        <aside className={styles.panel}>
          <h2>Solicita disponibilidad</h2>

          <p>
            Comparte los datos de tu operación y revisaremos si es posible
            apoyar con el resguardo temporal del contenedor.
          </p>

          <div className={styles.person}>
            <strong>José Alberto Zúñiga Ramos</strong>
            <span>Gerente General</span>
            <a href="tel:2224556651">222 455 6651</a>
          </div>

          <a
            className={styles.whatsappButton}
            href={whatsappResguardo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>

          <a
            className={styles.emailButton}
            href="mailto:transportes.zusasa@gmail.com?subject=Consulta%20sobre%20resguardo%20de%20contenedores%20en%20Manzanillo&body=Hola%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20resguardo%20de%20contenedores%20en%20patio%20de%20maniobras%20en%20Manzanillo."
          >
            Enviar correo
          </a>

          <div className={styles.note}>
            <strong>Nota:</strong> El resguardo está sujeto a disponibilidad,
            condiciones operativas del patio y características del servicio.
          </div>
        </aside>
      </section>
    </main>
  );
}
