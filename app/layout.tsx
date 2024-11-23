import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AkRenov - Transformation d'Espaces et Rénovation",
  description: "AkRenov, entreprise de rénovation spécialisée dans la transformation d'espaces. Découvrez nos services de rénovation de qualité pour améliorer votre espace de vie.",
  keywords: "rénovation, transformation d'espaces, rénovation intérieure, rénovation extérieure, design d'intérieur, travaux de rénovation, rénovation de maison, AkRenov",
  robots: "index, follow",
  openGraph: {
    title: "AkRenov - Transformation d'Espaces et Rénovation",
    description: "AkRenov, entreprise de rénovation spécialisée dans la transformation d'espaces. Découvrez nos services de rénovation de qualité.",
    url: "https://www.akrenov.com", // Mets l'URL réelle de ton site ici
    siteName: "AkRenov",
    images: [
      {
        url: "/assets/logo.png", // L'URL de ton logo ou une image en taille optimisée
        width: 1200,
        height: 630,
        alt: "Logo AkRenov",
      },
    ],
    type: "website",
  },
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
        <meta name="description" content="AkRenov, entreprise de rénovation spécialisée dans la transformation d'espaces. Découvrez nos services de rénovation de qualité." />
        <meta name="keywords" content="rénovation, transformation d'espaces, rénovation intérieure, rénovation extérieure, design d'intérieur, travaux de rénovation, rénovation de maison, AkRenov" />
        <meta name="author" content="AkRenov" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AkRenov - Transformation d'Espaces et Rénovation" />
        <meta property="og:description" content="AkRenov, entreprise de rénovation spécialisée dans la transformation d'espaces. Découvrez nos services de rénovation de qualité." />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:url" content="https://www.akrenov.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AkRenov" />
        <meta name="twitter:title" content="AkRenov - Transformation d'Espaces et Rénovation" />
        <meta name="twitter:description" content="Découvrez les services de rénovation intérieure et extérieure d'AkRenov." />
        <meta name="twitter:image" content="/assets/logo.png" />
        <title>AkRenov - Transformation d&aposEspaces et Rénovation</title>
      </head>
      <body>{children}</body>
    </html>
  );
}