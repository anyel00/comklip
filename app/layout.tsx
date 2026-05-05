import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comklip - Spécialiste du contenu court",
  description:
    "Hook, script, montage. Comklip crée des vidéos TikTok/Instagram qui ramènent des clients dans vos restaurants. Lille / Roubaix.",
  openGraph: {
    title: "Comklip - Spécialiste du contenu court",
    description:
      "Hook, script, montage. Prêt à publier sur TikTok et Instagram.",
    locale: "fr_FR",
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
