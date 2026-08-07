import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo a Puebla | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Puebla, Huejotzingo, San Martín Texmelucan y zonas industriales cercanas.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-puebla",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo a Puebla | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Puebla, Huejotzingo y zonas industriales cercanas.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-puebla",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloPueblaPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo a Puebla"
      title="Transporte de contenedores de Manzanillo a Puebla."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Puebla, Huejotzingo, San Martín Texmelucan y zonas industriales cercanas, integrando movimiento local, resguardo y seguimiento operativo."
      rutaPrincipal="Manzanillo, Colima → Puebla"
      zonas={[
        "Puebla, Puebla",
        "Huejotzingo, Puebla",
        "San Martín Texmelucan, Puebla",
        "Coronango, Puebla",
        "Cuautlancingo, Puebla",
        "Zonas industriales de Puebla",
      ]}
      servicios={[
        "Transporte nacional de contenedores desde Manzanillo",
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local previo en Manzanillo",
        "Resguardo en patio de maniobras",
        "Seguimiento operativo durante la coordinación del servicio",
      ]}
      sectores={[
        "Autopartes",
        "Manufactura",
        "Alimentos y bebidas",
        "Textil e insumos industriales",
        "Distribución",
        "Operadores logísticos",
        "Importadores",
        "Comercializadoras",
      ]}
    />
  );
}
