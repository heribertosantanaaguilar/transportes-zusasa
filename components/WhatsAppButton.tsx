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
          position: fixed !important;
          right: 28px !important;
          bottom: 28px !important;
          z-index: 99999;
          width: 150px;
          height: 58px;
          border-radius: 999px;
          background: #25d366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          font-size: 18px;
          font-weight: 900;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          box-sizing: border-box;
          box-shadow: 0 18px 42px rgba(37, 211, 102, 0.32);
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .whatsappFloatButton {
            right: 18px !important;
            left: auto !important;
            bottom: 16px !important;
            transform: none !important;
            width: 128px !important;
            height: 50px !important;
            padding: 0 !important;
            font-size: 15px !important;
            max-width: calc(100vw - 36px) !important;
          }
        }

        @media (max-width: 380px) {
          .whatsappFloatButton {
            right: 16px !important;
            width: 120px !important;
            height: 48px !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </a>
  );
}
