import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Puebla",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Puebla, Huejotzingo, San Martín Texmelucan and nearby industrial zones.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-puebla",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-puebla",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-puebla",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-puebla",
    },
  },
};

export default function ContainerTransportManzanilloPueblaPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Puebla"
      title="Container transport from Manzanillo to Puebla."
      description="Transportes ZUSASA coordinates container and ISO tank transport from Manzanillo to Puebla, Huejotzingo, San Martín Texmelucan and surrounding industrial areas."
      mainRoute="Manzanillo to Puebla"
      zones={[
        "Puebla",
        "Huejotzingo",
        "San Martín Texmelucan",
        "Cuautlancingo",
        "Amozoc",
        "Puebla industrial and logistics areas",
      ]}
      services={[
        "Container transport from Manzanillo to Puebla",
        "ISO tank transport from Manzanillo to Puebla",
        "Drayage in Manzanillo before national transport",
        "Container storage yard support in Manzanillo",
        "Operational follow-up and logistics coordination",
      ]}
      sectors={[
        "Automotive industry",
        "Manufacturing companies",
        "Industrial suppliers",
        "Importers",
        "Distribution centers",
        "Logistics operators",
        "Trading companies",
        "Customs brokers",
      ]}
    />
  );
}
