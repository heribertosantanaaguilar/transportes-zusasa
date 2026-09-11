import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title: "Transporte de ISO tanques desde Manzanillo",
  description:
    "Coordinación de transporte de ISO tanques desde Manzanillo hacia destinos industriales nacionales, incluyendo movimiento local, resguardo y seguimiento operativo.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
      "en-US":
        "https://www.transporteszusasa.com/en/iso-tank-transport-manzanillo",
      "x-default":
        "https://www.transporteszusasa.com/transporte-iso-tanques-manzanillo",
    },
  },
};

export default function TransporteIsoTanquesManzanilloPage() {
  return (
    <RutaLanding
      eyebrow="Logística para ISO tanques"
      title="Transporte de ISO tanques desde Manzanillo."
      description="Transportes ZUSASA coordina transporte de ISO tanques desde Manzanillo hacia destinos industriales nacionales, integrando movimiento local, apoyo de resguardo y seguimiento operativo de acuerdo con los requerimientos de la carga."
      rutaPrincipal="Transporte de ISO tanques desde Manzanillo"
      zonas={[
        "Guadalajara y El Salto",
        "Monterrey y Apodaca",
        "Querétaro y Bajío",
        "Ciudad de México y Estado de México",
        "Toluca y Lerma",
        "Puebla y zonas industriales cercanas",
      ]}
      servicios={[
        "Transporte nacional de ISO tanques desde Manzanillo",
        "Movimiento local de ISO tanques en Manzanillo",
        "Apoyo de resguardo de ISO tanques en patio de maniobras",
        "Coordinación operativa y seguimiento del servicio",
        "Validación de ruta de acuerdo con carga y condiciones operativas",
      ]}
      sectores={[
        "Industria química",
        "Manufactura industrial",
        "Importadores",
        "Operadores logísticos",
        "Comercializadoras",
        "Agentes aduanales",
        "Empaque y materiales",
        "Distribución industrial",
      ]}
    />
  );
}
