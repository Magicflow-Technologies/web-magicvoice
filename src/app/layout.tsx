import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://magicvoicestudio.com.pe"),
  title: "Magic Voice Studio | Momentos únicos hechos voz y video",
  description:
    "Transformamos tus emociones en recuerdos inolvidables. Audios de bebé, recreación de voz, canciones personalizadas, invitaciones digitales y videos temáticos.",
  icons: {
    icon: "/magicvoice-logo.png",
    apple: "/magicvoice-logo.png",
  },
  openGraph: {
    title: "Magic Voice Studio | Momentos únicos hechos voz y video",
    description:
      "Elige tu detalle personalizado y sorprende en tu fecha especial. Audios de bebé, homenajes, canciones originales y videos.",
    url: "https://magicvoicestudio.com.pe",
    siteName: "Magic Voice Studio",
    images: [
      {
        url: "/magicvoice-logo.png",
        width: 800,
        height: 800,
        alt: "Magic Voice Studio Logo",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased selection:bg-pink-200 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
