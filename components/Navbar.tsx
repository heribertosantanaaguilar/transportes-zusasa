"use client";

export default function Navbar() {
  return (
    <>
      <header className="zusasaNavbar">
        <div className="zusasaNavbarInner">
          <a href="/#inicio" className="zusasaBrand" aria-label="Transportes ZUSASA">
            <div className="zusasaBrandLogoBox">
              <img
                src="/images/logo-zusasa.png"
                alt="Transportes ZUSASA"
                className="zusasaBrandLogo"
              />
            </div>

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
            max-width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 9998;
            background: linear-gradient(135deg, #0a1d36, #263a50);
            box-shadow: 0 16px 45px rgba(10, 29, 54, 0.18);
            overflow: hidden;
          }

          .zusasaNavbarSpacer {
            width: 100%;
            height: 132px;
            flex: 0 0 auto;
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
            box-sizing: border-box;
          }

          .zusasaBrand {
            display: inline-flex;
            align-items: center;
            gap: 16px;
            text-decoration: none;
            flex: 0 0 auto;
            min-width: 0;
          }

          .zusasaBrandLogoBox {
            width: 96px;
            height: 96px;
            border-radius: 24px;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
            overflow: hidden;
            flex: 0 0 auto;
          }

          .zusasaBrandLogo {
            width: 96px;
            height: 96px;
            object-fit: contain;
            display: block;
            transform: scale(1.55);
            transform-origin: center;
          }

          .zusasaBrandText {
            display: flex;
            flex-direction: column;
            line-height: 1;
            min-width: 0;
          }

          .zusasaBrandText span {
            color: rgba(255, 255, 255, 0.88);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 6px;
            margin-bottom: 8px;
            white-space: nowrap;
          }

          .zusasaBrandText strong {
            color: #ffffff;
            font-size: 42px;
            font-weight: 900;
            letter-spacing: 1px;
            white-space: nowrap;
          }

          .zusasaNavLinks {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 34px;
            flex: 1 1 auto;
            min-width: 0;
            max-width: 100%;
            overflow: hidden;
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
            .zusasaNavbarSpacer {
              height: 202px;
            }

            .zusasaNavbarInner {
              flex-wrap: wrap;
              gap: 18px;
            }

            .zusasaNavLinks {
              order: 3;
              width: 100%;
              max-width: 100%;
              justify-content: flex-start;
              gap: 12px;
              overflow-x: auto;
              overflow-y: hidden;
              padding: 4px 0 6px;
              scrollbar-width: none;
              overscroll-behavior-x: contain;
              -webkit-overflow-scrolling: touch;
            }

            .zusasaNavLinks::-webkit-scrollbar {
              display: none;
            }

            .zusasaNavLinks a {
              flex: 0 0 auto;
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
              width: 100%;
              max-width: 100%;
              overflow: hidden;
            }

            .zusasaNavbarSpacer {
              height: 244px;
            }

            .zusasaNavbarInner {
              width: 100%;
              max-width: 100%;
              padding: 16px 6%;
              overflow: hidden;
            }

            .zusasaBrand {
              width: 100%;
              max-width: 100%;
              justify-content: center;
              overflow: hidden;
            }

            .zusasaBrandLogoBox {
              width: 92px;
              height: 92px;
              border-radius: 22px;
            }

            .zusasaBrandLogo {
              width: 92px;
              height: 92px;
              transform: scale(1.55);
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
              display: flex;
              flex-wrap: nowrap;
              justify-content: flex-start;
              gap: 12px;
              overflow-x: auto;
              overflow-y: hidden;
              padding: 6px 0 8px;
              scrollbar-width: none;
              overscroll-behavior-x: contain;
              -webkit-overflow-scrolling: touch;
            }

            .zusasaNavLinks::-webkit-scrollbar {
              display: none;
            }

            .zusasaNavLinks a {
              flex: 0 0 auto;
              font-size: 15px;
              padding: 13px 22px;
              border-radius: 999px;
              white-space: nowrap;
            }
          }

          @media (max-width: 420px) {
            .zusasaNavbarSpacer {
              height: 226px;
            }

            .zusasaNavbarInner {
              padding: 14px 5%;
            }

            .zusasaBrand {
              gap: 12px;
            }

            .zusasaBrandLogoBox {
              width: 84px;
              height: 84px;
              border-radius: 20px;
            }

            .zusasaBrandLogo {
              width: 84px;
              height: 84px;
              transform: scale(1.55);
            }

            .zusasaBrandText strong {
              font-size: 32px;
            }

            .zusasaBrandText span {
              font-size: 10.5px;
              letter-spacing: 4px;
            }

            .zusasaNavLinks a {
              font-size: 14.5px;
              padding: 12px 20px;
            }
          }
        `}</style>
      </header>

      <div className="zusasaNavbarSpacer" />
    </>
  );
}
