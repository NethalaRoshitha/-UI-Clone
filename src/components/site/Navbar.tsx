import { useEffect, useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";

const links = ["Home", "Movies", "Series", "New & Popular", "My List"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-md bg-gradient-brand shadow-[var(--shadow-glow)]">
            <span className="font-display text-xl text-primary-foreground">L</span>
          </span>
          <span className="font-display text-2xl tracking-[0.18em] text-foreground">
            LUMIÈRE
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s|&/g, "-")}`}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-brand transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <button aria-label="Search" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Search className="size-5" />
          </button>
          <button aria-label="Notifications" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <Bell className="size-5" />
          </button>
          <button className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
            Sign In
          </button>
        </div>

        <button
          aria-label="Menu"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-3 rounded-xl p-5 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/\s|&/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base text-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <button className="mt-2 w-full rounded-full bg-gradient-brand py-2.5 text-sm font-semibold text-primary-foreground">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
