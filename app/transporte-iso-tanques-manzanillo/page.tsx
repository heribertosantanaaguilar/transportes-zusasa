import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de ISO tanques desde Manzanillo | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Querétaro, Bajío, CDMX, Toluca y Puebla. Coordinación logística por Transportes ZUSASA.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
  },
  openGraph: {
    title:
      "Transporte de ISO tanques desde Manzanillo | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de ISO tanques desde Manzanillo hacia destinos industriales del país.",
    url: "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteIsoTanquesManzanilloPage() {
  return (
    <RutaLanding
      eyebrow="Servicio nacional de ISO tanques"
      title="Transporte nacional de ISO tanques desde Manzanillo."
      description="Coordinamos transporte nacional de ISO tanques desde Manzanillo hacia destinos industriales del país, integrando movimiento local previo, resguardo en patio de maniobras y seguimiento operativo durante la coordinación del servicio."
      rutaPrincipal="Transporte nacional de ISO tanques desde Manzanillo"
      zonas={[
        "Guadalajara y El Salto, Jalisco",
        "Monterrey y Apodaca, Nuevo León",
        "Querétaro y San Juan del Río",
        "Bajío",
        "CDMX y Estado de México",
        "Toluca y Lerma",
        "Puebla y zonas industriales cercanas",
      ]}
      servicios={[
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local de ISO tanques en Manzanillo",
        "Resguardo temporal en patio de maniobras",
        "Coordinación con operación local y nacional",
        "Seguimiento operativo durante la programación y traslado",
      ]}
      sectores={[
        "Químicos no peligrosos",
        "Resinas e insumos líquidos",
        "Aditivos industriales",
        "Ingredientes líquidos",
        "Aceites y lubricantes",
        "Industria de limpieza",
        "Manufactura",
        "Operadores logísticos",
      ]}
    />
  );
}
