import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { DualDivision } from "@/components/sections/DualDivision";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutVision } from "@/components/sections/AboutVision";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <DualDivision />
      <FeaturedServices />
      <ProductShowcase />
      <WhyChooseUs />
      <AboutVision />
      <ContactCTA />
      <Footer />
    </main>
  );
}
