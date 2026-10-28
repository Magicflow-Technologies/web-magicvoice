"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const WHATSAPP_NUMBER = "51939218802";

const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@magicvoice10",
  instagram: "https://www.instagram.com/magicvoiceoficial/",
  youtube: "https://www.youtube.com/@magicvoicestudio",
  canva: "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view",
};

type FilterCategory =
  | "todos"
  | "bebe"
  | "homenaje"
  | "musica-invitaciones"
  | "fiestas";

type IllustrationType =
  | "stroller"
  | "baby-video"
  | "dove-heart"
  | "memorial-portrait"
  | "music-notes"
  | "digital-invite"
  | "birthday-cake"
  | "party-confetti"
  | "life-book";

interface ServicePillStyle {
  pillBg: string;
  pillBorder: string;
  pillShadow: string;
  iconBoxBg: string;
  iconColor: string;
  arrowBg: string;
  badgeBg: string;
  badgeText: string;
  modalAccentGradient: string;
}

interface ServiceSample {
  id: string;
  label: string;
  videoUrl?: string;
  externalVideoUrl: string;
  shortUrl?: string;
}

interface ServiceItem {
  id: number;
  category: Exclude<FilterCategory, "todos">;
  blockTitle: string;
  title: string;
  shortSubtitle: string;
  badge: string;
  isFeatured?: boolean;
  featuredLabel?: string;
  description: string;
  recommendations: string[];
  whatsappText: string;
  illustration: IllustrationType;
  thumbnailUrl: string;
  thumbnailTag: string;
  videoUrl?: string;
  externalVideoUrl?: string;
  canvaPage?: string;
  samples?: ServiceSample[];
  sampleHighlights: string[];
  style: ServicePillStyle;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    category: "bebe",
    blockTitle: "Bebé y Maternidad",
    title: "Audios de Bebé",
    shortSubtitle: "La emoción de descubrir el gran secreto desde la pancita",
    badge: "👶 Más Pedido",
    isFeatured: true,
    featuredLabel: "⭐ Estrella",
    description:
      "Audio con voz tierna y realista donde tu bebé parece hablarle directamente a mamá, papá y toda la familia. Ideal para anuncios de embarazo, revelaciones de género (Gender Reveal), baby showers o saludos sorpresa.",
    recommendations: [
      "Reprodúcelo conectado a un parlante durante el conteo de revelación o baby shower.",
      "Envíanos los apodos cariñosos de los papás o abuelitos para incluirlos en el guion.",
    ],
    whatsappText: "Hola Magic Voice Studio, quiero cotizar un Audio de Bebé",
    illustration: "stroller",
    thumbnailUrl: "/thumbnails/bebe-audio.jpg",
    thumbnailTag: "Latidos + Voz de Bebé",
    videoUrl: "https://www.tiktok.com/player/v1/7675526268439252240",
    externalVideoUrl:
      "https://www.tiktok.com/@magicvoice10/video/7675526268439252240",
    samples: [
      {
        id: "bebe-audio-es",
        label: "👶 Español (Revelación)",
        videoUrl: "https://www.tiktok.com/player/v1/7675526268439252240",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7675526268439252240",
        shortUrl: "https://vt.tiktok.com/ZSgPX2rum/",
      },
      {
        id: "bebe-audio-en",
        label: "🇺🇸 English (Gender Reveal)",
        videoUrl: "https://www.tiktok.com/player/v1/7662226426514394389",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7662226426514394389",
      },
      {
        id: "bebe-audio-nina",
        label: "🎀 Baby Shower Niña",
        videoUrl: "https://www.tiktok.com/player/v1/7519306099456052485",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7519306099456052485",
        shortUrl: "https://vt.tiktok.com/ZSgP4eqGM/",
      },
      {
        id: "bebe-audio-nino",
        label: "🧸 Baby Shower Niño",
        videoUrl: "https://www.tiktok.com/player/v1/7644368558813695252",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7644368558813695252",
        shortUrl: "https://vt.tiktok.com/ZSgPXXoqg/",
      },
      {
        id: "bebe-audio-twins",
        label: "✨ Revelación Twins (Mellizos)",
        videoUrl: "https://www.tiktok.com/player/v1/7576832920162192651",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7576832920162192651",
        shortUrl: "https://vt.tiktok.com/ZSgPXUe6w/",
      },
    ],
    sampleHighlights: [
      "Guion 100% personalizado con los nombres de mamá, papá y abuelos",
      "Efecto real de latidos de corazón y música de cuna emotiva",
      "Entrega en audio de alta calidad listo para parlante o celular",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-rose-100/90 via-pink-50/90 to-rose-50/70",
      pillBorder: "border-rose-200/90 hover:border-rose-300",
      pillShadow: "shadow-sm shadow-rose-100/60 hover:shadow-md hover:shadow-rose-200/60",
      iconBoxBg: "bg-white border border-rose-200/80 shadow-2xs",
      iconColor: "text-rose-500",
      arrowBg: "bg-white text-rose-600 border border-rose-200 group-hover:bg-rose-500 group-hover:text-white",
      badgeBg: "bg-rose-500/10 border-rose-300/70",
      badgeText: "text-rose-700",
      modalAccentGradient: "from-rose-500 to-pink-500",
    },
  },
  {
    id: 2,
    category: "bebe",
    blockTitle: "Bebé y Maternidad",
    title: "Video + Audio de Bebé",
    shortSubtitle: "Ecografía animada y su dulce vocecita para proyectar",
    badge: "🍼 Experiencia Completa",
    description:
      "Video temático animado que combina tus ecografías, fotos familiares y la voz personalizada de tu bebé. Diseñado para emocionar a todos los invitados al proyectarse en pantalla durante tu celebración.",
    recommendations: [
      "Ideal para proyectar en TV o pantalla gigante antes de revelar si es niño o niña.",
      "Puedes enviarnos entre 5 y 12 fotos o videos cortos de la ecografía y la barriguita.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar Video + Audio de Bebé",
    illustration: "baby-video",
    thumbnailUrl: "/thumbnails/bebe-video.jpg",
    thumbnailTag: "Video Animado + Ecografía",
    videoUrl: "https://www.tiktok.com/player/v1/7628434179641871636",
    externalVideoUrl:
      "https://www.tiktok.com/@magicvoice10/video/7628434179641871636",
    samples: [
      {
        id: "bebe-vid-revelacion",
        label: "🍼 Revelación de Género",
        videoUrl: "https://www.tiktok.com/player/v1/7628434179641871636",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7628434179641871636",
      },
      {
        id: "bebe-vid-embarazo",
        label: "🤰 Anuncio de Embarazo",
        videoUrl: "https://www.tiktok.com/player/v1/7559057187327249720",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7559057187327249720",
      },
      {
        id: "bebe-vid-padrinos",
        label: "👑 Pedida de Padrinos",
        videoUrl: "https://www.tiktok.com/player/v1/7512996206184811782",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7512996206184811782",
      },
      {
        id: "bebe-vid-nina",
        label: "🎀 Baby Shower Niña",
        videoUrl: "https://www.tiktok.com/player/v1/7631013713167912213",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7631013713167912213",
      },
      {
        id: "bebe-vid-nino",
        label: "🧸 Baby Shower Niño",
        videoUrl: "https://www.tiktok.com/player/v1/7600464947847433480",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7600464947847433480",
      },
      {
        id: "bebe-vid-tematica-1",
        label: "🎨 Temática Favorita 1",
        videoUrl: "https://www.tiktok.com/player/v1/7690688183293594887",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7690688183293594887",
      },
      {
        id: "bebe-vid-tematica-2",
        label: "🎨 Temática Favorita 2",
        videoUrl: "https://www.tiktok.com/player/v1/7670279315459820817",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7670279315459820817",
      },
      {
        id: "bebe-vid-tematica-3",
        label: "🎨 Temática Favorita 3",
        videoUrl: "https://www.tiktok.com/player/v1/7664747773920578837",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7664747773920578837",
      },
      {
        id: "bebe-vid-tematica-4",
        label: "🎨 Temática Favorita 4",
        videoUrl: "https://www.tiktok.com/player/v1/7640650892563270933",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7640650892563270933",
      },
      {
        id: "bebe-vid-tematica-5",
        label: "🎨 Temática Favorita 5",
        videoUrl: "https://www.tiktok.com/player/v1/7625792270226246933",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7625792270226246933",
      },
      {
        id: "bebe-vid-tematica-6",
        label: "🎨 Temática Favorita 6",
        videoUrl: "https://www.tiktok.com/player/v1/7622099861764197653",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7622099861764197653",
      },
      {
        id: "bebe-vid-tematica-7",
        label: "🎨 Temática Favorita 7",
        videoUrl: "https://www.tiktok.com/player/v1/7616206946613349653",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7616206946613349653",
      },
    ],
    sampleHighlights: [
      "Edición animada con ecografías, fotos familiares y cuenta regresiva",
      "Locución sincronizada con la voz tierna de tu bebé",
      "Formato Full HD listo para proyectar en TV o compartir por redes",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-pink-100/85 via-rose-50/85 to-fuchsia-50/60",
      pillBorder: "border-pink-200/90 hover:border-pink-300",
      pillShadow: "shadow-sm shadow-pink-100/60 hover:shadow-md hover:shadow-pink-200/60",
      iconBoxBg: "bg-white border border-pink-200/80 shadow-2xs",
      iconColor: "text-pink-500",
      arrowBg: "bg-white text-pink-600 border border-pink-200 group-hover:bg-pink-500 group-hover:text-white",
      badgeBg: "bg-pink-500/10 border-pink-300/70",
      badgeText: "text-pink-700",
      modalAccentGradient: "from-pink-500 to-rose-500",
    },
  },
  {
    id: 3,
    category: "homenaje",
    blockTitle: "Homenajes",
    title: "Recreación de Voz de Ser Querido",
    shortSubtitle: "Un abrazo al alma reviviendo el timbre de su voz",
    badge: "🕊️ Homenaje con Respeto",
    description:
      "Revive con profundo respeto y amor las palabras y el tono cálido de quien ya no está físicamente. Un regalo sonoro inolvidable para aniversarios, bodas, cumpleaños o dedicatorias familiares.",
    recommendations: [
      "Basta con enviarnos notas de voz de WhatsApp o videos antiguos donde se escuche su voz con claridad.",
      "Trabajamos cada homenaje con absoluta confidencialidad y delicadeza.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, deseo información sobre la Recreación de Voz de un ser querido",
    illustration: "dove-heart",
    thumbnailUrl: "/thumbnails/ser-querido-voz.jpg",
    thumbnailTag: "Tributo Conmemorativo",
    videoUrl: "https://www.tiktok.com/player/v1/7682931763739430165",
    externalVideoUrl:
      "https://www.tiktok.com/@magicvoice10/video/7682931763739430165",
    samples: [
      {
        id: "voz-ser-querido-audio",
        label: "🕊️ Audio Recreación de Voz",
        videoUrl: "https://www.tiktok.com/player/v1/7682931763739430165",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7682931763739430165",
        shortUrl: "https://vt.tiktok.com/ZSgPXFY3o/",
      },
    ],
    sampleHighlights: [
      "Reconstrucción respetuosa del timbre y calidez de voz a partir de audios o videos antiguos",
      "Musicalización instrumental suave y emotiva de estudio",
      "Privacidad total garantizada en todos los recuerdos familiares",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-purple-100/90 via-violet-50/85 to-indigo-50/60",
      pillBorder: "border-purple-200/90 hover:border-purple-300",
      pillShadow: "shadow-sm shadow-purple-100/60 hover:shadow-md hover:shadow-purple-200/60",
      iconBoxBg: "bg-white border border-purple-200/80 shadow-2xs",
      iconColor: "text-purple-600",
      arrowBg: "bg-white text-purple-600 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
      badgeBg: "bg-purple-500/10 border-purple-300/70",
      badgeText: "text-purple-800",
      modalAccentGradient: "from-purple-600 to-violet-500",
    },
  },
  {
    id: 4,
    category: "homenaje",
    blockTitle: "Homenajes",
    title: "Video Hablando Ser Querido",
    shortSubtitle: "Su retrato cobra vida con un mensaje que reconforta",
    badge: "🤍 Emoción Pura",
    description:
      "Video conmemorativo donde la fotografía de tu ser querido cobra vida sutilmente para dedicarte un mensaje hablado lleno de paz, orgullo y amor familiar.",
    recommendations: [
      "Elige una fotografía frontal e iluminada; nosotros nos encargamos de restaurarla y mejorar su nitidez.",
      "Perfecto para misas de honras, semblanzas o sorpresas para padres y abuelos.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar el Video hablando de un ser querido",
    illustration: "memorial-portrait",
    thumbnailUrl: "/thumbnails/ser-querido-video.jpg",
    thumbnailTag: "Retrato Restaurado + Voz",
    videoUrl:
      "https://drive.google.com/file/d/1ghJ67ieJ2n3iSzhk5Xe2527g5PJRbcWf/preview",
    externalVideoUrl:
      "https://drive.google.com/file/d/1ghJ67ieJ2n3iSzhk5Xe2527g5PJRbcWf/view?usp=sharing",
    samples: [
      {
        id: "video-fallecidos-audio-1",
        label: "🕊️ Video con Audio de Ser Querido",
        videoUrl:
          "https://drive.google.com/file/d/1ghJ67ieJ2n3iSzhk5Xe2527g5PJRbcWf/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1ghJ67ieJ2n3iSzhk5Xe2527g5PJRbcWf/view?usp=sharing",
      },
      {
        id: "video-fallecidos-audio-2",
        label: "🤍 Video + Audio Fallecido",
        videoUrl:
          "https://drive.google.com/file/d/1E3iZ5PxEOB3uvib5tpTdlk_EjriHHRHh/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1E3iZ5PxEOB3uvib5tpTdlk_EjriHHRHh/view?usp=sharing",
      },
    ],
    sampleHighlights: [
      "Animación facial sutil y natural a partir de una fotografía familiar",
      "Sincronización labial con el mensaje hablado conmemorativo",
      "Ideal para misas de honras, aniversarios o regalo familiar",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-violet-100/90 via-purple-50/85 to-fuchsia-50/60",
      pillBorder: "border-violet-200/90 hover:border-violet-300",
      pillShadow: "shadow-sm shadow-violet-100/60 hover:shadow-md hover:shadow-violet-200/60",
      iconBoxBg: "bg-white border border-violet-200/80 shadow-2xs",
      iconColor: "text-violet-600",
      arrowBg: "bg-white text-violet-600 border border-violet-200 group-hover:bg-violet-600 group-hover:text-white",
      badgeBg: "bg-violet-500/10 border-violet-300/70",
      badgeText: "text-violet-800",
      modalAccentGradient: "from-violet-600 to-purple-500",
    },
  },
  {
    id: 5,
    category: "musica-invitaciones",
    blockTitle: "Música e Invitaciones",
    title: "Canciones Personalizadas",
    shortSubtitle: "Tu historia de amor, familia o negocio hecha canción",
    badge: "🎵 100% Original",
    isFeatured: true,
    featuredLabel: "⭐ Estrella",
    description:
      "Componemos letra y música original desde cero con tus nombres, fechas especiales y anécdotas. Disponible para dedicatorias románticas, cumpleaños, aniversarios de bodas o jingles comerciales para tu marca.",
    recommendations: [
      "Cuéntanos cómo se conocieron o qué frases los identifican y elige tu ritmo favorito (balada, pop, acústico, salsa, cumbia o urbano).",
      "Ideal para primer baile de esposos, sorpresas de aniversario o reels de negocio.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar una Canción Personalizada",
    illustration: "music-notes",
    thumbnailUrl: "/thumbnails/cancion.jpg",
    thumbnailTag: "Estudio Musical Original",
    videoUrl: "https://www.tiktok.com/player/v1/7580539884792745227",
    externalVideoUrl:
      "https://www.tiktok.com/@magicvoice10/video/7580539884792745227",
    samples: [
      {
        id: "cancion-dedicar",
        label: "💖 Para Dedicar",
        videoUrl: "https://www.tiktok.com/player/v1/7580539884792745227",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7580539884792745227",
        shortUrl: "https://vt.tiktok.com/ZSgPX8JfP/",
      },
      {
        id: "cancion-estudio-negocio",
        label: "🎶 Producción Original / Negocio",
        videoUrl: "https://www.tiktok.com/player/v1/7593875802152848658",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7593875802152848658",
      },
    ],
    sampleHighlights: [
      "Letra escrita desde cero con tus nombres, fechas y anécdotas",
      "Tú eliges el género: balada pop, acústico, salsa, cumbia, urbano o jingle comercial",
      "Calidad de estudio máster lista para dedicar o publicar en redes",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-amber-100/90 via-yellow-50/90 to-orange-50/60",
      pillBorder: "border-amber-200/90 hover:border-amber-300",
      pillShadow: "shadow-sm shadow-amber-100/60 hover:shadow-md hover:shadow-amber-200/60",
      iconBoxBg: "bg-white border border-amber-200/80 shadow-2xs",
      iconColor: "text-amber-600",
      arrowBg: "bg-white text-amber-700 border border-amber-200 group-hover:bg-amber-500 group-hover:text-white",
      badgeBg: "bg-amber-500/15 border-amber-300/80",
      badgeText: "text-amber-900",
      modalAccentGradient: "from-amber-500 to-orange-500",
    },
  },
  {
    id: 6,
    category: "musica-invitaciones",
    blockTitle: "Música e Invitaciones",
    title: "Invitaciones Digitales",
    shortSubtitle: "Interactivas con música, cuenta regresiva, GPS y RSVP",
    badge: "💌 Interactivas",
    description:
      "Invitaciones móviles elegantes y lúdicas con música de fondo, cuenta regresiva en vivo, mapa GPS hacia el local y confirmación de asistencia directa a tu WhatsApp.",
    recommendations: [
      "Compártela por WhatsApp con todos tus invitados sin límite de envíos.",
      "Adaptamos los colores y personajes a la temática exacta de tu baby shower, bautizo, boda o cumpleaños.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar una Invitación Digital",
    illustration: "digital-invite",
    thumbnailUrl: "/thumbnails/invitacion.jpg",
    thumbnailTag: "Música + Mapa GPS + RSVP",
    videoUrl: "https://www.tiktok.com/player/v1/7608301647248313608",
    externalVideoUrl:
      "https://www.tiktok.com/@magicvoice10/video/7608301647248313608",
    canvaPage:
      "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view?embed",
    samples: [
      {
        id: "invitacion-tiktok-video",
        label: "🎬 Muestra en Video Invitación",
        videoUrl: "https://www.tiktok.com/player/v1/7608301647248313608",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7608301647248313608",
        shortUrl: "https://vt.tiktok.com/ZSgPXd53f/",
      },
      {
        id: "invitacion-canva-interactiva",
        label: "✨ Solicita Información y Diseño Personalizado",
        videoUrl:
          "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view?embed",
        externalVideoUrl:
          "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view",
      },
    ],
    sampleHighlights: [
      "Diseño 100% interactivo para enviar por WhatsApp sin límite de invitados",
      "Incluye canción de fondo, cuenta regresiva en vivo y botón GPS (Google Maps / Waze)",
      "Botón directo para confirmar asistencia (RSVP) a tu WhatsApp",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-sky-100/90 via-blue-50/85 to-cyan-50/60",
      pillBorder: "border-sky-200/90 hover:border-sky-300",
      pillShadow: "shadow-sm shadow-sky-100/60 hover:shadow-md hover:shadow-sky-200/60",
      iconBoxBg: "bg-white border border-sky-200/80 shadow-2xs",
      iconColor: "text-sky-600",
      arrowBg: "bg-white text-sky-600 border border-sky-200 group-hover:bg-sky-500 group-hover:text-white",
      badgeBg: "bg-sky-500/10 border-sky-300/70",
      badgeText: "text-sky-800",
      modalAccentGradient: "from-sky-500 to-blue-500",
    },
  },
  {
    id: 7,
    category: "fiestas",
    blockTitle: "Fiestas",
    title: "Videos de Cumpleaños con Temática",
    shortSubtitle: "Edición mágica con fotos, música y su personaje favorito",
    badge: "🎬 Niños y Adultos",
    description:
      "Videos personalizados según la temática de la fiesta, combinando las mejores fotografías y clips familiares con locución festiva y animación dinámica para proyectar antes de cantar el cumpleaños.",
    recommendations: [
      "Disponible tanto para temáticas infantiles (princesas, superhéroes, safari, etc.) como para cumpleaños de adultos (18, 30, 50, 70+ años).",
      "Se entrega en alta resolución para pantallas LED, proyectores o televisores.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video de Cumpleaños con Temática",
    illustration: "birthday-cake",
    thumbnailUrl: "/thumbnails/cumpleanos.jpg",
    thumbnailTag: "Temática Infantil y Adultos",
    videoUrl: "https://www.tiktok.com/player/v1/7579850075774405899",
    externalVideoUrl:
      "https://www.tiktok.com/@magicvoice10/video/7579850075774405899",
    samples: [
      {
        id: "cumple-ejemplo-1",
        label: "🎂 Cumpleaños Ejemplo 1",
        videoUrl: "https://www.tiktok.com/player/v1/7579850075774405899",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7579850075774405899",
        shortUrl: "https://vt.tiktok.com/ZSgPXEDs7/",
      },
      {
        id: "cumple-ejemplo-2",
        label: "🎈 Cumpleaños Ejemplo 2",
        videoUrl: "https://www.tiktok.com/player/v1/7644358948761455893",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7644358948761455893",
      },
      {
        id: "cumple-ejemplo-3",
        label: "🎉 Cumpleaños Ejemplo 3",
        videoUrl: "https://www.tiktok.com/player/v1/7622099861764197653",
        externalVideoUrl:
          "https://www.tiktok.com/@magicvoice10/video/7622099861764197653",
      },
    ],
    sampleHighlights: [
      "Personalizado con el personaje o temática favorita del cumpleañero",
      "Selección de mejores fotos y videos con efectos dinámicos y música alegre",
      "Locución festiva para emocionar a todos antes de cantar el Happy Birthday",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-emerald-100/90 via-teal-50/85 to-green-50/60",
      pillBorder: "border-emerald-200/90 hover:border-emerald-300",
      pillShadow: "shadow-sm shadow-emerald-100/60 hover:shadow-md hover:shadow-emerald-200/60",
      iconBoxBg: "bg-white border border-emerald-200/80 shadow-2xs",
      iconColor: "text-emerald-600",
      arrowBg: "bg-white text-emerald-600 border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white",
      badgeBg: "bg-emerald-500/10 border-emerald-300/70",
      badgeText: "text-emerald-800",
      modalAccentGradient: "from-emerald-500 to-teal-500",
    },
  },
  {
    id: 8,
    category: "fiestas",
    blockTitle: "Fiestas",
    title: "Video Hora Loca Fiesta",
    shortSubtitle: "Apertura explosiva tipo concierto para encender la pista",
    badge: "🎉 Pura Fiesta",
    description:
      "Video introductorio con cuenta regresiva, efectos visuales de alto impacto y locución de animador nombrando a los anfitriones para abrir la Hora Loca a lo grande.",
    recommendations: [
      "Coordínalo con el DJ o encargado de la pantalla LED para lanzarlo justo cuando entran los arlequines o personajes.",
      "Ideal para quinceañeros, matrimonios, promociones y fiestas de aniversario.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video para Hora Loca",
    illustration: "party-confetti",
    thumbnailUrl: "/thumbnails/hora-loca.jpg",
    thumbnailTag: "Intro Pantalla LED Fiesta",
    videoUrl:
      "https://drive.google.com/file/d/1E99sUG4pJUoW5URuWBbqJQmQXitSlcRl/preview",
    externalVideoUrl:
      "https://drive.google.com/file/d/1E99sUG4pJUoW5URuWBbqJQmQXitSlcRl/view?usp=sharing",
    samples: [
      {
        id: "hora-loca-boda-cristiana",
        label: "💒 Fiesta Boda Cristiana",
        videoUrl:
          "https://drive.google.com/file/d/1E99sUG4pJUoW5URuWBbqJQmQXitSlcRl/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1E99sUG4pJUoW5URuWBbqJQmQXitSlcRl/view?usp=sharing",
      },
      {
        id: "hora-loca-boda-avion",
        label: "✈️ Fiesta Boda Temática Avión",
        videoUrl:
          "https://drive.google.com/file/d/1oPz6bDPydtKSx980OqYOW-Lra3CtHDaH/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1oPz6bDPydtKSx980OqYOW-Lra3CtHDaH/view?usp=sharing",
      },
    ],
    sampleHighlights: [
      "Cuenta regresiva explosiva de alto impacto visual y sonoro",
      "Animación estilo concierto para pantallas LED de quinceañeros, bodas y cumpleaños",
      "Locución de animador enérgica nombrando a los anfitriones de la fiesta",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-teal-100/90 via-cyan-50/85 to-emerald-50/60",
      pillBorder: "border-teal-200/90 hover:border-teal-300",
      pillShadow: "shadow-sm shadow-teal-100/60 hover:shadow-md hover:shadow-teal-200/60",
      iconBoxBg: "bg-white border border-teal-200/80 shadow-2xs",
      iconColor: "text-teal-600",
      arrowBg: "bg-white text-teal-600 border border-teal-200 group-hover:bg-teal-500 group-hover:text-white",
      badgeBg: "bg-teal-500/10 border-teal-300/70",
      badgeText: "text-teal-800",
      modalAccentGradient: "from-teal-500 to-emerald-500",
    },
  },
  {
    id: 9,
    category: "fiestas",
    blockTitle: "Fiestas",
    title: "Video Historia de Vida",
    shortSubtitle: "El documental biográfico más emotivo para homenajear",
    badge: "📖 Recuerdos Inolvidables",
    description:
      "Edición documental que recorre la trayectoria, anécdotas y etapas más valiosas de una persona o pareja con narración cálida de estudio y musicalización cinematográfica.",
    recommendations: [
      "Organiza las fotografías por etapas (infancia, juventud, familia, logros) y cuéntanos 3 o 4 anécdotas especiales.",
      "El regalo predilecto para bodas de plata/oro y cumpleaños número 50, 60, 70 u 80.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video Historia de Vida",
    illustration: "life-book",
    thumbnailUrl: "/thumbnails/historia-vida.jpg",
    thumbnailTag: "Documental Biográfico",
    videoUrl:
      "https://drive.google.com/file/d/1vffH9i3ZZCKKoM_9VTt518qJBAC24j1G/preview",
    externalVideoUrl:
      "https://drive.google.com/file/d/1vffH9i3ZZCKKoM_9VTt518qJBAC24j1G/view?usp=sharing",
    samples: [
      {
        id: "historia-vida-moana",
        label: "🌺 Temática Moana (Ejemplo 1)",
        videoUrl:
          "https://drive.google.com/file/d/1vffH9i3ZZCKKoM_9VTt518qJBAC24j1G/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1vffH9i3ZZCKKoM_9VTt518qJBAC24j1G/view?usp=sharing",
      },
      {
        id: "historia-vida-ejemplo-2",
        label: "📖 Historia de Vida (Ejemplo 2)",
        videoUrl:
          "https://drive.google.com/file/d/1KW7NGqMC9DzZzO4hhWniDQO3GCNAf4qd/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1KW7NGqMC9DzZzO4hhWniDQO3GCNAf4qd/view?usp=sharing",
      },
      {
        id: "historia-vida-ejemplo-3",
        label: "🎬 Historia de Vida (Ejemplo 3)",
        videoUrl:
          "https://drive.google.com/file/d/1VGOVjWsyDhG3b-3t6Bep1vg0iax4eup5/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/1VGOVjWsyDhG3b-3t6Bep1vg0iax4eup5/view?usp=sharing",
      },
    ],
    sampleHighlights: [
      "Narración cálida estilo documental contando cada etapa e historia familiar",
      "Restauración y animación de álbumes fotográficos desde la infancia hasta hoy",
      "El regalo más emotivo para bodas de oro, 50/60/80 años o aniversarios",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-orange-100/85 via-amber-50/85 to-rose-50/65",
      pillBorder: "border-orange-200/90 hover:border-orange-300",
      pillShadow: "shadow-sm shadow-orange-100/60 hover:shadow-md hover:shadow-orange-200/60",
      iconBoxBg: "bg-white border border-orange-200/80 shadow-2xs",
      iconColor: "text-orange-600",
      arrowBg: "bg-white text-orange-600 border border-orange-200 group-hover:bg-orange-500 group-hover:text-white",
      badgeBg: "bg-orange-500/10 border-orange-300/70",
      badgeText: "text-orange-800",
      modalAccentGradient: "from-orange-500 to-rose-500",
    },
  },
  {
    id: 10,
    category: "fiestas",
    blockTitle: "Fiestas",
    title: "Video Cumpleaños Adultos",
    shortSubtitle: "Homenaje especial con fotos, música y momentos familiares",
    badge: "🎂 Edición Emotiva",
    description:
      "Homenaje audiovisual personalizado para papá, mamá o abuelos en sus cumpleaños especiales con recopilación de fotos, música y dedicatorias familiares.",
    recommendations: [
      "El regalo más emotivo para 40, 50, 60, 70 o 80 años.",
      "Nos envías las fotos familiares favoritas y anécdotas de vida.",
    ],
    whatsappText:
      "Hola Magic Voice Studio, quiero cotizar un Video de Cumpleaños para Adultos",
    illustration: "birthday-cake",
    thumbnailUrl: "/thumbnails/cumpleanos.jpg",
    thumbnailTag: "Cumpleaños Adultos",
    videoUrl:
      "https://drive.google.com/file/d/17Iv3Rws0jOYFt1FORATzSgE0hs3yHTVg/preview",
    externalVideoUrl:
      "https://drive.google.com/file/d/17Iv3Rws0jOYFt1FORATzSgE0hs3yHTVg/view?usp=sharing",
    samples: [
      {
        id: "cumple-adultos-papa",
        label: "🎂 Cumpleaños Papá",
        videoUrl:
          "https://drive.google.com/file/d/17Iv3Rws0jOYFt1FORATzSgE0hs3yHTVg/preview",
        externalVideoUrl:
          "https://drive.google.com/file/d/17Iv3Rws0jOYFt1FORATzSgE0hs3yHTVg/view?usp=sharing",
      },
    ],
    sampleHighlights: [
      "Edición emotiva con fotos de toda su vida y momentos familiares",
      "Musicalización y dedicatoria personalizada",
      "Listo para proyectar en pantalla durante la fiesta o reunión",
    ],
    style: {
      pillBg: "bg-gradient-to-r from-purple-100/90 via-violet-50/85 to-indigo-50/60",
      pillBorder: "border-purple-200/90 hover:border-purple-300",
      pillShadow: "shadow-sm shadow-purple-100/60 hover:shadow-md hover:shadow-purple-200/60",
      iconBoxBg: "bg-white border border-purple-200/80 shadow-2xs",
      iconColor: "text-purple-600",
      arrowBg: "bg-white text-purple-600 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
      badgeBg: "bg-purple-500/10 border-purple-300/70",
      badgeText: "text-purple-800",
      modalAccentGradient: "from-purple-600 to-indigo-500",
    },
  },
];

interface ChatTestimonial {
  id: string;
  author: string;
  serviceTag: string;
  message: string;
  time: string;
  avatarEmoji: string;
  bubbleAccent: string;
}

const CHAT_TESTIMONIALS: ChatTestimonial[] = [
  {
    id: "chat-1",
    author: "María Fernanda · Lima",
    serviceTag: "👶 Audio de Bebé",
    message:
      "Hicieron llorar a mi familia en la revelación. Cuando sonó la vocecita de mi bebé con los latidos nadie podía creer lo real y tierno que se escuchaba. ¡Mil gracias!",
    time: "19:42",
    avatarEmoji: "🤰",
    bubbleAccent: "border-rose-200/80 bg-rose-50/40",
  },
  {
    id: "chat-2",
    author: "Carlos & Valeria · Arequipa",
    serviceTag: "🕊️ Recreación de Voz",
    message:
      "Un recuerdo único para mi abuelo. Escuchar nuevamente las palabras de mi abuelita en su aniversario nos abrazó el alma a todos. Trabajo súper respetuoso y puntual.",
    time: "21:15",
    avatarEmoji: "🤍",
    bubbleAccent: "border-purple-200/80 bg-purple-50/40",
  },
  {
    id: "chat-3",
    author: "Andrea Salazar · Trujillo",
    serviceTag: "🎵 Canción Personalizada",
    message:
      "La canción con nuestra historia de amor quedó de película. La pusimos en nuestro aniversario y todos los invitados nos preguntaron dónde la grabamos.",
    time: "18:09",
    avatarEmoji: "🎶",
    bubbleAccent: "border-amber-200/80 bg-amber-50/40",
  },
  {
    id: "chat-4",
    author: "Lucía Paredes · Cusco",
    serviceTag: "🍼 Video + Audio de Bebé",
    message:
      "Proyectamos el video con la ecografía hablada en plena fiesta y fue el momento más mágico de la tarde. Súper recomendados por su paciencia y cariño.",
    time: "16:30",
    avatarEmoji: "👶",
    bubbleAccent: "border-pink-200/80 bg-pink-50/40",
  },
  {
    id: "chat-5",
    author: "Jorge Luis · Piura",
    serviceTag: "📖 Video Historia de Vida",
    message:
      "Le regalamos el documental a mi papá por sus 70 años y terminó abrazándonos a todos. La narración y la edición de las fotos antiguas quedaron impecables.",
    time: "20:05",
    avatarEmoji: "🎬",
    bubbleAccent: "border-emerald-200/80 bg-emerald-50/40",
  },
];

interface WorkStep {
  step: number;
  title: string;
  icon: string;
}

const WORK_STEPS: WorkStep[] = [
  {
    step: 1,
    title: "Nos cuentas tu fecha especial por WhatsApp.",
    icon: "💬",
  },
  {
    step: 2,
    title: "Diseñamos y grabamos tu muestra personalizada.",
    icon: "🎙️",
  },
  {
    step: 3,
    title:
      "Te enviamos el archivo en alta definición listo para proyectar o regalar.",
    icon: "🎁",
  },
];

const FILTER_TABS: { id: FilterCategory; label: string; emoji: string }[] = [
  { id: "todos", label: "Todos", emoji: "✨" },
  { id: "bebe", label: "Bebé y Maternidad", emoji: "👶" },
  { id: "homenaje", label: "Homenajes", emoji: "🕊️" },
  { id: "musica-invitaciones", label: "Música e Invitaciones", emoji: "🎵" },
  { id: "fiestas", label: "Fiestas", emoji: "🎉" },
];

const NAV_ITEMS: { href: string; label: string; icon: string }[] = [
  { href: "#inicio", label: "Inicio", icon: "🏠" },
  { href: "#nosotros", label: "Nosotros", icon: "💖" },
  { href: "#servicios", label: "Servicios", icon: "✨" },
  { href: "#contacto", label: "Contacto", icon: "💬" },
];

function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Ícono temático vectorial dentro del círculo/caja suave de cada píldora
 */
function ServiceThematicIcon({
  type,
  className = "w-6 h-6",
}: {
  type: IllustrationType;
  className?: string;
}) {
  switch (type) {
    case "stroller":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.5 11h.01M14.5 11h.01M10 14.5c.6.6 1.3.9 2 .9s1.4-.3 2-.9M12 5.5c0-1.2 1-2 2-1.5"
          />
        </svg>
      );
    case "baby-video":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <rect x="3" y="6" width="13" height="12" rx="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 10l5-2.5v9L16 14"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.5 10.2l3.5 1.8-3.5 1.8v-3.6z"
          />
        </svg>
      );
    case "dove-heart":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10v1a7 7 0 0014 0v-1M12 18v3m-4 0h8"
          />
        </svg>
      );
    case "memorial-portrait":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.5s-6.5-4.2-8.8-8.2C1.5 9.3 3.4 5.5 7.1 5.5c2 0 3.6 1.1 4.9 2.7 1.3-1.6 2.9-2.7 4.9-2.7 3.7 0 5.6 3.8 3.9 6.8-2.3 4-8.8 8.2-8.8 8.2z"
          />
        </svg>
      );
    case "music-notes":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 18V6l11-2v12M9 18a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm11-2a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      );
    case "digital-invite":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    case "birthday-cake":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V3m0 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7 8h14a2 2 0 012 2v4H3v-4a2 2 0 012-2zm2-4h10a1 1 0 011 1v3H6v-3a1 1 0 011-1z"
          />
        </svg>
      );
    case "party-confetti":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      );
    case "life-book":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.9}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      );
  }
}

/**
 * 1. MENÚ DE NAVEGACIÓN SUPERIOR (Header Sticky con Smooth Scroll)
 * - Lado izquierdo: Logo circular oficial + texto "MagicVoice Studio" con enlace a inicio.
 * - Centro en PC (md:): 4 enlaces limpios en línea horizontal (Inicio, Nosotros, Servicios, Contacto).
 * - Lado derecho en PC (md:): Botón llamativo directo a WhatsApp ("Chatear").
 * - Lado derecho en Móvil: Únicamente el botón de menú hamburguesa (o 'X' cuando está abierto).
 * - Desplegable Móvil: Lista vertical compacta sobre fondo blanco puro con shadow-xl.
 */
function TopNavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const headerWhatsAppUrl = buildWhatsAppUrl(
    "Hola Magic Voice Studio, quiero hacer una consulta"
  );

  return (
    <div className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Lado Izquierdo: Logo circular oficial + texto "MagicVoice Studio" */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border border-pink-200 bg-white p-0.5 shadow-2xs">
            <img
              src="/magicvoice-logo.png"
              alt="MagicVoice Studio"
              className="w-full h-full rounded-full object-cover scale-[1.06]"
            />
          </div>
          <span className="text-base sm:text-lg font-extrabold tracking-tight">
            <span className="text-[#1E2E5A]">Magic</span>
            <span className="text-[#EB5A8C]">Voice</span>{" "}
            <span className="text-slate-700 font-semibold">Studio</span>
          </span>
        </a>

        {/* Centro en PC (md: y superior): 4 enlaces en una sola línea horizontal limpia */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center justify-center gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 hover:text-rose-500 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Lado Derecho: Botón "Chatear" en PC / Únicamente botón Hamburguesa o 'X' en Móvil */}
        <div className="flex items-center">
          <a
            href={headerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-[#25D366] hover:from-emerald-500 hover:to-[#20bd5a] text-white text-xs font-extrabold shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <span>💬</span>
            <span>Chatear</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
            className="md:hidden w-10 h-10 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-800 hover:text-rose-600 border border-slate-200/80 flex items-center justify-center text-base font-bold cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú Móvil Desplegable: Lista vertical compacta y estilizada con fondo blanco puro y shadow-xl */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menú móvil"
          className="md:hidden bg-white border-b border-slate-100 px-5 py-4 shadow-xl"
        >
          <ul className="flex flex-col space-y-1 max-w-md mx-auto">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold text-slate-700 hover:text-rose-600 hover:bg-rose-50/60 active:bg-rose-100/60 transition-colors"
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

/**
 * 2. FILA / PÍLDORA COMPACTA DE SERVICIO (Estilo Lista / App Link-in-Bio / BabySound)
 * - Ícono temático a la izquierda dentro de caja suave
 * - Título en negrita y subtítulo de 1 línea
 * - Fondo pastel suave único por fila
 * - Botón circular a la derecha con flecha (`>`)
 */
function ServiceCompactPill({
  service,
  onSelect,
}: {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}) {
  const { style } = service;
  const hasVideoSample = Boolean(
    service.videoUrl ||
      service.canvaPage ||
      (service.samples && service.samples.length > 0)
  );

  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      className={`group relative w-full text-left rounded-[26px] ${style.pillBg} border ${style.pillBorder} ${style.pillShadow} px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3.5 cursor-pointer hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400`}
    >
      {/* a) Ícono temático a la izquierda dentro de un círculo / caja suave */}
      <div
        className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl ${style.iconBoxBg} ${style.iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
      >
        <ServiceThematicIcon type={service.illustration} className="w-6 h-6" />
      </div>

      {/* b) Título en negrita y subtítulo de 1 línea */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
          <h3 className="text-[15px] sm:text-base font-extrabold text-slate-900 leading-tight truncate">
            {service.title}
          </h3>
          {service.isFeatured && service.featuredLabel && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-400/90 text-slate-950 text-[10px] font-extrabold uppercase tracking-tight shrink-0">
              {service.featuredLabel}
            </span>
          )}
          {hasVideoSample && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/85 border border-slate-200/80 text-slate-700 text-[10px] font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Muestra
            </span>
          )}
        </div>

        <p className="text-xs sm:text-[13px] font-medium text-slate-600 truncate">
          {service.shortSubtitle}
        </p>
      </div>

      {/* d) Botón circular a la derecha con flecha (`>`) */}
      <span
        aria-hidden="true"
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${style.arrowBg} flex items-center justify-center shrink-0 font-extrabold text-base shadow-2xs group-hover:translate-x-0.5 transition-all`}
      >
        ›
      </span>
    </button>
  );
}

/**
 * 3. DETALLE EXPANDIBLE (MODAL / OVERLAY SIN RECARGAR LA PÁGINA)
 * - Botón de cierre claro con una 'X' superior y un botón "← Volver a servicios".
 * - Portada o visor interactivo de video/muestra (TikTok / Canva oficial).
 * - Selector de muestras dinámicas si el servicio tiene varios ejemplos.
 * - Descripción detallada del servicio y recomendaciones.
 * - Botón principal destacado: "Pedir por WhatsApp" (+51 939 218 802 con el texto predeterminado).
 * - Preserva intacta la posición de scroll de la página al abrir y cerrar.
 */
function ServiceDetailModal({
  service,
  onClose,
}: {
  service: ServiceItem | null;
  onClose: () => void;
}) {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);

  useEffect(() => {
    setSelectedSampleIndex(0);
  }, [service]);

  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const activeSample =
    service.samples && service.samples.length > 0
      ? service.samples[selectedSampleIndex] ?? service.samples[0]
      : null;

  const embedSrc =
    activeSample?.videoUrl || service.videoUrl || service.canvaPage;
  const externalVideoUrl =
    activeSample?.externalVideoUrl ||
    activeSample?.shortUrl ||
    service.externalVideoUrl;
  const whatsappHref = buildWhatsAppUrl(
    activeSample
      ? `${service.whatsappText} (Muestra elegida: ${activeSample.label})`
      : service.whatsappText
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col rounded-[32px] bg-white border border-pink-100 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera Superior Fija: "← Volver a servicios" + Botón 'X' */}
        <div
          className={`flex items-center justify-between gap-2 px-4 sm:px-6 py-3.5 border-b border-slate-100 ${service.style.pillBg}`}
        >
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200/90 text-xs font-extrabold shadow-2xs cursor-pointer transition-all active:scale-95"
          >
            <span>←</span>
            <span>Volver a servicios</span>
          </button>

          <span
            className={`hidden sm:inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold border ${service.style.badgeBg} ${service.style.badgeText}`}
          >
            {service.badge}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle del servicio"
            className="w-9 h-9 rounded-full bg-white/95 hover:bg-rose-600 text-slate-700 hover:text-white border border-slate-200/90 flex items-center justify-center font-extrabold text-sm shadow-2xs cursor-pointer transition-all active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* Cuerpo Deslizable del Modal */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Encabezado del Servicio */}
          <div className="flex items-start gap-3.5">
            <div
              className={`w-13 h-13 rounded-2xl ${service.style.iconBoxBg} ${service.style.iconColor} flex items-center justify-center shrink-0`}
            >
              <ServiceThematicIcon
                type={service.illustration}
                className="w-7 h-7"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600">
                  {service.blockTitle}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-bold text-slate-500">
                  {service.thumbnailTag}
                </span>
              </div>
              <h2
                id="service-detail-modal-title"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug"
              >
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                {service.shortSubtitle}
              </p>
            </div>
          </div>

          {/* Selector de Muestras / Ejemplos si hay varios */}
          {service.samples && service.samples.length > 1 && (
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 sm:p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                  <span>🎬</span>
                  <span>Muestras Disponibles ({service.samples.length})</span>
                </span>
                <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60">
                  {selectedSampleIndex + 1} de {service.samples.length}
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {service.samples.map((sample, idx) => {
                  const isSelected = idx === selectedSampleIndex;
                  return (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => setSelectedSampleIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
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

          {/* Portada o Visor Interactivo de Video / Muestra (TikTok / Canva) */}
          {embedSrc ? (
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 text-white text-xs font-bold">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>
                    {activeSample
                      ? activeSample.label
                      : "Muestra Interactiva Oficial"}
                  </span>
                </span>
                {externalVideoUrl && (
                  <a
                    href={externalVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 hover:text-white underline text-[11px] font-extrabold"
                  >
                    {externalVideoUrl.includes("drive.google.com")
                      ? "Ver en Drive ↗"
                      : externalVideoUrl.includes("canva.com")
                      ? "Abrir Canva ↗"
                      : "Abrir en TikTok ↗"}
                  </a>
                )}
              </div>
              <div className="w-full h-[350px] sm:h-[390px] bg-slate-950">
                <iframe
                  key={embedSrc}
                  src={embedSrc}
                  title={`Muestra de ${service.title}`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs">
              <img
                src={service.thumbnailUrl}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent flex flex-col justify-end p-4">
                <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-extrabold mb-1.5 shadow-2xs">
                  <span>🔒</span>
                  <span>{service.thumbnailTag}</span>
                </span>
                <p className="text-xs sm:text-sm font-bold text-white">
                  Solicita ejemplos privados de este servicio directamente por
                  WhatsApp
                </p>
              </div>
            </div>
          )}

          {/* Descripción Detallada */}
          <div className="rounded-2xl bg-slate-50/90 border border-slate-200/70 p-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1.5">
              ✨ Descripción del servicio
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* ¿Qué incluye? + Recomendaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-2xs">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2.5">
                🎁 ¿Qué incluye?
              </h4>
              <ul className="space-y-2">
                {service.sampleHighlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                  >
                    <span className="text-emerald-500 font-extrabold shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-amber-50/50 border border-amber-200/70 p-4 shadow-2xs">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-950 mb-2.5">
                💡 Recomendaciones
              </h4>
              <ul className="space-y-2">
                {service.recommendations.map((rec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                  >
                    <span className="text-amber-500 font-extrabold shrink-0">
                      ★
                    </span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pie del Modal Fijo con Botón Principal Destacado: "Pedir por WhatsApp" */}
        <div className="px-5 py-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#25D366] hover:from-emerald-600 hover:to-[#20bd5a] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <span>💬 Pedir por WhatsApp</span>
            <span>→</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition"
          >
            ← Volver a servicios
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Sección de Testimonios tipo Ruleta Responsive
 */
function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const total = CHAT_TESTIMONIALS.length;

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(
      "[data-testimonial-card]"
    );
    const targetCard = cards[index];
    if (targetCard) {
      container.scrollTo({
        left: targetCard.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % total;
    scrollToSlide(nextIdx);
  }, [activeIndex, total, scrollToSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + total) % total;
    scrollToSlide(prevIdx);
  }, [activeIndex, total, scrollToSlide]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(
      "[data-testimonial-card]"
    );
    if (!cards.length) return;

    const scrollLeft = container.scrollLeft;
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const dist = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }
  };

  return (
    <section
      aria-labelledby="testimonios-heading"
      className="relative rounded-[32px] bg-gradient-to-br from-emerald-50/50 via-white to-rose-50/40 border border-emerald-200/60 p-5 sm:p-6 md:p-8 mb-10 shadow-lg shadow-emerald-100/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 3000);
      }}
    >
      <div className="text-center mb-5 md:mb-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-extrabold mb-2">
          💚 Clientes Reales en WhatsApp
        </span>
        <h2
          id="testimonios-heading"
          className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight"
        >
          Lo que dicen las familias que ya vivieron la magia
        </h2>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Testimonio anterior"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/95 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 shadow-md absolute -left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all hover:scale-105 active:scale-95"
        >
          <span className="text-xl leading-none font-bold -translate-x-0.5">
            ‹
          </span>
        </button>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 md:gap-5 pb-2"
        >
          {CHAT_TESTIMONIALS.map((chat) => (
            <div
              key={chat.id}
              data-testimonial-card
              className={`w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 snap-center rounded-3xl border ${chat.bubbleAccent} p-4 sm:p-5 shadow-xs flex flex-col justify-between transition-all`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-base shadow-2xs">
                      {chat.avatarEmoji}
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">
                        {chat.author}
                      </p>
                      <span className="text-[10.5px] font-bold text-slate-500">
                        {chat.serviceTag}
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-amber-400 text-xs tracking-tighter"
                    aria-label="5 estrellas"
                  >
                    ★★★★★
                  </div>
                </div>

                <div className="rounded-2xl rounded-tl-xs bg-white border border-slate-200/70 p-3.5 shadow-2xs">
                  <p className="text-[13.5px] text-slate-700 leading-relaxed">
                    “{chat.message}”
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1.5 text-[10px] font-semibold text-slate-400">
                    <span>{chat.time}</span>
                    <span className="text-sky-500 font-bold">✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Siguiente testimonio"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/95 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 shadow-md absolute -right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer transition-all hover:scale-105 active:scale-95"
        >
          <span className="text-xl leading-none font-bold translate-x-0.5">
            ›
          </span>
        </button>
      </div>

      <div
        className="flex items-center justify-center gap-2 mt-4"
        role="tablist"
        aria-label="Seleccionar testimonio"
      >
        {CHAT_TESTIMONIALS.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ver testimonio ${idx + 1} de ${item.author}`}
              onClick={() => scrollToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-7 bg-emerald-500 shadow-2xs"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

/**
 * SECCIÓN DE CONTACTO (#contacto):
 * Tarjeta de formulario limpia, centrada (`max-w-md mx-auto`) y funcional en React.
 * - Contenedor `rounded-3xl`, borde fino y sombra suave.
 * - Campo 1: "Nombre" (label en negrita marrón/vino) + input "Escribe tu nombre...".
 * - Campo 2: "Mensaje" (label en negrita marrón/vino) + textarea "¿En qué podemos ayudarte para tu fecha especial?...".
 * - Botón redondeado a lo ancho (`rounded-2xl`) en tono vino/marrón (`bg-[#6E3B4B] hover:bg-[#582e3c] text-white font-medium py-3.5`)
 *   con el texto "Enviar consulta por WhatsApp".
 */
function ContactFormSection() {
  const [nombre, setNombre] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleEnviarConsulta = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanNombre = nombre.trim();
    const cleanMensaje = mensaje.trim();

    if (!cleanMensaje) {
      setErrorMsg("Por favor, completa al menos el mensaje para poder ayudarte.");
      return;
    }

    setErrorMsg(null);
    const displayNombre = cleanNombre || "Cliente";
    const url = `https://wa.me/51939218802?text=${encodeURIComponent(
      `Hola Magic Voice Studio, mi nombre es ${displayNombre}. Quería consultar lo siguiente: ${cleanMensaje}`
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="scroll-mt-20 mb-10"
    >
      <div className="max-w-md mx-auto rounded-3xl bg-white border border-[#ead8de] shadow-md shadow-rose-100/40 p-6 sm:p-7">
        <h2
          id="contacto-heading"
          className="text-lg sm:text-xl font-extrabold text-[#6E3B4B] tracking-tight mb-4 text-center"
        >
          Envíanos tu consulta
        </h2>

        <form onSubmit={handleEnviarConsulta} className="space-y-4" noValidate>
          {/* Campo 1: Nombre */}
          <div>
            <label
              htmlFor="contacto-nombre"
              className="block text-sm font-bold text-[#6E3B4B] mb-1.5"
            >
              Nombre
            </label>
            <input
              id="contacto-nombre"
              type="text"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              placeholder="Escribe tu nombre..."
              className="w-full rounded-2xl bg-[#fcf9fa] focus:bg-white border border-[#e5d0d7] focus:border-[#6E3B4B] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors"
            />
          </div>

          {/* Campo 2: Mensaje */}
          <div>
            <label
              htmlFor="contacto-mensaje"
              className="block text-sm font-bold text-[#6E3B4B] mb-1.5"
            >
              Mensaje
            </label>
            <textarea
              id="contacto-mensaje"
              rows={4}
              value={mensaje}
              onChange={(e) => {
                setMensaje(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              placeholder="¿En qué podemos ayudarte para tu fecha especial?..."
              className="w-full rounded-2xl bg-[#fcf9fa] focus:bg-white border border-[#e5d0d7] focus:border-[#6E3B4B] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors resize-none"
            />
          </div>

          {errorMsg && (
            <p
              role="alert"
              className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2.5"
            >
              {errorMsg}
            </p>
          )}

          {/* Botón Principal en tono vino/marrón elegante */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#6E3B4B] hover:bg-[#582e3c] text-white font-medium py-3.5 px-5 text-sm shadow-sm active:scale-[0.99] transition-all cursor-pointer"
          >
            Enviar consulta por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("todos");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  const filteredServices =
    selectedFilter === "todos"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedFilter);

  const generalWhatsAppUrl = buildWhatsAppUrl(
    "Hola Magic Voice Studio, quiero cotizar un proyecto personalizado"
  );

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A]">
      {/* 1. MENÚ DE NAVEGACIÓN SUPERIOR (Header Sticky con Smooth Scroll) */}
      <TopNavigationHeader />

      {/* Contenedor Principal */}
      <main className="max-w-md md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-9 pb-28 md:pb-20">
        {/* SECCIÓN #inicio: HERO COMPACTO CON EMBLEMA CIRCULAR */}
        <header
          id="inicio"
          className="scroll-mt-20 max-w-2xl mx-auto flex flex-col items-center text-center mb-7 md:mb-8"
        >
          <div className="relative mb-3.5 group">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-300/55 via-pink-200/45 to-rose-300/55 blur-xl opacity-85 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span
              aria-hidden="true"
              className="absolute -left-2 top-2 text-sky-400 text-xs animate-pulse select-none"
            >
              💙
            </span>
            <span
              aria-hidden="true"
              className="absolute -right-2 top-2 text-pink-400 text-xs animate-pulse select-none"
            >
              💗
            </span>

            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white p-1 ring-4 ring-white shadow-xl shadow-rose-200/50 overflow-hidden flex items-center justify-center">
              <img
                src="/magicvoice-logo.png"
                alt="Magic Voice Studio - Audios y Videos Personalizados"
                className="w-full h-full rounded-full object-cover scale-[1.06] transition-transform duration-500 group-hover:scale-[1.1]"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-100/90 via-white to-pink-100/90 border border-pink-200/80 text-slate-900 text-xs font-bold shadow-2xs mb-2.5">
            <span>✨ Momentos únicos hechos voz y video</span>
          </div>

          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] leading-[1.15] font-extrabold text-[#1E2E5A] tracking-tight mb-2">
            Transformamos tus emociones en recuerdos inolvidables
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
            Toca cualquier servicio para ver muestras en video, detalles y
            cotizar al instante.
          </p>
        </header>

        {/* SECCIÓN #servicios: CATÁLOGO COMPACTO DE SERVICIOS (ESTILO LISTA / PÍLDORAS) */}
        <section
          id="servicios"
          aria-labelledby="catalogo-heading"
          className="scroll-mt-20 mb-11"
        >
          <div className="flex flex-col items-center text-center mb-4">
            <h2
              id="catalogo-heading"
              className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight"
            >
              Catálogo de Servicios Interactivos
            </h2>
          </div>

          {/* Barra de Filtros Superior */}
          <nav
            aria-label="Filtrar servicios por categoría"
            className="flex overflow-x-auto no-scrollbar gap-2 md:justify-center pb-2.5 mb-4"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-extrabold cursor-pointer hover:-translate-y-0.5 active:scale-95 transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm shadow-slate-900/15"
                      : "bg-slate-100/90 text-slate-700 hover:bg-rose-50 hover:text-rose-800 border border-slate-200/80"
                  }`}
                >
                  <span>
                    {tab.emoji} {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Grilla de Píldoras: 1 columna en móvil, 2 columnas en PC (max-w-4xl mx-auto) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4 max-w-4xl mx-auto">
            {filteredServices.map((service) => (
              <ServiceCompactPill
                key={service.id}
                service={service}
                onSelect={setSelectedService}
              />
            ))}
          </div>

          {/* Acceso al Portafolio Canva */}
          <div className="mt-5 text-center">
            <a
              href={SOCIAL_LINKS.canva}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-50 via-white to-rose-50 hover:from-sky-100/80 hover:to-rose-100/80 border border-rose-200 text-xs font-bold text-[#1E2E5A] shadow-2xs hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ver Portafolio Completo en Canva ↗</span>
            </a>
          </div>
        </section>

        {/* SECCIÓN #nosotros: MISIÓN CÁLIDA DE MAGIC VOICE STUDIO */}
        <section
          id="nosotros"
          aria-labelledby="nosotros-heading"
          className="scroll-mt-20 rounded-[32px] bg-gradient-to-br from-rose-50/70 via-white to-sky-50/70 border border-pink-200/70 p-6 md:p-8 mb-10 shadow-md shadow-pink-100/40"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-pink-200 text-rose-700 text-xs font-extrabold shadow-2xs mb-2.5">
              💖 Sobre Magic Voice Studio
            </span>
            <h2
              id="nosotros-heading"
              className="text-xl md:text-2xl font-extrabold text-[#1E2E5A] tracking-tight mb-3"
            >
              Transformamos sentimientos en voz y video inolvidables
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed mb-5">
              En <strong>Magic Voice Studio</strong> creemos que las emociones
              más grandes merecen escucharse y atesorarse para siempre. Llevamos
              más de 2 años acompañando a familias de todo el mundo en sus
              revelaciones de bebé, homenajes a seres queridos, canciones
              personalizadas y celebraciones únicas con calidez humana,
              creatividad y calidad de estudio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {WORK_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3 bg-white/95 rounded-2xl p-3.5 border border-pink-100 shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <p className="text-xs font-semibold text-slate-700 leading-snug flex-1">
                    {item.title}
                  </p>
                  <span className="text-base shrink-0" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN DE TESTIMONIOS (RULETA RESPONSIVE) */}
        <TestimonialsCarousel />

        {/* SECCIÓN #contacto: TARJETA DE FORMULARIO CENTRADA (max-w-md mx-auto) */}
        <ContactFormSection />

        {/* FOOTER LIMPIO, COMPACTO Y ELEGANTE */}
        <footer className="pt-8 pb-4 border-t border-slate-100 text-center flex flex-col items-center">
          {/* Logo pequeño circular centrado */}
          <div className="w-12 h-12 rounded-full bg-white p-0.5 ring-2 ring-pink-200/80 shadow-xs overflow-hidden mb-3">
            <img
              src="/magicvoice-logo.png"
              alt="Magic Voice Studio"
              className="w-full h-full rounded-full object-cover scale-[1.06]"
            />
          </div>

          {/* Frase breve */}
          <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-md mb-4">
            Transformamos tus momentos especiales en recuerdos eternos.
          </p>

          {/* Fila única con los iconos de redes sociales (TikTok, Instagram, YouTube) */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Magic Voice Studio"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-rose-200 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Magic Voice Studio"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200/80 hover:border-pink-200 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de Magic Voice Studio"
              className="w-10 h-10 rounded-full bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200/80 hover:border-red-200 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Enlace directo a WhatsApp en una línea */}
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors mb-2"
          >
            <span>💬 WhatsApp:</span>
            <span className="underline underline-offset-2">+51 939 218 802</span>
          </a>

          {/* Texto al pie */}
          <p className="text-[11px] text-slate-400">
            © 2026 Magic Voice Studio. Todos los derechos reservados.
          </p>
        </footer>
      </main>

      {/* 3. DETALLE EXPANDIBLE (MODAL / OVERLAY SIN RECARGAR LA PÁGINA) */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* BOTÓN FLOTANTE DE WHATSAPP DIFERENCIADO (Móvil Barra Inferior vs PC Esquina Derecha) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-white via-white/95 to-transparent p-3">
        <a
          href={generalWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-emerald-400 to-[#25D366] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-400/35 active:scale-95 transition-all"
        >
          <span>💬 Cotizar proyecto por WhatsApp</span>
        </a>
      </div>

      <a
        href={generalWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar proyecto por WhatsApp"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-30 items-center gap-2.5 py-3.5 px-6 rounded-full bg-gradient-to-r from-emerald-400 to-[#25D366] hover:from-emerald-500 hover:to-[#20bd5a] text-white font-extrabold text-sm shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 active:scale-95 transition-all"
      >
        <span className="text-lg leading-none">💬</span>
        <span>Cotizar por WhatsApp</span>
      </a>
    </div>
  );
}
