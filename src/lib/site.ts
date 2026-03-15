import type { LucideIcon } from "lucide-react"
import {
  CircleAlert,
  Github,
  Linkedin,
  Mail,
  Sparkles,
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

export const brand = {
  name: "RelayOps",
  monogram: "RO",
  tagline: "Run recurring work without the follow-up.",
  summary: "Keep requests, owners, and progress in one clear place.",
  category: "Workflow platform",
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

export const heroProofItems: HeroProofItem[] = [
  { label: "Trusted by", value: "1,200+ modern teams", tone: "accent" },
  { label: "Less busywork", value: "42% less back-and-forth" },
  { label: "Launch faster", value: "Setup in days, not months" },
]

export const previewMetrics: PreviewMetric[] = [
  { label: "Active work", value: "128", change: "+12 this week", tone: "accent" },
  { label: "Team health", value: "98.3%", change: "3 items need review" },
  { label: "Automations", value: "06", change: "2 launched today", tone: "warning" },
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
    name: "Onboarding flow",
    owner: "Maya Chen",
    due: "Today, 4:00 PM",
    progress: 84,
    status: "On track",
    tone: "success",
  },
  {
    name: "Launch checklist",
    owner: "Chris Patel",
    due: "Tomorrow, 10:30 AM",
    progress: 58,
    status: "Needs review",
    tone: "warning",
  },
  {
    name: "Approval request",
    owner: "Avery Lopez",
    due: "Friday, 2:00 PM",
    progress: 73,
    status: "Waiting on feedback",
    tone: "muted",
  },
]

export const previewActivityItems: PreviewActivityItem[] = [
  {
    title: "Design review approved",
    detail: "The launch workflow moved ahead without another status check-in.",
    icon: Sparkles,
  },
  {
    title: "Customer onboarding started",
    detail: "A new request was routed automatically and picked up right away.",
    icon: Workflow,
  },
  {
    title: "Finance approval requested",
    detail: "A high-priority handoff was flagged before it slowed the team down.",
    icon: CircleAlert,
  },
]
