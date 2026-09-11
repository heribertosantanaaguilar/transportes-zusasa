import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "National container transport from Manzanillo",
  description:
    "National container and ISO tank transport coordination from Manzanillo to Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, Mexico City, Toluca and Puebla.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/national-container-transport-from-manzanillo",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-nacional-contenedores-iso-tanques",
      "en-US":
        "https://www.transporteszusasa.com/en/national-container-transport-from-manzanillo",
      "x-default":
        "https://www.transporteszusasa.com/transporte-nacional-contenedores-iso-tanques",
    },
  },
};

export default function NationalContainerTransportFromManzanilloPage() {
  return (
    <EnglishRutaLanding
      eyebrow="National logistics from Manzanillo"
      title="National container transport from Manzanillo."
      description="Transportes ZUSASA coordinates national container and ISO tank transport from Manzanillo to strategic industrial destinations in Mexico, with drayage, container storage yard support and clear operational follow-up."
      mainRoute="National container transport from Manzanillo"
      zones={[
        "Guadalajara and El Salto, Jalisco",
        "Monterrey and Apodaca, Nuevo León",
        "Querétaro and Bajío industrial areas",
        "Mexico City and State of Mexico",
        "Toluca and Lerma",
        "Puebla and surrounding industrial zones",
      ]}
      services={[
        "National container transport from Manzanillo",
        "National ISO tank transport from Manzanillo",
        "Drayage services in Manzanillo",
        "Container storage yard in Manzanillo",
        "Operational follow-up and logistics coordination",
      ]}
      sectors={[
        "Importers",
        "Manufacturing companies",
        "Automotive suppliers",
        "Industrial distribution",
        "Logistics operators",
        "Customs brokers",
        "Trading companies",
        "Chemical and industrial cargo",
      ]}
    />
  );
}
