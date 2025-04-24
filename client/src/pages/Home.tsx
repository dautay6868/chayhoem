import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BookingSection from "@/components/sections/BookingSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

export default function Home() {
  const { isScrolled } = useScroll(300);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setShowBackToTop(isScrolled);
  }, [isScrolled]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BookingSection />
        <TestimonialSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />

      {/* Back to top button */}
      <Button
        variant="default"
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full bg-[#d4af37] hover:bg-amber-500 z-50 shadow-lg transition-opacity duration-300 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
