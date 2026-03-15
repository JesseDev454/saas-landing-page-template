import type { LucideIcon } from "lucide-react"
import {
  BellRing,
  BarChart3,
  Blocks,
  Bot,
  CircleAlert,
  Clock3,
  CheckCheck,
  Github,
  Layers2,
  LayoutTemplate,
  Linkedin,
  Mail,
  MessageSquareText,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  TimerReset,
  TrendingUp,
  WalletCards,
  Workflow,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
}

export type FooterLinkGroup = {
  title: string
  links: NavItem[]
}

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export type FoundationPillar = {
  title: string
  description: string
  icon: LucideIcon
}

export type HighlightStat = {
  label: string
  value: string
}

export type HeroProofItem = {
  label: string
  value: string
  tone?: "default" | "accent"
}

export type PreviewMetric = {
  label: string
  value: string
  change: string
  tone?: "default" | "accent" | "warning"
}

export type PreviewChartPoint = {
  label: string
  value: number
}

export type PreviewWorkflowItem = {
  name: string
  owner: string
  due: string
  progress: number
  status: string
  tone: "success" | "warning" | "muted"
}

export type PreviewActivityItem = {
  title: string
  detail: string
  icon: LucideIcon
}

export type PlaceholderSectionContent = {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
}

export const brand = {
  name: "RelayOps",
  monogram: "RO",
  tagline: "Run recurring work without the follow-up.",
  summary:
    "RelayOps centralizes recurring work, automates handoffs, and keeps every deadline visible for modern operations teams.",
  category: "Workflow operations platform",
}

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: navItems,
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Email", href: "#", icon: Mail },
]

export const foundationHighlights: HighlightStat[] = [
  { label: "Container", value: "1200px max width" },
  { label: "Buttons", value: "4 CTA variants" },
  { label: "Tokens", value: "Type, color, spacing" },
  { label: "Shells", value: "Navbar + footer" },
]

export const foundationPillars: FoundationPillar[] = [
  {
    title: "Design tokens",
    description:
      "Shared color, radius, shadow, spacing, and typography values are centralized before section work begins.",
    icon: Layers2,
  },
  {
    title: "Layout primitives",
    description:
      "Container, Section, and SectionHeader enforce a consistent visual rhythm across future landing page sections.",
    icon: Workflow,
  },
  {
    title: "UI primitives",
    description:
      "Button, Card, Badge, StatChip, and IconContainer create a reusable component baseline for upcoming sprints.",
    icon: Blocks,
  },
  {
    title: "Navigation shell",
    description:
      "Responsive navigation and a structured footer already frame the page, so later sections can focus on content and conversion.",
    icon: LayoutTemplate,
  },
]

export const heroProofItems: HeroProofItem[] = [
  { label: "Trusted by", value: "1,200+ operations teams", tone: "accent" },
  { label: "Follow-up reduced", value: "42% on recurring workflows" },
  { label: "Used across", value: "SaaS, fintech, and logistics" },
]

export const previewMetrics: PreviewMetric[] = [
  { label: "Active workflows", value: "128", change: "+12 this week", tone: "accent" },
  { label: "SLA health", value: "98.3%", change: "3 at-risk handoffs" },
  { label: "Approvals waiting", value: "06", change: "2 need escalation", tone: "warning" },
]

export const previewChartPoints: PreviewChartPoint[] = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 56 },
  { label: "Wed", value: 64 },
  { label: "Thu", value: 71 },
  { label: "Fri", value: 59 },
]

export const previewWorkflowItems: PreviewWorkflowItem[] = [
  {
    name: "Customer onboarding",
    owner: "Maya Chen",
    due: "Today, 4:00 PM",
    progress: 84,
    status: "On track",
    tone: "success",
  },
  {
    name: "Renewal approvals",
    owner: "Chris Patel",
    due: "Tomorrow, 10:30 AM",
    progress: 58,
    status: "Needs review",
    tone: "warning",
  },
  {
    name: "Launch readiness",
    owner: "Avery Lopez",
    due: "Friday, 2:00 PM",
    progress: 73,
    status: "Waiting on Legal",
    tone: "muted",
  },
]

export const previewActivityItems: PreviewActivityItem[] = [
  {
    title: "AI summary posted to Slack",
    detail: "Renewal approvals are blocked on Finance and need one reviewer.",
    icon: Bot,
  },
  {
    title: "Escalation timer triggered",
    detail: "An SLA alert fired for onboarding handoff #1842 after 18 hours idle.",
    icon: BellRing,
  },
  {
    title: "Handoff completed",
    detail: "Implementation signed off and moved the launch workflow into QA.",
    icon: CheckCheck,
  },
]

export const placeholderSections: PlaceholderSectionContent[] = [
  {
    id: "features",
    eyebrow: "Features",
    title: "Outcome-led feature grid",
    description:
      "This section will explain how RelayOps handles intake, automations, ownership, and reporting without turning into a dense product dump.",
    bullets: ["Operational use cases", "Outcome-focused feature cards", "Clear capability hierarchy"],
    icon: Blocks,
  },
  {
    id: "how-it-works",
    eyebrow: "How It Works",
    title: "Adoption flow and setup story",
    description:
      "A later sprint will show how teams capture work, automate handoffs, and track workflow health in a simple three-step story.",
    bullets: ["Capture requests", "Automate handoffs", "Track progress and SLAs"],
    icon: Workflow,
  },
  {
    id: "social-proof",
    eyebrow: "Social Proof",
    title: "Testimonials and customer credibility",
    description:
      "Testimonials, logo treatments, and quantified outcomes will be added here once the hero and messaging are established.",
    bullets: ["Customer quotes", "Outcome metrics", "Credibility markers"],
    icon: MessageSquareQuote,
  },
  {
    id: "pricing",
    eyebrow: "Pricing",
    title: "Plan comparison and CTA logic",
    description:
      "Pricing stays deferred for now, but the future section will compare plans clearly and support the free-trial decision path.",
    bullets: ["Plan cards", "Most popular emphasis", "Monthly and annual toggle"],
    icon: WalletCards,
  },
  {
    id: "faq",
    eyebrow: "FAQ",
    title: "Objection handling and reassurance",
    description:
      "An accordion-based FAQ will live here in a later sprint to handle setup, integrations, support, and commitment questions.",
    bullets: ["Accordion behavior", "Objection handling", "Conversion support"],
    icon: ShieldCheck,
  },
]

export const sprint3PlaceholderSections = placeholderSections.filter((section) =>
  ["features", "pricing", "faq"].includes(section.id),
)

export const sprint4PlaceholderSections = placeholderSections.filter((section) =>
  ["pricing", "faq"].includes(section.id),
)

export const sprint5PlaceholderSections = placeholderSections.filter((section) =>
  ["pricing", "faq"].includes(section.id),
)

export const sprint6PlaceholderSections = placeholderSections.filter((section) =>
  ["faq"].includes(section.id),
)

export const heroCallouts = [
  {
    label: "SLA alerts",
    value: "3 handoffs need attention",
    icon: CircleAlert,
  },
  {
    label: "Weekly trend",
    value: "18% faster approvals",
    icon: TrendingUp,
  },
  {
    label: "Automation",
    value: "6 recurring workflows active",
    icon: TimerReset,
  },
  {
    label: "Activity",
    value: "Slack and Jira synced live",
    icon: MessageSquareText,
  },
  {
    label: "Workflow board",
    value: "Live operational visibility",
    icon: LayoutTemplate,
  },
  {
    label: "Due soon",
    value: "2 launch tasks close today",
    icon: Clock3,
  },
  {
    label: "Live dashboard",
    value: "Bottlenecks surfaced instantly",
    icon: Sparkles,
  },
  {
    label: "Reporting",
    value: "Weekly workflow health digest",
    icon: BarChart3,
  },
]
