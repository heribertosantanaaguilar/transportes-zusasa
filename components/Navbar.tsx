"use client";

export default function Navbar() {
  return (
    <header className="zusasaNavbar">
      <div className="zusasaNavbarInner">
        <a href="/#inicio" className="zusasaBrand" aria-label="Transportes ZUSASA">
          <img
            src="/images/logo-zusasa.png"
            alt="Transportes ZUSASA"
            className="zusasaBrandLogo"
          />

          <div className="zusasaBrandText">
            <span>TRANSPORTES</span>
            <strong>ZUSASA</strong>
          </div>
        </a>

        <nav className="zusasaNavLinks" aria-label="Navegación principal">
          <a href="/#inicio">Inicio</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#sectores">Sectores</a>
          <a href="/#contacto">Contacto</a>
        </nav>

        <a href="/cotizacion" className="zusasaQuoteButton">
          Cotizar ahora
        </a>
      </div>

      <style>{`
        .zusasaNavbar {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 9998;
          background: linear-gradient(135deg, #0a1d36, #263a50);
          box-shadow: 0 16px 45px rgba(10, 29, 54, 0.18);
          overflow: hidden;
        }

        .zusasaNavbarInner {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 18px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 34px;
        }

        .zusasaBrand {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          flex: 0 0 auto;
        }

        .zusasaBrandLogo {
          width: 86px;
          height: 86px;
          border-radius: 22px;
          object-fit: contain;
          background: #ffffff;
          padding: 9px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
          display: block;
        }

        .zusasaBrandText {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .zusasaBrandText span {
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 6px;
          margin-bottom: 8px;
        }

        .zusasaBrandText strong {
          color: #ffffff;
          font-size: 42px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .zusasaNavLinks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 34px;
          flex: 1 1 auto;
        }

        .zusasaNavLinks a {
          color: #ffffff;
          text-decoration: none;
          font-size: 18px;
          font-weight: 900;
          line-height: 1;
          position: relative;
          padding: 14px 0;
          white-space: nowrap;
        }

        .zusasaNavLinks a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 4px;
          height: 4px;
          border-radius: 999px;
          background: #f26522;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s ease;
        }

        .zusasaNavLinks a:hover::after {
          transform: scaleX(1);
        }

        .zusasaQuoteButton {
          min-height: 64px;
          padding: 0 34px;
          border-radius: 10px;
          background: #f26522;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 18px;
          font-weight: 900;
          white-space: nowrap;
          box-shadow: 0 20px 42px rgba(242, 101, 34, 0.32);
          flex: 0 0 auto;
        }

        @media (max-width: 1100px) {
          .zusasaNavbarInner {
            flex-wrap: wrap;
            gap: 18px;
          }

          .zusasaNavLinks {
            order: 3;
            width: 100%;
            justify-content: flex-start;
            overflow-x: auto;
            gap: 12px;
            padding: 4px 0 6px;
            scrollbar-width: none;
          }

          .zusasaNavLinks::-webkit-scrollbar {
            display: none;
          }

          .zusasaNavLinks a {
            padding: 14px 20px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.12);
          }

          .zusasaNavLinks a::after {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .zusasaNavbar {
            overflow: hidden;
          }

          .zusasaNavbarInner {
            padding: 16px 6%;
          }

          .zusasaBrand {
            width: 100%;
            justify-content: center;
          }

          .zusasaBrandLogo {
            width: 88px;
            height: 88px;
            border-radius: 20px;
          }

          .zusasaBrandText span {
            font-size: 12px;
            letter-spacing: 5px;
          }

          .zusasaBrandText strong {
            font-size: 38px;
          }

          .zusasaQuoteButton {
            display: none;
          }

          .zusasaNavLinks {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            padding: 6px 0 8px;
          }

          .zusasaNavLinks a {
            flex: 0 0 auto;
            font-size: 16px;
            padding: 13px 20px;
          }
        }

        @media (max-width: 420px) {
          .zusasaBrandLogo {
            width: 78px;
            height: 78px;
          }

          .zusasaBrandText strong {
            font-size: 34px;
          }

          .zusasaBrandText span {
            font-size: 11px;
            letter-spacing: 4px;
          }

          .zusasaNavLinks a {
            font-size: 15px;
            padding: 12px 18px;
          }
        }
      `}</style>
    </header>
  );
}
