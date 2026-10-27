import type { Metadata } from "next";
import { TikTokLandingView } from "@/components/tiktok-landing-view";

export const metadata: Metadata = {
  title: "TikTok Oficial · Audios y Videos de Bebé | Magic Voice Studio",
  description:
    "Descubre los videos y audios virales de Magic Voice Studio en TikTok: revelaciones de género, baby shower, ecografías habladas, homenajes y canciones con IA. Pide tu muestra personalizada por WhatsApp.",
  openGraph: {
    title: "TikTok Oficial · Audios y Videos de Bebé | Magic Voice Studio",
    description:
      "Descubre los videos y audios virales de Magic Voice Studio en TikTok: revelaciones de género, baby shower, ecografías habladas y canciones personalizadas.",
    url: "https://www.magicvoicestudio.com.pe/tiktok",
    siteName: "Magic Voice Studio",
    locale: "es_PE",
    type: "website",
  },
};

export default function TikTokPage() {
  return <TikTokLandingView />;
}
