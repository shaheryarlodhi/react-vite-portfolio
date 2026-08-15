import { Reveal, SectionHeading } from "./Reveal";

const POINTS = [
  "I've spent the last 3+ years living inside GoHighLevel — not just watching tutorials, actually building funnels, websites, workflows, and automations for real clients who needed real results.",
  "Automation is honestly my favorite part of the job. Someone fills a form, and from there my workflow takes over — nurturing them, following up, and moving them through the pipeline without anyone lifting a finger.",
  "I build landing pages, full websites, and sales funnels straight inside GHL. No plugins, no shortcuts — just clean builds meant to turn a random visitor into a booked call.",
  "If your GHL account needs to talk to something else — payment gateways, external CRMs, calendars, Zapier, Make, or a random API — I've probably already connected it for someone.",
  "A2P 10DLC used to trip up half the clients I worked with. Now it's one of the things I handle first, so their texts land in inboxes instead of getting silently blocked.",
  "I build forms and surveys that actually filter people — multi-step, conditional logic, the whole thing — so by the time a lead books with you, they're already worth talking to.",
  "Sub-accounts, snapshots, SaaS mode — if you're an agency trying to scale across multiple clients or locations, this is the stuff I set up so it doesn't fall apart at 20 accounts.",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="3+ years of experience in GoHighLevel"
        title="GHL Expert"
        description="A snapshot of how I work and what I build inside GoHighLevel."
      />

      <ol className="grid gap-x-14 gap-y-0 md:grid-cols-2">
        {POINTS.map((p, i) => (
          <Reveal key={p} delay={(i % 2) * 0.08} as="li">
            <div className="group flex gap-6 border-t border-border py-7 transition-colors duration-500 hover:border-primary/40">
              <span className="font-mono text-sm text-primary transition-transform duration-500 group-hover:-translate-y-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                {p}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
