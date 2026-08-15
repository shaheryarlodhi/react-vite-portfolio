import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-primary via-glow to-primary/20"
    />
  );
}

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 900, damping: 45 });
  const ry = useSpring(y, { stiffness: 900, damping: 45 });
  const ox = useSpring(x, { stiffness: 130, damping: 18 });
  const oy = useSpring(y, { stiffness: 130, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setHovering(
        !!el?.closest?.('a, button, [data-cursor="hover"], input, textarea, [role="button"]'),
      );
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80] hidden md:block">
      <motion.div
        style={{ x: rx, y: ry }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-primary"
      />
      <motion.div
        style={{ x: ox, y: oy, scale: hovering ? 1.9 : 1 }}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/50 backdrop-invert-[0.03] transition-[background-color] duration-300"
      />
    </div>
  );
}
