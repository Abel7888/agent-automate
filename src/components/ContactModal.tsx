import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4" onClick={onClose}>
      <div
        className="bg-card-brand border border-gold/20 rounded-2xl p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-cream/50 hover:text-cream" aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-extrabold text-gold mb-3">Thanks!</h3>
            <p className="text-cream/70">We'll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-extrabold text-gold mb-2">Get Started</h3>
            <p className="text-cream/60 text-sm mb-6">Fill in your details and we'll reach out.</p>
            <form
              action="https://formspree.io/f/mjkvvgng"
              method="POST"
              onSubmit={() => {
                setTimeout(() => setSubmitted(true), 100);
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                placeholder="Your name"
                className="bg-emerald-brand border border-gold/20 rounded-full px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                name="email"
                required
                maxLength={255}
                placeholder="you@email.com"
                className="bg-emerald-brand border border-gold/20 rounded-full px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
              />
              <textarea
                name="message"
                maxLength={1000}
                placeholder="Tell us about your business (optional)"
                rows={3}
                className="bg-emerald-brand border border-gold/20 rounded-xl px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold resize-none"
              />
              <Button type="submit" variant="coral" size="lg" className="w-full mt-2">
                Submit
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
