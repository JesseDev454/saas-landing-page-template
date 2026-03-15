export type SocialLogo = {
  name: string
  monogram: string
  industry: string
}

export type OutcomeStat = {
  value: string
  label: string
  detail: string
  tone?: "default" | "accent"
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const socialLogos: SocialLogo[] = [
  { name: "Northstar", monogram: "NS", industry: "Fintech platform" },
  { name: "ParcelLoop", monogram: "PL", industry: "Logistics software" },
  { name: "MetricForge", monogram: "MF", industry: "Analytics SaaS" },
  { name: "LedgerPilot", monogram: "LP", industry: "Finance operations" },
  { name: "SignalCart", monogram: "SC", industry: "E-commerce ops" },
  { name: "AtlasIQ", monogram: "AI", industry: "B2B SaaS growth" },
]

export const outcomeStats: OutcomeStat[] = [
  {
    value: "42%",
    label: "less workflow follow-up",
    detail: "Teams spend less time chasing approvals and handoff status.",
    tone: "accent",
  },
  {
    value: "3x",
    label: "faster request routing",
    detail: "Priority work reaches the right owner without manual triage.",
  },
  {
    value: "1,200+",
    label: "teams using RelayOps",
    detail: "Operations, RevOps, and customer success teams run recurring work in one place.",
  },
  {
    value: "99.9%",
    label: "workflow completion reliability",
    detail: "Standardized processes keep recurring work moving even across multiple handoffs.",
    tone: "accent",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "RelayOps cut the back-and-forth around renewals because ownership and SLA risk are visible in one view instead of spread across tools.",
    name: "Alina Brooks",
    role: "Head of Operations",
    company: "Northstar",
  },
  {
    quote:
      "We stopped losing time to launch handoffs. Everyone knows who owns the next step and what needs attention before a deadline slips.",
    name: "Marcus Reed",
    role: "RevOps Manager",
    company: "ParcelLoop",
  },
  {
    quote:
      "Customer success requests used to bounce between Slack threads and spreadsheets. Now routing and follow-up happen automatically.",
    name: "Priya Shah",
    role: "Customer Success Lead",
    company: "MetricForge",
  },
]
