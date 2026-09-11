import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container storage yard in Manzanillo",
  description:
    "Container and ISO tank storage yard support in Manzanillo, including local drayage, maneuvering yard coordination and operational follow-up.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-storage-yard-manzanillo",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/resguardo-de-contenedores-manzanillo",
      "en-US":
        "https://www.transporteszusasa.com/en/container-storage-yard-manzanillo",
      "x-default":
        "https://www.transporteszusasa.com/resguardo-de-contenedores-manzanillo",
    },
  },
};

export default function ContainerStorageYardManzanilloPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Storage yard in Manzanillo"
      title="Container and ISO tank storage yard support in Manzanillo."
      description="Transportes ZUSASA supports companies that require temporary container or ISO tank storage in a maneuvering yard in Manzanillo, with local drayage coordination and operational follow-up subject to availability and operating conditions."
      mainRoute="Container storage yard in Manzanillo"
      zones={[
        "Manzanillo, Colima",
        "Port of Manzanillo logistics area",
        "Tapeixtles, Manzanillo",
        "Local maneuvering yard",
        "Container transfer and operating areas",
        "Local drayage zones in Manzanillo",
      ]}
      services={[
        "Container storage yard in Manzanillo",
        "ISO tank storage support in Manzanillo",
        "Inbound and outbound local handling",
        "Drayage coordination in Manzanillo",
        "Operational follow-up and logistics support",
      ]}
      sectors={[
        "Importers",
        "Customs brokers",
        "Freight forwarders",
        "Logistics operators",
        "Trading companies",
        "Industrial cargo clients",
        "Containerized cargo operations",
        "ISO tank operations",
      ]}
    />
  );
}
