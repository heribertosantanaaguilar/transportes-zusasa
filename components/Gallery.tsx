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
  ];

  return (
    <section className="zusasaGallery">
      <div className="sectionHeader">
        <span>Operación logística</span>

        <h2>Movimiento, resguardo y apoyo operativo en Manzanillo.</h2>

        <p>
          Nuestra operación está enfocada en atender necesidades locales de
          transporte, coordinación y resguardo de carga contenerizada vinculada
          a actividades portuarias de importación y exportación.
        </p>
      </div>

      <div className="zusasaGalleryGrid">
        {photos.map((photo) => (
          <article className="zusasaGalleryCard" key={photo.title}>
            <img
              className="zusasaGalleryImage"
              src={photo.image}
              alt={photo.title}
            />

            <div className="zusasaGalleryOverlay"></div>

            <div className="zusasaGalleryContent">
              <h3>{photo.title}</h3>
              <p>{photo.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
