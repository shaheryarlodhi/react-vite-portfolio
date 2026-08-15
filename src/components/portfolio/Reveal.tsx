import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const still: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

const base: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={reduce ? still : base}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-primary">
          <span>{index}</span>
          <span className="h-px w-10 bg-primary/50" />
          <span className="text-muted-foreground">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
