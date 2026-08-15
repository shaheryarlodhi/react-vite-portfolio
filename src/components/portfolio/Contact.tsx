import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { Magnetic } from "./Magnetic";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Happy to chat on WhatsApp",
    message:"hello!how i can help you?",
    href: "https://wa.me/923356483200",
  },
];
export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent", {
        description: "Thanks for reaching out — I'll reply within a day.",
      });
    }, 900);
  }

  const field =
    "w-full rounded-2xl border border-border bg-surface-2/40 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary/60 focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's Talk"
          description="Tell me what you're building in GoHighLevel and I'll take it from there."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl glass p-7 sm:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input id="subject" name="subject" placeholder="Project enquiry" className={field} />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="A few lines about what you're building..."
                  className={`${field} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03] disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send message"}
                <Send size={15} />
              </button>
            </form>
          </Reveal>

          <div className="flex flex-col gap-4">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={0.06 * i}>
                <Magnetic
                  href={c.href}
                  strength={0.15}
                  className="w-full items-center gap-4 rounded-3xl glass p-6 text-left transition-colors duration-500 hover:border-primary/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <c.icon size={19} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="text-sm font-medium">{c.value}</span>
                  </span>
                </Magnetic>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="font-display text-sm tracking-[0.2em] uppercase">
          Fakharullah<span className="text-primary">.</span>
        </p>
        <p className="order-3 text-xs text-muted-foreground sm:order-none">
          Fakharullah | GHL Systems © All Rights Reserved
        </p>
        <ul className="flex items-center gap-2">
          {[MessageCircle].map((Icon, i) => (
            <li key={i}>
              <a
                href="#contact"
                aria-label={["WhatsApp"][i]}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
