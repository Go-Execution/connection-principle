import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { StorySampler } from "@/components/StorySampler";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Books & Chapter Samples | Carla Wilson, MSW (Carla Bragg Wilson)",
  description:
    "Read chapter samples and purchase What If I'm Right?: A Book That Celebrates Spiritual Intuition on Amazon, explore Serving Productive Time (Co-Author & Editor Carla Bragg Wilson), and follow Your Move ahead of its New York Times Square feature.",
};

export default function BooksPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Published Works • Chapter Samples • How to Purchase"
          title="Books, Chapter Samples"
          highlight="& Times Square Feature."
          description="Explore Carla Wilson's published works available on Amazon, sample four signature chapters right here, and follow her forthcoming manuscript entering production with its upcoming New York Times Square spotlight."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <StorySampler />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
