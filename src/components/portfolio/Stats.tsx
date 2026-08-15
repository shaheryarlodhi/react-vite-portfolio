import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const CHIPS = [
  { label: "Workflows", className: "left-[6%] top-[46%]" },
  { label: "Funnels", className: "left-[22%] top-[26%]" },
  { label: "Integrations", className: "right-[6%] top-[40%]" },
  { label: "A2P 10DLC", className: "right-[16%] top-[66%]" },
  { label: "Snapshots", className: "left-[30%] top-[74%]" },
];

/** Orbiting stat statement — rings expand and rotate with scroll. */
export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const rotate = useTransform(smooth, [0, 1], [-45, 45]);
  const ringScale = useTransform(smooth, [0, 0.5, 1], [0.82, 1.06, 0.86]);
  const chipsY = useTransform(smooth, [0, 1], ["12%", "-12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]"
      />

      <div className="relative mx-auto flex max-w-4xl items-center justify-center">
        <motion.div
          aria-hidden
          {...(reduce ? {} : { style: { rotate, scale: ringScale } })}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          {[0, 1, 2, 3].map((r) => (
            <motion.span
              key={r}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + r * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: `${16 + r * 9}rem`, height: `${16 + r * 9}rem` }}
              className="absolute rounded-full border border-dashed border-primary/20"
            />
          ))}
        </motion.div>

        <h2 className="relative z-10 max-w-3xl py-20 text-center font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          {["3+ years of", "experience in", "GoHighLevel"].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h2>

        <motion.div
          {...(reduce ? {} : { style: { y: chipsY } })}
          className="pointer-events-none absolute inset-0 z-20"
        >
          {CHIPS.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute rounded-full glass px-4 py-2 text-xs font-semibold shadow-elegant sm:text-sm ${chip.className} ${
                reduce ? "" : "animate-float-slow"
              }`}
              {...(reduce ? {} : { style: { animationDelay: `${i * 0.7}s` } })}
            >
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
