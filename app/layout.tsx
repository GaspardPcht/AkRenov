import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "AkRenov - Transformation d'Espaces et Rénovation",
  description:
    "AkRenov, entreprise de rénovation spécialisée dans la transformation d'espaces. Découvrez nos services de rénovation de qualité pour améliorer votre espace de vie.",
  keywords:
    "rénovation, transformation d'espaces, rénovation intérieure, rénovation extérieure, design d'intérieur, travaux de rénovation, rénovation de maison, AkRenov, aménagement, amélioration de maison, rénovation énergétique, modernisation d'intérieur",
  robots: 'index, follow',
  openGraph: {
    title: "AkRenov - Transformation d'Espaces et Rénovation",
    description:
      "AkRenov, entreprise de rénovation spécialisée dans la transformation d'espaces. Découvrez nos services de rénovation de qualité.",
    url: 'https://www.akrenov.com',
    siteName: 'AkRenov',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo AkRenov',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AkRenov',
    title: "AkRenov - Transformation d'Espaces et Rénovation",
    description:
      "Découvrez les services de rénovation intérieure et extérieure d'AkRenov.",
    images: [
      {
        url: '/assets/logo.png',
        alt: 'Logo AkRenov',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.akrenov.com',
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha384-9Z9AuAj0Xi0z7WFOSgjjow8EnNY9wPNp925TVLlAyWhvZPsf5Ks23Ex0mxIrWJzJ"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta httpEquiv="content-language" content="fr" />
        <title>AkRenov - Transformation d&#39;Espaces et Rénovation</title>
      </head>
      <body className="min-h-screen w-full">{children}</body>
    </html>
  );
}
