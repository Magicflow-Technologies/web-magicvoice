"use client";

import Link from "next/link";
import { useState } from "react";

type SocialContactKind =
  | "contact"
  | "whatsapp"
  | "client-form"
  | "testimonials"
  | "holiday"
  | "recommendations"
  | "youtube"
  | "instagram"
  | "tiktok";

interface SocialContactLink {
  id: string;
  label: string;
  subtitle?: string;
  href: string;
  kind: SocialContactKind;
}

const SOCIAL_VIEW_LINKS: SocialContactLink[] = [
  {
    id: "contact-whatsapp-main",
    label: "Escríbenos por WhatsApp",
    subtitle: "Válido para todos los países 🌎 · +51 939 218 802",
    href: "https://api.whatsapp.com/send/?phone=51939218802&text=Hola+Magic+Voice%2C+estoy+interesado%2Fa+en%3A&type=phone_number&app_absent=0",
    kind: "whatsapp",
  },
  {
    id: "contact-client-form",
    label: "¿No sabes cómo escribirnos?",
    subtitle: "Déjame tu número y te ayudo ♡",
    href: "https://www.magicvoicestudio.com.pe/login/#/formulario-cliente",
    kind: "client-form",
  },
  {
    id: "contact-testimonials",
    label: "Recopilaciones de sus mensajes bonitos",
    subtitle: "Mamás y familias felices con MagicVoice 💖",
    href: "https://www.canva.com/design/DAG2ldjxOTs/O_elylaAp8A6yaGFKkgkBQ/view",
    kind: "testimonials",
  },
  {
    id: "contact-tiktok-landing",
    label: "Muestras Virales en TikTok Oficial 🎬",
    subtitle: "Audios de bebé, ecografías, temáticas y canciones en video",
    href: "/tiktok",
    kind: "tiktok",
  },
  {
    id: "contact-holiday-2025",
    label: "Gracias a nuestros clientes llevamos alegría en la Navidad 2025 ¡Míralo!",
    subtitle: "Video especial en TikTok Oficial 🎬",
    href: "https://www.tiktok.com/@magicvoice10/video/7587621627387743496",
    kind: "holiday",
  },
  {
    id: "contact-instagram-recommendations",
    label: "Nuestras recomendaciones en Instagram ✨",
    subtitle: "@magicvoiceoficial",
    href: "https://www.instagram.com/magicvoiceoficial/p/C7UgfXUud19/",
    kind: "recommendations",
  },
  {
    id: "contact-youtube-channel",
    label:
      'Conoce nuestro canal de YouTube y nuestro segmento "Antes de conocerte" 📺',
    subtitle: "@magicvoicestudio",
    href: "https://www.youtube.com/@magicvoicestudio",
    kind: "youtube",
  },
];

const SOCIAL_FOOTER_LINKS: SocialContactLink[] = [
  {
    id: "social-tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@magicvoice10",
    kind: "tiktok",
  },
  {
    id: "social-whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/51939218802",
    kind: "whatsapp",
  },
  {
    id: "social-instagram",
    label: "Instagram",
    href: "https://www.instagram.com/magicvoiceoficial/",
    kind: "instagram",
  },
  {
    id: "social-youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@magicvoicestudio",
    kind: "youtube",
  },
];

function SocialCardIcon({ kind }: { kind: SocialContactKind }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.85,
    className: "w-5 h-5",
  };

  switch (kind) {
    case "contact":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M6 12.5V7.8A1.8 1.8 0 0 1 7.8 6h8.4A1.8 1.8 0 0 1 18 7.8v8.4A1.8 1.8 0 0 1 16.2 18H11.5L8 20v-2H7.8A1.8 1.8 0 0 1 6 16.2v-1.7" />
          <path d="M9.2 10.1h5.6" />
          <path d="M9.2 13.2h4.4" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M19.1 11.6A7.1 7.1 0 1 1 8 5.3" />
          <path d="m7 19-1.3 3 3.2-1" />
          <path d="M9.5 10c.3 1.6 2 3.2 3.6 3.6.5.1 1.1-.1 1.5-.5l.7-.7c.2-.2.6-.2.8 0l1.2 1.2" />
        </svg>
      );
    case "client-form":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M7 6.5h10M7 11h10M7 15.5h6" />
          <path d="M5.8 4.5h12.4A1.8 1.8 0 0 1 20 6.3v11.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 17.7V6.3a1.8 1.8 0 0 1 1.8-1.8Z" />
        </svg>
      );
    case "testimonials":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M6.5 10.2a2.7 2.7 0 1 1 5.4 0c0 3-2.5 3.2-2.5 5" />
          <path d="M14.7 10.2a2.7 2.7 0 1 1 5.3 0c0 3-2.5 3.2-2.5 5" />
          <path d="M9.4 20h.1M17.6 20h.1" />
        </svg>
      );
    case "holiday":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M12 4.5v15M7.8 8.7 12 4.5l4.2 4.2M8.2 14.6h7.6M9.4 19.5h5.2" />
        </svg>
      );
    case "recommendations":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="m12 4 1.6 4.2L18 9.1l-3.4 3 1 4.4-3.6-2.1-3.6 2.1 1-4.4-3.4-3 4.4-.9L12 4Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M20 8.2a2 2 0 0 0-1.4-1.4C17.3 6.5 12 6.5 12 6.5s-5.3 0-6.6.3A2 2 0 0 0 4 8.2a21 21 0 0 0-.3 3.8c0 1.3.1 2.5.3 3.8a2 2 0 0 0 1.4 1.4c1.3.3 6.6.3 6.6.3s5.3 0 6.6-.3a2 2 0 0 0 1.4-1.4c.2-1.3.3-2.5.3-3.8 0-1.3-.1-2.5-.3-3.8Z" />
          <path d="m10.3 9.5 4.2 2.5-4.2 2.5Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...commonProps}>
          <path d="M14.5 4.5v10.4a3.6 3.6 0 1 1-3.6-3.6c.4 0 .7.1 1 .2V8a6.6 6.6 0 1 0 5.6 6.5V8.2c1.2.9 2.6 1.4 4.1 1.4V6.6c-2.4 0-4.3-1.8-4.3-4.1h-2.8Z" />
        </svg>
      );
  }
}

export function SocialLinksView() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : "https://magicvoicestudio.com.pe/redes";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Magic Voice Studio",
          text: "Audios de Bebé Personalizados, Homenajes y Canciones con IA",
          url,
        });
        return;
      } catch {
        // User cancelled share
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        // Ignore clipboard errors
      }
    }
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-pink-50/70 via-white to-sky-50/70 text-slate-900 py-6 px-4 sm:py-10 flex items-center justify-center relative overflow-hidden"
      aria-labelledby="social-view-title"
    >
      {/* Decorative Pastel Glows */}
      <div
        className="pointer-events-none fixed -top-24 -left-24 w-96 h-96 rounded-full bg-pink-200/40 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/3 -right-24 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl -z-10"
        aria-hidden="true"
      />

      <section className="w-full max-w-lg mx-auto">
        <div className="bg-white/90 backdrop-blur-xl rounded-[36px] border border-pink-100/90 shadow-xl shadow-pink-100/50 p-6 sm:p-8">
          {/* Top Bar Actions: Home (🏠) -> `/` and Share */}
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/"
              className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-50 via-white to-sky-50 border border-pink-200/80 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center text-lg"
              aria-label="Ir a la Web Principal"
              title="🏠 Ir a la Web Principal"
            >
              <span aria-hidden="true">🏠</span>
            </Link>

            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Enlaces Oficiales
            </span>

            <button
              type="button"
              onClick={handleShare}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-50 via-white to-pink-50 border border-sky-200/80 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center text-slate-700 font-bold text-base cursor-pointer"
              aria-label="Compartir perfil"
              title={copied ? "¡Enlace copiado!" : "Compartir perfil"}
            >
              <span>{copied ? "✓" : "↗"}</span>
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex flex-col items-center text-center mb-5">
            <div className="relative group mb-4">
              <div
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-400/35 via-pink-300/30 to-rose-400/35 blur-lg opacity-90"
                aria-hidden="true"
              />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-sky-300 via-white to-pink-300 shadow-lg shadow-pink-200/50">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/magicvoice-logo.png"
                    alt="MagicVoice — Magic Voice Studio Logo Oficial"
                    className="w-full h-full object-cover rounded-full scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            <h1
              id="social-view-title"
              className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-2"
            >
              🎙️✨ Audios de Bebé Personalizados
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Tu bebé “habla” desde la pancita o en sus momentos más especiales.
              Ideal para baby shower, revelación, homenajes, canciones y
              sorpresas familiares.
            </p>
          </div>

          {/* Highlights Box */}
          <div className="rounded-2xl bg-gradient-to-r from-sky-50/80 via-pink-50/60 to-rose-50/80 border border-pink-100/80 px-4 py-3 mb-6 text-center space-y-1 text-xs sm:text-sm font-medium text-slate-700">
            <p>🌎 Válido para todos los países</p>
            <p>💖 Más de 2 años creando recuerdos inolvidables</p>
            <p>🔒 100% confiables en todas nuestras redes</p>
            <p className="text-rose-600 font-semibold pt-0.5">
              Haz que tu celebración tenga una voz que toque el corazón 🎵💕
            </p>
          </div>

          {/* 1. BOTÓN DESTACADO HACIA EL CATÁLOGO PRINCIPAL ( `/` ) */}
          <div className="mb-4">
            <Link
              href="/"
              className="group relative flex items-center justify-between gap-3.5 w-full rounded-2xl p-4 sm:p-4.5 bg-gradient-to-r from-rose-200/90 via-pink-100/95 to-sky-200/90 hover:from-rose-300/90 hover:via-pink-200/95 hover:to-sky-300/90 border-2 border-pink-300/90 shadow-lg shadow-pink-200/50 hover:shadow-xl hover:shadow-pink-200/70 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-xl bg-white/95 text-rose-500 shadow-sm border border-pink-200/70 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                ✨
              </span>
              <span className="flex-1 text-left">
                <span className="block text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                  ✨ Ver Servicios y Muestras Interactivas
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 mt-0.5">
                  <span>🏠 Ir a la Web Principal</span>
                  <span>·</span>
                  <span>Catálogo y Videos</span>
                </span>
              </span>
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Lista de Enlaces Bio / Redes */}
          <div className="space-y-3">
            {SOCIAL_VIEW_LINKS.map((link) => {
              const isWhatsapp = link.kind === "whatsapp";
              const isInternal = link.href.startsWith("/");
              const linkClasses = `group flex items-center gap-3.5 w-full rounded-2xl p-3.5 sm:p-4 border transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] ${
                isWhatsapp
                  ? "bg-gradient-to-r from-emerald-50/90 via-teal-50/70 to-white border-emerald-200/90 shadow-sm hover:shadow-md hover:border-emerald-300"
                  : "bg-white hover:bg-slate-50/80 border-slate-200/80 shadow-xs hover:shadow-md hover:border-pink-200"
              }`;
              const linkContent = (
                <>
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                      isWhatsapp
                        ? "bg-emerald-500 text-white shadow-xs"
                        : "bg-pink-50 text-rose-600 border border-pink-100"
                    }`}
                    aria-hidden="true"
                  >
                    <SocialCardIcon kind={link.kind} />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 leading-snug">
                      {link.label}
                    </span>
                    {link.subtitle && (
                      <span className="block text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        {link.subtitle}
                      </span>
                    )}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all text-sm font-bold shrink-0">
                    {isInternal ? "→" : "↗"}
                  </span>
                </>
              );

              if (isInternal) {
                return (
                  <Link key={link.id} href={link.href} className={linkClasses}>
                    {linkContent}
                  </Link>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  {linkContent}
                </a>
              );
            })}
          </div>

          {/* Footer Social Icons + Volver a la Web Principal */}
          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-4">
            <div
              className="flex items-center justify-center gap-3"
              aria-label="Redes sociales oficiales"
            >
              {SOCIAL_FOOTER_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="w-10 h-10 rounded-full bg-slate-50 hover:bg-pink-50 text-slate-700 hover:text-rose-600 border border-slate-200/80 hover:border-pink-200 flex items-center justify-center transition-all hover:scale-105"
                >
                  <SocialCardIcon kind={link.kind} />
                </a>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-600 hover:text-rose-600 transition-colors py-1.5 px-4 rounded-full hover:bg-pink-50/70"
            >
              <span>🏠</span>
              <span>← VOLVER A LA WEB PRINCIPAL</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
