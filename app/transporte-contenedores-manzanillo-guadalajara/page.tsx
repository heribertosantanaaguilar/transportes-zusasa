import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo a Guadalajara | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, El Salto, Zapopan, Tlajomulco y zona metropolitana. Servicio coordinado por Transportes ZUSASA.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo a Guadalajara | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, El Salto y zonas industriales de Jalisco.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloGuadalajaraPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo a Guadalajara"
      title="Transporte de contenedores de Manzanillo a Guadalajara."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, El Salto, Zapopan, Tlajomulco y zona metropolitana, integrando movimiento local, resguardo en patio de maniobras y seguimiento operativo."
      rutaPrincipal="Manzanillo, Colima → Guadalajara / El Salto, Jalisco"
      zonas={[
        "Guadalajara, Jalisco",
        "El Salto, Jalisco",
        "Zapopan, Jalisco",
        "Tlajomulco, Jalisco",
        "Tlaquepaque, Jalisco",
        "Zona Metropolitana de Guadalajara",
      ]}
      servicios={[
        "Transporte nacional de contenedores desde Manzanillo",
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local previo en Manzanillo",
        "Resguardo en patio de maniobras",
        "Seguimiento operativo durante la coordinación del servicio",
      ]}
      sectores={[
        "Importadores",
        "Manufactura",
        "Autopartes",
        "Plásticos y empaques",
        "CEDIS",
        "Operadores logísticos",
        "Comercializadoras",
        "Agencias aduanales",
      ]}
    />
  );
}
