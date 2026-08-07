import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo a Querétaro | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Querétaro, San Juan del Río, Celaya, Irapuato, León, Silao y Bajío.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-queretaro",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo a Querétaro | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Querétaro, San Juan del Río y Bajío.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-queretaro",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloQueretaroPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo a Querétaro y Bajío"
      title="Transporte de contenedores de Manzanillo a Querétaro y Bajío."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Querétaro, San Juan del Río, Celaya, Irapuato, León, Silao y otras zonas industriales del Bajío."
      rutaPrincipal="Manzanillo, Colima → Querétaro / Bajío"
      zonas={[
        "Querétaro, Querétaro",
        "San Juan del Río, Querétaro",
        "Celaya, Guanajuato",
        "Irapuato, Guanajuato",
        "León, Guanajuato",
        "Silao, Guanajuato",
        "Zonas industriales del Bajío",
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
        "Aeroespacial",
        "Plásticos y empaques",
        "Alimentos e ingredientes",
        "Operadores logísticos",
        "Comercializadoras",
        "Importadores",
      ]}
    />
  );
}
