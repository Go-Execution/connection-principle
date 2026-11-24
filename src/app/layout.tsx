import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connection Principle | Carla Wilson, MSW | Guided Meditation, Luxury Cruise Speaker & Emotional Intelligence",
  description:
    "Carla Wilson, MSW: Guided Meditation Facilitator, Luxury Cruise Enrichment Speaker, Emotional Intelligence Strategist, Author of Your Move, and Hardenian Gems Academy Graduate with Distinction leading GSHA Quality Services.",
  openGraph: {
    title: "Connection Principle | Carla Wilson, MSW",
    description:
      "Guided Meditation, Luxury Cruise Enrichment, Broadcast Commentary, and Emotional Intelligence Keynotes. Carrying forward the performance legacy at GSHA Quality Services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="bg-[#08080A] text-[#F5F2EB] font-sans antialiased selection:bg-[#C9A44C]/30 selection:text-[#F5F2EB] overflow-x-hidden">
        {/* Fixed subtle crystal refraction & film grain layer (GPU-safe fixed overlay) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#C9A44C]/[0.055] blur-[140px]" />
          <div className="absolute bottom-[-12%] left-[-8%] h-[460px] w-[460px] rounded-full bg-[#C9A44C]/[0.04] blur-[130px]" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
