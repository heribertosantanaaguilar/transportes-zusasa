import styles from "./Gallery.module.css";

export default function Gallery() {
  const photos = [
    {
      title: "Entorno portuario",
      text: "Operaciones vinculadas al movimiento local de contenedores dentro de la zona logística de Manzanillo.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Patio de maniobras",
      text: "Coordinación terrestre para atender traslados, resguardo y movimientos de carga contenerizada.",
      image: "/images/patio-maniobras-zusasa-1.jpg",
    },
    {
      title: "Transporte nacional",
      text: "Coordinación de movimientos foráneos de carga contenerizada desde Manzanillo mediante alianza comercial con transportistas especializados.",
      image: "/images/transporte-nacional-zusasa-1.jpeg",
    },
    {
      title: "Unidades aliadas",
      text: "Apoyo operativo con unidades aliadas para servicios nacionales, sujeto a disponibilidad, ruta y condiciones de cada operación.",
      image: "/images/transporte-nacional-zusasa-2.jpeg",
    },
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHeader}>
        <span>Operación logística</span>

        <h2>Movimiento, resguardo y apoyo operativo en Manzanillo.</h2>

        <p>
          Nuestra operación está enfocada en atender necesidades locales de
          transporte, coordinación y resguardo de carga contenerizada vinculada
          a actividades portuarias de importación y exportación.
        </p>
      </div>

      <div className={styles.galleryGrid}>
        {photos.map((photo) => (
          <article className={styles.galleryCard} key={photo.title}>
            <img
              className={styles.galleryImage}
              src={photo.image}
              alt={photo.title}
            />

            <div className={styles.galleryOverlay}></div>

            <div className={styles.galleryContent}>
              <h3>{photo.title}</h3>
              <p>{photo.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
