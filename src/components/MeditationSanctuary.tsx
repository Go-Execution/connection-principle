"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play, Pause, SpeakerHigh, SpeakerSlash, Sparkle } from "@phosphor-icons/react";

type BreathPhase = "idle" | "inhale" | "hold" | "exhale";

const PHASE_COPY: Record<BreathPhase, { label: string; guidance: string; seconds: number }> = {
  idle: {
    label: "Ready When You Are",
    guidance:
      "Press start to experience a 60-second preview of Carla Wilson's signature Crystal Stillness breath cadence used in group rooms, retreats, and ocean voyages.",
    seconds: 60,
  },
  inhale: {
    label: "Inhale Slowly (4s)",
    guidance: "Draw calm breath in through the nose. Lift the crown of your head like the Queen on the board.",
    seconds: 4,
  },
  hold: {
    label: "Center & Hold (4s)",
    guidance: "Pause in quiet awareness. Notice that no outside pressure owns your next move.",
    seconds: 4,
  },
  exhale: {
    label: "Release Softly (6s)",
    guidance: "Unclench the jaw and drop the shoulders. Let urgency leave with the breath.",
    seconds: 6,
  },
};

export function MeditationSanctuary() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [chimeEnabled, setChimeEnabled] = useState(true);
  const [phase, setPhase] = useState<BreathPhase>("idle");
  const [remainingTotal, setRemainingTotal] = useState(60);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playCrystalBowlTone = useCallback(
    (freq: number) => {
      if (!chimeEnabled || typeof window === "undefined") return;
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.055, ctx.currentTime + 0.18);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 2.7);
      } catch {
        // Ignore audio errors if blocked by browser policy
      }
    },
    [chimeEnabled]
  );

  useEffect(() => {
    if (!active) {
      setPhase("idle");
      setRemainingTotal(60);
      return;
    }

    let elapsed = 0;
    setPhase("inhale");
    playCrystalBowlTone(432);

    const interval = setInterval(() => {
      elapsed += 1;
      const left = Math.max(0, 60 - elapsed);
      setRemainingTotal(left);

      if (left === 0) {
        playCrystalBowlTone(528);
        setActive(false);
        return;
      }

      const cyclePos = elapsed % 14; // 4 inhale + 4 hold + 6 exhale = 14s
      if (cyclePos === 0) {
        setPhase("inhale");
        playCrystalBowlTone(432);
      } else if (cyclePos === 4) {
        setPhase("hold");
      } else if (cyclePos === 8) {
        setPhase("exhale");
        playCrystalBowlTone(396);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [active, playCrystalBowlTone]);

  const targetScale =
    prefersReducedMotion || phase === "idle"
      ? 1
      : phase === "inhale" || phase === "hold"
      ? 1.18
      : 0.94;

  const currentInfo = PHASE_COPY[phase];

  return (
    <div className="crystal-card-gold rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F2EB]/10 pb-6">
        <div className="flex items-center gap-2.5">
          <Sparkle size={18} weight="fill" className="text-[#C9A44C]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C9A44C]">
            Interactive Stillness Preview
          </span>
        </div>
        <button
          type="button"
          data-agent="meditation-chime-toggle"
          onClick={() => setChimeEnabled((v) => !v)}
          aria-pressed={chimeEnabled}
          className="inline-flex items-center gap-2 rounded-full border border-[#F5F2EB]/12 bg-[#08080A]/70 px-3.5 py-1.5 text-xs font-medium text-[#A6A39B] transition-all hover:border-[#C9A44C]/40 hover:text-[#F5F2EB] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C]"
        >
          {chimeEnabled ? (
            <>
              <SpeakerHigh size={15} className="text-[#C9A44C]" />
              <span>Crystal Bowl Chime On</span>
            </>
          ) : (
            <>
              <SpeakerSlash size={15} />
              <span>Silent Visual Mode</span>
            </>
          )}
        </button>
      </div>

      {/* Breathing crystal focal ring */}
      <div className="my-10 flex flex-col items-center text-center">
        <div className="relative flex h-52 w-52 items-center justify-center">
          <motion.div
            animate={{
              scale: targetScale,
              opacity: active ? 0.55 : 0.22,
            }}
            transition={{
              duration: phase === "exhale" ? 5.6 : 3.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full border border-[#C9A44C]/50 bg-radial from-[#C9A44C]/20 via-[#C9A44C]/5 to-transparent"
          />
          <motion.div
            animate={{
              scale: active && !prefersReducedMotion ? (phase === "exhale" ? 0.96 : 1.08) : 1,
            }}
            transition={{
              duration: phase === "exhale" ? 5.6 : 3.8,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-[#C9A44C]/60 bg-[#08080A]/90 px-4 shadow-[0_0_40px_rgba(201,164,76,0.18)]"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C9A44C]">
              {active ? `${remainingTotal}s left` : "4 - 4 - 6"}
            </span>
            <span className="mt-1 font-display text-xl font-semibold text-[#F5F2EB]">
              {phase === "idle"
                ? "Find Center"
                : phase === "inhale"
                ? "Breathe In"
                : phase === "hold"
                ? "Be Still"
                : "Let Go"}
            </span>
          </motion.div>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-[#C9A44C]">
          {currentInfo.label}
        </p>
        <p className="mt-2 max-w-[46ch] text-base text-[#F5F2EB]/90 leading-relaxed min-h-[3.5rem]">
          {currentInfo.guidance}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F5F2EB]/10 pt-6">
        <p className="text-xs text-[#A6A39B]">
          Designed for group sanctuaries, conference openings, and morning cruise deck sessions.
        </p>
        <button
          type="button"
          data-agent="meditation-start-stop"
          onClick={() => setActive((prev) => !prev)}
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-semibold text-[#08080A] transition-all duration-200 hover:bg-[#DFBE6F] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101014]"
        >
          {active ? (
            <>
              <Pause size={16} weight="fill" />
              <span>Pause Session</span>
            </>
          ) : (
            <>
              <Play size={16} weight="fill" />
              <span>Begin 60s Stillness</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
