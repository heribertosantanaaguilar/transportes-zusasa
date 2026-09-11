import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title: "Transporte de contenedores Manzanillo Querétaro y Bajío",
  description:
    "Transporte de contenedores e ISO tanques desde Manzanillo hacia Querétaro, San Juan del Río y zonas industriales del Bajío.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-queretaro",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-queretaro",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-queretaro",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-queretaro",
    },
  },
};

export default function TransporteContenedoresManzanilloQueretaroPage() {
  return (
    <RutaLanding
      eyebrow="Manzanillo a Querétaro y Bajío"
      title="Transporte de contenedores desde Manzanillo hacia Querétaro y Bajío."
      description="Transportes ZUSASA apoya a empresas que requieren transporte de carga contenerizada desde Manzanillo hacia Querétaro, San Juan del Río y destinos industriales del Bajío."
      rutaPrincipal="Manzanillo a Querétaro / Bajío"
      zonas={[
        "Querétaro",
        "San Juan del Río",
        "El Marqués",
        "Corregidora",
        "Corredor industrial del Bajío",
        "Parques industriales y zonas logísticas cercanas",
      ]}
      servicios={[
        "Transporte de contenedores de Manzanillo a Querétaro",
        "Transporte de ISO tanques de Manzanillo a Querétaro",
        "Transporte de contenedores de Manzanillo al Bajío",
        "Movimiento local en Manzanillo",
        "Resguardo en patio de maniobras y apoyo operativo",
      ]}
      sectores={[
        "Proveedores automotrices",
        "Proveedores aeroespaciales",
        "Manufactura",
        "Distribución industrial",
        "Importadores",
        "Operadores logísticos",
        "Comercializadoras",
        "Agentes aduanales",
      ]}
    />
  );
}
