import type { Metadata } from "next";
import 'normalize.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "AkRenov - Transformation d&#39;Espaces et Rénovation",
  description: "AkRenov, entreprise de rénovation spécialisée dans la transformation d&#39;espaces. Découvrez nos services de rénovation de qualité pour améliorer votre espace de vie.",
  keywords: "rénovation, transformation d&#39;espaces, rénovation intérieure, rénovation extérieure, design d&#39;intérieur, travaux de rénovation, rénovation de maison, AkRenov, aménagement, amélioration de maison, rénovation énergétique, modernisation d&#39;intérieur",
  robots: "index, follow",
  openGraph: {
    title: "AkRenov - Transformation d&#39;Espaces et Rénovation",
    description: "AkRenov, entreprise de rénovation spécialisée dans la transformation d&#39;espaces. Découvrez nos services de rénovation de qualité.",
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
    title: "AkRenov - Transformation d&#39;Espaces et Rénovation",
    description: "Découvrez les services de rénovation intérieure et extérieure d&#39;AkRenov.",
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
        <meta httpEquiv="content-language" content="fr" />
        <title>AkRenov - Transformation d&#39;Espaces et Rénovation</title>
      </head>
      <body className="min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}