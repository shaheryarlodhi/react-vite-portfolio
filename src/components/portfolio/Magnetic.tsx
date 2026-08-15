import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Magnetic({
  children,
  className,
  strength = 0.35,
  href,
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function handleMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const shared = {
    className: cn("inline-flex", className),
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: reset,
    "data-cursor": "hover",
    ...(ariaLabel ? { "aria-label": ariaLabel } : {}),
  } as const;

  if (href) {
    return (
      <motion.a ref={ref as never} href={href} {...shared}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as never} type="button" {...(onClick ? { onClick } : {})} {...shared}>
      {children}
    </motion.button>
  );
}
