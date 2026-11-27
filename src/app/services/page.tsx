import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Check,
  Sparkle,
  UsersThree,
  AirplaneTilt,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { MeditationSanctuary } from "@/components/MeditationSanctuary";
import { TourShowcase } from "@/components/TourShowcase";
import { Reveal } from "@/components/Reveal";
import { CRUISE_PROGRAMS } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Services & Tour | Guided Meditation, Luxury Cruises & Keynotes",
  description:
    "Explore Carla Wilson's primary offerings: Guided Meditation Sanctuaries, Luxury Cruise Ship Enrichment programs, workshops, group facilitation, and The Tour highlight reel.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Offerings • Guided Meditation • Cruise Enrichment • The Tour"
          title="Guided Meditation, Luxury Voyages"
          highlight="& Group Transformation."
          description="Carla Wilson focuses on what creates deepest collective transformation: guided meditation circles, luxury cruise enrichment series, interactive workshops, lectures, and national tour appearances."
        />

        {/* Guided Meditation & Group Facilitation */}
        <section id="meditation" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <Reveal className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/35 bg-[#101014] px-4 py-1.5 text-xs font-medium text-[#DFBE6F]">
                  <Sparkle size={14} weight="fill" className="text-[#C9A44C]" />
                  <span>Primary Passion: Guided Meditation & Group Rooms</span>
                </div>
                <h2 className="font-display text-4xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Where Collective Stillness Replaces Burnout.
                </h2>
                <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                  Instead of traditional one-on-one coaching, Carla channels three decades of clinical and correctional experience into group sanctuaries, guided breath sessions, and high-engagement facilitation.
                </p>

                <div className="space-y-4">
                  <div className="crystal-card rounded-2xl p-5 flex items-start gap-4">
                    <div className="mt-0.5 rounded-xl bg-[#C9A44C]/15 p-2.5 text-[#C9A44C]">
                      <Sparkle size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F2EB]">
                        Guided Meditation Sanctuaries
                      </h3>
                      <p className="mt-1 text-sm text-[#A6A39B] leading-relaxed">
                        Grounded breathwork and visualization sessions proven everywhere from correctional classrooms to ocean decks and corporate summits.
                      </p>
                    </div>
                  </div>
                  <div className="crystal-card rounded-2xl p-5 flex items-start gap-4">
                    <div className="mt-0.5 rounded-xl bg-[#C9A44C]/15 p-2.5 text-[#C9A44C]">
                      <UsersThree size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F2EB]">
                        Lectures, Workshops & Group Facilitation
                      </h3>
                      <p className="mt-1 text-sm text-[#A6A39B] leading-relaxed">
                        Tactile workshops rooted in emotional intelligence, healthy boundaries, and practical decision-making.
                      </p>
                    </div>
                  </div>
                </div>

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

              <Reveal delay={0.1} className="lg:col-span-6">
                <MeditationSanctuary />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Luxury Cruise Ship Enrichment */}
        <section
          id="cruise"
          className="border-y border-[#F5F2EB]/[0.08] bg-[#101014]/60 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A44C]">
                  <Compass size={16} />
                  <span>Turnkey Guest Enrichment for World Voyages & Ocean Crossings</span>
                </div>
                <h2 className="font-display text-4xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Curated for Luxury Cruise Ships & Discerning Voyagers.
                </h2>
                <p className="max-w-[58ch] text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                  Stage-ready with wireless headset microphone and zero-WiFi guest workshops designed to anchor ocean crossings, wellness decks, and main-theater sea days.
                </p>
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/50 bg-[#17171D] px-6 py-3.5 text-sm font-semibold text-[#F5F2EB] transition-all hover:bg-[#C9A44C] hover:text-[#08080A] active:scale-[0.98]"
                  >
                    <span>Book Luxury Cruise Enrichment Dates</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </Link>
                </div>
              </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CRUISE_PROGRAMS.map((prog, idx) => (
                <Reveal
                  key={prog.code}
                  delay={idx * 0.05}
                  className="crystal-card rounded-3xl p-8 flex flex-col justify-between"
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

            <div className="mt-8 crystal-card-gold rounded-2xl p-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            </div>
          </div>
        </section>

        {/* The Tour & Movement Video Reel */}
        <section id="tour" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <TourShowcase />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
