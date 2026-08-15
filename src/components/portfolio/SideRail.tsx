import { Braces, Database, Server } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const WORDS = ["GOHIGHLEVEL EXPERT", "AUTOMATION", "FUNNEL BUILDING", "INTEGRATIONS"];

/** Fixed vertical strip on the right edge — text travels with the page scroll. */
export function SideRail() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  // Scroll down → text moves up; scroll up → it travels back down.
  const y = useTransform(smooth, [0, 1], ["0%", "-50%"]);

  const line = WORDS.join("  ·  ") + "  ·  ";

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-0 z-[60] hidden w-16 overflow-hidden bg-foreground xl:block"
    >
      <div className="absolute inset-0 flex justify-center overflow-hidden">
        <motion.div style={{ y }} className="flex flex-col items-center whitespace-nowrap">
          {[0, 1, 2, 3].map((k) => (
            <span
              key={k}
              className="font-display text-[1.6rem] font-semibold uppercase tracking-tight text-background [writing-mode:vertical-rl]"
            >
              {line}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 flex w-16 flex-col items-center justify-around py-24 mix-blend-normal">
        {[Braces, Server, Database].map((Icon, i) => (
          <span
            key={i}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/15 bg-foreground text-background"
          >
            <Icon size={17} />
          </span>
        ))}
      </div>
    </aside>
  );
}
