import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, Check } from "lucide-react";

const without = [
  "Miss a Zillow inquiry Sunday at 9pm — lead goes cold",
  "Spend 10 hours manually screening one deal",
  "Follow up 3 days late because the CRM wasn't updated",
  "Lose the client to an agent who responded in 4 minutes",
];

const withTeam = [
  "Inquiry answered in 90 seconds, showing booked automatically",
  "Deal screened and summarized in under 45 minutes",
  "CRM updated in real time, follow-up sent on schedule",
  "You show up only when it's time to close",
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-sage py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          The Gap Isn't AI. It's Workflow.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without */}
          <div
            className={`rounded-xl p-8 bg-emerald-brand/60 border border-coral/20 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-extrabold text-coral mb-6">Without Us</h3>
            <ul className="space-y-4">
              {without.map((item, i) => (
                <li key={i} className="flex gap-3 text-cream/80 text-sm">
                  <X className="text-coral shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* With */}
          <div
            className={`rounded-xl p-8 bg-emerald-brand/60 border border-gold/30 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-extrabold text-gold mb-6">With Your AI Team</h3>
            <ul className="space-y-4">
              {withTeam.map((item, i) => (
                <li key={i} className="flex gap-3 text-cream/80 text-sm">
                  <Check className="text-gold shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
