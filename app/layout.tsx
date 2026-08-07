import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.transporteszusasa.com"),
  title: {
    default:
      "Transportes ZUSASA | Transporte nacional de contenedores desde Manzanillo",
    template: "%s | Transportes ZUSASA",
  },
  description:
    "Transportes ZUSASA coordina transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, CDMX, Toluca y Puebla. Integramos movimiento local, resguardo en patio de maniobras, apoyo operativo y seguimiento logístico.",
  keywords: [
    "Transportes ZUSASA",
    "transporte nacional de contenedores",
    "transporte de contenedores Manzanillo",
    "transporte de contenedores desde Manzanillo",
    "flete contenedor Manzanillo Guadalajara",
    "flete contenedor Manzanillo Monterrey",
    "flete contenedor Manzanillo Querétaro",
    "transporte Manzanillo Guadalajara",
    "transporte Manzanillo Monterrey",
    "transporte Manzanillo Apodaca",
    "transporte Manzanillo Querétaro",
    "transporte Manzanillo Bajío",
    "transporte Manzanillo CDMX",
    "transporte Manzanillo Toluca",
    "transporte Manzanillo Puebla",
    "transporte de ISO tanques",
    "transporte de ISO tanques Manzanillo",
    "movimiento local de contenedores Manzanillo",
    "resguardo de contenedores Manzanillo",
    "patio de maniobras Manzanillo",
    "logística Manzanillo",
    "Puerto de Manzanillo",
    "carga contenerizada Manzanillo",
  ],
  alternates: {
    canonical: "https://www.transporteszusasa.com",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon-zusasa-rounded.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/images/favicon-zusasa-rounded.png",
    apple: "/images/favicon-zusasa-rounded.png",
  },
  openGraph: {
    title:
      "Transportes ZUSASA | Transporte nacional de contenedores desde Manzanillo",
    description:
      "Transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, CDMX, Toluca y Puebla. Movimiento local, resguardo y seguimiento operativo.",
    url: "https://www.transporteszusasa.com",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/logo-zusasa.png",
        width: 1200,
        height: 630,
        alt: "Transportes ZUSASA - Transporte nacional de contenedores desde Manzanillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transportes ZUSASA | Transporte nacional de contenedores desde Manzanillo",
    description:
      "Coordinamos transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Querétaro, Bajío, CDMX, Toluca y Puebla.",
    images: ["/images/logo-zusasa.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
