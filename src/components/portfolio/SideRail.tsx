import { Fragment } from "react";
import { Braces, Database, Server } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const WORDS = ["GOHIGHLEVEL EXPERT", "AUTOMATION", "FUNNEL BUILDING", "INTEGRATIONS"];
const ICONS = [Braces, Server, Database];

/** Fixed vertical strip on the right edge — badges + text travel with the page scroll. */
export function SideRail() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  // Scroll down → content moves up; scroll up → it travels back down.
  const y = useTransform(smooth, [0, 1], ["0%", "-50%"]);

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-0 z-[60] hidden w-24 overflow-hidden border-l border-white/20 bg-[#080c11] xl:block"
    >
      <div
        aria-hidden
        className="absolute -left-12 top-0 h-72 w-72 rounded-full bg-glow/30 blur-[110px]"
      />
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <motion.div style={{ y }} className="flex flex-col items-center gap-10 py-16">
          {[0, 1, 2, 3].map((k) => {
            const Icon = ICONS[k % ICONS.length];
            return (
              <Fragment key={k}>
                <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <Icon size={22} className="text-primary" />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-spin-slow"
                  />
                </span>
                <span className="font-display text-[1.15rem] font-semibold uppercase tracking-tight text-foreground/80 [writing-mode:vertical-rl]">
                  {WORDS[k]}
                </span>
              </Fragment>
            );
          })}
        </motion.div>
      </div>
    </aside>
  );
}
