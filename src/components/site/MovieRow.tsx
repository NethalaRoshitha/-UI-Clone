import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { motion, useInView } from "framer-motion";

export type Movie = {
  title: string;
  poster: string;
  year: number;
  rating: string;
  duration: string;
  genre: string;
};

export function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="relative py-10">
      <div ref={headerRef} className="mx-auto mb-5 flex max-w-7xl items-end justify-between px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl tracking-wide text-foreground sm:text-3xl"
        >
          {title}
        </motion.h2>
        <div className="hidden items-center gap-2 sm:flex">
          <button onClick={() => scroll("left")} aria-label="Scroll left" className="rounded-full border border-border bg-card/50 p-2 text-foreground transition-colors hover:bg-card">
            <ChevronLeft className="size-5" />
          </button>
          <button onClick={() => scroll("right")} aria-label="Scroll right" className="rounded-full border border-border bg-card/50 p-2 text-foreground transition-colors hover:bg-card">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar scroll-fade-mask flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:gap-5"
      >
        {movies.map((m, i) => (
          <MovieCard key={m.title + i} movie={m} index={i} />
        ))}
      </div>
    </section>
  );
}

function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
      className="group relative aspect-[2/3] w-44 shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card sm:w-52 md:w-56"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        loading="lazy"
        width={512}
        height={768}
        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 transition-all duration-500 group-hover:translate-y-0">
        <div className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span>{movie.year}</span>
          <span className="rounded border border-border px-1">{movie.rating}</span>
          <span>{movie.duration}</span>
        </div>
        <h3 className="font-display text-lg leading-tight text-foreground">{movie.title}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{movie.genre}</p>

        <div className="mt-3 flex items-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button aria-label="Play" className="grid size-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-[var(--shadow-glow)]">
            <Play className="size-4 fill-current" />
          </button>
          <button aria-label="Add to list" className="grid size-9 place-items-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur">
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-primary/0 transition-all duration-500 group-hover:ring-2 group-hover:ring-primary/40" />
    </motion.article>
  );
}
