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
  ShieldStar,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/Navbar";
import { CrystalQueenMark, CrystalDiamondRule } from "@/components/CrystalQueenMark";
import { MeditationSanctuary } from "@/components/MeditationSanctuary";
import { LegacyMediaPlayer } from "@/components/LegacyMediaPlayer";
import { TourShowcase } from "@/components/TourShowcase";
import { StorySampler } from "@/components/StorySampler";
import { BookingConcierge } from "@/components/BookingConcierge";
import { Reveal } from "@/components/Reveal";
import {
  CREDENTIAL_METRICS,
  CRUISE_PROGRAMS,
  LEGACY_CHAMPIONS,
  SELF_MASTERY_PILLARS,
} from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="top" className="relative">
        {/* =========================================================
            SECTION 1: ASYMMETRIC ATELIER HERO (Standing Crystal Queen Portrait)
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
                    href="#tour"
                    data-agent="hero-secondary-cta"
                    className="inline-flex items-center gap-2.5 rounded-full border border-[#F5F2EB]/16 bg-[#101014] px-6 py-4 text-sm font-semibold text-[#F5F2EB] transition-all duration-200 hover:border-[#C9A44C]/55 hover:bg-[#17171D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
                  >
                    <Play size={15} weight="fill" className="text-[#C9A44C]" />
                    <span>Watch Movement Reel</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Full-Length Standing Portrait Next to Giant Crystal Queen Chess Piece */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-[32px] bg-gradient-to-b from-[#C9A44C]/25 via-transparent to-[#C9A44C]/10 blur-xl"
                  />
                  <div className="relative crystal-card-gold overflow-hidden rounded-[28px] p-2">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px]">
                      <img
                        src="/images/hero-carla-standing-clean.webp"
                        alt="Carla Wilson, MSW standing in a tailored black suit on a marble chessboard floor beside a giant faceted crystal Queen chess piece"
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/60 to-transparent p-6 pt-16">
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
                  <span>Primary Passion: Guided Meditation, Retreats & Group Facilitation</span>
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

                {/* Guided Meditation Facilitator Card + Sunset Retreat Pairing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="crystal-card overflow-hidden rounded-2xl p-2">
                    <img
                      src="/images/carla-guided-meditation-card.webp"
                      alt="Carla Wilson, MSW: Guided Meditation Facilitator and Emotional Intelligence Strategist"
                      className="aspect-[3/4] w-full rounded-xl object-cover object-top"
                    />
                  </div>
                  <div className="crystal-card overflow-hidden rounded-2xl p-2 flex flex-col justify-between">
                    <img
                      src="/images/retreat-santorini-meditation.webp"
                      alt="Carla Wilson leading an outdoor sunset guided meditation retreat"
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                    <div className="p-3 space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9A44C]">
                        Destination Retreats
                      </span>
                      <p className="font-display text-lg font-semibold text-[#F5F2EB]">
                        Find Your Center. Move With Intention.
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
            <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A44C]">
                  <Compass size={16} />
                  <span>Turnkey Guest Enrichment for World Voyages & Ocean Crossings</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Curated for Luxury Cruise Ships & Discerning Voyagers.
                </h2>
                <p className="max-w-[58ch] text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                  Stage-ready with wireless headset microphone and zero-WiFi guest workshops designed to anchor ocean crossings, wellness decks, and main-theater sea days.
                </p>
                <div className="pt-1">
                  <a
                    href="#booking"
                    data-agent="cruise-syllabus-cta"
                    className="inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/50 bg-[#17171D] px-6 py-3.5 text-sm font-semibold text-[#F5F2EB] transition-all hover:bg-[#C9A44C] hover:text-[#08080A] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
                  >
                    <span>Request Cruise Enrichment Syllabus</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </div>
              </div>

              {/* Clean Headset Mic Stage Throne Portrait */}
              <div className="lg:col-span-4">
                <div className="crystal-card-gold overflow-hidden rounded-3xl p-2 max-w-xs mx-auto lg:ml-auto lg:mr-0">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <img
                      src="/images/carla-stage-mic-throne.webp"
                      alt="Carla Wilson, MSW seated with wireless stage headset microphone beside the illuminated crystal Queen piece"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 4-Card Sea-Day Program Grid */}
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
            <Reveal
              delay={0.15}
              className="mt-8 crystal-card-gold rounded-2xl p-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="rounded-xl bg-[#C9A44C]/20 p-3 text-[#C9A44C]">
                  <AirplaneTilt size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F5F2EB]">
                    Ready-to-Sail Enrichment Logistics for Cruise Directors
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#A6A39B]">
                    Multi-topic 3 to 10 sea-day repertoire • Unplugged guest reflection sessions • Single wireless lavalier or handheld mic setup • International travel ready.
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
                  Carla Wilson, MSW graduated{" "}
                  <strong className="text-[#F5F2EB] font-semibold">
                    with Distinction
                  </strong>{" "}
                  in the Inaugural Cohort of the Hardenian Gems Academy and stepped into the personal business role of the late{" "}
                  <strong className="text-[#F5F2EB] font-semibold">
                    Greg Harden
                  </strong>{" "}
                  at{" "}
                  <strong className="text-[#F5F2EB] font-semibold">
                    GSHA Quality Services
                  </strong>
                  .
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

              {/* Right Video Documentary Player & 4 Credential Portraits */}
              <Reveal delay={0.12} className="lg:col-span-7">
                <LegacyMediaPlayer />
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: THE TOUR, 2026 CONFERENCES & MOVEMENT VIDEO REEL
           ========================================================= */}
        <section
          id="tour"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/65 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <TourShowcase />
            </Reveal>
          </div>
        </section>

        {/* =========================================================
            SECTION 7: ABOUT CARLA WILSON, MSW & REAL CREDENTIALS
           ========================================================= */}
        <section id="about" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Portrait & Real Washtenaw County Sheriff Shadowbox Pairing */}
              <Reveal className="lg:col-span-5 space-y-5">
                <div className="crystal-card overflow-hidden rounded-3xl p-2">
                  <img
                    src="/images/carla-paris-portrait.webp"
                    alt="Editorial portrait of Carla Wilson, MSW seated by a Paris window with the Eiffel Tower visible behind her"
                    className="aspect-square w-full rounded-[22px] object-cover object-top"
                  />
                </div>

                {/* Washtenaw County Sheriff Corporal Retirement Shadowbox Card */}
                <div className="crystal-card-gold rounded-2xl p-5 flex items-center gap-4">
                  <img
                    src="/images/carla-sheriff-shadowbox.webp"
                    alt="Carla Wilson, MSW holding her Washtenaw County Sheriff Corporal retirement shadowbox (10-21-91 thru 10-1-16)"
                    className="h-24 w-24 shrink-0 rounded-xl object-cover border border-[#C9A44C]/40"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFBE6F]">
                      <ShieldStar size={16} weight="fill" className="text-[#C9A44C]" />
                      <span>Washtenaw County Sheriff Corporal (Ret.)</span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-[#F5F2EB]">
                      10-21-1991 thru 10-01-2016 • 25 Years Sworn Service
                    </p>
                    <p className="mt-1 text-xs text-[#A6A39B] leading-relaxed">
                      Pictured with her official retirement shadowbox housing her Corporal badges, service honors, and first book{" "}
                      <em className="text-[#F5F2EB]">What If I&apos;m Right?</em>
                    </p>
                  </div>
                </div>

                {/* Hardenian Certificate Card */}
                <div className="crystal-card rounded-2xl p-5 flex items-center gap-4">
                  <img
                    src="/images/carla-certificate-clean.webp"
                    alt="Carla Wilson holding her framed Certificate of Hardenian Mastery beside the crystal Queen chess piece"
                    className="h-20 w-20 shrink-0 rounded-xl object-cover object-top border border-[#C9A44C]/35"
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFBE6F]">
                      <SealCheck size={16} weight="fill" className="text-[#C9A44C]" />
                      <span>Certificate of Hardenian Mastery</span>
                    </div>
                    <p className="mt-1 text-xs text-[#A6A39B] leading-relaxed">
                      Master of Social Work (MSW) • Published as Carla Wilson, MSW & Carla Bragg Wilson.
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
                    Carla Wilson, MSW (also published as Carla Bragg Wilson) brings a rare combination of clinical depth and lived frontline authority. Across twenty-five years as a Corporal with the Washtenaw County Sheriff&apos;s Office and over thirty years in social work, re-entry, and personal transformation, she pioneered the use of guided meditation and emotional intelligence where people needed it most.
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

                {/* Beyond Survival Editorial Shelf Preview */}
                <div className="crystal-card overflow-hidden rounded-2xl p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <img
                      src="/images/beyond-survival-shelf.webp"
                      alt="Beyond Survival Emotional Intelligence framed feature and Your Move collection display"
                      className="sm:col-span-5 h-44 w-full rounded-xl object-cover"
                    />
                    <div className="sm:col-span-7 pr-3 space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                        Beyond Survival • The Confidence Edit
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-[#F5F2EB]">
                        Power Isn&apos;t Control. Power Is Choice.
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed">
                        &ldquo;You&apos;ve survived the storm. Now walk in your purpose. The life you prayed for begins here.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 8: BOOKS, CHAPTER SAMPLES & HOW TO PURCHASE
           ========================================================= */}
        <section
          id="books"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/55 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-3xl space-y-4 mb-14">
              {/* Eyebrow #3 of 3 max on entire page */}
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A44C]">
                Published Works • Chapter Samples • How to Purchase
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                Read Chapter Samples & Purchase Carla Wilson&apos;s Books.
              </h2>
              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                Explore published titles by Carla Wilson, MSW (Carla Bragg Wilson) on Amazon, read four chapter excerpts right below, and follow her new manuscript as it prepares for its New York Times Square feature.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <StorySampler />
            </Reveal>
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
                  Carla Wilson, MSW (Carla Bragg Wilson) • Guided Meditation Facilitator, Speaker & Author
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="https://a.co/d/0btsX1XG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFBE6F] hover:text-[#F5F2EB] transition-colors"
              >
                What If I&apos;m Right? on Amazon
              </a>
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
