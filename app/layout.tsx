import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AkRenov",
  description: "Entreprise de rénovation spécialisée dans la transformation d'espaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/logo.png" type="image/png" />
        <meta name="description" content="Entreprise de rénovation spécialisée dans la transformation d'espaces" />
        <title>AkRenov</title>
      </head>
      <body>{children}</body>
    </html>
  );
}