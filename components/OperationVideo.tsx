export default function OperationVideo() {
  return (
    <section className="operationVideoSection">
      <div className="operationVideoContainer">
        <div className="operationVideoText">
          <span>Evidencia operativa real</span>

          <h2>Movimiento de doble contenedor en patio de maniobras.</h2>

          <p>
            Incorporamos evidencia real de nuestras operaciones para mostrar la
            coordinación, capacidad operativa y experiencia en el manejo de
            carga contenerizada desde Manzanillo.
          </p>
        </div>

        <div className="operationVideoFrame">
          <video
            controls
            preload="metadata"
            playsInline
          >
            <source
src="/public/videos/camion-doble-contenedor-patio-zusasa_sin-audio.mp4"
              type="video/mp4"
            />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </div>

      <style>{`
        .operationVideoSection {
          width: 100%;
          max-width: 100%;
          padding: 100px 7%;
          background: #ffffff;
          color: #0a1d36;
          overflow: hidden;
        }

        .operationVideoContainer {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 54px;
          align-items: center;
        }

        .operationVideoText span {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #f26522;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 15px;
          margin-bottom: 20px;
        }

        .operationVideoText span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
        }

        .operationVideoText h2 {
          margin: 0 0 24px;
          color: #0a1d36;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .operationVideoText p {
          margin: 0;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.75;
        }

        .operationVideoFrame {
          background: #0a1d36;
          padding: 14px;
          border-radius: 32px;
          box-shadow: 0 30px 80px rgba(10, 29, 54, 0.18);
          border-bottom: 7px solid #f26522;
        }

        .operationVideoFrame video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 22px;
          background: #000000;
        }

        @media (max-width: 950px) {
          .operationVideoContainer {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .operationVideoSection {
            padding: 76px 24px;
          }

          .operationVideoContainer {
            gap: 34px;
          }

          .operationVideoText h2 {
            font-size: clamp(34px, 11vw, 50px);
            letter-spacing: -1.1px;
          }

          .operationVideoText p {
            font-size: 17px;
            line-height: 1.7;
          }

          .operationVideoFrame {
            padding: 10px;
            border-radius: 26px;
          }

          .operationVideoFrame video {
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
}
