"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BookOpenText, Clock, Quotes } from "@phosphor-icons/react";
import { SAMPLE_STORIES } from "@/data/siteContent";

export function StorySampler() {
  const [activeStoryId, setActiveStoryId] = useState(SAMPLE_STORIES[0].id);
  const prefersReducedMotion = useReducedMotion();

  const currentStory =
    SAMPLE_STORIES.find((s) => s.id === activeStoryId) || SAMPLE_STORIES[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Selector Column (4 Sample Stories) */}
      <div className="lg:col-span-5 space-y-3" role="tablist" aria-label="Sample stories">
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
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C9A44C]">
                  {story.number}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#A6A39B]">
                  <Clock size={13} />
                  <span>{story.readTime}</span>
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-[#F5F2EB]">
                {story.title}
              </h3>
              <p className="mt-1 text-xs text-[#A6A39B]">{story.setting}</p>
            </button>
          );
        })}

        {/* Forthcoming Cover Confirmation Card */}
        <div className="crystal-card rounded-2xl p-5 border-dashed border-[#C9A44C]/30">
          <div className="flex items-start gap-4">
            <img
              src="/images/crop-book-your-move.webp"
              alt="Your Move prototype book cover featuring gold Queen chess piece"
              className="h-24 w-16 shrink-0 rounded-lg object-cover border border-[#C9A44C]/30"
            />
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C9A44C]">
                Forthcoming Release • Cover Reveal Imminent
              </span>
              <p className="mt-1 font-display text-lg font-semibold text-[#F5F2EB]">
                Your Move: Heal Your Thoughts. Change Your Life.
              </p>
              <p className="mt-1 text-xs text-[#A6A39B] leading-relaxed">
                Joining Carla Wilson&apos;s published recovery classic,{" "}
                <em className="text-[#F5F2EB]">What If I&apos;m Right?</em> Final edition cover confirming this week.
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
              {currentStory.number} • Reader Excerpt
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
            <p key={idx} className={idx === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-[#C9A44C]" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#C9A44C]/30 bg-[#08080A]/75 p-6">
          <div className="flex items-center gap-2 text-[#C9A44C]">
            <Quotes size={18} weight="fill" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
              Your Move Reflection Prompt
            </span>
          </div>
          <p className="mt-2 font-display text-xl italic leading-[1.25] pb-1 text-[#F5F2EB]">
            {currentStory.reflectionPrompt}
          </p>
        </div>
      </motion.article>
    </div>
  );
}
