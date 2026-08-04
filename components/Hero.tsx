import styles from "./Hero.module.css";

const quoteEmailLink =
  "mailto:cotizaciones@transporteszusasa.com?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Transportes%20ZUSASA&body=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20Transportes%20ZUSASA.%0A%0ATipo%20de%20servicio%3A%0AOrigen%3A%0ADestino%3A%0AFecha%20estimada%3A%0AComentarios%20adicionales%3A";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.line}>Puerto de Manzanillo</span>

        <div className={styles.mobileTruckImage} aria-hidden="true" />

        <h1>
          Transportamos <span>la confianza</span> que mueve tu negocio.
        </h1>

        <p>
          Integramos movimiento local, resguardo, apoyo operativo y transporte
          nacional de contenedores e ISO tanques desde Manzanillo, con atención
          directa, coordinación clara y seguimiento operativo.
        </p>

        <div className={styles.actions}>
          <a className={styles.mainCta} href={quoteEmailLink}>
            Solicitar cotización
          </a>

          <a className={styles.ghostCta} href="/#servicios">
            Conocer servicios →
          </a>
        </div>
      </div>

      <div className={styles.infoBar}>
        <article>
          <strong>Atención directa</strong>
          <p>Comunicación clara desde la solicitud hasta el cierre del servicio.</p>
        </article>

        <article>
          <strong>Respuesta inmediata</strong>
          <p>Revisamos disponibilidad y condiciones para atender tu operación.</p>
        </article>

        <article>
          <strong>Seguimiento operativo</strong>
          <p>Te mantenemos informado durante cada etapa del movimiento.</p>
        </article>

        <article>
          <strong>Especialistas en Manzanillo</strong>
          <p>Conocimiento local de la zona portuaria y logística.</p>
        </article>
      </div>
    </section>
  );
}
