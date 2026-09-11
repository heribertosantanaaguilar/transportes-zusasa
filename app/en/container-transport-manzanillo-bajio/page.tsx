import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Bajío",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Bajío industrial areas, including León, Silao, Irapuato, Celaya and Salamanca.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-bajio",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-bajio",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-bajio",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-bajio",
    },
  },
};

export default function ContainerTransportManzanilloBajioPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Bajío"
      title="Container transport from Manzanillo to Bajío industrial areas."
      description="Transportes ZUSASA supports companies that need container and ISO tank transport from Manzanillo to Bajío industrial destinations, including León, Silao, Irapuato, Celaya, Salamanca and nearby logistics corridors."
      mainRoute="Manzanillo to Bajío industrial areas"
      zones={[
        "León, Guanajuato",
        "Silao, Guanajuato",
        "Irapuato, Guanajuato",
        "Celaya, Guanajuato",
        "Salamanca, Guanajuato",
        "Bajío industrial and logistics corridors",
      ]}
      services={[
        "Container transport from Manzanillo to Bajío",
        "ISO tank transport from Manzanillo to Bajío",
        "Drayage in Manzanillo before national transport",
        "Container storage yard support in Manzanillo",
        "Operational follow-up and logistics coordination",
      ]}
      sectors={[
        "Automotive suppliers",
        "Manufacturing companies",
        "Industrial distribution",
        "Importers",
        "Logistics operators",
        "Trading companies",
        "Customs brokers",
        "Packaging and materials",
      ]}
    />
  );
}
