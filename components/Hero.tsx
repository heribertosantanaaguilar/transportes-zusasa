import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.line}>Puerto de Manzanillo</span>

        <h1>
          Transportamos <span>la confianza</span> que mueve tu negocio.
        </h1>

        <p>
          Coordinamos movimientos locales de carga contenerizada para agencias
          aduanales, operadores logísticos, importadores y exportadores que
          necesitan seguridad, comunicación clara y cumplimiento en Manzanillo.
        </p>

        <div className={styles.actions}>
          <a className={styles.mainCta} href="/cotizacion">
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
