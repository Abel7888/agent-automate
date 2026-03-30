import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { number: "87%", label: "of brokerages use AI daily, most only for basic tasks" },
  { number: "45 min", label: "average deal screening time, down from 8–12 hours" },
  { number: "2026", label: "McKinsey's declared year for end-to-end real estate workflow redesign" },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-cream py-16 lg:py-20">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-5xl lg:text-6xl font-extrabold text-gold mb-3">{stat.number}</div>
              <p className="text-foreground/80 text-sm lg:text-base max-w-xs mx-auto">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
