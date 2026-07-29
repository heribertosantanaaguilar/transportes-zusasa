export default function OperationPhotos() {
  const photos = [
    {
      title: "Transporte nacional de contenedores",
      text: "Coordinación de unidades con contenedores para operaciones desde Manzanillo hacia destinos nacionales.",
      image: "/images/operacion-camion-doble-zusasa.png.png",
    },
    {
      title: "Movimiento de contenedores",
      text: "Apoyo operativo para carga contenerizada en rutas locales y nacionales.",
      image: "/images/operacion-camiones-dobles-zusasa.jpeg.jpeg",
    },
    {
      title: "Operación con ISO tanques",
      text: "Atención a servicios relacionados con ISO tanques, sujetos a revisión operativa y documental.",
      image: "/images/operacion-iso-tanques-zusasa.jpeg.jpeg",
    },
  ];

  return (
    <section className="operationPhotosSection">
      <div className="operationPhotosContainer">
        <div className="operationPhotosHeader">
          <span>Operación en campo</span>

          <h2>Imágenes reales de operación logística.</h2>

          <p>
            Integramos movimiento local, resguardo y transporte nacional de
            contenedores e ISO tanques desde Manzanillo, con atención directa y
            coordinación operativa.
          </p>
        </div>

        <div className="operationPhotosGrid">
          {photos.map((photo) => (
            <article className="operationPhotoCard" key={photo.title}>
              <img src={photo.image} alt={photo.title} />

              <div className="operationPhotoText">
                <h3>{photo.title}</h3>
                <p>{photo.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .operationPhotosSection {
          padding: 90px 7%;
          background: #f5f6f8;
          overflow: hidden;
        }

        .operationPhotosContainer {
          max-width: 1180px;
          margin: 0 auto;
        }

        .operationPhotosHeader {
          max-width: 900px;
          margin-bottom: 44px;
        }

        .operationPhotosHeader span {
          display: inline-block;
          color: #f26522;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .operationPhotosHeader h2 {
          margin: 0 0 22px;
          color: #0a1d36;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .operationPhotosHeader p {
          margin: 0;
          max-width: 850px;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.7;
        }

        .operationPhotosGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }

        .operationPhotoCard {
          background: #ffffff;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
          border-bottom: 7px solid #f26522;
        }

        .operationPhotoCard img {
          display: block;
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .operationPhotoText {
          padding: 30px 30px 34px;
        }

        .operationPhotoText h3 {
          margin: 0 0 14px;
          color: #0a1d36;
          font-size: 26px;
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.5px;
        }

        .operationPhotoText p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.65;
        }

        @media (max-width: 1000px) {
          .operationPhotosGrid {
            grid-template-columns: 1fr;
          }

          .operationPhotoCard img {
            height: 300px;
          }
        }

        @media (max-width: 650px) {
          .operationPhotosSection {
            padding: 72px 7%;
          }

          .operationPhotosHeader {
            margin-bottom: 32px;
          }

          .operationPhotosHeader h2 {
            font-size: clamp(32px, 11vw, 50px);
            letter-spacing: -1px;
          }

          .operationPhotosHeader p {
            font-size: 16.5px;
          }

          .operationPhotoCard {
            border-radius: 28px;
          }

          .operationPhotoCard img {
            height: 230px;
          }

          .operationPhotoText {
            padding: 26px 24px 30px;
          }

          .operationPhotoText h3 {
            font-size: 24px;
          }

          .operationPhotoText p {
            font-size: 15.8px;
          }
        }
      `}</style>
    </section>
  );
}
