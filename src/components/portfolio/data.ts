export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;


export const SKILL_GROUPS = [
  { title: "Core", items: ["GoHighLevel", "Automation", "Integration", "Funnel Expert"] },
  { title: "Build", items: ["Funnel Building", "Website & Funnel Design", "Landing Pages"] },
  {
    title: "Automation",
    items: ["Workflows", "Pipelines", "Follow-up Sequences"],
  },
  { title: "Messaging", items: ["A2P 10DLC Setup", "SMS & Email"] },
  { title: "Agency", items: ["Sub-accounts", "Snapshots", "SaaS Mode", "Custom Forms & Surveys"] },
];

export const TIMELINE = [
  {
    period: "3+ years",
    role: "GoHighLevel Builds & Automation",
    org: "Funnels, websites, workflows and automations for real clients",
    points: [
      "Built funnels, websites and landing pages directly inside GoHighLevel.",
      "Set up workflows that nurture, follow up and move leads through the pipeline automatically.",
    ],
  },
  {
    period: "Ongoing",
    role: "Integrations & A2P 10DLC",
    org: "Payment gateways, CRMs, calendars, Zapier, Make and custom APIs",
    points: [
      "Connected GoHighLevel accounts to the external tools each client already relied on.",
      "Handled A2P 10DLC registration so texts land in inboxes instead of being blocked.",
    ],
  },
  {
    period: "Ongoing",
    role: "Agency Systems",
    org: "Sub-accounts, snapshots and SaaS mode",
    points: [
      "Set up sub-accounts and snapshots so agencies can scale across clients and locations.",
      "Built multi-step forms and surveys with conditional logic to filter leads before they book.",
    ],
  },
];
