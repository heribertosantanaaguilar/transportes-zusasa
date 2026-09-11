import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Querétaro and Bajío",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Querétaro, San Juan del Río and Bajío industrial areas.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-queretaro",
  },
};

export default function ContainerTransportManzanilloQueretaroPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Querétaro and Bajío"
      title="Container transport from Manzanillo to Querétaro and Bajío."
      description="Transportes ZUSASA supports companies that need containerized cargo transportation from Manzanillo to Querétaro, San Juan del Río and Bajío industrial destinations."
      mainRoute="Manzanillo to Querétaro / Bajío"
      zones={[
        "Querétaro",
        "San Juan del Río",
        "El Marqués",
        "Corregidora",
        "Bajío industrial corridor",
        "Nearby industrial parks and logistics areas",
      ]}
      services={[
        "Container transport from Manzanillo to Querétaro",
        "ISO tank transport from Manzanillo to Querétaro",
        "Container transport from Manzanillo to Bajío",
        "Drayage in Manzanillo",
        "Container storage yard and operational support",
      ]}
      sectors={[
        "Automotive suppliers",
        "Aerospace suppliers",
        "Manufacturing",
        "Industrial distribution",
        "Importers",
        "Logistics operators",
        "Trading companies",
        "Customs brokers",
      ]}
    />
  );
}
