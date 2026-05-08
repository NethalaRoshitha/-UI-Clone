import { motion } from "framer-motion";
import { Tv, Smartphone, Laptop, Tablet } from "lucide-react";
import devices from "@/assets/devices.jpg";

const items = [
  { icon: Tv, label: "Smart TV", desc: "Cinematic 4K streaming on your living room screen." },
  { icon: Laptop, label: "Laptop", desc: "Pick up where you left off in any browser." },
  { icon: Tablet, label: "Tablet", desc: "Download and watch offline anywhere." },
  { icon: Smartphone, label: "Mobile", desc: "Swipe through stories on the go." },
];

export function WatchAnywhere() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.45_0.22_25/0.25),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-transparent to-transparent blur-3xl" />
          <img
            src={devices}
            alt="Lumière on every device"
            loading="lazy"
            width={1280}
            height={896}
            className="animate-float w-full rounded-3xl border border-border"
          />
        </motion.div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Watch Anywhere</p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            One subscription. <span className="text-gradient">Every screen.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Lumière follows you across devices with seamless playback, smart resume,
            and personalized profiles for everyone in the family.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 glow-hover"
                >
                  <div className="mb-3 grid size-10 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{it.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
