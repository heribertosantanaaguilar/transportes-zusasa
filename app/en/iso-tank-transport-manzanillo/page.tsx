import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "ISO tank transport from Manzanillo",
  description:
    "ISO tank transport coordination from Manzanillo to national industrial destinations in Mexico, including drayage, storage support and operational follow-up.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/iso-tank-transport-manzanillo",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
      "en-US":
        "https://www.transporteszusasa.com/en/iso-tank-transport-manzanillo",
      "x-default":
        "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
    },
  },
};

export default function IsoTankTransportManzanilloPage() {
  return (
    <EnglishRutaLanding
      eyebrow="ISO tank logistics"
      title="ISO tank transport from Manzanillo."
      description="Transportes ZUSASA coordinates ISO tank transport from Manzanillo to national industrial destinations in Mexico, integrating drayage, storage support and operational follow-up according to the shipment requirements."
      mainRoute="ISO tank transport from Manzanillo"
      zones={[
        "Guadalajara and El Salto",
        "Monterrey and Apodaca",
        "Querétaro and Bajío",
        "Mexico City and State of Mexico",
        "Toluca and Lerma",
        "Puebla and surrounding industrial areas",
      ]}
      services={[
        "National ISO tank transport from Manzanillo",
        "Drayage services for ISO tanks in Manzanillo",
        "ISO tank storage support in maneuvering yard",
        "Operational coordination and shipment follow-up",
        "Route validation according to cargo and operating conditions",
      ]}
      sectors={[
        "Chemical industry",
        "Industrial manufacturing",
        "Importers",
        "Logistics operators",
        "Trading companies",
        "Customs brokers",
        "Packaging and materials",
        "Industrial distribution",
      ]}
    />
  );
}
