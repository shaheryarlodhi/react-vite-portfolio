import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import workspace from "@/assets/workspace.jpg";

/** Full-bleed media card with an overlapping horizontal name marquee. */
export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden pb-28 md:pb-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] overflow-hidden rounded-[2rem] glass shadow-elegant"
        >
          <motion.img
            src={workspace}
            alt="Fakharullah working at a dual-monitor workstation building GoHighLevel funnels"
            width={1600}
            height={900}
            style={{ scale }}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_2%,transparent_55%)]"
          />
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        style={{ x }}
        className="pointer-events-none relative -mt-10 flex w-max items-center gap-8 md:-mt-16"
      >
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className="flex items-center gap-8">
            <span className="font-display text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
              Fakharullah
            </span>
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 font-mono text-xs text-primary md:h-20 md:w-20">
              GHL
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
