import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link2, Rocket, Trophy } from "lucide-react";

const steps = [
  { num: "01", icon: Link2, title: "Connect", desc: "Link your lead sources: Zillow, MLS, your CRM, your calendar" },
  { num: "02", icon: Rocket, title: "Deploy", desc: "Choose which AI agents to activate for your workflow" },
  { num: "03", icon: Trophy, title: "Close", desc: "Your agents handle everything. You focus on clients and commissions." },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="bg-cream py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-brand flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-gold" size={28} />
              </div>
              <span className="text-gold font-extrabold text-sm">{step.num}</span>
              <h3 className="text-2xl font-extrabold text-foreground mt-1 mb-3">{step.title}</h3>
              <p className="text-foreground/70 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
