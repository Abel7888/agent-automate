import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactModal from "@/components/ContactModal";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-mesh pt-16 overflow-hidden">
      {/* Subtle organic shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-gold mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            87% of Agents Use AI. Almost None Have Automated the Workflows That Actually Win Deals.
          </h1>
          <p
            className={`text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Most real estate AI stops at listing descriptions. We give you a full team of AI agents — each one built for a different part of your business, running 24 hours a day.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://calendly.com/abelassefa788/partnerships-investor-and-advisors-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="coral" size="xl">
                Schedule a Call
              </Button>
            </a>
            <a href="/blog">
              <Button variant="outline" size="xl">
                Read the Blog
              </Button>
            </a>
          </div>
          <p
            className={`text-sm text-cream/60 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Trusted by agents closing deals across North America
          </p>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
