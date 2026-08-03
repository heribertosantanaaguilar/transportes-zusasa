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
          width: auto;
          max-width: calc(100vw - 56px);
          min-width: 148px;
          height: 58px;
          padding: 0 26px;
          border-radius: 999px;
          background: #25d366;
          color: #ffffff;
          display: inline-flex;
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
          transform: translateZ(0);
          overflow: hidden;
        }

        .whatsappFloatButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 48px rgba(37, 211, 102, 0.38);
        }

        @media (max-width: 768px) {
          .whatsappFloatButton {
            right: 18px;
            bottom: 18px;
            min-width: 122px;
            height: 50px;
            padding: 0 17px;
            font-size: 15px;
            max-width: calc(100vw - 36px);
          }
        }

        @media (max-width: 380px) {
          .whatsappFloatButton {
            right: 16px;
            bottom: 16px;
            min-width: 116px;
            height: 48px;
            padding: 0 15px;
            font-size: 14.5px;
            max-width: calc(100vw - 32px);
          }
        }
      `}</style>
    </a>
  );
}
