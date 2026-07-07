import "./globals.css";

export const metadata = {
  title: "Transportes ZUSASA",
  description: "Movimiento local de contenedores en el Puerto de Manzanillo.",
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
