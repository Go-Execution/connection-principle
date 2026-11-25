"use client";

import React, { useState } from "react";
import { List, X, PhoneCall, ArrowUpRight } from "@phosphor-icons/react";
import { CrystalQueenMark } from "./CrystalQueenMark";

const NAV_LINKS = [
  { label: "Guided Meditation", href: "#meditation" },
  { label: "Cruise & Speaking", href: "#cruise" },
  { label: "Harden Legacy", href: "#legacy" },
  { label: "About", href: "#about" },
  { label: "Books & Chapters", href: "#books" },
  { label: "Press & Booking", href: "#booking" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#F5F2EB]/[0.08] bg-[#08080A]/85 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#top"
          data-agent="nav-brand-home"
          className="group flex items-center gap-3 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
        >
          <CrystalQueenMark className="h-10 w-10 transition-transform duration-300 group-hover:scale-[1.04]" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold tracking-tight text-[#F5F2EB] leading-none">
              Connection Principle
            </span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A44C]">
              Carla Wilson, MSW
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-agent={`nav-link-${item.href.slice(1)}`}
              className="text-sm font-medium text-[#A6A39B] transition-colors duration-200 hover:text-[#F5F2EB] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A] rounded px-1 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+17346604355"
            data-agent="nav-phone-call"
            className="inline-flex items-center gap-2 rounded-full border border-[#F5F2EB]/12 bg-[#101014] px-4 py-2 text-xs font-mono text-[#F5F2EB] transition-all duration-200 hover:border-[#C9A44C]/50 hover:bg-[#17171D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
          >
            <PhoneCall size={15} weight="regular" className="text-[#C9A44C]" />
            <span>1 (734) 660-4355</span>
          </a>
          <a
            href="#booking"
            data-agent="nav-book-cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-5 py-2.5 text-sm font-semibold text-[#08080A] shadow-[0_8px_24px_-6px_rgba(201,164,76,0.45)] transition-all duration-200 hover:bg-[#DFBE6F] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080A]"
          >
            <span>Press & Voyage Inquiry</span>
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          data-agent="nav-mobile-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex xl:hidden items-center justify-center rounded-lg border border-[#F5F2EB]/12 bg-[#101014] p-2.5 text-[#F5F2EB] transition-all hover:border-[#C9A44C]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
        >
          {mobileOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-[#F5F2EB]/10 bg-[#101014]/98 px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#F5F2EB] transition-colors hover:bg-[#17171D] hover:text-[#C9A44C] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-[#F5F2EB]/10 pt-4">
              <a
                href="tel:+17346604355"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F2EB]/15 bg-[#17171D] px-4 py-3 text-sm font-mono text-[#F5F2EB] active:scale-[0.98]"
              >
                <PhoneCall size={16} className="text-[#C9A44C]" />
                <span>1 (734) 660-4355</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A44C] px-5 py-3 text-sm font-semibold text-[#08080A] active:scale-[0.98]"
              >
                <span>Press & Voyage Inquiry</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
