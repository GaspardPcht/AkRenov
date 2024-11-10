import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AkRenov",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/assets/Logo AkRenov.jpg" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
