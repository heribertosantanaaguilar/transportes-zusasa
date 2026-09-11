import type { Metadata } from "next";
import EnglishRutaLanding from "../../../components/EnglishRutaLanding";

export const metadata: Metadata = {
  title: "Container transport from Manzanillo to Guadalajara",
  description:
    "Container and ISO tank transport coordination from Manzanillo to Guadalajara, El Salto, Zapopan and the Jalisco metropolitan industrial area.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/en/container-transport-manzanillo-guadalajara",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-guadalajara",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
    },
  },
};

export default function ContainerTransportManzanilloGuadalajaraPage() {
  return (
    <EnglishRutaLanding
      eyebrow="Manzanillo to Guadalajara"
      title="Container transport from Manzanillo to Guadalajara and El Salto."
      description="Transportes ZUSASA supports companies that need container or ISO tank transport from Manzanillo to Guadalajara, El Salto, Zapopan and the Jalisco metropolitan industrial area."
      mainRoute="Manzanillo to Guadalajara / El Salto"
      zones={[
        "Guadalajara, Jalisco",
        "El Salto, Jalisco",
        "Zapopan, Jalisco",
        "Tlaquepaque, Jalisco",
        "Tlajomulco, Jalisco",
        "Jalisco industrial and logistics corridors",
      ]}
      services={[
        "Container transport from Manzanillo to Guadalajara",
        "ISO tank transport from Manzanillo to Jalisco",
        "Drayage in Manzanillo before national transport",
        "Container storage yard in Manzanillo",
        "Shipment follow-up and logistics coordination",
      ]}
      sectors={[
        "Importers",
        "Manufacturing",
        "Electronics",
        "Automotive suppliers",
        "Plastics and packaging",
        "Distribution centers",
        "Logistics operators",
        "Trading companies",
      ]}
    />
  );
}
