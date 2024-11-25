import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AkRenov - Transformation d&apos;Espaces et Rénovation",
  description: "AkRenov, entreprise de rénovation spécialisée dans la transformation d&apos;espaces. Découvrez nos services de rénovation de qualité pour améliorer votre espace de vie.",
  keywords: "rénovation, transformation d&apos;espaces, rénovation intérieure, rénovation extérieure, design d&apos;intérieur, travaux de rénovation, rénovation de maison, AkRenov, aménagement, amélioration de maison, rénovation énergétique, modernisation d&apos;intérieur",
  robots: "index, follow",
  openGraph: {
    title: "AkRenov - Transformation d&apos;Espaces et Rénovation",
    description: "AkRenov, entreprise de rénovation spécialisée dans la transformation d&apos;espaces. Découvrez nos services de rénovation de qualité.",
    url: "https://www.akrenov.com",
    siteName: "AkRenov",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo AkRenov",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AkRenov",
    title: "AkRenov - Transformation d&apos;Espaces et Rénovation",
    description: "Découvrez les services de rénovation intérieure et extérieure d&apos;AkRenov.",
    images: [
      {
        url: "/assets/logo.png",
        alt: "Logo AkRenov",
      },
    ],
  },
  alternates: {
    canonical: "https://www.akrenov.com",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/assets/logo.png" type="image/png" />
        <meta name="description" content="AkRenov, entreprise de rénovation spécialisée dans la transformation d&apos;espaces. Découvrez nos services de rénovation de qualité." />
        <meta name="keywords" content="rénovation, transformation d&apos;espaces, rénovation intérieure, rénovation extérieure, design d&apos;intérieur, travaux de rénovation, rénovation de maison, AkRenov, aménagement, amélioration de maison, rénovation énergétique, modernisation d&apos;intérieur" />
        <meta name="author" content="AkRenov" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AkRenov - Transformation d&apos;Espaces et Rénovation" />
        <meta property="og:description" content="AkRenov, entreprise de rénovation spécialisée dans la transformation d&apos;espaces. Découvrez nos services de rénovation de qualité." />
        <meta property="og:image" content="/assets/logo.png" />
        <meta property="og:url" content="https://www.akrenov.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AkRenov" />
        <meta name="twitter:title" content="AkRenov - Transformation d&apos;Espaces et Rénovation" />
        <meta name="twitter:description" content="Découvrez les services de rénovation intérieure et extérieure d&apos;AkRenov." />
        <meta name="twitter:image" content="/assets/logo.png" />
        <link rel="canonical" href="https://www.akrenov.com" />
        <meta name="rating" content="general" />
        <meta httpEquiv="content-language" content="fr" />
        <title>AkRenov - Transformation d&apos;Espaces et Rénovation</title>
      </head>
      <body className="min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}
