import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Magnetic } from "./Magnetic";

const BADGE_TEXT = "GOHIGHLEVEL EXPERT · FUNNEL BUILDER · ";

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 34);
      my.set((e.clientY / window.innerHeight - 0.5) * 34);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pb-10 pt-32 md:pb-16 md:pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ x: px, y: py }}
          className="absolute -left-40 -top-32 h-[42rem] w-[42rem] rounded-full bg-primary/18 blur-[170px] animate-aurora"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,transparent_25%,var(--background)_78%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          style={{ x: px, y: py }}
          initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 mx-auto w-full max-w-md lg:order-2"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <img
              src={portrait}
              alt="Portrait of Fakharullah, Designer and GoHighLevel Expert"
              width={900}
              height={1100}
              className="h-full w-full object-cover grayscale"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full border-2 border-primary/60"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-full border border-glow/25"
            />
          </div>

          <div className="absolute -bottom-2 -left-2 h-32 w-32 md:-left-10 md:h-40 md:w-40">
            <span
              className="absolute inset-0 overflow-hidden rounded-full border border-white/20 bg-[radial-gradient(circle_at_30%_25%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_70%)] backdrop-blur-md"
              aria-hidden
            />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/40 blur-2xl"
            />
            <svg
              viewBox="0 0 100 100"
              className={`absolute inset-0 h-full w-full ${reduce ? "" : "animate-spin-slow"}`}
              aria-hidden
            >
              <defs>
                <path id="badge-arc" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-current text-[7px] uppercase tracking-[0.22em] text-primary">
                <textPath href="#badge-arc">{BADGE_TEXT}</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-primary">
              F
            </span>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient text-sm font-medium uppercase tracking-[0.18em]"
          >
            Designer &amp; GoHighLevel Expert
          </motion.p>

          <h1 className="mt-6 max-w-[22ch] text-pretty text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            {["Automation &", "Funnel", "Expert"].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.18 + i * 0.13, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 2 ? <span className="text-gradient">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Agency-level GoHighLevel services at freelancer rates. My mission is to build funnels,
            websites, and automations that you and your audience love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Magnetic
              href="#work"
              className="group items-center gap-4 rounded-full border border-white/10 bg-[linear-gradient(98deg,rgba(2,176,155,0.38),rgba(90,137,253,0.18))] py-2.5 pl-7 pr-2.5 text-sm font-semibold text-[#c6ffec] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(45,181,134,0.25)]"
            >
              Happy to chat on Whatsapp
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Magnetic>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              <Mail size={15} /> or send me a message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
