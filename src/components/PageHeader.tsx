import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="border-b border-[#F5F2EB]/[0.08] bg-[#101014]/55 pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#A6A39B] transition-colors hover:text-[#C9A44C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#C9A44C]">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.06] text-[#F5F2EB]">
            {title}
            {highlight && (
              <span className="block italic font-medium text-[#DFBE6F] leading-[1.12] pb-1">
                {highlight}
              </span>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-[60ch]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
