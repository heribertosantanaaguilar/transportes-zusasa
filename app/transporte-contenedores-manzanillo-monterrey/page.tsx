import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title:
    "Transporte de contenedores Manzanillo a Monterrey | Transportes ZUSASA",
  description:
    "Cotiza transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Monterrey, Apodaca, Santa Catarina, Escobedo y zonas industriales de Nuevo León.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-monterrey",
  },
  openGraph: {
    title:
      "Transporte de contenedores Manzanillo a Monterrey | Transportes ZUSASA",
    description:
      "Coordinación de transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Monterrey, Apodaca y zonas industriales de Nuevo León.",
    url: "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-monterrey",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
};

export default function TransporteContenedoresManzanilloMonterreyPage() {
  return (
    <RutaLanding
      eyebrow="Ruta Manzanillo a Nuevo León"
      title="Transporte de contenedores de Manzanillo a Monterrey y Apodaca."
      description="Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Monterrey, Apodaca, Santa Catarina, Escobedo, San Nicolás y zonas industriales de Nuevo León."
      rutaPrincipal="Manzanillo, Colima → Monterrey / Apodaca, Nuevo León"
      zonas={[
        "Monterrey, Nuevo León",
        "Apodaca, Nuevo León",
        "Santa Catarina, Nuevo León",
        "Escobedo, Nuevo León",
        "San Nicolás de los Garza, Nuevo León",
        "Zonas industriales de Nuevo León",
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
        "Manufactura avanzada",
        "Químicos no peligrosos",
        "Plásticos y resinas",
        "CEDIS",
        "Operadores logísticos",
        "Comercio exterior",
        "Agencias aduanales",
      ]}
    />
  );
}
