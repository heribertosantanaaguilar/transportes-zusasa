import "./globals.css";

export const metadata = {
  title:
    "Transportes ZUSASA | Transporte local de carga y contenedores en Manzanillo",
  description:
    "Servicio de autotransporte local de carga contenerizada para operaciones de importación y exportación en el Puerto de Manzanillo, Colima. Atención rápida, seguimiento operativo y soluciones logísticas confiables.",
  keywords: [
    "transporte de carga en Manzanillo",
    "transporte local de contenedores",
    "autotransporte portuario Manzanillo",
    "movimiento de contenedores Manzanillo",
    "transporte de carga contenerizada",
    "logística portuaria Manzanillo",
    "Transportes ZUSASA",
  ],
  authors: [{ name: "Transportes ZUSASA" }],
  creator: "Transportes ZUSASA",
  publisher: "Transportes ZUSASA",
  openGraph: {
    title:
      "Transportes ZUSASA | Transporte local de carga en Manzanillo",
    description:
      "Soluciones especializadas en autotransporte local de carga contenerizada para operaciones portuarias en Manzanillo, Colima.",
    url: "https://transporteszusasa.com",
    siteName: "Transportes ZUSASA",
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
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
