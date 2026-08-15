import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-50 xl:pr-16"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a
          href="#home"
          data-cursor="hover"
          className="font-display text-xl font-semibold tracking-tight text-gradient"
        >
          fakharullah<span className="text-primary">.</span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-7">
          <a
            href="#services"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Services
          </a>

          <a
            href="#contact"
            data-cursor="hover"
            className="group inline-flex h-11 items-center gap-2.5 overflow-hidden rounded-full border border-primary/35 bg-primary/10 px-5 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="inline-block h-5 overflow-hidden align-middle">
              <span className="flex animate-ticker flex-col">
                {[0, 1, 2, 3].map((k) => (
                  <span key={k} className="block h-5 leading-5">
                    Available for work
                  </span>
                ))}
              </span>
            </span>
          </a>

          <button
            type="button"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            EN <ChevronDown size={14} />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
