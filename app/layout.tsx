import "./globals.css";

export const metadata = {
  title: "Transportes ZUSASA | Transporte local de carga en Manzanillo",
  description:
    "Soluciones especializadas en autotransporte local de carga para operaciones de importación y exportación en el Puerto de Manzanillo.",
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
