"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  BookOpenText,
  Clock,
  Quotes,
  ArrowUpRight,
  ShoppingBagOpen,
  Sparkle,
} from "@phosphor-icons/react";
import { SAMPLE_STORIES, PUBLISHED_BOOKS } from "@/data/siteContent";

export function StorySampler() {
  const [activeStoryId, setActiveStoryId] = useState(SAMPLE_STORIES[0].id);
  const prefersReducedMotion = useReducedMotion();

  const currentStory =
    SAMPLE_STORIES.find((s) => s.id === activeStoryId) || SAMPLE_STORIES[0];

  return (
    <div className="space-y-16">
      {/* 1. Published & Forthcoming Books Grid (How to Purchase + Read Chapter Sample trigger) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {PUBLISHED_BOOKS.map((book) => {
          const isSampleActive = activeStoryId === book.sampleStoryId;
          return (
            <div
              key={book.id}
              className="crystal-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#C9A44C]/45"
            >
              <div>
                <div className="flex items-start gap-5">
                  <img
                    src={book.coverImage}
                    alt={book.coverAlt}
                    className="h-40 w-28 shrink-0 rounded-xl object-cover border border-[#C9A44C]/35 shadow-lg bg-[#08080A]"
                  />
                  <div className="space-y-2">
                    <span className="inline-block rounded-full border border-[#C9A44C]/35 bg-[#C9A44C]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#DFBE6F]">
                      {book.statusTag}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#F5F2EB] leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-xs font-medium text-[#C9A44C]">
                      {book.subtitle}
                    </p>
                    <p className="font-mono text-[11px] text-[#A6A39B]">
                      {book.creditLine}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-[#A6A39B] leading-relaxed">
                  {book.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-[#F5F2EB]/[0.08] pt-4 text-xs text-[#F5F2EB]/85">
                  {book.highlights.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A44C]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F2EB]/[0.08] flex flex-col sm:flex-row gap-2.5">
                <a
                  href={book.purchaseUrl}
                  target={book.isExternalPurchase ? "_blank" : undefined}
                  rel={book.isExternalPurchase ? "noopener noreferrer" : undefined}
                  data-agent={`book-purchase-${book.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A44C] px-4 py-2.5 text-xs font-semibold text-[#08080A] transition-all hover:bg-[#DFBE6F] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
                >
                  <ShoppingBagOpen size={15} weight="bold" />
                  <span>{book.purchaseCta}</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>

                <button
                  type="button"
                  data-agent={`book-read-sample-${book.id}`}
                  onClick={() => {
                    setActiveStoryId(book.sampleStoryId);
                    const el = document.getElementById("chapter-reader");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] ${
                    isSampleActive
                      ? "border border-[#C9A44C] bg-[#C9A44C]/15 text-[#DFBE6F]"
                      : "border border-[#F5F2EB]/14 bg-[#08080A]/80 text-[#F5F2EB] hover:border-[#C9A44C]/45"
                  }`}
                >
                  <BookOpenText size={15} />
                  <span>Read Sample</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Upcoming NYC Times Square Billboard Feature Showcase Banner */}
      <div className="crystal-card-gold rounded-3xl p-7 sm:p-9">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A44C]/45 bg-[#08080A]/80 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#DFBE6F]">
              <Sparkle size={14} weight="fill" className="text-[#C9A44C]" />
              <span>Upcoming New York City Milestone</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#F5F2EB]">
              New York Times Square Billboard Feature Coming Soon
            </h3>
            <p className="text-sm sm:text-base text-[#A6A39B] leading-relaxed max-w-[65ch]">
              As part of Carla Wilson&apos;s national book production and marketing campaign, her work will be featured in New York&apos;s Times Square. The official Times Square broadcast footage and photography will be showcased right here upon release.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="https://a.co/d/0btsX1XG"
              target="_blank"
              rel="noopener noreferrer"
              data-agent="times-square-amazon-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A44C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#08080A] transition-all hover:bg-[#DFBE6F] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
            >
              <span>Order What If I&apos;m Right? on Amazon</span>
              <ArrowUpRight size={15} weight="bold" />
            </a>
            <a
              href="/contact"
              data-agent="times-square-press-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F2EB]/16 bg-[#08080A]/80 px-6 py-3 text-xs font-semibold text-[#F5F2EB] transition-all hover:border-[#C9A44C]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
            >
              <span>Request Press & Launch Updates</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Interactive 4-Chapter Reader Sampler */}
      <div
        id="chapter-reader"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2"
      >
        {/* Left Selector Column (4 Chapter Samples) */}
        <div
          className="lg:col-span-5 space-y-3"
          role="tablist"
          aria-label="Chapter samples"
        >
          {SAMPLE_STORIES.map((story) => {
            const selected = story.id === activeStoryId;
            return (
              <button
                key={story.id}
                type="button"
                role="tab"
                aria-selected={selected}
                data-agent={`story-tab-${story.id}`}
                onClick={() => setActiveStoryId(story.id)}
                className={`w-full rounded-2xl p-5 text-left transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] ${
                  selected
                    ? "crystal-card-gold"
                    : "crystal-card hover:border-[#C9A44C]/35"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A44C]">
                    {story.number}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#A6A39B]">
                    <Clock size={13} />
                    <span>{story.readTime}</span>
                  </span>
                </div>
                <h4 className="mt-2 font-display text-xl font-semibold text-[#F5F2EB]">
                  {story.title}
                </h4>
                <p className="mt-1 text-xs text-[#DFBE6F]">{story.bookTitle}</p>
              </button>
            );
          })}

          {/* Crystal Queen Philosophy Visual Card */}
          <div className="crystal-card overflow-hidden rounded-2xl p-3">
            <div className="grid grid-cols-12 gap-4 items-center">
              <img
                src="/images/crystal-queen-game-changed.webp"
                alt="Crystal Queen chess piece: She Remembered Who She Was and the Game Changed"
                className="col-span-5 aspect-square w-full rounded-xl object-cover border border-[#C9A44C]/30"
              />
              <div className="col-span-7 pr-2 space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                  The Queen Principle
                </span>
                <p className="font-display text-lg font-semibold text-[#F5F2EB] leading-snug">
                  &ldquo;She remembered who she was and the game changed.&rdquo;
                </p>
                <p className="text-xs text-[#A6A39B]">
                  New manuscript in production with Carla&apos;s book publishing team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Reading Folio */}
        <motion.article
          key={currentStory.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="lg:col-span-7 crystal-card-gold rounded-3xl p-8 sm:p-10 lg:p-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F2EB]/10 pb-6">
            <div className="inline-flex items-center gap-2 text-[#C9A44C]">
              <BookOpenText size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                {currentStory.number}
              </span>
            </div>
            <span className="font-mono text-xs text-[#A6A39B]">
              {currentStory.setting}
            </span>
          </div>

          <h3 className="mt-6 font-display text-3xl sm:text-4xl font-semibold text-[#F5F2EB] leading-[1.12]">
            {currentStory.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-[#C9A44C]">
            {currentStory.subtitle}
          </p>

          <div className="mt-8 space-y-5 text-base sm:text-lg text-[#F5F2EB]/90 leading-relaxed">
            {currentStory.excerpt.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-[#C9A44C]"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#C9A44C]/30 bg-[#08080A]/75 p-6">
            <div className="flex items-center gap-2 text-[#C9A44C]">
              <Quotes size={18} weight="fill" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                Chapter Reflection Prompt
              </span>
            </div>
            <p className="mt-2 font-display text-xl italic leading-[1.25] pb-1 text-[#F5F2EB]">
              {currentStory.reflectionPrompt}
            </p>
          </div>

          {currentStory.purchaseUrl && (
            <div className="mt-7 pt-6 border-t border-[#F5F2EB]/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#A6A39B]">
                Want to read the complete book or order copies for your group?
              </span>
              <a
                href={currentStory.purchaseUrl}
                target={
                  currentStory.purchaseUrl.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  currentStory.purchaseUrl.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                data-agent={`reader-purchase-${currentStory.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A44C] px-5 py-2.5 text-xs font-semibold text-[#08080A] transition-all hover:bg-[#DFBE6F] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
              >
                <span>{currentStory.purchaseLabel || "How to Purchase"}</span>
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </div>
          )}
        </motion.article>
      </div>
    </div>
  );
}
