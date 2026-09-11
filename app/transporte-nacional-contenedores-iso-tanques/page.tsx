import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title: "Transporte nacional de contenedores desde Manzanillo",
  description:
    "Transportes ZUSASA coordina transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, CDMX, Toluca y Puebla.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-nacional-contenedores-iso-tanques",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-nacional-contenedores-iso-tanques",
      "en-US":
        "https://www.transporteszusasa.com/en/national-container-transport-from-manzanillo",
      "x-default":
        "https://www.transporteszusasa.com/transporte-nacional-contenedores-iso-tanques",
    },
  },
};

export default function TransporteNacionalContenedoresIsoTanquesPage() {
  return (
    <RutaLanding
      eyebrow="Logística nacional desde Manzanillo"
      title="Transporte nacional de contenedores e ISO tanques desde Manzanillo."
      description="Transportes ZUSASA coordina transporte nacional de contenedores e ISO tanques desde Manzanillo hacia destinos industriales estratégicos del país, integrando movimiento local, resguardo en patio de maniobras y seguimiento operativo claro."
      rutaPrincipal="Transporte nacional de contenedores e ISO tanques desde Manzanillo"
      zonas={[
        "Guadalajara y El Salto, Jalisco",
        "Monterrey y Apodaca, Nuevo León",
        "Querétaro y zonas industriales del Bajío",
        "Ciudad de México y Estado de México",
        "Toluca y Lerma",
        "Puebla y zonas industriales cercanas",
      ]}
      servicios={[
        "Transporte nacional de contenedores desde Manzanillo",
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local previo en Manzanillo",
        "Resguardo en patio de maniobras",
        "Seguimiento operativo y coordinación logística",
      ]}
      sectores={[
        "Importadores",
        "Empresas manufactureras",
        "Proveedores automotrices",
        "Distribución industrial",
        "Operadores logísticos",
        "Agentes aduanales",
        "Comercializadoras",
        "Carga química e industrial",
      ]}
    />
  );
}
