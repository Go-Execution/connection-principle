"use client";

import React, { useState } from "react";
import {
  PlayCircle,
  CalendarStar,
  MapPin,
  ArrowUpRight,
  X,
  MagnifyingGlassPlus,
} from "@phosphor-icons/react";

const TOUR_POSTERS = [
  {
    id: "the-tour",
    tag: "2026 TOUR",
    title: "The Tour: Guided Meditation & Strategy",
    caption: "National speaking, guided meditation circles, and live workshops.",
    src: "/images/carla-the-tour.webp",
    alt: "Carla Wilson, MSW: The Tour, Guided Meditation Facilitator and Emotional Intelligence Strategist",
  },
  {
    id: "heal-thoughts",
    tag: "KEYNOTE STAGE",
    title: "Heal Your Thoughts. Change Your Life.",
    caption: "Turning life experience into self-awareness, purpose, and deliberate action.",
    src: "/images/carla-heal-thoughts-keynote.webp",
    alt: "Carla Wilson, MSW keynote poster: Heal Your Thoughts. Change Your Life. It's Your Move.",
  },
  {
    id: "world-stage",
    tag: "GLOBAL REACH",
    title: "Transformation Through Awareness",
    caption: "Available locally, nationally, and globally across cruises, conferences, and retreats.",
    src: "/images/carla-standing-world-map.webp",
    alt: "Carla Wilson, MSW standing in front of an illuminated global map for Emotional Intelligence",
  },
];

const TOUR_MILESTONES = [
  {
    badge: "FEATURED APPEARANCE",
    title: "2026 Toyota Conference Keynote",
    detail:
      "Finding Careers for Returning Citizens and Underserved Populations, uniting justice insight with practical workforce re-entry.",
  },
  {
    badge: "COMMUNITY & LEGACY",
    title: "Friends In Deed & Re-Entry Advocacy",
    detail:
      "Partnering alongside community leaders and the Hardenian circle to equip families and returning citizens beyond survival.",
  },
  {
    badge: "NATIONAL TOUR & RETREATS",
    title: "Luxury Cruises, Meditation Salons & Broadcasts",
    detail:
      "Curated multi-day workshops, morning stillness sessions, and live television interviews across North America and at sea.",
  },
];

export function TourShowcase() {
  const [selectedPoster, setSelectedPoster] = useState<(typeof TOUR_POSTERS)[number] | null>(
    null
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      {/* Left Column: Portrait 9:16 Cinema Video Player for Movement & Tour Reel */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="w-full max-w-[390px] crystal-card-gold rounded-3xl p-3 sm:p-4 space-y-4">
          <div className="flex items-center justify-between px-2 pt-1">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A44C]">
              <PlayCircle size={16} weight="fill" />
              <span>Official Movement Reel</span>
            </span>
            <span className="font-mono text-[11px] text-[#A6A39B]">01:00</span>
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-[#08080A] border border-[#C9A44C]/30">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/carla-stage-mic-throne.webp"
              data-agent="tour-movement-video"
              className="h-full w-full object-contain bg-[#08080A]"
            >
              <source src="/videos/carla-movement-reel.mp4" type="video/mp4" />
              Your browser does not support embedded video playback.
            </video>
          </div>

          <div className="px-2 pb-1 space-y-1">
            <p className="font-display text-xl font-semibold text-[#F5F2EB]">
              Stillness, Mindset & Live Community Impact
            </p>
            <p className="text-xs text-[#A6A39B] leading-relaxed">
              Highlights from the 2026 Toyota Conference, Friends In Deed, and Carla Wilson&apos;s Connection Principle philosophy in motion.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Tour Highlights + 3 Relevant Visual Posters */}
      <div className="lg:col-span-7 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A44C]">
            <CalendarStar size={16} />
            <span>The Tour • Speaking Appearances & Community Advocacy</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
            She Didn&apos;t Chase. She Moved With Purpose.
          </h2>
          <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-[60ch]">
            From national corporate stages like the 2026 Toyota Conference to intimate guided meditation retreats and community re-entry circles, every stop on The Tour invites audiences to shift from survival to strategic self-mastery.
          </p>
        </div>

        {/* 3 Stage & Tour Milestones */}
        <div className="space-y-3">
          {TOUR_MILESTONES.map((item) => (
            <div
              key={item.title}
              className="crystal-card rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                  {item.badge}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F5F2EB]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed">
                  {item.detail}
                </p>
              </div>
              <MapPin size={20} className="hidden sm:block shrink-0 text-[#C9A44C]/70" />
            </div>
          ))}
        </div>

        {/* 3-Card Tour & Keynote Visual Gallery (Click to Enlarge) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TOUR_POSTERS.map((poster) => (
            <button
              key={poster.id}
              type="button"
              data-agent={`tour-poster-${poster.id}`}
              onClick={() => setSelectedPoster(poster)}
              className="group crystal-card overflow-hidden rounded-2xl p-2 text-left transition-all duration-200 hover:border-[#C9A44C]/55 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#08080A]">
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute top-2 right-2 rounded-full bg-[#08080A]/80 p-1.5 text-[#DFBE6F] opacity-85 group-hover:opacity-100">
                  <MagnifyingGlassPlus size={14} />
                </div>
              </div>
              <div className="p-3 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9A44C]">
                  {poster.tag}
                </span>
                <p className="font-display text-base font-semibold text-[#F5F2EB] leading-snug">
                  {poster.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#A6A39B]">
            Servicing communities locally, nationally, and globally for 2026 and 2027 bookings.
          </p>
          <a
            href="#booking"
            data-agent="tour-book-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#08080A] transition-all hover:bg-[#DFBE6F] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
          >
            <span>Invite Carla to Your Stage</span>
            <ArrowUpRight size={15} weight="bold" />
          </a>
        </div>
      </div>

      {/* Poster Lightbox Modal */}
      {selectedPoster && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPoster.title}
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92dvh] max-w-xl overflow-auto rounded-3xl border border-[#C9A44C]/40 bg-[#17171D] p-4 sm:p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                  {selectedPoster.tag}
                </p>
                <p className="text-sm font-semibold text-[#F5F2EB]">
                  {selectedPoster.title}
                </p>
              </div>
              <button
                type="button"
                data-agent="close-tour-poster-modal"
                onClick={() => setSelectedPoster(null)}
                aria-label="Close poster view"
                className="rounded-full border border-[#F5F2EB]/15 bg-[#101014] p-2 text-[#F5F2EB] hover:border-[#C9A44C] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={selectedPoster.src}
              alt={selectedPoster.alt}
              className="mx-auto max-h-[75dvh] w-auto rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
