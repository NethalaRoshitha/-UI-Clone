import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "What is Lumière?", a: "Lumière is a premium streaming service offering award-winning originals, blockbuster films, and curated documentaries in stunning 4K HDR with Dolby Atmos sound." },
  { q: "How much does it cost?", a: "Plans start at $7.99/month for Mobile and go up to $19.99/month for Premium with 4K, HDR, and four simultaneous streams. No contracts, cancel anytime." },
  { q: "Where can I watch?", a: "Watch instantly on smart TVs, laptops, tablets, smartphones, and most major game consoles. Your profile syncs across every device." },
  { q: "Can I download titles to watch offline?", a: "Yes — download thousands of titles to your phone or tablet from the Lumière app and watch anywhere, even without an internet connection." },
  { q: "Is there a free trial?", a: "New members get a 7-day free trial. Explore the full catalog risk-free and cancel before the trial ends if it isn't for you." },
  { q: "How do I cancel?", a: "Cancel online in two clicks from your account settings. No phone calls, no awkward retention offers — we promise." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Help Center</p>
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary"
              >
                <span className="text-base font-semibold text-foreground sm:text-lg">{f.q}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                  <Plus className="size-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-gradient-to-br from-card to-background p-10 text-center">
        <h3 className="font-display text-3xl text-foreground sm:text-4xl">Ready to start watching?</h3>
        <p className="max-w-md text-muted-foreground">Enter your email to create a Lumière account or restart your membership.</p>
        <form className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-foreground outline-none transition-colors focus:border-primary"
          />
          <button type="button" className="rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
}
