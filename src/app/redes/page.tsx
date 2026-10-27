import type { Metadata } from "next";
import { SocialLinksView } from "@/components/social-links-view";

export const metadata: Metadata = {
  title: "Enlaces y Redes Oficiales | Magic Voice Studio",
  description:
    "Comunícate con Magic Voice Studio por WhatsApp, explora nuestro catálogo de servicios y muestras interactivas, mira testimonios en Canva, videos en TikTok y recomendaciones en Instagram.",
};

export default function RedesPage() {
  return <SocialLinksView />;
}
