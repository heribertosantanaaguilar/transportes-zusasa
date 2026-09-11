import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Monterrey and Apodaca",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Monterrey, Apodaca, Santa Catarina and industrial areas in Nuevo León.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-monterrey",
  },
};

export default function ContainerTransportManzanilloMonterreyPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Nuevo León"
      title="Container transport from Manzanillo to Monterrey and Apodaca."
      description="Transportes ZUSASA coordinates container and ISO tank transport from Manzanillo to Monterrey, Apodaca, Santa Catarina and key industrial areas in Nuevo León."
      mainRoute="Manzanillo to Monterrey / Apodaca"
      zones={[
        "Monterrey, Nuevo León",
        "Apodaca, Nuevo León",
        "Santa Catarina, Nuevo León",
        "San Nicolás de los Garza, Nuevo León",
        "Guadalupe, Nuevo León",
        "Nuevo León industrial corridors",
      ]}
      services={[
        "Container transport from Manzanillo to Monterrey",
        "Container transport from Manzanillo to Apodaca",
        "ISO tank transport from Manzanillo to Nuevo León",
        "Drayage in Manzanillo before national transport",
        "Operational follow-up and logistics coordination",
      ]}
      sectors={[
        "Automotive industry",
        "Manufacturing companies",
        "Industrial suppliers",
        "Distribution centers",
        "Logistics operators",
        "Importers",
        "Trading companies",
        "Customs brokers",
      ]}
    />
  );
}
