"use client";

import React, { useState } from "react";
import {
  Play,
  Television,
  Certificate,
  ShieldStar,
  Trophy,
  X,
  ArrowUpRight,
} from "@phosphor-icons/react";

interface VideoFeature {
  id: string;
  youtubeId?: string;
  tag: string;
  title: string;
  duration: string;
  description: string;
}

const VIDEO_FEATURES: VideoFeature[] = [
  {
    id: "sixty-minutes",
    youtubeId: "bLZu_J40Weo",
    tag: "60 MINUTES PROFILE",
    title: "\"Michigan's Secret Weapon:\" Who Greg Harden Was",
    duration: "CBS News Archive",
    description:
      "See the world-renowned performance counselor behind 7x Super Bowl Champion Tom Brady, 23x Olympic Gold Medalist Michael Phelps, and Heisman winner Desmond Howard, whose personal business role at GSHA Quality Services Carla Wilson now carries forward.",
  },
  {
    id: "tedx-harden",
    youtubeId: "G64xXN79D6M",
    tag: "TEDxUofM STAGE",
    title: "Greg Harden: \"Be Different... On Purpose!\"",
    duration: "TEDx Feature",
    description:
      "The foundational philosophy of self-defined purpose, emotional honesty, and personal mastery taught inside the Hardenian Gems Academy where Carla Wilson graduated with distinction.",
  },
  {
    id: "times-square-and-stage",
    tag: "NYC TIMES SQUARE & STAGE",
    title: "Carla Wilson, MSW: NYC Times Square Feature & TED-Style Footage",
    duration: "Upcoming Footage Slot",
    description:
      "Carla's forthcoming New York Times Square book billboard footage and new TED-style keynote stage clips will be featured right here upon release.",
  },
];

export function LegacyMediaPlayer() {
  const [selectedId, setSelectedId] = useState<string>("sixty-minutes");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const activeVideo =
    VIDEO_FEATURES.find((v) => v.id === selectedId) || VIDEO_FEATURES[0];

  const handleSelectTab = (id: string) => {
    setSelectedId(id);
    setPlayingId(null);
  };

  return (
    <div className="space-y-6">
      {/* Video selector pills */}
      <div
        role="tablist"
        aria-label="Legacy and stage video selector"
        className="flex flex-wrap gap-2"
      >
        {VIDEO_FEATURES.map((vid) => {
          const isSelected = vid.id === selectedId;
          return (
            <button
              key={vid.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              data-agent={`legacy-video-tab-${vid.id}`}
              onClick={() => handleSelectTab(vid.id)}
              className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] ${
                isSelected
                  ? "bg-[#C9A44C] text-[#08080A] font-semibold"
                  : "border border-[#F5F2EB]/12 bg-[#101014] text-[#A6A39B] hover:border-[#C9A44C]/40 hover:text-[#F5F2EB]"
              }`}
            >
              {vid.tag}
            </button>
          );
        })}
      </div>

      {/* Main player frame */}
      <div className="crystal-card-gold overflow-hidden rounded-3xl">
        <div className="relative aspect-video w-full bg-[#08080A]">
          {activeVideo.youtubeId && playingId === activeVideo.id ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : activeVideo.youtubeId ? (
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={`https://i.ytimg.com/vi/${activeVideo.youtubeId}/hqdefault.jpg`}
                alt={activeVideo.title}
                className="h-full w-full object-cover opacity-55 transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/45 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  type="button"
                  data-agent={`legacy-video-play-${activeVideo.id}`}
                  onClick={() => setPlayingId(activeVideo.id)}
                  aria-label={`Play video: ${activeVideo.title}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#C9A44C] px-7 py-4 text-sm font-semibold text-[#08080A] shadow-[0_12px_36px_rgba(201,164,76,0.45)] transition-all duration-200 hover:bg-[#DFBE6F] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F2EB]"
                >
                  <Play size={18} weight="fill" />
                  <span>Watch Documentary Clip</span>
                </button>
                <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F5F2EB]/80">
                  {activeVideo.duration} • Click to Play
                </span>
              </div>
            </div>
          ) : (
            <div className="relative flex h-full w-full flex-col items-center justify-center p-8 text-center">
              <img
                src="/images/carla-retreat-collage.webp"
                alt="Carla Wilson speaking on stage and leading guided meditation retreats"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/75 to-[#08080A]/60" />
              <div className="relative z-10 max-w-md space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/40 bg-[#17171D]/90 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A44C]">
                  <Television size={14} />
                  <span>NYC Times Square & TED-Style Reel</span>
                </span>
                <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5F2EB]">
                  Times Square Billboard & Stage Footage Coming Soon
                </h4>
                <p className="text-sm text-[#A6A39B] leading-relaxed">
                  Carla&apos;s book will be featured in New York&apos;s Times Square as part of her publisher campaign. Watch her live Movement Reel below or request her speaker packet.
                </p>
                <a
                  href="#tour"
                  data-agent="legacy-jump-to-reel"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-5 py-2.5 text-xs font-semibold text-[#08080A] transition-all hover:bg-[#DFBE6F] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
                >
                  <span>Watch Official Movement Reel</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 border-t border-[#F5F2EB]/10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C9A44C]">
              {activeVideo.tag}
            </span>
            <span className="font-mono text-xs text-[#A6A39B]">
              {activeVideo.duration}
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-[#F5F2EB]">
            {activeVideo.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#A6A39B] leading-relaxed">
            {activeVideo.description}
          </p>
        </div>
      </div>

      {/* 4 Instant Credibility Thumbnails (Academy Tribute, Certificate, G-Certified Champions Card, Performance Coach) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <button
          type="button"
          data-agent="open-hardenian-feature-modal"
          onClick={() =>
            setLightboxImage({
              src: "/images/hardenian-academy-feature.webp",
              alt: "Official Hardenian Gems Academy profile featuring Greg Harden and Carla Wilson MSW",
              caption:
                "Inaugural Hardenian Gems Academy Cohort Tribute featuring Greg Harden and Carla Wilson, MSW.",
            })
          }
          className="group crystal-card flex items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-200 hover:border-[#C9A44C]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
        >
          <img
            src="/images/greg-harden-and-carla.webp"
            alt="Greg Harden standing arm-in-arm pointing proudly to Carla Wilson"
            className="h-14 w-16 shrink-0 rounded-xl object-cover border border-[#F5F2EB]/10"
          />
          <div className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#C9A44C]">
              Academy Tribute
            </span>
            <p className="mt-0.5 truncate text-xs font-semibold text-[#F5F2EB] group-hover:text-[#DFBE6F]">
              Greg Harden & Carla
            </p>
            <p className="text-[11px] text-[#A6A39B]">Click to enlarge feature</p>
          </div>
        </button>

        <button
          type="button"
          data-agent="open-certificate-modal"
          onClick={() =>
            setLightboxImage({
              src: "/images/carla-certificate-full.webp",
              alt: "Carla Wilson MSW holding her framed Certificate of Hardenian Mastery with distinction",
              caption:
                "Carla Wilson, MSW holding her Certificate of Hardenian Mastery and Hardenian Academy Society recognition.",
            })
          }
          className="group crystal-card flex items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-200 hover:border-[#C9A44C]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
        >
          <img
            src="/images/carla-certificate-clean.webp"
            alt="Carla Wilson holding framed Certificate of Hardenian Mastery"
            className="h-14 w-16 shrink-0 rounded-xl object-cover object-top border border-[#F5F2EB]/10"
          />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C9A44C]">
              <Certificate size={12} />
              <span>Distinction</span>
            </span>
            <p className="mt-0.5 truncate text-xs font-semibold text-[#F5F2EB] group-hover:text-[#DFBE6F]">
              Hardenian Mastery
            </p>
            <p className="text-[11px] text-[#A6A39B]">Click to enlarge certificate</p>
          </div>
        </button>

        <button
          type="button"
          data-agent="open-g-certified-modal"
          onClick={() =>
            setLightboxImage({
              src: "/images/hardenian-g-certified-card.webp",
              alt: "G-Certified Hardenian Gems Academy Legacy of Excellence card featuring Greg Harden, Tom Brady, Michael Phelps, Desmond Howard, and Warde Manuel",
              caption:
                "G-Certified | Hardenian Gems Academy Legacy of Excellence & Direct Booking Card.",
            })
          }
          className="group crystal-card flex items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-200 hover:border-[#C9A44C]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
        >
          <img
            src="/images/hardenian-g-certified-card.webp"
            alt="G-Certified Hardenian Gems Academy card"
            className="h-14 w-16 shrink-0 rounded-xl object-cover object-center border border-[#F5F2EB]/10"
          />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C9A44C]">
              <Trophy size={12} />
              <span>G-Certified</span>
            </span>
            <p className="mt-0.5 truncate text-xs font-semibold text-[#F5F2EB] group-hover:text-[#DFBE6F]">
              Legacy of Excellence
            </p>
            <p className="text-[11px] text-[#A6A39B]">Click to view roster card</p>
          </div>
        </button>

        <button
          type="button"
          data-agent="open-performance-coach-modal"
          onClick={() =>
            setLightboxImage({
              src: "/images/carla-performance-coach.webp",
              alt: "Carla Wilson, MSW: Performance Coach and Emotional Intelligence Strategist",
              caption:
                "Performance Coach & Emotional Intelligence Strategist: Strengthening the Person Behind the Performance.",
            })
          }
          className="group crystal-card flex items-center gap-3.5 rounded-2xl p-3.5 text-left transition-all duration-200 hover:border-[#C9A44C]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
        >
          <img
            src="/images/carla-performance-coach.webp"
            alt="Carla Wilson Performance Coach crystal Queen portrait"
            className="h-14 w-16 shrink-0 rounded-xl object-cover object-top border border-[#F5F2EB]/10"
          />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C9A44C]">
              <ShieldStar size={12} />
              <span>Performance Coach</span>
            </span>
            <p className="mt-0.5 truncate text-xs font-semibold text-[#F5F2EB] group-hover:text-[#DFBE6F]">
              GSHA Standard
            </p>
            <p className="text-[11px] text-[#A6A39B]">Click to enlarge card</p>
          </div>
        </button>
      </div>

      {/* Credential Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Credential detail view"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90dvh] max-w-2xl overflow-auto rounded-3xl border border-[#C9A44C]/40 bg-[#17171D] p-4 sm:p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs sm:text-sm font-medium text-[#F5F2EB]">
                {lightboxImage.caption}
              </p>
              <button
                type="button"
                data-agent="close-credential-modal"
                onClick={() => setLightboxImage(null)}
                aria-label="Close credential view"
                className="rounded-full border border-[#F5F2EB]/15 bg-[#101014] p-2 text-[#F5F2EB] hover:border-[#C9A44C] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="mx-auto max-h-[75dvh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
