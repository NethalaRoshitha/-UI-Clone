import { Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react";

const cols = [
  { title: "Company", links: ["About", "Careers", "Press", "Investors"] },
  { title: "Support", links: ["Help Center", "Contact", "Devices", "Accessibility"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Notices"] },
  { title: "Watch", links: ["Plans", "Gift Cards", "Redeem", "Originals"] },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-md bg-gradient-brand shadow-[var(--shadow-glow)]">
                <span className="font-display text-xl text-primary-foreground">L</span>
              </span>
              <span className="font-display text-2xl tracking-[0.18em] text-foreground">LUMIÈRE</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Where stories come alive. Stream extraordinary cinema, anywhere on earth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube, Github].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-[var(--shadow-glow)]">
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Lumière Streaming. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with cinematic obsession.</p>
        </div>
      </div>
    </footer>
  );
}
