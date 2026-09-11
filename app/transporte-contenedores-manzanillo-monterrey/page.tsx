import type { Metadata } from "next";
import RutaLanding from "../../components/RutaLanding";

export const metadata: Metadata = {
  title: "Transporte de contenedores Manzanillo Monterrey y Apodaca",
  description:
    "Transporte de contenedores e ISO tanques desde Manzanillo hacia Monterrey, Apodaca, Santa Catarina y zonas industriales de Nuevo León.",
  alternates: {
    canonical:
      "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-monterrey",
    languages: {
      "es-MX":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-monterrey",
      "en-US":
        "https://www.transporteszusasa.com/en/container-transport-manzanillo-monterrey",
      "x-default":
        "https://www.transporteszusasa.com/transporte-contenedores-manzanillo-monterrey",
    },
  },
};

export default function TransporteContenedoresManzanilloMonterreyPage() {
  return (
    <RutaLanding
      eyebrow="Manzanillo a Nuevo León"
      title="Transporte de contenedores desde Manzanillo hacia Monterrey y Apodaca."
      description="Transportes ZUSASA coordina transporte de contenedores e ISO tanques desde Manzanillo hacia Monterrey, Apodaca, Santa Catarina y zonas industriales estratégicas de Nuevo León."
      rutaPrincipal="Manzanillo a Monterrey / Apodaca"
      zonas={[
        "Monterrey, Nuevo León",
        "Apodaca, Nuevo León",
        "Santa Catarina, Nuevo León",
        "San Nicolás de los Garza, Nuevo León",
        "Guadalupe, Nuevo León",
        "Corredores industriales de Nuevo León",
      ]}
      servicios={[
        "Transporte de contenedores de Manzanillo a Monterrey",
        "Transporte de contenedores de Manzanillo a Apodaca",
        "Transporte de ISO tanques de Manzanillo a Nuevo León",
        "Movimiento local previo en Manzanillo",
        "Seguimiento operativo y coordinación logística",
      ]}
      sectores={[
        "Industria automotriz",
        "Empresas manufactureras",
        "Proveedores industriales",
        "Centros de distribución",
        "Operadores logísticos",
        "Importadores",
        "Comercializadoras",
        "Agentes aduanales",
      ]}
    />
  );
}
