import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo al Bajío | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia León, Silao, Irapuato, Celaya, Salamanca y zonas industriales del Bajío.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-bajio",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo al Bajío | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia León, Silao, Irapuato, Celaya y zonas industriales del Bajío.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-bajio",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloBajioPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo al Bajío"
      title="Transporte de contenedores de Manzanillo al Bajío."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia León, Silao, Irapuato, Celaya, Salamanca y otras zonas industriales del Bajío, integrando movimiento local, resguardo en patio de maniobras y seguimiento operativo."
      rutaPrincipal="Manzanillo, Colima → Bajío"
      zonas={[
        "León, Guanajuato",
        "Silao, Guanajuato",
        "Irapuato, Guanajuato",
        "Celaya, Guanajuato",
        "Salamanca, Guanajuato",
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
        "Plásticos y empaques",
        "Alimentos e ingredientes",
        "Distribución industrial",
        "Operadores logísticos",
        "Comercializadoras",
        "Importadores",
      ]}
    />
  );
}
