import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAV_SECTIONS } from "./data";

/** Centered floating pill navigation with active-section highlighting. */
export function PillNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Section navigation"
      className="sticky top-5 z-40 mx-auto w-fit max-w-[92vw] px-4"
    >
      <ul className="flex items-center overflow-x-auto rounded-full glass px-2 py-2 shadow-elegant [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {NAV_SECTIONS.map((s, i) => (
          <li key={s.id} className="flex items-center">
            {i > 0 && <span aria-hidden className="h-4 w-px bg-border" />}
            <a
              href={`#${s.id}`}
              data-cursor="hover"
              aria-current={active === s.id ? "true" : undefined}
              className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors sm:px-6 ${
                active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="pill-nav-active"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-primary/12"
                />
              )}
              <span className="relative whitespace-nowrap">{s.label}</span>
            </a>
          </li>
        ))}
        <li className="flex items-center">
          <span aria-hidden className="h-4 w-px bg-border" />
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground sm:px-6"
          >
            Resume <ArrowUpRight size={13} />
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
