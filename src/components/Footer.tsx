import React from "react";
import Link from "next/link";
import { CrystalQueenMark } from "./CrystalQueenMark";

export function Footer() {
  return (
    <footer className="border-t border-[#F5F2EB]/10 bg-[#08080A] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-[#F5F2EB]/[0.08]">
          <Link href="/" className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded-lg">
            <CrystalQueenMark className="h-11 w-11 shrink-0 transition-transform duration-300 group-hover:scale-[1.04]" />
            <div>
              <p className="font-display text-2xl font-semibold text-[#F5F2EB]">
                Connection Principle
              </p>
              <p className="text-xs text-[#A6A39B]">
                Carla Wilson, MSW (Carla Bragg Wilson) • Guided Meditation Facilitator, Speaker & Author
              </p>
            </div>
          </Link>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-[#A6A39B] hover:text-[#F5F2EB] transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-[#A6A39B] hover:text-[#F5F2EB] transition-colors whitespace-nowrap">
              About
            </Link>
            <Link href="/services" className="text-[#A6A39B] hover:text-[#F5F2EB] transition-colors whitespace-nowrap">
              Services & Tour
            </Link>
            <Link href="/books" className="text-[#A6A39B] hover:text-[#F5F2EB] transition-colors whitespace-nowrap">
              Books & Chapters
            </Link>
            <Link href="/contact" className="text-[#A6A39B] hover:text-[#F5F2EB] transition-colors whitespace-nowrap">
              Contact & Press
            </Link>
          </nav>
        </div>

        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F2EB]/[0.06] text-sm">
          <div className="flex flex-wrap items-center gap-6">
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
              className="font-mono text-[#DFBE6F] hover:text-[#F5F2EB] transition-colors whitespace-nowrap"
            >
              1 (734) 660-4355
            </a>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C9A44C]">
            2026 / 2027 Cruises & Stages Open
          </span>
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
  );
}
