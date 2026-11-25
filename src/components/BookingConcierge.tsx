"use client";

import React, { useState } from "react";
import {
  Boat,
  Broadcast,
  MicrophoneStage,
  Sparkle,
  CheckCircle,
  Copy,
  Check,
  EnvelopeSimple,
  PhoneCall,
} from "@phosphor-icons/react";
import { BROADCAST_TOPICS } from "@/data/siteContent";

type InquiryCategory =
  | "Luxury Cruise Ship Enrichment"
  | "Broadcast & Network Media (CNN / TV / Press)"
  | "Guided Meditation & Group Facilitation"
  | "Keynote Lecture & Workshop"
  | "Your Move Books & Retreat Collection";

const PRESS_BIO_TEXT = `CARLA WILSON, MSW (CARLA BRAGG WILSON) | BROADCAST & CRUISE ENRICHMENT FACT SHEET
Founder, Connection Principle | Guided Meditation Facilitator, Speaker & Author
Email: carlawilsonmsw@gmail.com | Direct: 1 (734) 660-4355 | Base: Ann Arbor / Detroit Metro, MI

• 30+ Years in Human Transformation: Retired Washtenaw County Sheriff Corporal (1991 to 2016) and Master of Social Work (MSW) specializing in guided meditation, emotional intelligence, accountability, re-entry, and personal growth.
• Hardenian Legacy & GSHA Quality Services: Graduated with Distinction in the Inaugural Cohort of the Hardenian Gems Academy and stepped into the role of the late Greg Harden (legendary performance counselor to 7x Super Bowl Champion Tom Brady and 23x Olympic Gold Medalist Michael Phelps) in his personal business at GSHA Quality Services.
• Published Books & NYC Times Square Feature: Author of "What If I'm Right?: A Book That Celebrates Spiritual Intuition" (https://a.co/d/0btsX1XG), Co-Author and Editor of "Serving Productive Time" with Tom Lagana (credited as Carla Bragg Wilson), and author of the forthcoming manuscript "Your Move: Heal Your Thoughts. Change Your Life." slated for a New York Times Square billboard feature.`;

export function BookingConcierge() {
  const [category, setCategory] = useState<InquiryCategory>(
    "Luxury Cruise Ship Enrichment"
  );
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [voyageOrOutlet, setVoyageOrOutlet] = useState("");
  const [dates, setDates] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = async () => {
    try {
      await navigator.clipboard.writeText(PRESS_BIO_TEXT);
      setCopiedBio(true);
      setTimeout(() => setCopiedBio(false), 2500);
    } catch {
      // Fallback ignored if clipboard unavailable
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${category}] Inquiry from ${name || "Booking Desk"}${
        organization ? ` (${organization})` : ""
      }`
    );
    const bodyLines = [
      `Hello Carla,`,
      ``,
      `We would like to connect regarding: ${category}`,
      `Name: ${name}`,
      `Organization / Cruise Line / Network: ${organization || "Not specified"}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not specified"}`,
      voyageOrOutlet ? `Vessel / Program / Broadcast Desk: ${voyageOrOutlet}` : "",
      dates ? `Target Dates / Voyage Window: ${dates}` : "",
      ``,
      `Details & Goals:`,
      notes || "Please share availability and speaker packet.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:carlawilsonmsw@gmail.com?subject=${subject}&body=${encodeURIComponent(
      bodyLines
    )}`;
    setSubmitted(true);
  };

  const categories: { label: InquiryCategory; short: string; icon: React.ReactNode }[] = [
    {
      label: "Luxury Cruise Ship Enrichment",
      short: "Luxury Cruise Line",
      icon: <Boat size={16} />,
    },
    {
      label: "Broadcast & Network Media (CNN / TV / Press)",
      short: "CNN / Broadcast Media",
      icon: <Broadcast size={16} />,
    },
    {
      label: "Guided Meditation & Group Facilitation",
      short: "Guided Meditation",
      icon: <Sparkle size={16} />,
    },
    {
      label: "Keynote Lecture & Workshop",
      short: "Keynote / Workshop",
      icon: <MicrophoneStage size={16} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: CNN / Broadcast Media Desk & Direct Concierge */}
      <div className="lg:col-span-5 space-y-6">
        <div className="crystal-card rounded-3xl p-8 space-y-6">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#C9A44C]">
              <Broadcast size={16} />
              <span>Broadcast & Network Media Desk</span>
            </span>
            <span className="rounded-full bg-[#C9A44C]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#DFBE6F]">
              Live Studio Ready
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5F2EB] leading-tight">
            Television, National News & Documentary Commentary
          </h3>
          <p className="text-sm text-[#A6A39B] leading-relaxed">
            Available for CNN, national broadcast desks, podcasts, and symposium panels on emotional intelligence, justice reform, burnout recovery, and elite mental performance.
          </p>

          <div className="space-y-4 border-t border-[#F5F2EB]/10 pt-5">
            {BROADCAST_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#F5F2EB]/[0.07] bg-[#08080A]/65 p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C9A44C]">
                  {topic.outletType}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#F5F2EB]">
                  {topic.headline}
                </p>
                <p className="mt-1 text-xs text-[#A6A39B] leading-relaxed">
                  {topic.angle}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            data-agent="copy-press-factsheet"
            onClick={handleCopyBio}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A44C]/45 bg-[#17171D] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F2EB] transition-all hover:border-[#C9A44C] hover:bg-[#C9A44C]/15 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
          >
            {copiedBio ? (
              <>
                <Check size={16} className="text-[#C9A44C]" />
                <span>Producer Fact Sheet Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-[#C9A44C]" />
                <span>Copy Broadcast & Cruise Bio Sheet</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Contact Strip */}
        <div className="crystal-card rounded-3xl p-6 space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A44C]">
            Direct Booking & Media Line
          </p>
          <div className="flex flex-col gap-2.5 pt-1">
            <a
              href="mailto:carlawilsonmsw@gmail.com"
              data-agent="direct-email-link"
              className="inline-flex items-center gap-3 text-sm text-[#F5F2EB] hover:text-[#C9A44C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded"
            >
              <EnvelopeSimple size={18} className="text-[#C9A44C]" />
              <span>carlawilsonmsw@gmail.com</span>
            </a>
            <a
              href="tel:+17346604355"
              data-agent="direct-phone-link"
              className="inline-flex items-center gap-3 text-sm font-mono text-[#F5F2EB] hover:text-[#C9A44C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded"
            >
              <PhoneCall size={18} className="text-[#C9A44C]" />
              <span>1 (734) 660-4355</span>
            </a>
          </div>
          <p className="pt-1 text-xs text-[#A6A39B]">
            Prioritizing Guided Meditation immersions, Luxury Cruise Ship Enrichment voyages, Keynote Lectures, Group Facilitation, and Broadcast Media.
          </p>
        </div>
      </div>

      {/* Right Column: Luxury Cruise, Stage & Press Booking Form */}
      <div className="lg:col-span-7 crystal-card-gold rounded-3xl p-8 sm:p-10">
        <h3 className="font-display text-3xl font-semibold text-[#F5F2EB]">
          Reserve Cruise Voyages, Guided Meditation & Speaking Dates
        </h3>
        <p className="mt-2 text-sm text-[#A6A39B] leading-relaxed">
          Select an engagement track below. Submitting opens a pre-addressed booking dispatch straight to{" "}
          <span className="text-[#F5F2EB]">carlawilsonmsw@gmail.com</span> so your inquiry lands immediately in Carla&apos;s inbox.
        </p>

        {/* Engagement Type Selector */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {categories.map((item) => {
            const active = category === item.label;
            return (
              <button
                key={item.label}
                type="button"
                data-agent={`booking-type-${item.short.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                onClick={() => setCategory(item.label)}
                className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-left text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] ${
                  active
                    ? "bg-[#C9A44C] text-[#08080A]"
                    : "border border-[#F5F2EB]/12 bg-[#08080A]/75 text-[#F5F2EB] hover:border-[#C9A44C]/45"
                }`}
              >
                <span className={active ? "text-[#08080A]" : "text-[#C9A44C]"}>
                  {item.icon}
                </span>
                <span>{item.short}</span>
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-name"
                className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
              >
                Your Full Name *
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Elena Vance"
                className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
              />
            </div>
            <div>
              <label
                htmlFor="booking-org"
                className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
              >
                {category === "Luxury Cruise Ship Enrichment"
                  ? "Cruise Line / Enrichment Agency *"
                  : category.includes("Broadcast")
                  ? "Network / Show / Publication *"
                  : "Organization / Event Host *"}
              </label>
              <input
                id="booking-org"
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={
                  category === "Luxury Cruise Ship Enrichment"
                    ? "e.g., Regent Seven Seas / Silversea / Viking"
                    : category.includes("Broadcast")
                    ? "e.g., CNN Newsroom / National Desk"
                    : "e.g., Leadership Summit / University"
                }
                className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-email"
                className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
              >
                Work Email *
              </label>
              <input
                id="booking-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
              />
            </div>
            <div>
              <label
                htmlFor="booking-phone"
                className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
              >
                Direct Phone
              </label>
              <input
                id="booking-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-vessel"
                className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
              >
                {category === "Luxury Cruise Ship Enrichment"
                  ? "Ship Name & Itinerary Region"
                  : category.includes("Broadcast")
                  ? "Segment Topic & Live/Taped Format"
                  : "Session Format & Audience Size"}
              </label>
              <input
                id="booking-vessel"
                type="text"
                value={voyageOrOutlet}
                onChange={(e) => setVoyageOrOutlet(e.target.value)}
                placeholder={
                  category === "Luxury Cruise Ship Enrichment"
                    ? "e.g., Mediterranean 10-Night, 4 Sea Days"
                    : category.includes("Broadcast")
                    ? "e.g., Live Remote / Studio Interview"
                    : "e.g., 150 Guests, Morning Meditation + Lecture"
                }
                className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
              />
            </div>
            <div>
              <label
                htmlFor="booking-dates"
                className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
              >
                Preferred Dates / Sailing Window
              </label>
              <input
                id="booking-dates"
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="e.g., Spring / Summer 2027"
                className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="booking-notes"
              className="block text-xs font-mono uppercase tracking-[0.14em] text-[#A6A39B] mb-2"
            >
              Engagement Goals, Sea-Day Count, or Media Deadline
            </label>
            <textarea
              id="booking-notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Share your itinerary, audience profile, guided meditation preferences, or broadcast producer deadline..."
              className="w-full rounded-xl border border-[#F5F2EB]/14 bg-[#08080A]/90 px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#A6A39B]/50 transition-colors hover:border-[#F5F2EB]/25 focus:border-[#C9A44C] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]/40"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              data-agent="submit-booking-inquiry"
              className="w-full rounded-full bg-[#C9A44C] px-8 py-4 text-sm font-semibold text-[#08080A] shadow-[0_12px_32px_-8px_rgba(201,164,76,0.5)] transition-all duration-200 hover:bg-[#DFBE6F] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101014] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
            >
              Compose Direct Inquiry to Carla Wilson, MSW
            </button>
          </div>

          {submitted && (
            <div
              role="status"
              className="mt-4 flex items-start gap-3 rounded-2xl border border-[#C9A44C]/40 bg-[#08080A]/80 p-4 text-xs text-[#F5F2EB]"
            >
              <CheckCircle size={20} weight="fill" className="shrink-0 text-[#C9A44C]" />
              <div>
                <p className="font-semibold">
                  Your email client has been opened with your formatted inquiry addressed to carlawilsonmsw@gmail.com.
                </p>
                <p className="mt-1 text-[#A6A39B]">
                  For urgent network television bookings or cruise embarkation schedules, you may also call{" "}
                  <a href="tel:+17346604355" className="text-[#C9A44C] underline">
                    1 (734) 660-4355
                  </a>{" "}
                  directly.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
