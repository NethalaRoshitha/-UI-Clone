import { motion } from "framer-motion";
import { Flame, Ghost, Rocket, Heart, Swords, Drama, Sparkles, Smile } from "lucide-react";

const cats = [
  { name: "Action", icon: Swords, hue: "from-red-500/30 to-orange-500/10" },
  { name: "Sci-Fi", icon: Rocket, hue: "from-indigo-500/30 to-cyan-500/10" },
  { name: "Horror", icon: Ghost, hue: "from-emerald-500/30 to-slate-500/10" },
  { name: "Romance", icon: Heart, hue: "from-pink-500/30 to-rose-500/10" },
  { name: "Drama", icon: Drama, hue: "from-violet-500/30 to-fuchsia-500/10" },
  { name: "Trending", icon: Flame, hue: "from-amber-500/30 to-red-500/10" },
  { name: "Fantasy", icon: Sparkles, hue: "from-yellow-500/30 to-orange-500/10" },
  { name: "Comedy", icon: Smile, hue: "from-lime-500/30 to-emerald-500/10" },
];

export function Categories() {
  return (
    <section id="new-popular" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Explore</p>
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">Popular Categories</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {cats.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.button
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-primary/40`}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.hue} opacity-60 transition-opacity group-hover:opacity-100`} />
              <Icon className="mb-6 size-7 text-foreground transition-transform group-hover:scale-110" />
              <h3 className="font-display text-xl tracking-wider text-foreground">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{120 + i * 27}+ titles</p>
              <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
