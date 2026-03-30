import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Solo Agent",
    price: "$149",
    period: "/mo",
    highlighted: false,
    features: [
      "Intake + Follow-Up AI Agents",
      "24/7 lead response coverage",
      "CRM sync and auto-logging",
      "Email & SMS follow-up sequences",
    ],
  },
  {
    name: "Small Brokerage",
    price: "$399",
    period: "/mo",
    highlighted: true,
    features: [
      "All 5 AI Agents included",
      "Team dashboard with lead routing",
      "Automated deal screening",
      "Priority support & onboarding",
      "Custom workflow configuration",
    ],
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="bg-sage py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Simple, Honest Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl p-8 transition-all duration-700 ${
                plan.highlighted
                  ? "bg-card-brand border-2 border-gold shadow-gold"
                  : "bg-card-brand border border-gold/10"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              {plan.highlighted && (
                <span className="inline-block bg-highlight text-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-extrabold text-cream mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gold">{plan.price}</span>
                <span className="text-cream/60">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-cream/80 text-sm">
                    <Check className="text-gold shrink-0 mt-0.5" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="coral" size="lg" className="w-full">
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
