import type { Metadata } from "next";
import Link from "next/link";
import {
  Quotes,
  SealCheck,
  ShieldStar,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CrystalDiamondRule } from "@/components/CrystalQueenMark";
import { LegacyMediaPlayer } from "@/components/LegacyMediaPlayer";
import { Reveal } from "@/components/Reveal";
import {
  CREDENTIAL_METRICS,
  LEGACY_CHAMPIONS,
  SELF_MASTERY_PILLARS,
} from "@/data/siteContent";

export const metadata: Metadata = {
  title: "About Carla Wilson, MSW | Hardenian Legacy & GSHA Quality Services",
  description:
    "Discover the 30-year journey of Carla Wilson, MSW (Carla Bragg Wilson): Retired Washtenaw County Sheriff Corporal, Graduate with Distinction from Hardenian Gems Academy, and leader carrying forward Greg Harden's personal role at GSHA Quality Services.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Carla Wilson, MSW • Carla Bragg Wilson"
          title="Thirty Years of Frontline"
          highlight="Truth, Discipline & Healing."
          description="From twenty-five years as a Washtenaw County Sheriff Corporal to graduating with Distinction in the inaugural Hardenian Gems Academy cohort and continuing the legacy of Greg Harden at GSHA Quality Services."
        />

        {/* Metrics Ledger */}
        <section className="border-b border-[#F5F2EB]/[0.08] bg-[#101014]/75 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {CREDENTIAL_METRICS.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className="space-y-1.5">
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

        {/* Biography, Sheriff Shadowbox & 5 Pillars */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <Reveal className="lg:col-span-5 space-y-5">
                <div className="crystal-card overflow-hidden rounded-3xl p-2">
                  <img
                    src="/images/carla-paris-portrait.webp"
                    alt="Editorial portrait of Carla Wilson, MSW seated by a Paris window with the Eiffel Tower behind her"
                    className="aspect-square w-full rounded-[22px] object-cover object-top"
                  />
                </div>

                <div className="crystal-card-gold rounded-2xl p-5 flex items-center gap-4">
                  <img
                    src="/images/carla-sheriff-shadowbox.webp"
                    alt="Carla Wilson holding her Washtenaw County Sheriff Corporal retirement shadowbox (10-21-91 thru 10-1-16)"
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
                      Official retirement shadowbox preserving her Corporal stripes, badges, and first book{" "}
                      <em className="text-[#F5F2EB]">What If I&apos;m Right?</em>
                    </p>
                  </div>
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
                      <span>Certificate of Hardenian Mastery</span>
                    </div>
                    <p className="mt-1 text-xs text-[#A6A39B] leading-relaxed">
                      Master of Social Work (MSW) • Inaugural Cohort Graduate with Distinction.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F5F2EB] leading-tight">
                    Founder of Connection Principle & Successor at GSHA Quality Services.
                  </h2>
                  <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed">
                    Carla Wilson, MSW (also published as Carla Bragg Wilson) brings clinical mastery forged inside real-world pressure. Across twenty-five years with the Washtenaw County Sheriff&apos;s Office and over thirty years as a Master of Social Work, she discovered that lasting change never comes from fear or control. It begins when people calm the nervous system, examine their thoughts, and reclaim personal accountability.
                  </p>
                  <p className="text-base text-[#A6A39B] leading-relaxed">
                    Having stepped into the role of the late Greg Harden inside his personal business at GSHA Quality Services, Carla pairs her clinical roots in corrections, recovery, and guided meditation with the champion performance standard trusted by Tom Brady, Michael Phelps, and University of Michigan leaders.
                  </p>
                  <p className="font-display text-2xl italic leading-[1.2] pb-1 text-[#DFBE6F]">
                    &ldquo;Know Better. Do Better. Live Better. The single person we truly control is ourselves.&rdquo;
                  </p>
                </div>

                <CrystalDiamondRule />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SELF_MASTERY_PILLARS.map((pillar) => (
                    <div key={pillar.index} className="crystal-card rounded-2xl p-5 space-y-1.5">
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

        {/* Greg Harden Legacy & Video Archives */}
        <section className="border-t border-[#F5F2EB]/[0.08] bg-[#101014]/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <Reveal className="lg:col-span-5 space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#C9A44C]">
                  The Hardenian Lineage • GSHA Quality Services
                </p>
                <h2 className="font-display text-4xl font-semibold tracking-tight leading-[1.08] text-[#F5F2EB]">
                  Carrying Forward the Standard of Champions.
                </h2>
                <blockquote className="crystal-card-gold rounded-2xl p-6 space-y-3">
                  <Quotes size={22} weight="fill" className="text-[#C9A44C]" />
                  <p className="font-display text-xl italic leading-[1.28] pb-1 text-[#F5F2EB]">
                    &ldquo;Rather than creating a platform, this certification is expected to amplify and expand the impact you are already making in the lives of others.&rdquo;
                  </p>
                  <footer className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C9A44C]">
                    Hardenian Gems Academy Admissions Review Committee
                  </footer>
                </blockquote>

                <div className="divide-y divide-[#F5F2EB]/[0.08] rounded-2xl border border-[#F5F2EB]/[0.08] bg-[#101014] px-5">
                  {LEGACY_CHAMPIONS.map((person) => (
                    <div key={person.name} className="py-3 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-[#F5F2EB]">{person.name}</p>
                        <p className="text-xs text-[#A6A39B]">{person.note}</p>
                      </div>
                      <span className="shrink-0 text-right font-mono text-[11px] text-[#DFBE6F]">
                        {person.role}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#08080A] hover:bg-[#DFBE6F] transition-all"
                  >
                    <span>Explore Guided Meditation & Cruises</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#F5F2EB]/16 bg-[#08080A]/80 px-6 py-3 text-xs font-semibold text-[#F5F2EB] hover:border-[#C9A44C]/50 transition-all"
                  >
                    <span>Book Carla for Your Organization</span>
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-7">
                <LegacyMediaPlayer />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
