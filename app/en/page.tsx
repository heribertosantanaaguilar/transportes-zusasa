import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WhatsAppButton from "../../components/WhatsAppButton";
import StructuredData from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "Transportes ZUSASA | National container transport from Manzanillo",
  description:
    "Transportes ZUSASA coordinates national container and ISO tank transport from Manzanillo to Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, Mexico City, Toluca and Puebla. Drayage, container storage yard and operational follow-up.",
  alternates: {
    canonical: "https://www.transporteszusasa.com/en",
    languages: {
      "es-MX": "https://www.transporteszusasa.com",
      "en-US": "https://www.transporteszusasa.com/en",
      "x-default": "https://www.transporteszusasa.com",
    },
  },
  openGraph: {
    title: "Transportes ZUSASA | National container transport from Manzanillo",
    description:
      "National container and ISO tank transport from Manzanillo to key industrial destinations in Mexico.",
    url: "https://www.transporteszusasa.com/en",
    siteName: "Transportes ZUSASA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo-zusasa.png",
        width: 1200,
        height: 630,
        alt: "Transportes ZUSASA",
      },
    ],
  },
};

const quoteEmailLink =
  "mailto:cotizaciones@transporteszusasa.com?subject=Quote%20request%20-%20Transportes%20ZUSASA&body=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20Transportes%20ZUSASA%20service.%0A%0AService%20needed%3A%0A-%20National%20container%20transport%3A%0A-%20National%20ISO%20tank%20transport%3A%0A-%20Drayage%20in%20Manzanillo%3A%0A-%20Container%20storage%20yard%3A%0A%0AShipment%20details%3A%0A-%20Company%3A%0A-%20Contact%20name%3A%0A-%20Phone%3A%0A-%20Container%20or%20ISO%20tank%20type%3A%0A-%20Origin%3A%0A-%20Destination%3A%0A-%20Estimated%20date%3A%0A-%20Approximate%20weight%3A%0A-%20Additional%20comments%3A";

const services = [
  {
    title: "National container transport",
    text: "Coordination of national container trucking from Manzanillo to key industrial destinations in Mexico.",
    href: "/en/national-container-transport-from-manzanillo",
  },
  {
    title: "ISO tank transport",
    text: "Logistics coordination for ISO tank movements from Manzanillo to industrial areas across the country.",
    href: "/en/iso-tank-transport-manzanillo",
  },
  {
    title: "Drayage in Manzanillo",
    text: "Local container and ISO tank movements within the port and logistics area of Manzanillo.",
    href: "/en#contact",
  },
  {
    title: "Container storage yard",
    text: "Temporary container storage in a maneuvering yard, subject to availability and operating conditions.",
    href: "/en#contact",
  },
];

const routes = [
  {
    title: "Manzanillo → Guadalajara / El Salto",
    text: "Container and ISO tank transport from Manzanillo to Guadalajara, El Salto, Zapopan and the Jalisco metropolitan industrial area.",
    href: "/en/container-transport-manzanillo-guadalajara",
  },
  {
    title: "Manzanillo → Monterrey / Apodaca",
    text: "Container and ISO tank transport from Manzanillo to Monterrey, Apodaca, Santa Catarina and industrial areas in Nuevo León.",
    href: "/en/container-transport-manzanillo-monterrey",
  },
  {
    title: "Manzanillo → Querétaro / Bajío",
    text: "Container and ISO tank transport from Manzanillo to Querétaro, San Juan del Río and Bajío industrial areas.",
    href: "/en/container-transport-manzanillo-queretaro",
  },
  {
    title: "ISO tank transport from Manzanillo",
    text: "ISO tank transport coordination from Manzanillo to national industrial destinations in Mexico.",
    href: "/en/iso-tank-transport-manzanillo",
  },
];

const otherRoutes = [
  "Manzanillo → Mexico City / State of Mexico",
  "Manzanillo → Toluca / Lerma",
  "Manzanillo → Puebla",
  "Manzanillo → Bajío industrial corridor",
];

const sectors = [
  "Importers",
  "Manufacturing",
  "Automotive suppliers",
  "Plastics and packaging",
  "Industrial distribution",
  "Logistics operators",
  "Trading companies",
  "Customs brokers",
];

export default function EnglishHomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />

      <main className="englishHomePage">
        <section className="englishHero" id="home">
          <div className="englishHeroContent">
            <span>Port of Manzanillo</span>

            <h1>
              National container transport from <strong>Manzanillo</strong>.
            </h1>

            <p>
              Transportes ZUSASA coordinates national container and ISO tank
              transport from Manzanillo to key industrial destinations in
              Mexico, integrating drayage, container storage, operational
              support and clear shipment follow-up.
            </p>

            <div className="englishActions">
              <a href={quoteEmailLink} className="primaryEnglishButton">
                Request a quote
              </a>

              <a href="#services" className="secondaryEnglishButton">
                View services →
              </a>
            </div>
          </div>
        </section>

        <section className="englishIntro" id="about">
          <div>
            <span>About Transportes ZUSASA</span>
            <h2>Logistics coordination from Manzanillo, Colima.</h2>
          </div>

          <p>
            We support companies that need to move containerized cargo from the
            Port of Manzanillo to national destinations. Each request is reviewed
            according to route, cargo characteristics, documentation, weight,
            availability and operating conditions.
          </p>
        </section>

        <section className="englishServices" id="services">
          <div className="englishSectionHeader">
            <span>Services</span>
            <h2>Solutions for containers and ISO tanks.</h2>
            <p>
              Our work focuses on practical logistics coordination, direct
              communication and operational follow-up for companies moving cargo
              from Manzanillo.
            </p>
          </div>

          <div className="englishServicesGrid">
            {services.map((service) => (
              <a href={service.href} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <strong>Learn more →</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="englishRoutes" id="routes">
          <div className="englishSectionHeader">
            <span>National routes</span>
            <h2>Container transport from Manzanillo to industrial areas.</h2>
            <p>
              We coordinate national container and ISO tank transportation from
              Manzanillo to strategic logistics and industrial corridors in
              Mexico.
            </p>
          </div>

          <div className="englishRoutesGrid">
            {routes.map((route) => (
              <a href={route.href} key={route.title}>
                <strong>{route.title}</strong>
                <p>{route.text}</p>
                <span>View route →</span>
              </a>
            ))}
          </div>

          <div className="englishOtherRoutes">
            <h3>Other national destinations</h3>

            <div>
              {otherRoutes.map((route) => (
                <p key={route}>{route}</p>
              ))}
            </div>

            <a href={quoteEmailLink}>Request a route quote →</a>
          </div>
        </section>

        <section className="englishVideoBlock">
          <div className="englishVideoText">
            <span>Real operational evidence</span>
            <h2>Double container movement in a maneuvering yard.</h2>
            <p>
              We include real operational evidence to show our experience in
              coordinating container movements from Manzanillo.
            </p>
          </div>

          <div className="englishVideoFrame">
            <video controls preload="metadata" playsInline>
              <source
                src="/videos/camion-doble-contenedor-patio-zusasa_sin-audio.mp4"
                type="video/mp4"
              />
              Your browser cannot play this video.
            </video>
          </div>
        </section>

        <section className="englishSectors">
          <div className="englishSectionHeader">
            <span>Potential clients</span>
            <h2>Designed for companies with recurring logistics needs.</h2>
            <p>
              Our services may be useful for importers, manufacturers, logistics
              operators and companies that receive containerized cargo through
              Manzanillo.
            </p>
          </div>

          <div className="englishSectorsGrid">
            {sectors.map((sector) => (
              <article key={sector}>
                <h3>{sector}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="englishQuoteBlock">
          <div>
            <span>Quote request</span>
            <h2>Send us your shipment details.</h2>
            <p>
              Share the service required, origin, destination, container or ISO
              tank type, estimated date and approximate cargo weight. Our team
              will review the information and reply with clear guidance.
            </p>
          </div>

          <a href={quoteEmailLink}>Request a quote →</a>
        </section>

        <section className="englishContact" id="contact">
          <div>
            <span>Contact</span>
            <h2>Talk to our logistics team.</h2>
            <p>
              For quote requests, route validation or operating details, contact
              Transportes ZUSASA directly. Our team can assist you with national
              container transport, ISO tank logistics, drayage and storage
              support in Manzanillo.
            </p>
          </div>

          <div className="englishContactCard">
            <h3>Contact information</h3>

            <div className="englishContactItem">
              <strong>José Alberto Zúñiga Ramos</strong>
              <span>General Manager</span>
              <a href="tel:+522224556651">+52 222 455 6651</a>
              <a href="mailto:jzuniga@transporteszusasa.com">
                jzuniga@transporteszusasa.com
              </a>
            </div>

            <div className="englishContactItem">
              <strong>Sergio Sanmiguel Celis</strong>
              <span>Administration and Finance Director</span>
              <a href="tel:+523141069165">+52 314 106 9165</a>
              <a href="mailto:sergio.sanmiguel@transporteszusasa.com">
                sergio.sanmiguel@transporteszusasa.com
              </a>
            </div>

            <div className="englishContactItem">
              <strong>Heriberto Santana Aguilar</strong>
              <span>Logistics Coordination</span>
              <a href="tel:+523148721897">+52 314 872 1897</a>
              <a href="mailto:heriberto.santana@transporteszusasa.com">
                heriberto.santana@transporteszusasa.com
              </a>
            </div>

            <div className="englishContactDivider" />

            <div className="englishContactItem">
              <strong>Quotes</strong>
              <a href="mailto:cotizaciones@transporteszusasa.com">
                cotizaciones@transporteszusasa.com
              </a>
            </div>

            <div className="englishContactItem">
              <strong>Location</strong>
              <span>Manzanillo, Colima, Mexico</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="englishFooter">
        <div>
          <img src="/images/logo-zusasa.png" alt="Transportes ZUSASA" />
          <p>
            National container and ISO tank transport coordination from
            Manzanillo, Mexico.
          </p>
        </div>

        <p>© {new Date().getFullYear()} Transportes ZUSASA.</p>
      </footer>

      <WhatsAppButton />

      <style>{`
        .englishHomePage {
          background: #f5f6f8;
          color: #0a1d36;
          overflow: hidden;
        }

        .englishHero {
          min-height: 720px;
          padding: 120px 7% 96px;
          display: flex;
          align-items: center;
          color: #ffffff;
          background:
            linear-gradient(
              90deg,
              rgba(5, 24, 46, 0.98) 0%,
              rgba(5, 24, 46, 0.9) 42%,
              rgba(5, 24, 46, 0.62) 72%,
              rgba(5, 24, 46, 0.2) 100%
            ),
            url("/images/hero-zusasa-camion.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .englishHeroContent {
          max-width: 980px;
        }

        .englishHero span,
        .englishIntro span,
        .englishSectionHeader span,
        .englishVideoText span,
        .englishQuoteBlock span,
        .englishContact span {
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

        .englishHero span::before,
        .englishIntro span::before,
        .englishSectionHeader span::before,
        .englishVideoText span::before,
        .englishQuoteBlock span::before,
        .englishContact span::before {
          content: "";
          width: 48px;
          height: 4px;
          background: #f26522;
          border-radius: 999px;
          display: inline-block;
          flex: 0 0 auto;
        }

        .englishHero h1 {
          margin: 0 0 28px;
          color: #ffffff;
          font-size: clamp(48px, 6vw, 86px);
          line-height: 1.02;
          letter-spacing: -2px;
          font-weight: 900;
        }

        .englishHero h1 strong {
          color: #f26522;
        }

        .englishHero p {
          margin: 0;
          max-width: 850px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 20px;
          line-height: 1.72;
        }

        .englishActions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
        }

        .primaryEnglishButton,
        .secondaryEnglishButton,
        .englishQuoteBlock a {
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

        .primaryEnglishButton,
        .englishQuoteBlock a {
          background: #f26522;
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(242, 101, 34, 0.28);
        }

        .secondaryEnglishButton {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.65);
        }

        .englishIntro {
          padding: 90px 7%;
          background: #ffffff;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 54px;
          align-items: start;
        }

        .englishIntro h2,
        .englishSectionHeader h2,
        .englishVideoText h2,
        .englishQuoteBlock h2,
        .englishContact h2 {
          margin: 0;
          color: #0a1d36;
          font-size: clamp(36px, 5vw, 70px);
          line-height: 1.05;
          letter-spacing: -1.8px;
          font-weight: 900;
        }

        .englishIntro p,
        .englishSectionHeader p,
        .englishVideoText p,
        .englishQuoteBlock p,
        .englishContact p {
          margin: 0;
          color: #3b4a5a;
          font-size: 18px;
          line-height: 1.75;
        }

        .englishServices,
        .englishRoutes,
        .englishSectors {
          padding: 90px 7%;
        }

        .englishServices {
          background: #f5f6f8;
        }

        .englishRoutes,
        .englishSectors {
          background: #ffffff;
        }

        .englishSectionHeader {
          max-width: 1080px;
          margin-bottom: 52px;
        }

        .englishSectionHeader h2 {
          margin-bottom: 24px;
        }

        .englishSectionHeader p {
          max-width: 920px;
        }

        .englishServicesGrid,
        .englishRoutesGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }

        .englishServicesGrid a,
        .englishRoutesGrid a {
          background: #ffffff;
          border-radius: 28px;
          padding: 30px 28px;
          border-top: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.08);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 255px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .englishServicesGrid a:hover,
        .englishRoutesGrid a:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(10, 29, 54, 0.14);
        }

        .englishRoutesGrid a {
          background: #f5f6f8;
        }

        .englishServicesGrid h3,
        .englishRoutesGrid strong,
        .englishSectorsGrid h3 {
          display: block;
          margin: 0 0 14px;
          color: #0a1d36;
          font-size: 22px;
          line-height: 1.18;
          font-weight: 900;
        }

        .englishServicesGrid p,
        .englishRoutesGrid p {
          margin: 0 0 24px;
          color: #3b4a5a;
          font-size: 15.5px;
          line-height: 1.65;
        }

        .englishServicesGrid strong,
        .englishRoutesGrid span {
          color: #f26522;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 900;
        }

        .englishOtherRoutes {
          margin-top: 34px;
          padding: 34px;
          border-radius: 30px;
          background: linear-gradient(135deg, #0a1d36, #0f2d52);
          color: #ffffff;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr auto;
          gap: 24px;
          align-items: center;
          border-left: 7px solid #f26522;
        }

        .englishOtherRoutes h3 {
          margin: 0;
          color: #ffffff;
          font-size: 26px;
          line-height: 1.15;
          font-weight: 900;
        }

        .englishOtherRoutes div {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .englishOtherRoutes p {
          margin: 0;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
          line-height: 1.3;
          font-weight: 800;
        }

        .englishOtherRoutes a {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          border-radius: 999px;
          background: #f26522;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 900;
          white-space: nowrap;
        }

        .englishVideoBlock {
          padding: 90px 7%;
          background: #f5f6f8;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 54px;
          align-items: center;
        }

        .englishVideoText h2 {
          margin-bottom: 24px;
        }

        .englishVideoFrame {
          background: #0a1d36;
          padding: 14px;
          border-radius: 32px;
          box-shadow: 0 30px 80px rgba(10, 29, 54, 0.18);
          border-bottom: 7px solid #f26522;
        }

        .englishVideoFrame video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 22px;
          background: #000000;
        }

        .englishSectorsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .englishSectorsGrid article {
          background: #f5f6f8;
          border-radius: 22px;
          padding: 26px 24px;
          border-left: 6px solid #f26522;
        }

        .englishSectorsGrid h3 {
          margin: 0;
          font-size: 18px;
        }

        .englishQuoteBlock {
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

        .englishQuoteBlock h2 {
          color: #ffffff;
          margin-bottom: 20px;
        }

        .englishQuoteBlock p {
          color: rgba(255, 255, 255, 0.84);
        }

        .englishQuoteBlock a {
          justify-self: end;
          border-radius: 999px;
        }

        .englishContact {
          padding: 90px 7%;
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          gap: 48px;
          align-items: center;
        }

        .englishContact h2 {
          margin-bottom: 24px;
        }

        .englishContactCard {
          background: #f5f6f8;
          border-radius: 30px;
          padding: 36px;
          border-top: 7px solid #f26522;
          box-shadow: 0 24px 65px rgba(10, 29, 54, 0.08);
        }

        .englishContactCard h3 {
          margin: 0 0 26px;
          color: #0a1d36;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 900;
        }

        .englishContactItem {
          display: grid;
          gap: 6px;
          margin-bottom: 22px;
        }

        .englishContactItem strong {
          color: #0a1d36;
          font-size: 18px;
          line-height: 1.25;
          font-weight: 900;
        }

        .englishContactItem span {
          color: #3b4a5a;
          font-size: 15px;
          line-height: 1.45;
        }

        .englishContactItem a {
          color: #f26522;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 900;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .englishContactDivider {
          width: 100%;
          height: 1px;
          background: rgba(10, 29, 54, 0.12);
          margin: 8px 0 22px;
        }

        .englishFooter {
          padding: 54px 7% 34px;
          background: #0a1d36;
          color: #ffffff;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: end;
        }

        .englishFooter div {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .englishFooter img {
          width: 74px;
          height: 74px;
          object-fit: cover;
          border-radius: 18px;
          background: #ffffff;
        }

        .englishFooter p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 15px;
          line-height: 1.6;
          max-width: 520px;
        }

        @media (max-width: 1150px) {
          .englishServicesGrid,
          .englishRoutesGrid,
          .englishSectorsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .englishOtherRoutes {
            grid-template-columns: 1fr;
          }

          .englishOtherRoutes a {
            justify-self: start;
          }
        }

        @media (max-width: 900px) {
          .englishIntro,
          .englishVideoBlock,
          .englishQuoteBlock,
          .englishContact {
            grid-template-columns: 1fr;
          }

          .englishQuoteBlock a {
            justify-self: start;
          }

          .englishFooter {
            flex-direction: column;
            align-items: start;
          }
        }

        @media (max-width: 650px) {
          .englishHero {
            min-height: auto;
            padding: 86px 24px 74px;
          }

          .englishHero h1 {
            font-size: clamp(36px, 12vw, 54px);
            letter-spacing: -1.2px;
          }

          .englishHero p,
          .englishIntro p,
          .englishSectionHeader p,
          .englishVideoText p,
          .englishQuoteBlock p,
          .englishContact p {
            font-size: 17px;
            line-height: 1.7;
          }

          .englishActions {
            flex-direction: column;
          }

          .primaryEnglishButton,
          .secondaryEnglishButton,
          .englishQuoteBlock a {
            width: 100%;
          }

          .englishIntro,
          .englishServices,
          .englishRoutes,
          .englishVideoBlock,
          .englishSectors,
          .englishContact {
            padding: 74px 24px;
          }

          .englishServicesGrid,
          .englishRoutesGrid,
          .englishSectorsGrid {
            grid-template-columns: 1fr;
          }

          .englishServicesGrid a,
          .englishRoutesGrid a {
            min-height: auto;
            padding: 28px 24px;
            border-radius: 24px;
          }

          .englishOtherRoutes {
            padding: 28px 24px;
            border-radius: 26px;
          }

          .englishOtherRoutes h3 {
            font-size: 24px;
          }

          .englishOtherRoutes a {
            width: 100%;
          }

          .englishQuoteBlock {
            margin: 0 24px 80px;
            padding: 32px 24px;
            border-radius: 28px;
          }

          .englishContactCard {
            padding: 30px 24px;
            border-radius: 28px;
          }

          .englishContactCard h3 {
            font-size: 28px;
          }

          .englishFooter {
            padding: 44px 24px 30px;
          }

          .englishFooter div {
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
