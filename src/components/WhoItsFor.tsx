import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Users, Zap } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Independent Agents",
    desc: "Tired of missing after-hours leads and losing clients to faster responders.",
  },
  {
    icon: Users,
    title: "Small Brokerages",
    desc: "Teams of 1–15 agents with no dedicated operations staff to handle workflows.",
  },
  {
    icon: Zap,
    title: "Tech-Forward Realtors",
    desc: "Ready to move well beyond ChatGPT for listing descriptions and into real automation.",
  },
];

export default function WhoItsFor() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Who It's For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`text-center bg-emerald-brand rounded-xl p-8 border border-gold/10 hover:border-gold/30 hover:shadow-gold transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-gold" size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-cream mb-2">{item.title}</h3>
              <p className="text-cream/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
