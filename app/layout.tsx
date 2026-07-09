import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://transporteszusasa.com"),

  title: {
    default:
      "Transportes ZUSASA | Transporte local de contenedores en Manzanillo",
    template: "%s | Transportes ZUSASA",
  },

  description:
    "Transportes ZUSASA ofrece transporte local de carga contenerizada en Manzanillo, Colima. Cotiza movimientos de contenedores para operaciones portuarias, importación y exportación.",

  keywords: [
    "transporte de contenedores en Manzanillo",
    "transporte local de contenedores",
    "transporte de carga en Manzanillo",
    "autotransporte portuario Manzanillo",
    "movimiento de contenedores Manzanillo",
    "carga contenerizada Manzanillo",
    "logística portuaria Manzanillo",
    "transporte para agencias aduanales",
    "transporte para importadores",
    "transporte para exportadores",
    "Transportes ZUSASA",
  ],

  authors: [{ name: "Transportes ZUSASA" }],
  creator: "Transportes ZUSASA",
  publisher: "Transportes ZUSASA",

  alternates: {
    canonical: "https://transporteszusasa.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Transportes ZUSASA | Transporte local de contenedores",
    description:
      "Soluciones de transporte local de carga contenerizada para operaciones portuarias, importación y exportación en Manzanillo, Colima.",
    url: "https://transporteszusasa.com",
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
    title: "Transportes ZUSASA | Transporte local de contenedores",
    description:
      "Transporte local de carga contenerizada en Manzanillo, Colima.",
    images: ["/images/logo-zusasa.png"],
  },

  icons: {
    icon: "/favicon.svg",
  },

  category: "transportation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
