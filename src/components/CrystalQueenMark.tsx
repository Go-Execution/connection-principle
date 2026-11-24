import React from "react";

export function CrystalQueenMark({
  className = "w-9 h-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldCrownGrad" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F3DFA2" />
          <stop offset="48%" stopColor="#C9A44C" />
          <stop offset="100%" stopColor="#8B6B23" />
        </linearGradient>
        <linearGradient id="crystalFacetGrad" x1="20" y1="10" x2="44" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#E6CE8A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C9A44C" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Top diamond finial (crystal) */}
      <polygon
        points="32,4 37,10 32,16 27,10"
        fill="url(#crystalFacetGrad)"
        stroke="url(#goldCrownGrad)"
        strokeWidth="1.5"
      />
      <line x1="32" y1="4" x2="32" y2="16" stroke="#F3DFA2" strokeWidth="0.9" strokeOpacity="0.7" />

      {/* Queen coronet points */}
      <path
        d="M14 23L21 31L26 19L32 29L38 19L43 31L50 23L46 38H18L14 23Z"
        fill="url(#crystalFacetGrad)"
        stroke="url(#goldCrownGrad)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Coronet pearl orbs */}
      <circle cx="13.5" cy="21.5" r="2" fill="#F3DFA2" />
      <circle cx="26" cy="17.5" r="2" fill="#F3DFA2" />
      <circle cx="38" cy="17.5" r="2" fill="#F3DFA2" />
      <circle cx="50.5" cy="21.5" r="2" fill="#F3DFA2" />

      {/* Crystal facet lines inside crown */}
      <path
        d="M26 19L24 38M38 19L40 38M32 29V38"
        stroke="#F5F2EB"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {/* Collar & sculpted pedestal */}
      <rect
        x="17"
        y="40"
        width="30"
        height="4"
        rx="2"
        fill="url(#goldCrownGrad)"
      />
      <path
        d="M21 44L18 53H46L43 44H21Z"
        fill="url(#crystalFacetGrad)"
        stroke="url(#goldCrownGrad)"
        strokeWidth="1.4"
      />
      <path
        d="M26 44L24 53M38 44L40 53M32 44V53"
        stroke="#F3DFA2"
        strokeOpacity="0.35"
        strokeWidth="0.9"
      />
      <rect
        x="14"
        y="55"
        width="36"
        height="4.5"
        rx="2"
        fill="url(#goldCrownGrad)"
      />
    </svg>
  );
}

export function CrystalDiamondRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A44C]/40 to-[#C9A44C]/60" />
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C9A44C]" fill="none">
        <polygon
          points="12,2 20,12 12,22 4,12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(201,164,76,0.18)"
        />
        <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.6" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C9A44C]/40 to-[#C9A44C]/60" />
    </div>
  );
}
