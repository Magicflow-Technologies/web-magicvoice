"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "51939218802";

function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

interface SampleItem {
  id: string;
  label: string;
  videoEmbedId?: string;
  directUrl?: string;
  shortUrl?: string;
  canvaEmbed?: string;
  driveEmbed?: string;
  whatsappMsg: string;
}

interface ServiceCardItem {
  id: number;
  title: string;
  shortSubtitle: string;
  isFeatured?: boolean;
  featuredLabel?: string;
  hasSampleBadge?: boolean;
  iconType:
    | "baby"
    | "video"
    | "mic"
    | "heart"
    | "music"
    | "envelope"
    | "cake"
    | "sparkles"
    | "book";
  pillBg: string;
  pillBorder: string;
  iconColor: string;
  arrowBg: string;
  whatsappText: string;
  samples: SampleItem[];
}

const TIKTOK_ALL_SERVICES: ServiceCardItem[] = [
  {
    id: 1,
    title: "Audios de Bebé",
    shortSubtitle: "La emoción de descubrir el gran secreto desde la pancita",
    isFeatured: true,
    featuredLabel: "⭐ ESTRELLA",
    hasSampleBadge: true,
    iconType: "baby",
    pillBg: "bg-[#FFF2F4]",
    pillBorder: "border-[#FFDCE2] hover:border-[#FFB8C5]",
    iconColor: "text-[#FF2E5B]",
    arrowBg: "bg-[#FF2E5B] text-white hover:bg-[#e02049]",
    whatsappText: "Hola Magic Voice Studio, quiero cotizar un Audio de Bebé",
    samples: [
      {
        id: "bebe-audio-es",
        label: "👶 Español (Revelación)",
        videoEmbedId: "7675526268439252240",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7675526268439252240",
        shortUrl: "https://vt.tiktok.com/ZSgPX2rum/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Audio de Bebé para Revelación en Español en TikTok y quiero pedirlo",
      },
      {
        id: "bebe-audio-en",
        label: "🇺🇸 English (Gender Reveal)",
        videoEmbedId: "7662226426514394389",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7662226426514394389",
        whatsappMsg:
          "Hola Magic Voice Studio, quiero cotizar el Audio de Bebé Gender Reveal en Inglés",
      },
      {
        id: "bebe-audio-nina",
        label: "🎀 Baby Shower Niña",
        videoEmbedId: "7519306099456052485",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7519306099456052485",
        shortUrl: "https://vt.tiktok.com/ZSgP4eqGM/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Audio de Baby Shower Niña en TikTok y quiero pedirlo",
      },
      {
        id: "bebe-audio-nino",
        label: "🧸 Baby Shower Niño",
        videoEmbedId: "7644368558813695252",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7644368558813695252",
        shortUrl: "https://vt.tiktok.com/ZSgPXXoqg/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Audio de Baby Shower Niño en TikTok y quiero pedirlo",
      },
      {
        id: "bebe-audio-twins",
        label: "✨ Revelación Twins (Mellizos)",
        videoEmbedId: "7576832920162192651",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7576832920162192651",
        shortUrl: "https://vt.tiktok.com/ZSgPXUe6w/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi la Revelación Twins (Mellizos) en TikTok y quiero cotizarlo",
      },
    ],
  },
  {
    id: 2,
    title: "Video + Audio de Bebé",
    shortSubtitle: "Ecografía animada y su dulce vocecita para proyectar",
    hasSampleBadge: true,
    iconType: "video",
    pillBg: "bg-[#FDF0F6]",
    pillBorder: "border-[#FBD8EB] hover:border-[#F8B6DC]",
    iconColor: "text-[#FF6DAA]",
    arrowBg: "bg-[#FF6DAA] text-white hover:bg-[#f05596]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar Video + Audio de Bebé",
    samples: [
      {
        id: "vid-revelacion",
        label: "🍼 Revelación de Género",
        videoEmbedId: "7628434179641871636",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7628434179641871636",
        whatsappMsg:
          "Hola Magic Voice Studio, quiero cotizar el Video de Revelación que vi en TikTok",
      },
      {
        id: "vid-embarazo",
        label: "🤰 Anuncio de Embarazo",
        videoEmbedId: "7559057187327249720",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7559057187327249720",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video de Anuncio de Embarazo en TikTok y quiero cotizarlo",
      },
      {
        id: "vid-padrinos",
        label: "👑 Pedida de Padrinos",
        videoEmbedId: "7512996206184811782",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7512996206184811782",
        whatsappMsg:
          "Hola Magic Voice Studio, quiero cotizar el Video para Pedida de Padrinos",
      },
      {
        id: "vid-baby-nina",
        label: "🎀 Baby Shower Niña",
        videoEmbedId: "7631013713167912213",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7631013713167912213",
        whatsappMsg:
          "Hola Magic Voice Studio, deseo cotizar el Video animado de Baby Shower Niña",
      },
      {
        id: "vid-baby-nino",
        label: "🧸 Baby Shower Niño",
        videoEmbedId: "7600464947847433480",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7600464947847433480",
        whatsappMsg:
          "Hola Magic Voice Studio, deseo cotizar el Video animado de Baby Shower Niño",
      },
      {
        id: "vid-tematica-1",
        label: "🎨 Temática Ejemplo 1",
        videoEmbedId: "7690688183293594887",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7690688183293594887",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 1 en TikTok y quiero personalizar uno",
      },
      {
        id: "vid-tematica-2",
        label: "🎨 Temática Ejemplo 2",
        videoEmbedId: "7670279315459820817",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7670279315459820817",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 2 en TikTok y quiero personalizar uno",
      },
      {
        id: "vid-tematica-3",
        label: "🎨 Temática Ejemplo 3",
        videoEmbedId: "7664747773920578837",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7664747773920578837",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 3 en TikTok y quiero personalizar uno",
      },
      {
        id: "vid-tematica-4",
        label: "🎨 Temática Ejemplo 4",
        videoEmbedId: "7640650892563270933",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7640650892563270933",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 4 en TikTok y quiero personalizar uno",
      },
      {
        id: "vid-tematica-5",
        label: "🎨 Temática Ejemplo 5",
        videoEmbedId: "7625792270226246933",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7625792270226246933",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 5 en TikTok y quiero personalizar uno",
      },
      {
        id: "vid-tematica-6",
        label: "🎨 Temática Ejemplo 6",
        videoEmbedId: "7622099861764197653",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7622099861764197653",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 6 en TikTok y quiero personalizar uno",
      },
      {
        id: "vid-tematica-7",
        label: "🎨 Temática Ejemplo 7",
        videoEmbedId: "7616206946613349653",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7616206946613349653",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video con Temática Ejemplo 7 en TikTok y quiero personalizar uno",
      },
    ],
  },
  {
    id: 3,
    title: "Recreación de Voz de Ser Querido",
    shortSubtitle: "Un abrazo al alma reviviendo el timbre de su voz",
    hasSampleBadge: true,
    iconType: "mic",
    pillBg: "bg-[#F7F3FF]",
    pillBorder: "border-[#E8DCFF] hover:border-[#D1B8FF]",
    iconColor: "text-[#8C52FF]",
    arrowBg: "bg-[#8C52FF] text-white hover:bg-[#7837f5]",
    whatsappText:
      "Hola Magic Voice Studio, deseo información sobre la Recreación de Voz de un ser querido",
    samples: [
      {
        id: "voz-homenaje",
        label: "🕊️ Audio Recreación de Voz",
        videoEmbedId: "7682931763739430165",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7682931763739430165",
        shortUrl: "https://vt.tiktok.com/ZSgPXFY3o/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi la Recreación de Voz de un Ser Querido en TikTok y deseo cotizarlo",
      },
    ],
  },
  {
    id: 4,
    title: "Video Hablando Ser Querido",
    shortSubtitle: "Su retrato cobra vida con un mensaje que reconforta",
    hasSampleBadge: true,
    iconType: "heart",
    pillBg: "bg-[#F8F3FE]",
    pillBorder: "border-[#E9D9FC] hover:border-[#D6B6F9]",
    iconColor: "text-[#7B2CBF]",
    arrowBg: "bg-[#7B2CBF] text-white hover:bg-[#681fa8]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar el Video hablando de un ser querido",
    samples: [
      {
        id: "video-fallecidos-audio",
        label: "🕊️ Video con Audio de Ser Querido",
        driveEmbed:
          "https://drive.google.com/file/d/1ghJ67ieJ2n3iSzhk5Xe2527g5PJRbcWf/preview",
        directUrl:
          "https://drive.google.com/file/d/1ghJ67ieJ2n3iSzhk5Xe2527g5PJRbcWf/view?usp=sharing",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el video con audio de ser querido en TikTok y deseo cotizar uno igual",
      },
    ],
  },
  {
    id: 5,
    title: "Canciones Personalizadas",
    shortSubtitle: "Tu historia de amor, familia o negocio hecha canción",
    isFeatured: true,
    featuredLabel: "⭐ ESTRELLA",
    hasSampleBadge: true,
    iconType: "music",
    pillBg: "bg-[#FFFBEB]",
    pillBorder: "border-[#FDE68A] hover:border-[#FCD34D]",
    iconColor: "text-[#F59E0B]",
    arrowBg: "bg-[#F59E0B] text-white hover:bg-[#d97706]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar una Canción Personalizada",
    samples: [
      {
        id: "cancion-dedicar",
        label: "💖 Para Dedicar",
        videoEmbedId: "7580539884792745227",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7580539884792745227",
        shortUrl: "https://vt.tiktok.com/ZSgPX8JfP/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi la Canción para Dedicar en TikTok y deseo cotizar una letra original",
      },
      {
        id: "cancion-negocio",
        label: "🎶 Negocio / Estudio",
        videoEmbedId: "7593875802152848658",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7593875802152848658",
        whatsappMsg:
          "Hola Magic Voice Studio, quiero cotizar una producción musical original para mi negocio",
      },
    ],
  },
  {
    id: 6,
    title: "Invitaciones Digitales",
    shortSubtitle: "Interactivas con música, cuenta regresiva, GPS y RSVP",
    hasSampleBadge: true,
    iconType: "envelope",
    pillBg: "bg-[#EFF6FF]",
    pillBorder: "border-[#BFDBFE] hover:border-[#93C5FD]",
    iconColor: "text-[#3B82F6]",
    arrowBg: "bg-[#3B82F6] text-white hover:bg-[#2563eb]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar una Invitación Digital",
    samples: [
      {
        id: "inv-tiktok",
        label: "🎬 Muestra en Video (TikTok)",
        videoEmbedId: "7608301647248313608",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7608301647248313608",
        shortUrl: "https://vt.tiktok.com/ZSgPXd53f/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi la Invitación Digital en TikTok y quiero cotizarla",
      },
      {
        id: "inv-canva",
        label: "📱 Vista Interactiva Canva",
        directUrl:
          "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view",
        canvaEmbed:
          "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view?embed",
        whatsappMsg:
          "Hola Magic Voice Studio, quiero cotizar una Invitación Digital interactiva con cuenta regresiva y GPS",
      },
    ],
  },
  {
    id: 7,
    title: "Videos de Cumpleaños con Temática",
    shortSubtitle: "Edición mágica con fotos, música y su personaje favorito",
    hasSampleBadge: true,
    iconType: "cake",
    pillBg: "bg-[#ECFDF5]",
    pillBorder: "border-[#A7F3D0] hover:border-[#6EE7B7]",
    iconColor: "text-[#10B981]",
    arrowBg: "bg-[#10B981] text-white hover:bg-[#059669]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video de Cumpleaños con Temática",
    samples: [
      {
        id: "cumple-1",
        label: "🎂 Cumpleaños Ejemplo 1",
        videoEmbedId: "7579850075774405899",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7579850075774405899",
        shortUrl: "https://vt.tiktok.com/ZSgPXEDs7/",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video de Cumpleaños Ejemplo 1 en TikTok y quiero cotizarlo",
      },
      {
        id: "cumple-2",
        label: "🎈 Cumpleaños Ejemplo 2",
        videoEmbedId: "7644358948761455893",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7644358948761455893",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video de Cumpleaños Ejemplo 2 en TikTok y quiero cotizarlo",
      },
      {
        id: "cumple-3",
        label: "🎉 Cumpleaños Ejemplo 3",
        videoEmbedId: "7622099861764197653",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7622099861764197653",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video de Cumpleaños Ejemplo 3 en TikTok y quiero cotizarlo",
      },
      {
        id: "cumple-4",
        label: "🌟 Cumpleaños Ejemplo 4",
        videoEmbedId: "7607604168496385288",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7607604168496385288",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video de Cumpleaños Ejemplo 4 en TikTok y quiero cotizarlo",
      },
    ],
  },
  {
    id: 8,
    title: "Video Hora Loca Fiesta",
    shortSubtitle: "Apertura explosiva tipo concierto para encender la pista",
    iconType: "sparkles",
    pillBg: "bg-[#F0FDFA]",
    pillBorder: "border-[#99F6E4] hover:border-[#5EEAD4]",
    iconColor: "text-[#14B8A6]",
    arrowBg: "bg-[#14B8A6] text-white hover:bg-[#0d9488]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video para Hora Loca",
    samples: [
      {
        id: "hora-loca-sample",
        label: "🎉 Intro Explosiva para Pantallas LED",
        directUrl: "https://wa.me/51939218802",
        whatsappMsg:
          "Hola Magic Voice Studio, quiero cotizar un Video explosivo para apertura de Hora Loca",
      },
    ],
  },
  {
    id: 9,
    title: "Video Historia de Vida",
    shortSubtitle: "El documental biográfico más emotivo para homenajear",
    hasSampleBadge: true,
    iconType: "book",
    pillBg: "bg-[#FFF7ED]",
    pillBorder: "border-[#FED7AA] hover:border-[#FDBA74]",
    iconColor: "text-[#F97316]",
    arrowBg: "bg-[#F97316] text-white hover:bg-[#ea580c]",
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video Historia de Vida",
    samples: [
      {
        id: "historia-vida-doc",
        label: "📖 Documental Biográfico Oficial",
        videoEmbedId: "7587621627387743496",
        directUrl: "https://www.tiktok.com/@magicvoice10/video/7587621627387743496",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el Video Historia de Vida en TikTok y quiero cotizar un documental familiar",
      },
      {
        id: "historia-vida-moana",
        label: "🌺 Temática Moana",
        driveEmbed:
          "https://drive.google.com/file/d/1vffH9i3ZZCKKoM_9VTt518qJBAC24j1G/preview",
        directUrl:
          "https://drive.google.com/file/d/1vffH9i3ZZCKKoM_9VTt518qJBAC24j1G/view?usp=sharing",
        whatsappMsg:
          "Hola Magic Voice Studio, vi el video historia de vida temática Moana y deseo cotizar uno igual",
      },
    ],
  },
];

function ThematicPillIcon({
  type,
  className = "w-5 h-5",
}: {
  type: ServiceCardItem["iconType"];
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (type) {
    case "baby":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 10h.01M15 10h.01" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M12 3c-1.5 1.5-1 3 0 3s1.5-1.5 0-3" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect width="13" height="13" x="3" y="6" rx="2.5" />
          <path d="m16 10 5-3v10l-5-3v-4Z" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "music":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "envelope":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect width="18" height="14" x="3" y="5" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "cake":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v2M12 8v2M17 8v2" />
          <circle cx="7" cy="4" r="1" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="17" cy="4" r="1" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      );
  }
}

export function TikTokLandingView() {
  const [selectedService, setSelectedService] = useState<ServiceCardItem | null>(
    null
  );
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);

  useEffect(() => {
    setSelectedSampleIndex(0);
  }, [selectedService]);

  const handleOpenService = (item: ServiceCardItem) => {
    setSelectedService(item);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const activeSample = selectedService
    ? selectedService.samples[selectedSampleIndex] ?? selectedService.samples[0]
    : null;

  const generalWhatsAppUrl = buildWhatsAppUrl(
    "Hola Magic Voice Studio, quiero hacer una consulta o pedido especial desde TikTok"
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col items-center">
      {/* Contenedor centralizado y limpio estilo Link-in-Bio */}
      <div className="w-full max-w-[480px] sm:max-w-xl mx-auto min-h-screen bg-white shadow-xs flex flex-col">
        {/* 1. FOTO BANNER SUPERIOR CON OSITOS / NURSERY WARM & COZY */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-amber-50/50">
          <Image
            src="/tiktok-banner.jpg"
            alt="Magic Voice Studio Nursery"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/40" />
        </div>

        {/* 2. LOGO CIRCULAR EN EL CENTRO SUPERPUESTO */}
        <div className="relative -mt-16 sm:-mt-20 flex justify-center z-10 px-4">
          <div className="relative w-32 h-32 sm:w-38 sm:h-38 rounded-full bg-white shadow-xl p-1 border-2 border-white ring-4 ring-pink-100/80 overflow-hidden select-none group">
            <Image
              src="/magicvoice-circle-logo.jpg"
              alt="MagicVoice Logo Oficial"
              fill
              priority
              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* 3. TÍTULOS Y CABECERA LIMPIA */}
        <div className="text-center px-5 pt-3 pb-4">
          <h1 className="font-script text-4xl sm:text-[44px] font-bold text-slate-800 leading-none tracking-tight">
            MagicVoice
          </h1>

          <p className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.22em] text-slate-400 uppercase mt-1.5 mb-4">
            AUDIOS PERSONALIZADOS PARA MOMENTOS INOLVIDABLES 💖
          </p>

          <h2 className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug max-w-sm mx-auto">
            ¡Conoce todo lo que podemos crear para ti y tu bebé! 💖
          </h2>
        </div>

        {/* 4. LISTA COMPLETA DE LOS 9 SERVICIOS (COLORES PASTEL IDÉNTICOS AL CATÁLOGO) */}
        <div className="px-4 space-y-3 pb-6 flex-1">
          {TIKTOK_ALL_SERVICES.map((service) => {
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => handleOpenService(service)}
                className={`w-full text-left rounded-[26px] ${service.pillBg} border ${service.pillBorder} px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3.5 cursor-pointer shadow-2xs hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 group`}
              >
                {/* Ícono dentro de círculo blanco suave */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/95 ${service.iconColor} border border-slate-100 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <ThematicPillIcon type={service.iconType} className="w-6 h-6" />
                </div>

                {/* Título, Badges y Subtítulo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                    <h3 className="text-[14px] sm:text-[15px] font-extrabold text-slate-900 leading-tight">
                      {service.title}
                    </h3>

                    {service.isFeatured && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FFD700] text-slate-950 text-[10px] font-black uppercase tracking-tight shadow-2xs shrink-0">
                        {service.featuredLabel || "⭐ ESTRELLA"}
                      </span>
                    )}

                    {service.hasSampleBadge && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-[10px] font-bold shadow-2xs shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Muestra
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium truncate">
                    {service.shortSubtitle}
                  </p>
                </div>

                {/* Botón circular con flecha derecha */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${service.arrowBg} flex items-center justify-center shrink-0 font-extrabold text-base shadow-xs group-hover:translate-x-0.5 transition-transform`}
                >
                  ›
                </div>
              </button>
            );
          })}
        </div>

        {/* 5. SECCIÓN DE CONTACTO POR WHATSAPP */}
        <div className="px-6 text-center pt-2 pb-6">
          <p className="text-xs sm:text-[13px] font-semibold text-slate-600 mb-1">
            ¿Tienes dudas o quieres un pedido especial?
          </p>

          <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400 mb-3.5">
            <span>💖</span>
            <span>💖</span>
            <span>💖</span>
          </div>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#FF7A95] to-[#FF8FA3] hover:from-[#f56c88] hover:to-[#ff8196] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-rose-200/80 active:scale-95 transition-all"
          >
            <span className="text-base">💬</span>
            <span>Contáctanos por WhatsApp</span>
          </a>
        </div>

        {/* 6. PIE DE PÁGINA ELEGANTE */}
        <footer className="text-center pb-8 pt-2 px-4 border-t border-slate-100 space-y-2">
          <div className="font-script text-2xl text-slate-600 leading-none">
            MagicVoice
          </div>
          <p className="text-[10px] text-slate-400 font-medium">
            Audios que tocan corazones · © 2026
          </p>

          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-slate-500">
            <Link
              href="/"
              className="hover:text-rose-500 font-medium transition-colors"
            >
              🏠 Web Principal
            </Link>
            <span>·</span>
            <a
              href="https://www.tiktok.com/@magicvoice10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-500 font-medium transition-colors"
            >
              🎵 TikTok Oficial
            </a>
            <span>·</span>
            <Link
              href="/redes"
              className="hover:text-rose-500 font-medium transition-colors"
            >
              🔗 Enlaces
            </Link>
          </div>
        </footer>
      </div>

      {/* MODAL LIMPIO PARA VER MUESTRAS INTERACTIVAS Y PEDIR POR WHATSAPP */}
      {selectedService && activeSample && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-[32px] overflow-hidden shadow-2xl border border-rose-100 flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div
              className={`flex items-center justify-between px-5 py-3.5 border-b border-slate-100 ${selectedService.pillBg}`}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <div
                  className={`w-9 h-9 rounded-2xl bg-white ${selectedService.iconColor} border border-slate-100 shadow-2xs flex items-center justify-center shrink-0`}
                >
                  <ThematicPillIcon
                    type={selectedService.iconType}
                    className="w-5 h-5"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-extrabold text-slate-900 truncate leading-tight">
                    {selectedService.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {activeSample.label}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-white/90 hover:bg-rose-600 text-slate-600 hover:text-white border border-slate-200/80 flex items-center justify-center font-bold text-xs cursor-pointer transition-colors shadow-2xs"
                aria-label="Cerrar ventana"
              >
                ✕
              </button>
            </div>

            {/* Selector de Muestras si la categoría tiene varias */}
            {selectedService.samples.length > 1 && (
              <div className="px-4 pt-3 pb-2 bg-slate-50/70 border-b border-slate-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                    Muestras disponibles ({selectedService.samples.length}):
                  </span>
                  <span className="text-[10px] font-bold text-rose-500">
                    {selectedSampleIndex + 1} de {selectedService.samples.length}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                  {selectedService.samples.map((sample, idx) => {
                    const isSelected = idx === selectedSampleIndex;
                    return (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => setSelectedSampleIndex(idx)}
                        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                          isSelected
                            ? "bg-slate-900 text-white shadow-xs scale-[1.02]"
                            : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                        }`}
                      >
                        {sample.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Visor de Video / Muestra Interactiva */}
            <div className="p-4 bg-white flex flex-col items-center">
              <div className="w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden bg-slate-950 shadow-inner border border-slate-200">
                {activeSample.videoEmbedId ? (
                  <iframe
                    key={activeSample.videoEmbedId}
                    src={`https://www.tiktok.com/player/v1/${activeSample.videoEmbedId}`}
                    title={activeSample.label}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : activeSample.canvaEmbed ? (
                  <iframe
                    key={activeSample.canvaEmbed}
                    src={activeSample.canvaEmbed}
                    title={activeSample.label}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                ) : activeSample.driveEmbed ? (
                  <iframe
                    key={activeSample.driveEmbed}
                    src={activeSample.driveEmbed}
                    title={activeSample.label}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400 bg-slate-900">
                    <span className="text-3xl mb-2">✨</span>
                    <span className="text-sm font-bold text-white">
                      Muestra Privada / Personalizada
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      Contáctanos por WhatsApp para enviarte ejemplos exclusivos de este servicio
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="p-4 pt-1 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
              {activeSample.directUrl && (
                <a
                  href={activeSample.shortUrl || activeSample.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <span>
                    {activeSample.directUrl.includes("drive.google.com")
                      ? "Ver en Drive ↗"
                      : activeSample.directUrl.includes("canva.com")
                      ? "Abrir Canva ↗"
                      : "Ver en TikTok ↗"}
                  </span>
                </a>
              )}

              <a
                href={buildWhatsAppUrl(
                  `${selectedService.whatsappText} (Muestra: ${activeSample.label})`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#25D366] hover:from-emerald-600 hover:to-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <span>💬 Pedir este modelo por WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
