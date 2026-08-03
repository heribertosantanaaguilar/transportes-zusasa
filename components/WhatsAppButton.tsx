export default function WhatsAppButton() {
  const whatsappMessage =
    "Hola, quiero solicitar información sobre los servicios de Transportes ZUSASA.";

  const whatsappLink = `https://wa.me/522224556651?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsappFloatButton"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
      <style>{`
        .whatsappFloatButton {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 9999;
          min-width: 150px;
          height: 58px;
          padding: 0 26px;
          border-radius: 999px;
          background: #25d366;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 900;
          line-height: 1;
          text-decoration: none;
          box-shadow: 0 18px 42px rgba(37, 211, 102, 0.32);
          white-space: nowrap;
          box-sizing: border-box;
          max-width: calc(100vw - 40px);
          overflow: hidden;
        }

        .whatsappFloatButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 48px rgba(37, 211, 102, 0.38);
        }

        @media (max-width: 768px) {
          .whatsappFloatButton {
            right: 16px;
            bottom: 18px;
            min-width: 132px;
            height: 54px;
            padding: 0 20px;
            font-size: 16px;
            max-width: calc(100vw - 32px);
          }
        }

        @media (max-width: 420px) {
          .whatsappFloatButton {
            right: 14px;
            bottom: 16px;
            min-width: 126px;
            height: 52px;
            padding: 0 18px;
            font-size: 15.5px;
          }
        }
      `}</style>
    </a>
  );
}
