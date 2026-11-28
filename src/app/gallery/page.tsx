import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photo Gallery | Carla Wilson, MSW (Connection Principle)",
  description:
    "Browse the complete official visual archive of Carla Wilson, MSW: portraits with the Crystal Queen chess piece, Washtenaw County Sheriff retirement shadowbox, Hardenian Gems Academy honors, guided meditation retreats, and Your Move collection.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Official Visual Archive • Press Portraits • Credentials • Retreats"
          title="The Carla Wilson"
          highlight="Editorial & Legacy Gallery."
          description="Every portrait, Washtenaw County Sheriff and Hardenian Gems Academy credential, guided meditation retreat scene, and Your Move visual feature curated in one place for event organizers, cruise lines, and broadcast producers."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <PhotoGallery />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
