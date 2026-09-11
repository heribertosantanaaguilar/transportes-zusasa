import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";

type EnglishRutaLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  mainRoute: string;
  zones: string[];
  services: string[];
  sectors: string[];
};

const relatedRoutes = [
  {
    title: "National container transport from Manzanillo",
    href: "/en/national-container-transport-from-manzanillo",
  },
  {
    title: "Manzanillo to Guadalajara / El Salto",
    href: "/en/container-transport-manzanillo-guadalajara",
  },
  {
    title: "Manzanillo to Monterrey / Apodaca",
    href: "/en/container-transport-manzanillo-monterrey",
  },
  {
    title: "Manzanillo to Querétaro / Bajío",
    href: "/en/container-transport-manzanillo-queretaro",
  },
  {
    title: "ISO tank transport from Manzanillo",
    href: "/en/iso-tank-transport-manzanillo",
  },
];

export default function EnglishRutaLanding({
  eyebrow,
  title,
  description,
  mainRoute,
  zones,
  services,
  sectors,
}: EnglishRutaLandingProps) {
  const emailSubject = `Quote request - ${mainRoute}`;

  const emailBody = `Hello, I would like to request a quote with Transportes ZUSASA.

Route of interest:
${mainRoute}

Service needed:
- National container transport:
- National ISO tank transport:
- Drayage in Manzanillo:
- Container storage yard:

Shipment details:
- Company:
- Contact name:
- Phone:
- Container or ISO tank type:
- Origin:
- Destination:
- Estimated date:
- Approximate weight:
- Additional comments or operating requirements:`;

  const quoteEmailLink = `mailto:cotizaciones@transporteszusasa.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const faqs = [
    {
      question: `Does Transportes ZUSASA provide ${mainRoute.toLowerCase()}?`,
      answer:
        "Yes. Transportes ZUSASA reviews and coordinates container and ISO tank transport operations from Manzanillo according to the route, availability, equipment type, documentation, cargo weight and operating conditions.",
    },
    {
      question: "What information is needed to request a quote?",
      answer:
        "To request a quote, we recommend sharing your company name, contact person, phone number, container or ISO tank type, origin, destination, estimated date, approximate cargo weight, cargo type and any special operating requirements.",
    },
    {
      question: "Can you support drayage services in Manzanillo?",
      answer:
        "Yes. We can support drayage services in Manzanillo, subject to availability and operating conditions. This may complement national transport operations that require local coordination before departure.",
    },
    {
      question: "Do you offer container or ISO tank storage support?",
      answer:
        "Yes. Transportes ZUSASA can support temporary storage options in a maneuvering yard in Manzanillo, subject to availability, equipment type, cargo type and the specific requirements of the operation.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "You can request a quote by sending your shipment details to cotizaciones@transporteszusasa.com or by using the contact buttons available on this page.",
    },
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <Navbar />

      <main className="englishRoutePage">
        <section className="englishRouteHero">
          <div className="englishRouteHeroContent">
            <span>{eyebrow}</span>

            <h1>{title}</h1>

            <p>{description}</p>

            <div className="englishRouteActions">
              <a href={quoteEmailLink} className="englishRoutePrimaryButton">
                Request a quote
              </a>

              <a href="/en#contact" className="englishRouteSecondaryButton">
                Contact our logistics team
              </a>
            </div>
          </div>
        </section>

        <section className="englishRouteIntro">
          <div>
            <span>Specialized logistics support</span>

            <h2>Container and ISO tank coordination from Manzanillo.</h2>
          </div>

          <p>
            Transportes ZUSASA supports companies that need to move
            containerized cargo from the Port of Manzanillo to industrial
            destinations in Mexico. Each request is reviewed according to route,
            cargo type, documentation, operating conditions, availability and
            shipment requirements.
          </p>
        </section>

        <section className="englishRouteGridSection">
          <div className="englishRouteInfoCard">
            <h2>Areas covered on this route</h2>

            <div className="englishRouteList">
              {zones.map((zone) => (
                <p key={zone}>{zone}</p>
              ))}
            </div>
          </div>

          <div className="englishRouteInfoCard dark">
            <h2>Applicable services</h2>

            <div className="englishRouteList">
              {services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="englishRouteSectors">
          <div className="englishRouteSectorsHeader">
            <span>Potential clients</span>

            <h2>Designed for companies with recurring logistics needs.</h2>

            <p>
              This service may be useful for importers, manufacturers, logistics
              operators, trading companies, customs brokers and businesses that
              receive containerized cargo through Manzanillo.
            </p>
          </div>

          <div className="englishRouteSectorsGrid">
            {sectors.map((sector) => (
              <article key={sector}>
                <h3>{sector}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="englishRouteFaqSection">
          <div className="englishRouteFaqHeader">
            <span>Frequently asked questions</span>

            <h2>Useful information before requesting a quote.</h2>

            <p>
              These questions clarify the general scope of the service and the
              basic shipment details needed to review a logistics operation from
              Manzanillo.
            </p>
          </div>

          <div className="englishRouteFaqGrid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="englishRelatedRoutes">
          <div className="englishRelatedRoutesHeader">
            <span>Related routes</span>

            <h2>Explore other logistics options from Manzanillo.</h2>
          </div>

          <div className="englishRelatedRoutesGrid">
            {relatedRoutes.map((route) => (
              <a href={route.href} key={route.href}>
                {route.title}
                <span>View page →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="englishRouteQuoteBlock">
          <div>
            <span>Quote request</span>

            <h2>Need to review an operation on this route?</h2>

            <p>
              Send us the basic shipment details and our team will review
              availability, operating conditions and coordination options.
            </p>
          </div>

          <a href={quoteEmailLink}>Request a quote →</a>
        </section>
      </main>

      <footer className="englishRouteFooter">
        <div className="englishRouteFooterBrand">
          <img src="/images/logo-zusasa.png" alt="Transportes ZUSASA" />

          <div>
            <h2>Transportes ZUSASA</h2>

            <p>
              National container and ISO tank transport coordination from
              Manzanillo, Mexico.
            </p>
          </div>
        </div>

        <div className="englishRouteFooterBottom">
          <p>© {new Date().getFullYear()} Transportes ZUSASA.</p>

          <a href="/en">Back to English homepage</a>
        </div>
      </footer>

      <WhatsAppButton />

      <style>{`
        .englishRoutePage {
          background: #f5f6f8;
          color: #0a1d36;
          overflow: hidden;
        }

        .englishRouteHero {
          min-height: 660px;
          padding: 120px 7% 90px;
          display: flex;
          align-items: center;
          color: #ffffff;
          background:
            linear-gradient(
              90deg,
              rgba(5, 24, 46, 0.98) 0%,
              rgba(5, 24, 46, 0.9) 42%,
              rgba(5, 24, 46, 0.68) 70%,
              rgba(5, 24, 46, 0.42) 100%
            ),
            url("/images/transporte-nacional-zusasa-2.jpeg");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .englishRouteHeroContent {
          max-width: 980px;
        }

        .englishRouteHeroContent > span,
        .englishRouteIntro span,
        .englishRouteSectorsHeader span,
        .englishRouteFaqHeader span,
        .englishRelatedRoutesHeader span,
        .englishRouteQuoteBlock span {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: #f26522;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 15px;
          margin-bottom: 22px;
        }

        .englishRouteHeroContent > span::before,
        .englishRouteIntro span::before,
        .englishRouteSectorsHeader span::before,
        .englishRouteFaqHeader span::before,
        .englishRelatedRoutesHeader span::before,
        .englishRouteQuoteBlock span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
          flex: 0 0 auto;
        }

        .englishRouteHero h1 {
          margin: 0 0 28px;
          color: #ffffff;
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1.02;
          letter-spacing: -2px;
          font-weight: 900;
          max-width: 1080px;
        }

        .englishRouteHero p {
          margin: 0;
          max-width: 880px;
          color: rgba(255, 255, 255, 0.88);
          font-size: 20px;
          line-height: 1.72;
        }

        .englishRouteActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
        }

        .englishRoutePrimaryButton,
        .englishRouteSecondaryButton,
        .englishRouteQuoteBlock a {
          min-height: 60px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 900;
          text-decoration: none;
          text-align: center;
        }

        .englishRoutePrimaryButton,
        .englishRouteQuoteBlock a {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .englishRouteSecondaryButton {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.65);
        }

        .englishRouteIntro {
          padding: 90px 7%;
          background: #ffffff;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 54px;
          align-items: start;
        }

        .englishRouteIntro h2,
        .englishRouteInfoCard h2,
        .englishRouteSectorsHeader h2,
        .englishRouteFaqHeader h2,
        .englishRelatedRoutesHeader h2,
        .englishRouteQuoteBlock h2 {
          margin: 0;
          color: #0a1d36;
          font-size: clamp(34px, 4.8vw, 64px);
          line-height: 1.05;
          letter-spacing: -1.6px;
          font-weight: 900;
        }

        .englishRouteIntro p {
          margin: 0;
          color: #3b4a5a;
          font-size: 19px;
          line-height: 1.78;
        }

        .englishRouteGridSection {
          padding: 90px 7%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .englishRouteInfoCard {
          background: #ffffff;
          border-radius: 32px;
          padding: 42px;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.1);
          border-top: 7px solid #f26522;
        }

        .englishRouteInfoCard.dark {
          background: #0a1d36;
          color: #ffffff;
        }

        .englishRouteInfoCard.dark h2 {
          color: #ffffff;
        }

        .englishRouteList {
          display: grid;
          gap: 12px;
          margin-top: 30px;
        }

        .englishRouteList p {
          margin: 0;
          padding: 16px 18px;
          border-radius: 16px;
          background: #f5f6f8;
          color: #0a1d36;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 800;
        }

        .englishRouteInfoCard.dark .englishRouteList p {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.9);
        }

        .englishRouteSectors {
          padding: 90px 7%;
          background: #ffffff;
        }

        .englishRouteSectorsHeader,
        .englishRouteFaqHeader,
        .englishRelatedRoutesHeader {
          max-width: 980px;
          margin-bottom: 46px;
        }

        .englishRouteSectorsHeader p,
        .englishRouteFaqHeader p {
          margin: 24px 0 0;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.7;
        }

        .englishRouteSectorsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .englishRouteSectorsGrid article {
          background: #f5f6f8;
          border-radius: 22px;
          padding: 26px 24px;
          border-left: 6px solid #f26522;
        }

        .englishRouteSectorsGrid h3 {
          margin: 0;
          color: #0a1d36;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 900;
        }

        .englishRouteFaqSection {
          padding: 90px 7%;
          background: #f5f6f8;
        }

        .englishRouteFaqGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .englishRouteFaqGrid article {
          background: #ffffff;
          border-radius: 26px;
          padding: 30px;
          border-left: 6px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.08);
        }

        .englishRouteFaqGrid h3 {
          margin: 0 0 14px;
          color: #0a1d36;
          font-size: 22px;
          line-height: 1.25;
          font-weight: 900;
        }

        .englishRouteFaqGrid p {
          margin: 0;
          color: #3b4a5a;
          font-size: 16px;
          line-height: 1.68;
        }

        .englishRelatedRoutes {
          padding: 90px 7%;
          background: #ffffff;
        }

        .englishRelatedRoutesGrid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
        }

        .englishRelatedRoutesGrid a {
          min-height: 180px;
          padding: 26px 24px;
          border-radius: 24px;
          background: #f5f6f8;
          color: #0a1d36;
          text-decoration: none;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 900;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-top: 6px solid #f26522;
          box-shadow: 0 22px 60px rgba(10, 29, 54, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .englishRelatedRoutesGrid a:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 75px rgba(10, 29, 54, 0.14);
        }

        .englishRelatedRoutesGrid span {
          color: #f26522;
          font-size: 15px;
          font-weight: 900;
        }

        .englishRouteQuoteBlock {
          margin: 0 7% 100px;
          padding: 46px;
          border-radius: 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 34px;
          align-items: center;
          border-left: 8px solid #f26522;
          box-shadow: 0 28px 80px rgba(10, 29, 54, 0.18);
        }

        .englishRouteQuoteBlock h2 {
          color: #ffffff;
        }

        .englishRouteQuoteBlock p {
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.84);
          font-size: 18px;
          line-height: 1.65;
        }

        .englishRouteQuoteBlock a {
          justify-self: end;
          border-radius: 999px;
        }

        .englishRouteFooter {
          padding: 60px 7% 34px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
        }

        .englishRouteFooterBrand {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 34px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .englishRouteFooterBrand img {
          width: 86px;
          height: 86px;
          object-fit: cover;
          background: #ffffff;
          border-radius: 20px;
        }

        .englishRouteFooterBrand h2 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 900;
        }

        .englishRouteFooterBrand p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          line-height: 1.6;
        }

        .englishRouteFooterBottom {
          display: flex;
          justify-content: space-between;
          gap: 22px;
          margin-top: 26px;
        }

        .englishRouteFooterBottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 14px;
        }

        .englishRouteFooterBottom a {
          color: #f26522;
          font-weight: 900;
          text-decoration: none;
          font-size: 14px;
        }

        @media (max-width: 1200px) {
          .englishRelatedRoutesGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 950px) {
          .englishRouteIntro,
          .englishRouteGridSection,
          .englishRouteQuoteBlock {
            grid-template-columns: 1fr;
          }

          .englishRouteSectorsGrid,
          .englishRouteFaqGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .englishRouteQuoteBlock a {
            justify-self: start;
          }
        }

        @media (max-width: 650px) {
          .englishRouteHero {
            min-height: auto;
            padding: 86px 24px 74px;
          }

          .englishRouteHero h1 {
            font-size: clamp(36px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .englishRouteHero p,
          .englishRouteIntro p,
          .englishRouteSectorsHeader p,
          .englishRouteFaqHeader p,
          .englishRouteQuoteBlock p {
            font-size: 17px;
            line-height: 1.7;
          }

          .englishRouteActions {
            flex-direction: column;
          }

          .englishRoutePrimaryButton,
          .englishRouteSecondaryButton,
          .englishRouteQuoteBlock a {
            width: 100%;
          }

          .englishRouteIntro,
          .englishRouteGridSection,
          .englishRouteSectors,
          .englishRouteFaqSection,
          .englishRelatedRoutes {
            padding: 74px 24px;
          }

          .englishRouteInfoCard {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .englishRouteSectorsGrid,
          .englishRouteFaqGrid,
          .englishRelatedRoutesGrid {
            grid-template-columns: 1fr;
          }

          .englishRouteFaqGrid article {
            padding: 26px 24px;
            border-radius: 24px;
          }

          .englishRouteFaqGrid h3 {
            font-size: 20px;
          }

          .englishRelatedRoutesGrid a {
            min-height: auto;
          }

          .englishRouteQuoteBlock {
            margin: 0 24px 80px;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .englishRouteFooter {
            padding: 52px 24px 30px;
          }

          .englishRouteFooterBrand {
            align-items: flex-start;
          }

          .englishRouteFooterBottom {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
