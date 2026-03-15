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
    label: "less follow-up",
    detail: "Less time spent chasing status.",
    tone: "accent",
  },
  {
    value: "3x",
    label: "faster routing",
    detail: "Requests reach the right owner sooner.",
  },
  {
    value: "1,200+",
    label: "teams using RelayOps",
    detail: "Used across SaaS, fintech, logistics, and e-commerce.",
  },
  {
    value: "99.9%",
    label: "completion reliability",
    detail: "A clearer process means fewer missed steps.",
    tone: "accent",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: "RelayOps cut the back-and-forth almost immediately. Everyone knows what to do next.",
    name: "Alina Brooks",
    role: "Head of Operations",
    company: "Northstar",
  },
  {
    quote: "We finally have one place to see progress, owners, and risk without slowing the team down.",
    name: "Marcus Reed",
    role: "RevOps Manager",
    company: "ParcelLoop",
  },
]
