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
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=85",
    },
  ];

  return (
    <section className="zusasaGallerySection">
      <div className="zusasaGalleryHeader">
        <span>Operación logística</span>

        <h2>Una operación enfocada en carga contenerizada.</h2>

        <p>
          Nuestro trabajo se desarrolla en un entorno donde la coordinación, la
          puntualidad y la comunicación son esenciales para mantener en movimiento
          las operaciones de importación y exportación.
        </p>
      </div>

      <div className="zusasaGalleryGrid">
        {photos.map((photo) => (
          <article className="zusasaGalleryCard" key={photo.title}>
            <img src={photo.image} alt={photo.title} />

            <div>
              <h3>{photo.title}</h3>
              <p>{photo.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
