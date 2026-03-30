import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "missing-zillow-inquiry-costing-you",
    category: "Lead Generation",
    title: "Why Missing a Sunday Night Zillow Inquiry Is Costing You More Than You Think",
    author: "Abel Assefa",
    date: "Mar 28, 2026",
    excerpt: "The data is clear: agents who respond in under 2 minutes win 5x more clients.",
    content: `
Every Sunday night, thousands of potential homebuyers browse Zillow from their couches. They find a listing they love, tap "Contact Agent," and wait. Most of the time, they wait too long.

## The 2-Minute Window

Research from the National Association of Realtors shows that **leads contacted within 2 minutes are 5x more likely to convert** than those contacted after 30 minutes. Yet the average agent response time on weekends? Over 17 hours.

That's not a gap — it's a canyon. And your competitors are building bridges across it with automation.

## What Actually Happens When You Miss a Lead

Let's trace a real scenario. A buyer — let's call her Dana — sees a 3-bedroom listing in her target neighborhood at 9:14 PM on a Sunday. She submits an inquiry through Zillow. Here's what happens next:

1. **Within 5 minutes**, Dana has already moved on to the next listing. She submits another inquiry to a different agent.
2. **Within 15 minutes**, a competing agent using automated lead response has already replied, asked qualifying questions, and scheduled a Monday morning showing.
3. **Monday morning at 9 AM**, you finally see the notification. You call Dana. She's polite but already has two showings booked.

You didn't lose that deal because of your skills, your market knowledge, or your negotiation ability. You lost it because you were asleep.

## The Math Behind the Loss

Let's put real numbers to this. If you receive just 3 after-hours Zillow inquiries per week, and your conversion rate drops from 15% to 3% when you respond after 2 hours:

- **With instant response**: 3 leads × 15% = 0.45 clients/week → ~23 clients/year
- **With delayed response**: 3 leads × 3% = 0.09 clients/week → ~5 clients/year

At an average commission of $8,500, that's the difference between **$195,500** and **$42,500** in annual commission. From just one lead source.

## The Solution Isn't Working Harder

You shouldn't have to sleep with your phone on your pillow. The agents winning this game aren't working 24/7 — they've automated their first response.

AI-powered intake agents can:
- Respond to every inquiry within 90 seconds
- Ask qualifying questions to gauge buyer readiness
- Route hot leads directly to your phone with a summary
- Schedule showings without you lifting a finger

This isn't about replacing the human touch. It's about making sure the human touch happens at the right moment — when the lead is warm and ready, not when you finally check your notifications.

## The Bottom Line

Every missed after-hours inquiry is money left on the table. In 2026, the technology to solve this is available, affordable, and proven. The only question is whether you'll adopt it before your competition does.

The agents who thrive in the next decade won't be the ones who work the hardest. They'll be the ones who respond the fastest.
    `,
  },
  {
    slug: "ai-deal-screening-10-hours-to-45-minutes",
    category: "Deal Analysis",
    title: "From 10 Hours to 45 Minutes: How AI Deal Screening Actually Works",
    author: "Abel Assefa",
    date: "Mar 15, 2026",
    excerpt: "A deep dive into the deal screener workflow that's changing investor strategy.",
    content: `
If you've ever spent a full Saturday pulling comps, running numbers, and building a spreadsheet to evaluate a single off-market deal — only to pass on it — you know the pain of manual deal screening.

The average real estate investor or agent spends **8 to 12 hours** screening a single deal. Most of that time is spent on data collection, not analysis. And in a market where speed determines who gets the deal, that timeline is a competitive disadvantage.

## What Traditional Deal Screening Looks Like

Here's the typical workflow for evaluating an off-market property:

1. **Property research** (2-3 hours): Pull tax records, ownership history, zoning information, and lot details from multiple county and MLS databases.
2. **Comp analysis** (2-3 hours): Find 5-10 comparable sales, adjust for differences in square footage, condition, and location. Build a comp grid.
3. **Financial modeling** (2-3 hours): Estimate repair costs, calculate ARV, run cash-on-cash return scenarios, model different exit strategies.
4. **Red flag identification** (1-2 hours): Check for liens, code violations, flood zones, environmental issues, HOA restrictions.
5. **Summary and decision** (1 hour): Compile everything into a format you can actually review and make a go/no-go call.

Total: 8-12 hours. And that's for someone who knows what they're doing.

## How AI Compresses This to 45 Minutes

AI deal screening doesn't skip any of these steps — it runs them simultaneously and at machine speed. Here's what the workflow looks like with an AI Deal Screener agent:

### Minutes 1-10: Data Collection
The AI agent pulls from dozens of data sources in parallel:
- County tax assessor records
- MLS historical data
- Public records for liens and violations
- Flood zone and environmental databases
- Recent permit activity
- Neighborhood demographic trends

What takes a human 3 hours of tab-switching takes the AI under 10 minutes.

### Minutes 10-25: Comp Analysis
The agent identifies comparable properties using multiple matching algorithms — not just proximity and square footage, but also condition scoring, days on market patterns, and price trajectory analysis. It builds a weighted comp grid and flags outliers.

### Minutes 25-40: Financial Modeling
Using the comp data and property details, the agent runs multiple scenarios:
- **Fix and flip**: Estimated repair costs, ARV, projected profit margin
- **Buy and hold**: Rental income projections, cap rate, cash-on-cash return
- **Wholesale**: Assignment fee potential based on investor buyer demand in the area

Each scenario includes sensitivity analysis — what happens if repair costs are 20% higher? What if the market softens 5%?

### Minutes 40-45: Summary Generation
The agent compiles everything into a clean one-page summary:
- **Property overview** with key stats
- **Comp grid** with adjustments explained
- **Financial scenarios** ranked by risk-adjusted return
- **Red flags** highlighted with severity ratings
- **Go/No-Go recommendation** with confidence score

## What This Means for Your Business

The speed advantage is obvious, but the real value is in volume. When screening a deal takes 10 hours, you can evaluate maybe 2-3 deals per week. When it takes 45 minutes, you can screen 2-3 deals per day.

That means:
- **More deals reviewed** = more opportunities identified
- **Faster offers** = higher win rate on competitive deals
- **Better data** = more confident decisions
- **Less burnout** = sustainable deal flow

## The Human Still Decides

It's important to note: the AI doesn't make the investment decision. It gives you everything you need to make that decision in a fraction of the time. You still bring the market intuition, the relationship leverage, and the negotiation skills.

The AI just makes sure you're spending those skills on deals worth your time.

## Is It Accurate?

Early adopters report that AI deal screening matches or exceeds the accuracy of manual analysis in over 90% of cases. The AI doesn't get tired at hour 8, doesn't forget to check flood zones, and doesn't let confirmation bias inflate an ARV estimate.

The technology isn't perfect — no analysis is. But it's consistent, thorough, and fast. And in real estate, fast and thorough beats slow and thorough every time.
    `,
  },
];

function BlogList() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-sage pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gold text-center mb-4">Blog</h1>
          <p className="text-cream/70 text-center mb-14 max-w-xl mx-auto">
            Insights, strategies, and data-driven perspectives on AI-powered real estate workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card-brand rounded-xl p-8 border border-gold/10 hover:border-gold/30 hover:shadow-gold transition-all duration-500 group block"
              >
                <span className="inline-block bg-coral text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-extrabold text-cream mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h2>
                <p className="text-cream/60 text-sm mb-4">{post.excerpt}</p>
                <p className="text-gold/70 text-xs">
                  {post.author} · {post.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="bg-sage pt-28 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gold">Post not found</h1>
          <Link to="/blog" className="text-coral underline mt-4 inline-block">
            ← Back to Blog
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="bg-sage pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link to="/blog" className="text-gold/70 hover:text-gold text-sm mb-8 inline-block transition-colors">
            ← Back to Blog
          </Link>
          <span className="inline-block bg-coral text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gold/70 text-sm mb-10">
            {post.author} · {post.date}
          </p>
          <div className="prose prose-invert prose-gold max-w-none text-cream/85 prose-headings:text-gold prose-headings:font-extrabold prose-strong:text-cream prose-a:text-coral">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return (
                  <h2 key={i} className="text-2xl font-extrabold text-gold mt-10 mb-4">
                    {trimmed.slice(3)}
                  </h2>
                );
              if (trimmed.startsWith("### "))
                return (
                  <h3 key={i} className="text-xl font-bold text-gold mt-8 mb-3">
                    {trimmed.slice(4)}
                  </h3>
                );
              if (trimmed.startsWith("- **"))
                return (
                  <li key={i} className="ml-4 mb-2 text-cream/80" dangerouslySetInnerHTML={{
                    __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-cream">$1</strong>')
                  }} />
                );
              if (/^\d+\./.test(trimmed))
                return (
                  <li key={i} className="ml-4 mb-2 text-cream/80 list-decimal" dangerouslySetInnerHTML={{
                    __html: trimmed.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-cream">$1</strong>')
                  }} />
                );
              return (
                <p key={i} className="mb-4 text-cream/80 leading-relaxed" dangerouslySetInnerHTML={{
                  __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cream">$1</strong>')
                }} />
              );
            })}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export { BlogList, BlogPost, posts };
