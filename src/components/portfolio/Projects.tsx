import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Magnetic } from "./Magnetic";

const FOCUS = ["GHL Expert", "Automation", "Integration", "Funnel Expert"];

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        Recent Work
      </p>
      <SectionHeading
        index="02"
        eyebrow="Work"
        title="Recent Work"
        description="Selected builds are shared on request."
      />

      <Reveal>
        <article className="group flex flex-col items-start justify-between gap-8 rounded-3xl glass p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-glow md:flex-row md:items-center md:p-10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Funnels, websites and automations built inside GoHighLevel
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <Magnetic
            href="#contact"
            className="items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Happy to chat on Whatsapp
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
              <ArrowUpRight size={16} />
            </span>
          </Magnetic>
        </article>
      </Reveal>
    </section>
  );
}
