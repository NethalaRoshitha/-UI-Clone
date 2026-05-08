import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,oklch(0.45_0.22_25/0.45),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:justify-center md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary pulse-ring" />
            Lumière Original Series
          </div>
          <h1 className="font-display text-5xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
            The Crimson <span className="text-gradient">Veil</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A war photographer uncovers a conspiracy stretching across continents.
            Stream the entire saga in 4K HDR — only on Lumière.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:shadow-[var(--shadow-glow-lg)] hover:-translate-y-0.5">
              <Play className="size-4 fill-current" />
              Watch Now
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card">
              <Info className="size-4" />
              More Info
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">4K</span>
              <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">HDR</span>
              <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">DOLBY ATMOS</span>
            </div>
            <span>★ 9.2 · 8 Episodes · Drama, Thriller</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
