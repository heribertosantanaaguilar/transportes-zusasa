import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Toluca and Lerma",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Toluca, Lerma and industrial corridors in central Mexico.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-toluca",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-toluca",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-toluca",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-toluca",
    },
  },
};

export default function ContainerTransportManzanilloTolucaPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Toluca"
      title="Container transport from Manzanillo to Toluca and Lerma."
      description="Transportes ZUSASA supports companies that need container and ISO tank transport from Manzanillo to Toluca, Lerma and nearby industrial areas in central Mexico."
      mainRoute="Manzanillo to Toluca / Lerma"
      zones={[
        "Toluca, State of Mexico",
        "Lerma, State of Mexico",
        "Metepec, State of Mexico",
        "San Mateo Atenco",
        "Toluca industrial area",
        "Central Mexico logistics corridors",
      ]}
      services={[
        "Container transport from Manzanillo to Toluca",
        "Container transport from Manzanillo to Lerma",
        "ISO tank transport from Manzanillo to Toluca",
        "Drayage in Manzanillo before national transport",
        "Container storage yard and operational support",
      ]}
      sectors={[
        "Manufacturing companies",
        "Automotive suppliers",
        "Pharmaceutical and industrial cargo",
        "Distribution centers",
        "Importers",
        "Logistics operators",
        "Trading companies",
        "Customs brokers",
      ]}
    />
  );
}
