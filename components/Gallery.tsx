export default function Gallery() {
  const photos = [
    {
      title: "Operación portuaria",
      text: "Movimiento de contenedores y orientación  logística.",
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=85",
    },
    {
      title: "Patio de maniobras",
      text: "Coordinación terrestre para traslado y manejo de carga contenerizada.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=85",
    },
  ];

  return (
    <section className="zusasaGallerySection">
      <div className="zusasaGalleryHeader">
        <span>Operación logística</span>
        <h2>Imágenes que reflejan el entorno donde trabajamos.</h2>
        <p>
          Incorporamos fotografías temporales de referencia para reforzar la
          imagen portuaria y logística de Transportes ZUSASA.
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
