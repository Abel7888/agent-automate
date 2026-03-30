import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PullQuote() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-emerald-brand py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <blockquote
          className={`text-2xl md:text-3xl lg:text-4xl italic font-light text-cream/90 leading-relaxed mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          "A Realtor missing a Zillow inquiry at 9pm Sunday is the exact same problem as a plumber missing a call at 2pm Tuesday. Same solution. Bigger commission. Higher willingness to pay."
        </blockquote>
        <p
          className={`text-gold text-sm font-semibold transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          — RealEstateAI Team
        </p>
      </div>
    </section>
  );
}
