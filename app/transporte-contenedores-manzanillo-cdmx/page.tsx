import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo a CDMX | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia CDMX, Cuautitlán, Tultitlán, Naucalpan y zonas industriales del Estado de México.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-cdmx",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo a CDMX | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia CDMX y Estado de México.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-cdmx",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloCdmxPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo a CDMX"
      title="Transporte de contenedores de Manzanillo a CDMX y Estado de México."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Ciudad de México, Cuautitlán, Tultitlán, Naucalpan, Ecatepec y zonas industriales del Estado de México."
      rutaPrincipal="Manzanillo, Colima → CDMX / Estado de México"
      zonas={[
        "Ciudad de México",
        "Cuautitlán, Estado de México",
        "Tultitlán, Estado de México",
        "Naucalpan, Estado de México",
        "Ecatepec, Estado de México",
        "Zonas industriales del Valle de México",
      ]}
      servicios={[
        "Transporte nacional de contenedores desde Manzanillo",
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local previo en Manzanillo",
        "Resguardo en patio de maniobras",
        "Seguimiento operativo durante la coordinación del servicio",
      ]}
      sectores={[
        "CEDIS",
        "Retail",
        "Importadores",
        "Distribución nacional",
        "Manufactura",
        "Operadores logísticos",
        "Comercializadoras",
        "Agencias aduanales",
      ]}
    />
  );
}
