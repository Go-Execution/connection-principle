import React from "react";
import {
  ArrowUpRight,
  Play,
  Compass,
  Quotes,
  Check,
  SealCheck,
  Sparkle,
  UsersThree,
  AirplaneTilt,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/Navbar";
import { CrystalQueenMark, CrystalDiamondRule } from "@/components/CrystalQueenMark";
import { MeditationSanctuary } from "@/components/MeditationSanctuary";
import { LegacyMediaPlayer } from "@/components/LegacyMediaPlayer";
import { StorySampler } from "@/components/StorySampler";
import { BookingConcierge } from "@/components/BookingConcierge";
import { Reveal } from "@/components/Reveal";
import {
  CREDENTIAL_METRICS,
  CRUISE_PROGRAMS,
  LEGACY_CHAMPIONS,
  SELF_MASTERY_PILLARS,
  COLLECTION_ITEMS,
} from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="top" className="relative">
        {/* =========================================================
            SECTION 1: ASYMMETRIC ATELIER HERO (Strict 4-Element Stack)
           ========================================================= */}
        <section
          aria-label="Introduction"
          className="relative min-h-[100dvh] pt-24 pb-16 lg:pb-24 flex items-center"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Strictly 4 Hero Text Elements (Eyebrow, Headline, Subtext, CTAs) */}
              <div className="lg:col-span-7 space-y-8">
                {/* 1. Eyebrow (#1 of 3 max on entire page) */}
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#C9A44C]">
                  Connection Principle • Carla Wilson, MSW
                </p>

                {/* 2. Headline (6 words, 2 lines on desktop) */}
                <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.04] text-[#F5F2EB]">
                  Still the Mind.
                  <span className="block italic font-medium text-[#DFBE6F] leading-[1.12] pb-1">
                    Command Your Move.
                  </span>
                </h1>

                {/* 3. Subtext (17 words, <= 20 words rule) */}
                <p className="max-w-[54ch] text-lg sm:text-xl text-[#A6A39B] leading-relaxed">
                  Guided meditation, luxury cruise enrichment, and emotional intelligence lectures shaped by thirty years of human transformation.
                </p>

                {/* 4. CTAs (1 Primary + 1 Secondary) */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#booking"
                    data-agent="hero-primary-cta"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#C9A44C] px-7 py-4 text-sm font-semibold text-[#08080A] shadow-[0_14px_36px_-8px_rgba(201,164,76,0.5)] transition-all duration-200 hover:bg-[#DFBE6F] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
                  >
                    <span>Book Cruise & Stage Dates</span>
                    <ArrowUpRight size={17} weight="bold" />
                  </a>

                  <a
                    href="#legacy"
                    data-agent="hero-secondary-cta"
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#F5F2EB]/16 bg-[#101014] px-6 py-4 text-sm font-semibold text-[#F5F2EB] transition-all duration-200 hover:border-[#C9A44C]/55 hover:bg-[#17171D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
                  >
                    <Play size={15} weight="fill" className="text-[#C9A44C]" />
                    <span>Watch Greg Harden Tribute</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Studio Portrait with Crystal & Gold Queen Chess Piece */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-[32px] bg-gradient-to-b from-[#C9A44C]/25 via-transparent to-[#C9A44C]/10 blur-xl"
                  />
                  <div className="relative crystal-card-gold overflow-hidden rounded-[28px] p-2">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px]">
                      <img
                        src="/images/hero-carla-throne.webp"
                        alt="Carla Wilson, MSW seated in black and gold beside an illuminated faceted crystal Queen chess piece"
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/55 to-transparent p-6 pt-16">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="font-display text-2xl font-semibold text-[#F5F2EB]">
                              Carla Wilson, MSW
                            </p>
                            <p className="text-xs text-[#DFBE6F]">
                              Guided Meditation Facilitator • Speaker • Author
                            </p>
                          </div>
                          <CrystalQueenMark className="h-9 w-9 shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: ARCHITECTURAL CREDENTIAL LEDGER
           ========================================================= */}
        <section
          id="credentials"
          aria-label="Credentials and institutional standing"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/75 py-14"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CREDENTIAL_METRICS.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.06} className="space-y-2">
                  <p className="font-display text-3xl sm:text-4xl font-semibold text-[#DFBE6F]">
                    {item.value}
                  </p>
                  <p className="text-sm font-semibold text-[#F5F2EB]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#A6A39B] leading-relaxed">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: GUIDED MEDITATION & GROUP FACILITATION SANCTUARY
           ========================================================= */}
        <section id="meditation" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <Reveal className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/35 bg-[#101014] px-4 py-1.5 text-xs font-medium text-[#DFBE6F]">
                  <Sparkle size={14} weight="fill" className="text-[#C9A44C]" />
                  <span>Primary Practice: Guided Meditation & Group Rooms</span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Where Collective Stillness Replaces Burnout.
                </h2>

                <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-[58ch]">
                  After more than three decades supporting individuals through high-stakes change, Carla Wilson centers her work where transformation runs deepest: live guided meditation, immersive lectures, restorative workshops, and group facilitation.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="crystal-card rounded-2xl p-5 flex items-start gap-4">
                    <div className="mt-0.5 rounded-xl bg-[#C9A44C]/15 p-2.5 text-[#C9A44C]">
                      <Sparkle size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F2EB]">
                        Guided Meditation Sanctuaries
                      </h3>
                      <p className="mt-1 text-sm text-[#A6A39B] leading-relaxed">
                        Accessible, grounded breath and emotional regulation sessions that quiet mental noise for audiences of twenty to two thousand.
                      </p>
                    </div>
                  </div>

                  <div className="crystal-card rounded-2xl p-5 flex items-start gap-4">
                    <div className="mt-0.5 rounded-xl bg-[#C9A44C]/15 p-2.5 text-[#C9A44C]">
                      <UsersThree size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F2EB]">
                        Workshops, Lectures & Group Facilitation
                      </h3>
                      <p className="mt-1 text-sm text-[#A6A39B] leading-relaxed">
                        Interactive group architecture built around emotional intelligence, personal accountability, and real-life application rather than isolated one-on-one coaching.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <MeditationSanctuary />
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: LUXURY CRUISE SHIP ENRICHMENT & AT-SEA SERIES
           ========================================================= */}
        <section
          id="cruise"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/60 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A44C]">
                  <Compass size={16} />
                  <span>Turnkey Guest Enrichment for World Voyages & Ocean Crossings</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Curated for Luxury Cruise Ships & Discerning Voyagers.
                </h2>
              </div>

              <a
                href="#booking"
                data-agent="cruise-syllabus-cta"
                className="self-start lg:self-auto inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/50 bg-[#17171D] px-6 py-3.5 text-sm font-semibold text-[#F5F2EB] transition-all hover:bg-[#C9A44C] hover:text-[#08080A] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <span>Request Cruise Enrichment Syllabus</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </Reveal>

            {/* 4-Card Sea-Day Program Grid (Exact 4 cells = 4 programs) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CRUISE_PROGRAMS.map((prog, idx) => (
                <Reveal
                  key={prog.code}
                  delay={idx * 0.06}
                  className="crystal-card rounded-3xl p-8 flex flex-col justify-between transition-colors hover:border-[#C9A44C]/40"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C9A44C]">
                        {prog.code}
                      </span>
                      <span className="rounded-full border border-[#F5F2EB]/10 bg-[#08080A]/70 px-3 py-1 text-xs text-[#A6A39B]">
                        {prog.format}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-[#F5F2EB] leading-snug">
                      {prog.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#A6A39B] leading-relaxed">
                      {prog.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F5F2EB]/[0.07] flex items-center gap-2 text-xs text-[#DFBE6F]">
                    <Check size={14} weight="bold" />
                    <span>Adaptable for Theater Stages, Observation Lounges & Wellness Decks</span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Cruise Director Logistics Bar */}
            <Reveal delay={0.15} className="mt-8 crystal-card-gold rounded-2xl p-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="rounded-xl bg-[#C9A44C]/20 p-3 text-[#C9A44C]">
                  <AirplaneTilt size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F5F2EB]">
                    Ready-to-Sail Enrichment Logistics for Cruise Directors
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#A6A39B]">
                    Multi-topic 3 to 10 sea-day repertoire • Zero-WiFi guest reflection kits • Single wireless lavalier or handheld mic setup • International travel ready.
                  </p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-[#C9A44C]">
                2026 / 2027 Sailings Open
              </span>
            </Reveal>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: GREG HARDEN & GSHA QUALITY SERVICES LEGACY
           ========================================================= */}
        <section id="legacy" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Narrative & Champion Lineage */}
              <Reveal className="lg:col-span-5 space-y-6">
                {/* Eyebrow #2 of 3 max on entire page */}
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A44C]">
                  The Hardenian Lineage • GSHA Quality Services
                </p>

                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Carrying Forward the Standard of Champions.
                </h2>

                <p className="text-base text-[#A6A39B] leading-relaxed">
                  Carla Wilson, MSW graduated <strong className="text-[#F5F2EB] font-semibold">with Distinction</strong> in the Inaugural Cohort of the Hardenian Gems Academy and stepped into the personal business role of the late <strong className="text-[#F5F2EB] font-semibold">Greg Harden</strong> at <strong className="text-[#F5F2EB] font-semibold">GSHA Quality Services</strong>.
                </p>

                <p className="text-base text-[#A6A39B] leading-relaxed">
                  Known globally as Michigan&apos;s &ldquo;Secret Weapon,&rdquo; Greg Harden served as Performance Coach to 7-time Super Bowl Champion Tom Brady, 23-time Olympic Gold Medalist Michael Phelps, University of Michigan Athletics, and elite professional teams.
                </p>

                {/* Authentic Academy Committee Quote (<= 3 lines) */}
                <blockquote className="crystal-card-gold rounded-2xl p-6 space-y-3">
                  <Quotes size={22} weight="fill" className="text-[#C9A44C]" />
                  <p className="font-display text-xl italic leading-[1.28] pb-1 text-[#F5F2EB]">
                    &ldquo;Rather than creating a platform, this certification is expected to amplify and expand the impact you are already making in the lives of others.&rdquo;
                  </p>
                  <footer className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C9A44C]">
                    Hardenian Gems Academy Admissions Review Committee
                  </footer>
                </blockquote>

                {/* Legacy Roster */}
                <div className="pt-2 space-y-2.5">
                  <p className="text-xs font-semibold text-[#F5F2EB]">
                    A Legacy of Excellence Connected Through Hardenian Mastery:
                  </p>
                  <div className="divide-y divide-[#F5F2EB]/[0.08] rounded-2xl border border-[#F5F2EB]/[0.08] bg-[#101014] px-5">
                    {LEGACY_CHAMPIONS.map((person) => (
                      <div
                        key={person.name}
                        className="py-3 flex items-center justify-between gap-4"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#F5F2EB]">
                            {person.name}
                          </p>
                          <p className="text-xs text-[#A6A39B]">{person.note}</p>
                        </div>
                        <span className="shrink-0 text-right font-mono text-[11px] text-[#DFBE6F]">
                          {person.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Right Video Documentary Player & Credential Portraits */}
              <Reveal delay={0.12} className="lg:col-span-7">
                <LegacyMediaPlayer />
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: ABOUT CARLA WILSON, MSW & 5 PILLARS OF SELF-MASTERY
           ========================================================= */}
        <section
          id="about"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/55 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Portrait Pairing */}
              <Reveal className="lg:col-span-5 space-y-6">
                <div className="crystal-card overflow-hidden rounded-3xl p-2">
                  <img
                    src="/images/carla-portrait-lobby.webp"
                    alt="Close-up portrait of Carla Wilson, MSW in black blazer with gold satin blouse"
                    className="aspect-[4/5] w-full rounded-[22px] object-cover object-top"
                  />
                </div>

                <div className="crystal-card rounded-2xl p-5 flex items-center gap-4">
                  <img
                    src="/images/carla-certificate-clean.webp"
                    alt="Carla Wilson holding her framed Certificate of Hardenian Mastery beside the crystal Queen chess piece"
                    className="h-20 w-20 shrink-0 rounded-xl object-cover object-top border border-[#C9A44C]/35"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFBE6F]">
                      <SealCheck size={16} weight="fill" className="text-[#C9A44C]" />
                      <span>Certificate of Distinction</span>
                    </div>
                    <p className="mt-1 text-xs text-[#A6A39B] leading-relaxed">
                      Master of Social Work (MSW) • Retired Corrections Deputy • Behavioral Architect & Author based in Michigan.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Right Narrative & 5 Pillars */}
              <Reveal delay={0.1} className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                    Thirty Years Guiding People Beyond Survival Into Self-Mastery.
                  </h2>
                  <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-[62ch]">
                    Carla Wilson, MSW brings a rare combination of clinical depth and lived authority. Across thirty years as a Corrections Deputy, licensed social worker, author, and emotional intelligence strategist, she has helped thousands navigate re-entry, recovery, leadership pressure, and personal reinvention.
                  </p>
                  <p className="font-display text-2xl italic leading-[1.2] pb-1 text-[#DFBE6F]">
                    &ldquo;Know Better. Do Better. Live Better. The single person we truly control is ourselves.&rdquo;
                  </p>
                </div>

                <CrystalDiamondRule />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SELF_MASTERY_PILLARS.map((pillar) => (
                    <div
                      key={pillar.index}
                      className="crystal-card rounded-2xl p-5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl font-semibold text-[#F5F2EB]">
                          {pillar.name}
                        </span>
                        <span className="font-mono text-xs text-[#C9A44C]">
                          {pillar.index}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed">
                        {pillar.line}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 7: SAMPLE STORIES & FORTHCOMING BOOK
           ========================================================= */}
        <section id="stories" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-2xl space-y-4 mb-14">
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                Sample Four Stories From the Connection Principle Library.
              </h2>
              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                Explore four signature reflections ahead of Carla Wilson&apos;s forthcoming book cover reveal this week, written for readers, retreat guests, and broadcast producers.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <StorySampler />
            </Reveal>
          </div>
        </section>

        {/* =========================================================
            SECTION 8: THE "YOUR MOVE" SIGNATURE SUITE & TRAVEL COLLECTION
           ========================================================= */}
        <section
          id="collection"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/65 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">
            <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                {/* Eyebrow #3 of 3 max on entire page */}
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A44C]">
                  The Your Move Collection
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Tactile Tools for Thought, Travel & Group Reflection.
                </h2>
              </div>

              <a
                href="#booking"
                data-agent="collection-bulk-cta"
                className="self-start lg:self-auto inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-6 py-3.5 text-sm font-semibold text-[#08080A] transition-all hover:bg-[#DFBE6F] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <span>Inquire for Retreat & Voyage Editions</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </Reveal>

            {/* Full Marble Table Showcase */}
            <Reveal className="crystal-card-gold overflow-hidden rounded-3xl p-2 sm:p-3">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/your-move-suite-full.webp"
                  alt="Coach Carla Wilson MSW showcasing the complete Your Move collection: hardcover book, guided journal, coloring reflection guide, Mastery Pen trio, and travel essentials"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>

            {/* 4 Signature Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COLLECTION_ITEMS.map((item, idx) => (
                <Reveal
                  key={item.id}
                  delay={idx * 0.06}
                  className="crystal-card rounded-3xl overflow-hidden flex flex-col justify-between transition-colors hover:border-[#C9A44C]/45"
                >
                  <div>
                    <div className="aspect-[4/4.4] w-full overflow-hidden bg-[#08080A] p-3">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-full w-full rounded-2xl object-cover object-top"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                        {item.tag}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-[#F5F2EB] leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs font-medium text-[#DFBE6F]">
                        {item.subtitle}
                      </p>
                      <ul className="space-y-2 pt-2 text-xs text-[#A6A39B] leading-relaxed">
                        {item.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A44C]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[#F5F2EB]/[0.07] bg-[#08080A]/50">
                    <p className="font-mono text-[11px] text-[#F5F2EB]">
                      {item.highlight}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 9: BROADCAST MEDIA DESK & BOOKING CONCIERGE
           ========================================================= */}
        <section id="booking" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-14">
            <Reveal className="max-w-2xl space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                Broadcast Media, Cruise Enrichment & Group Bookings.
              </h2>
              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                Direct booking desk for luxury cruise enrichment directors, CNN and national broadcast producers, conference stages, and guided meditation retreats.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <BookingConcierge />
            </Reveal>
          </div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
         ========================================================= */}
      <footer className="border-t border-[#F5F2EB]/10 bg-[#08080A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#F5F2EB]/[0.08]">
            <div className="flex items-center gap-4">
              <CrystalQueenMark className="h-11 w-11" />
              <div>
                <p className="font-display text-2xl font-semibold text-[#F5F2EB]">
                  Connection Principle
                </p>
                <p className="text-xs text-[#A6A39B]">
                  Carla Wilson, MSW • Guided Meditation Facilitator, Speaker, Author & Behavioral Architect
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="mailto:carlawilsonmsw@gmail.com"
                className="text-[#F5F2EB] hover:text-[#C9A44C] transition-colors"
              >
                carlawilsonmsw@gmail.com
              </a>
              <a
                href="tel:+17346604355"
                className="font-mono text-[#DFBE6F] hover:text-[#F5F2EB] transition-colors"
              >
                1 (734) 660-4355
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A6A39B]">
            <p>
              © {new Date().getFullYear()} Connection Principle PLLC & Your Move. All rights reserved.
            </p>
            <p>
              Hardenian Gems Academy Graduate with Distinction • Continuing the Legacy at GSHA Quality Services
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
