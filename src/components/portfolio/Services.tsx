import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Magnetic } from "./Magnetic";

const SERVICES = [
  {
    no: "01",
    title: "Funnel & Website Build",
    body: "Bring me your offer, your goals, whatever's in your head — I'll turn it into a funnel or website inside GoHighLevel that's actually built to convert, not just look nice.",
    deliverables: ["Funnel building", "Website & funnel design", "Landing pages"],
  },
  {
    no: "02",
    title: "Automation & Workflows",
    body: "This is where the real work happens. I set up the automations that follow up, nurture, and move leads through your pipeline automatically so nothing sits untouched in your CRM.",
    deliverables: ["Workflows", "Pipeline automation", "Custom forms & surveys"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        eyebrow="How can I help?"
        title="Services."
        description="Agency-level GoHighLevel services at freelancer rates."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.no} delay={i * 0.1}>
            <article className="group flex h-full flex-col rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow md:p-10">
              <span className="font-mono text-xs tracking-[0.3em] text-primary">{s.no}</span>
              <h3 className="mt-5 text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-7 space-y-2.5 border-t border-border pt-6">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                data-cursor="hover"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Happy to chat on Whatsapp
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.2} className="lg:col-span-2">
          <article className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/30 bg-primary/10 p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <span className="font-mono text-xs tracking-[0.3em] text-primary">03</span>
              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-tight md:text-3xl">
                Integrations & A2P Setup
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Need GHL talking to your payment gateway, calendar, or some third-party tool? Or
                your texts keep getting flagged? I handle the integrations and A2P 10DLC
                registration so everything just works.
              </p>
            </div>
            <Magnetic
              href="#contact"
              className="items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Let&apos;s Talk
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <MessageCircle size={16} />
              </span>
            </Magnetic>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
