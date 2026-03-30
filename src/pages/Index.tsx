import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AgentsSection from "@/components/AgentsSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import BlogSection from "@/components/BlogSection";
import PullQuote from "@/components/PullQuote";
import WhoItsFor from "@/components/WhoItsFor";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AgentsSection />
      <ProblemSection />
      <HowItWorks />
      <BlogSection />
      <PullQuote />
      <WhoItsFor />
      <PricingSection />
      <Footer />
    </div>
  );
}
