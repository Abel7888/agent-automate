import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const agents = [
  {
    icon: "📥",
    iconColor: "text-gold",
    name: "The Intake Agent",
    title: "Your 24/7 Lead Catcher",
    bullets: [
      "Monitors Zillow, MLS, and your website in real time",
      "Responds to every new inquiry within 90 seconds — day or night",
      "Qualifies the lead with smart follow-up questions",
      "Routes hot leads directly to your phone with a full summary",
    ],
  },
  {
    icon: "🔁",
    iconColor: "text-coral",
    name: "The Follow-Up Agent",
    title: "Your Relentless Relationship Builder",
    bullets: [
      "Sends personalized follow-ups on your schedule",
      "Tracks every touchpoint and logs it to your CRM automatically",
      "Knows when to push and when to nurture based on lead behavior",
      "Never lets a lead go cold because you got busy",
    ],
  },
  {
    icon: "🔍",
    iconColor: "text-highlight",
    name: "The Deal Screener",
    title: "Your Off-Market Analyst",
    bullets: [
      "Runs full deal screening autonomously in under 45 minutes",
      "Pulls comps, flags red flags, and scores each deal",
      "Delivers a clean one-page summary with a go/no-go recommendation",
      "Replaces 8–12 hours of manual analyst work per deal",
    ],
  },
  {
    icon: "🏡",
    iconColor: "text-sage",
    name: "The Listing Agent",
    title: "Your Content and MLS Specialist",
    bullets: [
      "Writes compelling listing descriptions in your voice",
      "Formats and submits to MLS-ready templates automatically",
      "Suggests pricing language based on current market comps",
      "Updates listings instantly when details change",
    ],
  },
  {
    icon: "📅",
    iconColor: "text-teal",
    name: "The Scheduler Agent",
    title: "Your Personal Transaction Coordinator",
    bullets: [
      "Books showings, inspections, and closing calls automatically",
      "Sends reminders to all parties and tracks confirmations",
      "Handles reschedules without you touching your calendar",
      "Keeps every deal on timeline from offer to close",
    ],
  },
];

export default function AgentsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="agents" className="bg-emerald-brand py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            You Don't Need to Hire Staff. You Need the Right Agents.
          </h2>
          <p
            className={`text-cream/80 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Every plan comes with a dedicated team of AI agents. Each one owns a specific job in your business and never clocks out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <div
              key={i}
              className={`bg-card-brand rounded-xl p-6 lg:p-8 border border-gold/10 hover:bg-card-hover hover:shadow-gold hover:border-gold/30 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className="text-4xl mb-4">{agent.icon}</div>
              <h3 className="text-xl font-extrabold text-cream mb-1">{agent.name}</h3>
              <p className="text-gold text-sm font-semibold mb-4">{agent.title}</p>
              <ul className="space-y-2 mb-6">
                {agent.bullets.map((b, j) => (
                  <li key={j} className="text-cream/70 text-sm flex gap-2">
                    <span className="text-gold mt-0.5 shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant="coral" size="sm" className="w-full group-hover:shadow-lg">
                Deploy This Agent
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
