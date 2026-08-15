import { SKILL_GROUPS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const ALL = SKILL_GROUPS.flatMap((g) => g.items);

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Stack"
          title="What I work with."
          description="The GoHighLevel skills and systems I work with on a daily basis."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <article className="h-full rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-primary">
                  {g.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div aria-hidden className="relative mt-16 flex overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {[...ALL, ...ALL].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="font-display text-xl font-semibold uppercase tracking-tight text-muted-foreground/50"
            >
              {s}
              <span className="ml-10 text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
