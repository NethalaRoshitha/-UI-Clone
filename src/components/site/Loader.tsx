import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid size-20 place-items-center rounded-2xl bg-gradient-brand shadow-[var(--shadow-glow-lg)]"
            >
              <span className="font-display text-4xl text-primary-foreground">L</span>
            </motion.div>
            <div className="font-display text-2xl tracking-[0.4em] text-foreground">
              LUMIÈRE
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                className="h-full w-1/2 rounded-full bg-gradient-brand"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
