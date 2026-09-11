import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title: "Transporte de contenedores Manzanillo Guadalajara",
  description:
    "Transporte de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, El Salto, Zapopan y zona metropolitana de Jalisco.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-guadalajara",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-guadalajara",
    },
  },
};

export default function TransporteContenedoresManzanilloGuadalajaraPage() {
  return (
    <RutaLanding
      eyebrow="Manzanillo a Guadalajara"
      title="Transporte de contenedores desde Manzanillo hacia Guadalajara y El Salto."
      description="Transportes ZUSASA apoya a empresas que requieren transporte de contenedores o ISO tanques desde Manzanillo hacia Guadalajara, El Salto, Zapopan y la zona metropolitana industrial de Jalisco."
      rutaPrincipal="Manzanillo a Guadalajara / El Salto"
      zonas={[
        "Guadalajara, Jalisco",
        "El Salto, Jalisco",
        "Zapopan, Jalisco",
        "Tlaquepaque, Jalisco",
        "Tlajomulco, Jalisco",
        "Corredores industriales y logísticos de Jalisco",
      ]}
      servicios={[
        "Transporte de contenedores de Manzanillo a Guadalajara",
        "Transporte de ISO tanques de Manzanillo a Jalisco",
        "Movimiento local previo en Manzanillo",
        "Resguardo en patio de maniobras",
        "Seguimiento operativo y coordinación logística",
      ]}
      sectores={[
        "Importadores",
        "Manufactura",
        "Electrónica",
        "Proveedores automotrices",
        "Plásticos y empaque",
        "Centros de distribución",
        "Operadores logísticos",
        "Comercializadoras",
      ]}
    />
  );
}
