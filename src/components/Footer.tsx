import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Meet Your Agents", href: "#agents" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#pricing" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-emerald-brand py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            <span className="text-2xl font-extrabold text-cream tracking-tight">
              AI Agents <span className="text-gold">Real Estate</span>
            </span>
            <p className="text-cream/60 text-sm mt-3">Close More. Work Less. Let AI Handle the Rest.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-cream/70 hover:text-gold text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-cream font-semibold text-sm mb-3">Stay in the loop</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card-brand border border-gold/20 rounded-full px-4 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <Button variant="coral" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-cream/40 text-sm">Built for agents who close deals, not spreadsheets.</p>
          <p className="text-cream/30 text-xs mt-2">© 2026 AI Agents Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
