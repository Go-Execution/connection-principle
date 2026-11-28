"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Images,
  MagnifyingGlassPlus,
  X,
  CaretLeft,
  CaretRight,
  ArrowUpRight,
} from "@phosphor-icons/react";
import Link from "next/link";

export type GalleryCategory =
  | "All"
  | "Portraits & Stage"
  | "Legacy & Credentials"
  | "Meditation & Tour"
  | "Books & Crystal Queen";

export interface GalleryPhoto {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  src: string;
  alt: string;
  caption: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "heal-thoughts-keynote",
    title: "Heal Your Thoughts. Change Your Life.",
    category: "Portraits & Stage",
    src: "/images/carla-heal-thoughts-keynote.webp",
    alt: "Carla Wilson, MSW keynote portrait with wireless stage microphone: Heal Your Thoughts. Change Your Life. It's Your Move.",
    caption: "Signature keynote visual highlighting emotional intelligence, speaking, authorship, and guided meditation.",
  },
  {
    id: "standing-crystal-queen",
    title: "Change the Game with Emotional Intelligence",
    category: "Portraits & Stage",
    src: "/images/hero-carla-standing-full.webp",
    alt: "Carla Wilson, MSW standing in a black tailored suit on a marble chessboard floor beside a giant faceted crystal Queen chess piece",
    caption: "Full-length standing editorial portrait beside the faceted crystal Queen chess piece.",
  },
  {
    id: "stage-mic-throne",
    title: "Stage Headset Keynote & Crystal Queen",
    category: "Portraits & Stage",
    src: "/images/carla-stage-mic-throne.webp",
    alt: "Carla Wilson, MSW seated in a gold-trimmed armchair with wireless headset microphone beside an illuminated crystal Queen",
    caption: "Clean text-free portrait equipped with wireless stage headset for luxury cruise and theater engagements.",
  },
  {
    id: "guided-meditation-facilitator",
    title: "Guided Meditation Facilitator",
    category: "Meditation & Tour",
    src: "/images/carla-guided-meditation-card.webp",
    alt: "Carla Wilson, MSW: Guided Meditation Facilitator and Emotional Intelligence Strategist, Find your center. Move with intention.",
    caption: "Find your center. Move with intention. Core practice centerpiece for guided stillness rooms.",
  },
  {
    id: "the-tour-poster",
    title: "The Tour: Guided Meditation & Strategy",
    category: "Meditation & Tour",
    src: "/images/carla-the-tour.webp",
    alt: "The Tour poster featuring Carla Wilson, MSW seated in black and gold beside a crystal Queen chess piece",
    caption: "2026 speaking tour identity spanning live workshops, guided meditation salons, and national stages.",
  },
  {
    id: "performance-coach-queen",
    title: "Strengthening the Person Behind the Performance",
    category: "Legacy & Credentials",
    src: "/images/carla-performance-coach.webp",
    alt: "Carla Wilson, MSW standing beside a glowing crystal Queen chess piece: Performance Coach and Emotional Intelligence Strategist",
    caption: "Performance Coach & Emotional Intelligence Strategist portrait honoring the Hardenian coaching philosophy.",
  },
  {
    id: "sheriff-shadowbox",
    title: "Washtenaw County Sheriff Retirement Shadowbox",
    category: "Legacy & Credentials",
    src: "/images/carla-sheriff-shadowbox.webp",
    alt: "Carla Wilson, MSW holding her framed Washtenaw County Sheriff Corporal retirement shadowbox from 1991 to 2016",
    caption: "Twenty-five years of sworn service as Corporal (10-21-91 thru 10-1-16), featuring her badges and book What If I'm Right?",
  },
  {
    id: "hardenian-certificate",
    title: "Certificate of Hardenian Mastery",
    category: "Legacy & Credentials",
    src: "/images/carla-certificate-full.webp",
    alt: "Carla Wilson, MSW holding her framed Certificate of Hardenian Mastery and Hardenian Academy Society box",
    caption: "Inaugural Cohort graduate with Distinction from the Hardenian Gems Academy.",
  },
  {
    id: "hardenian-academy-feature",
    title: "Why Did Greg Harden's Academy Invest in Carla Wilson?",
    category: "Legacy & Credentials",
    src: "/images/hardenian-academy-feature.webp",
    alt: "Official Hardenian Gems Academy feature showing Greg Harden arm-in-arm with Carla Wilson, live speaking photo, and Legacy of Excellence champions",
    caption: "Official feature uniting Greg Harden, Tom Brady, Michael Phelps, Desmond Howard, Warde Manuel, and Carla Wilson.",
  },
  {
    id: "g-certified-card",
    title: "G-Certified | Hardenian Gems Academy",
    category: "Legacy & Credentials",
    src: "/images/hardenian-g-certified-card.webp",
    alt: "G-Certified Hardenian Gems Academy Legacy of Excellence card with Admissions Review Committee quote and contact information",
    caption: "Admissions Review Committee endorsement and Legacy of Excellence champion roster.",
  },
  {
    id: "paris-editorial-portrait",
    title: "Parisian Window Editorial Portrait",
    category: "Portraits & Stage",
    src: "/images/carla-paris-portrait.webp",
    alt: "Carla Wilson, MSW seated in an emerald blazer and champagne satin blouse by a Paris balcony overlooking the Eiffel Tower",
    caption: "Clean, text-free international lifestyle and speaker portrait.",
  },
  {
    id: "lobby-closeup-portrait",
    title: "Chandelier Lobby Portrait",
    category: "Portraits & Stage",
    src: "/images/carla-portrait-lobby.webp",
    alt: "Close-up studio portrait of Carla Wilson, MSW wearing a black gold-button blazer and gold wrap blouse",
    caption: "Executive press and media desk portrait in signature black and gold.",
  },
  {
    id: "world-map-standing",
    title: "Transformation Through Awareness (Global Map)",
    category: "Meditation & Tour",
    src: "/images/carla-standing-world-map.webp",
    alt: "Carla Wilson, MSW standing in a teal suit in front of an illuminated global map for Emotional Intelligence",
    caption: "Global speaking and luxury voyage readiness across continents and oceans.",
  },
  {
    id: "retreat-collage",
    title: "Luxury Wellness, Retreats & Stage Moments",
    category: "Meditation & Tour",
    src: "/images/carla-retreat-collage.webp",
    alt: "Four-panel collage showing Carla Wilson leading guided meditation at sunset in Santorini, keynote stage, and group workshops",
    caption: "My Circle Reflects My Growth: guided meditation salons, destination retreats, and live stages.",
  },
  {
    id: "your-move-suite-table",
    title: "The Your Move Signature Collection",
    category: "Books & Crystal Queen",
    src: "/images/your-move-suite-full.webp",
    alt: "Coach Carla standing behind a display of the Your Move book, journal, coloring guide, Mastery Pen trio, and Travel Essentials",
    caption: "Complete Your Move visual concept: hardcover book, guided journal, coloring reflection guide, Mastery Pen, and travel markers.",
  },
  {
    id: "self-mastery-cover",
    title: "Self-Mastery: Beyond Survival",
    category: "Books & Crystal Queen",
    src: "/images/carla-self-mastery-cover.webp",
    alt: "Editorial magazine cover featuring Carla Wilson, MSW standing beside the crystal Queen piece: Self-Mastery and Emotional Intelligence",
    caption: "Celebrate Yourself: Self-Awareness, Self-Regulation, Empathy, Relationship Management, and Purpose.",
  },
  {
    id: "beyond-survival-shelf",
    title: "Beyond Survival: The Confidence Edit",
    category: "Books & Crystal Queen",
    src: "/images/beyond-survival-shelf.webp",
    alt: "Illuminated gold shelf display showing framed Emotional Intelligence Beyond Survival cover, Your Move medallion, and The Daily Reset Journal",
    caption: "Power isn't control. Power is choice. Alone, focused, strategic.",
  },
  {
    id: "ei-director-collage",
    title: "Emotional Intelligence: Speaker | Author | Coach",
    category: "Books & Crystal Queen",
    src: "/images/carla-ei-director-collage.webp",
    alt: "Carla Wilson seated in a director's chair surrounded by story frames, Strategy Over Emotion mug, and Your Move seal",
    caption: "Reinvention is not a moment, it is a movement. Storyboard collage celebrating purpose and legacy.",
  },
  {
    id: "crystal-queen-quote",
    title: "She Remembered Who She Was",
    category: "Books & Crystal Queen",
    src: "/images/crystal-queen-game-changed.webp",
    alt: "Faceted crystal Queen chess piece on a black and white marble chessboard reading She Remembered Who She Was and the Game Changed",
    caption: "The signature Crystal Queen visual emblem at the heart of Connection Principle.",
  },
];

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Portraits & Stage",
  "Legacy & Credentials",
  "Meditation & Tour",
  "Books & Crystal Queen",
];

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  const activePhoto =
    selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F2EB]/[0.08] pb-6">
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? GALLERY_PHOTOS.length
                : GALLERY_PHOTOS.filter((p) => p.category === cat).length;
            const selected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selected}
                data-agent={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] ${
                  selected
                    ? "bg-[#C9A44C] text-[#08080A]"
                    : "border border-[#F5F2EB]/12 bg-[#101014] text-[#A6A39B] hover:border-[#C9A44C]/45 hover:text-[#F5F2EB]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`font-mono text-[10px] ${
                    selected ? "text-[#08080A]/80" : "text-[#C9A44C]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A6A39B]">
          <Images size={16} className="text-[#C9A44C]" />
          <span>Click any photo to inspect full resolution</span>
        </div>
      </div>

      {/* Masonry Column Grid (Preserves true aspect ratios with zero cropped heads or cut-off headlines) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredPhotos.map((photo, idx) => (
          <figure
            key={photo.id}
            className="break-inside-avoid crystal-card group overflow-hidden rounded-3xl p-2.5 transition-all duration-200 hover:border-[#C9A44C]/45"
          >
            <button
              type="button"
              data-agent={`gallery-photo-${photo.id}`}
              onClick={() => setSelectedIndex(idx)}
              className="relative block w-full overflow-hidden rounded-2xl bg-[#08080A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto block object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-[#08080A]/80 p-2 text-[#DFBE6F] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                <MagnifyingGlassPlus size={16} />
              </span>
            </button>

            <figcaption className="px-2.5 pt-3.5 pb-2 space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                {photo.category}
              </span>
              <h2 className="font-display text-xl font-semibold text-[#F5F2EB] leading-snug">
                {photo.title}
              </h2>
              <p className="text-xs text-[#A6A39B] leading-relaxed">
                {photo.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Video & Media Companion Strip */}
      <div className="crystal-card-gold rounded-3xl p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A44C]">
            Press Kit & Motion Archives
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5F2EB]">
            Need High-Resolution Press Photos or Video Footage?
          </h3>
          <p className="text-sm text-[#A6A39B] leading-relaxed">
            Watch Carla Wilson&apos;s 1-minute Movement Reel on Services &amp; Tour, inspect the CBS 60 Minutes Greg Harden archive on About, or request broadcast media packets directly.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="/services#tour"
            className="inline-flex items-center gap-2 rounded-full border border-[#F5F2EB]/16 bg-[#08080A]/80 px-5 py-3 text-xs font-semibold text-[#F5F2EB] hover:border-[#C9A44C]/50 transition-all"
          >
            <span>Watch Movement Reel</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#08080A] hover:bg-[#DFBE6F] transition-all"
          >
            <span>Request Media Packet</span>
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>
      </div>

      {/* Full Lightbox Modal with Prev/Next Navigation */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[94dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#C9A44C]/40 bg-[#101014] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#F5F2EB]/10 px-5 py-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                  {activePhoto.category} • {(selectedIndex ?? 0) + 1} / {filteredPhotos.length}
                </p>
                <p className="truncate font-display text-lg sm:text-xl font-semibold text-[#F5F2EB]">
                  {activePhoto.title}
                </p>
              </div>
              <button
                type="button"
                data-agent="gallery-lightbox-close"
                onClick={closeLightbox}
                aria-label="Close gallery lightbox"
                className="shrink-0 rounded-full border border-[#F5F2EB]/15 bg-[#17171D] p-2 text-[#F5F2EB] hover:border-[#C9A44C] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex-1 overflow-auto bg-[#08080A] p-4 sm:p-6 flex items-center justify-center">
              <button
                type="button"
                data-agent="gallery-lightbox-prev"
                onClick={showPrev}
                aria-label="Previous photo"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 rounded-full border border-[#F5F2EB]/20 bg-[#101014]/90 p-2.5 text-[#F5F2EB] hover:border-[#C9A44C] hover:text-[#DFBE6F] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <CaretLeft size={20} weight="bold" />
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[70dvh] w-auto rounded-xl object-contain"
              />

              <button
                type="button"
                data-agent="gallery-lightbox-next"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 rounded-full border border-[#F5F2EB]/20 bg-[#101014]/90 p-2.5 text-[#F5F2EB] hover:border-[#C9A44C] hover:text-[#DFBE6F] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <CaretRight size={20} weight="bold" />
              </button>
            </div>

            <div className="border-t border-[#F5F2EB]/10 px-6 py-4">
              <p className="text-xs sm:text-sm text-[#A6A39B]">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
