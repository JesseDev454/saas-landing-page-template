import type { LucideIcon } from "lucide-react"
import {
  BellRing,
  BarChart3,
  Bot,
  CircleAlert,
  Clock3,
  CheckCheck,
  Github,
  LayoutTemplate,
  Linkedin,
  Mail,
  MessageSquareText,
  Sparkles,
  TimerReset,
  TrendingUp,
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
