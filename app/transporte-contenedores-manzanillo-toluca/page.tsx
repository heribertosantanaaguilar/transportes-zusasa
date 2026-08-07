import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo a Toluca | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Toluca, Lerma, San Mateo Atenco y corredores industriales del Estado de México.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-toluca",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo a Toluca | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Toluca, Lerma y zonas industriales del Estado de México.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-toluca",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloTolucaPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo a Toluca"
      title="Transporte de contenedores de Manzanillo a Toluca y Lerma."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Toluca, Lerma, San Mateo Atenco y corredores industriales del Estado de México, con seguimiento operativo durante la coordinación del servicio."
      rutaPrincipal="Manzanillo, Colima → Toluca / Lerma, Estado de México"
      zonas={[
        "Toluca, Estado de México",
        "Lerma, Estado de México",
        "San Mateo Atenco, Estado de México",
        "Metepec, Estado de México",
        "Corredor industrial Toluca-Lerma",
        "Zonas industriales del Estado de México",
      ]}
      servicios={[
        "Transporte nacional de contenedores desde Manzanillo",
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local previo en Manzanillo",
        "Resguardo en patio de maniobras",
        "Seguimiento operativo durante la coordinación del servicio",
      ]}
      sectores={[
        "Manufactura",
        "Alimentos y bebidas",
        "Plásticos y empaques",
        "Autopartes",
        "Farmacéutica no especializada",
        "Distribución industrial",
        "Operadores logísticos",
        "Importadores",
      ]}
    />
  );
}
