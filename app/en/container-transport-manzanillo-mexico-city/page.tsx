import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Mexico City",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Mexico City and State of Mexico industrial and logistics areas.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-mexico-city",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-cdmx",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-mexico-city",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-cdmx",
    },
  },
};

export default function ContainerTransportManzanilloMexicoCityPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Mexico City"
      title="Container transport from Manzanillo to Mexico City and State of Mexico."
      description="Transportes ZUSASA coordinates container and ISO tank transport from Manzanillo to Mexico City and State of Mexico logistics areas, including industrial corridors, distribution centers and nearby operating zones."
      mainRoute="Manzanillo to Mexico City / State of Mexico"
      zones={[
        "Mexico City",
        "State of Mexico",
        "Cuautitlán",
        "Tultitlán",
        "Naucalpan",
        "Mexico City metropolitan logistics area",
      ]}
      services={[
        "Container transport from Manzanillo to Mexico City",
        "Container transport from Manzanillo to State of Mexico",
        "ISO tank transport from Manzanillo to central Mexico",
        "Drayage in Manzanillo before national transport",
        "Operational follow-up and logistics coordination",
      ]}
      sectors={[
        "Importers",
        "Distribution centers",
        "Manufacturing companies",
        "Retail supply chains",
        "Industrial suppliers",
        "Logistics operators",
        "Trading companies",
        "Customs brokers",
      ]}
    />
  );
}
