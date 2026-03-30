import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const posts = [
  {
    category: "Lead Generation",
    title: "Why Missing a Sunday Night Zillow Inquiry Is Costing You More Than You Think",
    excerpt: "The data is clear: agents who respond in under 2 minutes win 5x more clients.",
    author: "Sarah Mitchell",
    date: "Mar 28, 2026",
    featured: true,
  },
  {
    category: "Industry Trends",
    title: "McKinsey Says 2026 Is the Year Real Estate Workflows Get Rebuilt — Are You Ready?",
    excerpt: "End-to-end automation is no longer optional for competitive brokerages.",
    author: "James Chen",
    date: "Mar 22, 2026",
  },
  {
    category: "Deal Analysis",
    title: "From 10 Hours to 45 Minutes: How AI Deal Screening Actually Works",
    excerpt: "A deep dive into the deal screener workflow that's changing investor strategy.",
    author: "Maria Torres",
    date: "Mar 15, 2026",
  },
];

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="bg-sage py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          From the Blog
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured */}
          <div
            className={`lg:col-span-3 bg-card-brand rounded-xl p-8 border border-gold/10 hover:border-gold/30 hover:shadow-gold transition-all duration-500 cursor-pointer group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="inline-block bg-coral text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {posts[0].category}
            </span>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-cream mb-3 group-hover:text-gold transition-colors">
              {posts[0].title}
            </h3>
            <p className="text-cream/70 mb-6">{posts[0].excerpt}</p>
            <p className="text-gold/70 text-sm">
              {posts[0].author} · {posts[0].date}
            </p>
          </div>

          {/* Smaller posts */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {posts.slice(1).map((post, i) => (
              <div
                key={i}
                className={`bg-card-brand rounded-xl p-6 border border-gold/10 hover:border-gold/30 hover:shadow-gold transition-all duration-500 cursor-pointer group flex-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150 + 300}ms` }}
              >
                <span className="inline-block bg-coral text-cream text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-extrabold text-cream mb-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-cream/60 text-sm mb-3">{post.excerpt}</p>
                <p className="text-gold/70 text-xs">
                  {post.author} · {post.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
