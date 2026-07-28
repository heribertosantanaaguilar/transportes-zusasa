import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.transporteszusasa.com"),
  title: {
    default:
      "Transportes ZUSASA | Soluciones logísticas para contenedores e ISO tanques en Manzanillo",
    template: "%s | Transportes ZUSASA",
  },
  description:
    "Transportes ZUSASA coordina soluciones logísticas para contenedores e ISO tanques desde Manzanillo, integrando movimiento local, resguardo en patio de maniobras, apoyo operativo y gestión de transporte nacional mediante alianza comercial.",
  keywords: [
    "Transportes ZUSASA",
    "transporte de contenedores Manzanillo",
    "movimiento local de contenedores Manzanillo",
    "transporte nacional de contenedores",
    "transporte de ISO tanques",
    "resguardo de contenedores Manzanillo",
    "patio de maniobras Manzanillo",
    "logística Manzanillo",
    "Puerto de Manzanillo",
  ],
  alternates: {
    canonical: "https://www.transporteszusasa.com",
  },
  openGraph: {
    title:
      "Transportes ZUSASA | Soluciones logísticas desde Manzanillo",
    description:
      "Movimiento local, resguardo, apoyo operativo y gestión de transporte nacional de contenedores e ISO tanques desde Manzanillo mediante alianza comercial.",
    url: "https://www.transporteszusasa.com",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/logo-zusasa.png",
        width: 1200,
        height: 630,
        alt: "Transportes ZUSASA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transportes ZUSASA | Soluciones logísticas desde Manzanillo",
    description:
      "Movimiento local, resguardo, apoyo operativo y gestión de transporte nacional de contenedores e ISO tanques desde Manzanillo.",
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
