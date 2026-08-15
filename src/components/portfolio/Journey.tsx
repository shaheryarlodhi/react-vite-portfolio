import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { TIMELINE } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 120,
    damping: 28,
  });

  return (
    <section id="journey" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="The work so far."
        description="How I spend my time inside GoHighLevel."
      />

      <div ref={ref} className="relative pl-8 md:pl-14">
        <div className="absolute left-[7px] top-2 h-full w-px bg-border md:left-[15px]" aria-hidden />
        <motion.div
          style={{ height }}
          className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-primary to-glow md:left-[15px]"
          aria-hidden
        />

        <div className="flex flex-col gap-12">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.06}>
              <div className="relative">
                <span
                  className="absolute -left-8 top-2 inline-flex h-4 w-4 items-center justify-center rounded-full border border-primary/60 bg-background md:-left-14"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    {item.period}
                  </span>
                  <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold">
                    {i === TIMELINE.length - 1 && (
                      <GraduationCap size={18} className="text-primary" />
                    )}
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
