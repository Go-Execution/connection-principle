import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { BookingConcierge } from "@/components/BookingConcierge";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Press Booking | Connection Principle (Carla Wilson, MSW)",
  description:
    "Book Carla Wilson, MSW for Luxury Cruise Ship Enrichment, CNN and network media interviews, Guided Meditation retreats, and conference keynotes.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Broadcast Media Desk • Luxury Cruises • Event Bookings"
          title="Press Inquiries, Cruises"
          highlight="& Keynote Bookings."
          description="Direct booking concierge for luxury cruise enrichment directors, CNN and national television producers, guided meditation sanctuaries, and executive leadership stages."
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <BookingConcierge />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
