import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  BellRing,
  CheckCheck,
  CircleAlert,
  ClipboardList,
  Clock3,
  LayoutTemplate,
  MessageSquareText,
  Sparkles,
  TimerReset,
  Users,
  Workflow,
} from "lucide-react"

export type FeatureHighlightId = "automation" | "bottlenecks" | "ownership"

export type FeatureHighlightItem = {
  id: FeatureHighlightId
  eyebrow: string
  title: string
  description: string
  bullets: string[]
}

export type FeatureGridItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const featureHighlights: FeatureHighlightItem[] = [
  {
    id: "automation",
    eyebrow: "Workflow automation",
    title: "Standardize recurring operations without rebuilding the process every time.",
    description:
      "RelayOps turns onboarding, approvals, launches, and renewals into reusable workflow templates so teams can execute the same process with less coordination overhead.",
    bullets: [
      "Start work from proven templates instead of recreating steps in docs and chat threads.",
      "Trigger assignments, reminders, and stakeholder updates automatically as work moves forward.",
      "Keep recurring workflows consistent even as more teams and handoffs get involved.",
    ],
  },
  {
    id: "bottlenecks",
    eyebrow: "Bottleneck visibility",
    title: "Catch SLA risk and blocked handoffs before they slow the team down.",
    description:
      "RelayOps surfaces overdue tasks, stalled approvals, and at-risk workflows in one place so teams can respond before deadlines slip or requests pile up.",
    bullets: [
      "See blocked work, overdue steps, and SLA timers without digging through multiple tools.",
      "Spot which handoff is slowing the process and who needs to respond next.",
      "Escalate the right work early instead of reacting after the deadline is already missed.",
    ],
  },
  {
    id: "ownership",
    eyebrow: "Ownership clarity",
    title: "Keep every request routed, assigned, and visible to the right owner.",
    description:
      "RelayOps makes ownership obvious across requests, workload, and follow-up so teams always know who is responsible for the next action and what needs attention first.",
    bullets: [
      "Route incoming work to the right owner based on request type, priority, or team rules.",
      "Give managers instant visibility into workload, capacity, and overdue assignments.",
      "Reduce manual follow-up by keeping ownership and status updates visible inside the workflow.",
    ],
  },
]

export const featureGridItems: FeatureGridItem[] = [
  {
    title: "Standardize repetitive work",
    description:
      "Turn repeatable processes into templates so every onboarding, launch, or approval starts with the right structure.",
    icon: Workflow,
  },
  {
    title: "Route requests automatically",
    description:
      "Send new work to the right owner based on request type, team, or priority without manual triage.",
    icon: ClipboardList,
  },
  {
    title: "Track SLA health in real time",
    description:
      "Keep timers, blocked steps, and overdue tasks visible before they affect customers or deadlines.",
    icon: Clock3,
  },
  {
    title: "See workload instantly",
    description:
      "Understand who is overloaded, who has capacity, and where work is getting stuck across the team.",
    icon: BarChart3,
  },
  {
    title: "Reduce follow-up loops",
    description:
      "Automate nudges, handoff reminders, and progress updates so teams spend less time chasing status.",
    icon: BellRing,
  },
  {
    title: "Keep stakeholders aligned",
    description:
      "Generate shared status visibility across Slack, internal teams, and leadership without extra reporting work.",
    icon: MessageSquareText,
  },
]

export const automationTemplates = [
  {
    name: "Enterprise onboarding",
    steps: "12 steps",
    automation: "Auto-assign kickoff and security review",
  },
  {
    name: "Renewal approvals",
    steps: "8 steps",
    automation: "Escalate if Finance is idle for 4 hours",
  },
  {
    name: "Launch checklist",
    steps: "15 steps",
    automation: "Notify design, product, and QA in sequence",
  },
]

export const automationFlowSteps = [
  "Request created from template",
  "Owners assigned by team rule",
  "Stakeholder summary sent automatically",
]

export const automationSummaryChips = [
  { label: "Templates live", value: "16" },
  { label: "Automated steps", value: "124" },
  { label: "Manual follow-up saved", value: "11h / week" },
]

export const bottleneckSignals = [
  { label: "At-risk workflows", value: "03", tone: "critical" as const },
  { label: "Blocked handoffs", value: "05", tone: "warning" as const },
  { label: "Recovered this week", value: "14", tone: "success" as const },
]

export const bottleneckList = [
  {
    title: "Finance approval holding renewal",
    detail: "38 minutes before SLA risk on a high-value account.",
    tone: "critical" as const,
    icon: CircleAlert,
  },
  {
    title: "Legal sign-off missing on launch checklist",
    detail: "Two downstream tasks are waiting on one review step.",
    tone: "warning" as const,
    icon: Clock3,
  },
  {
    title: "AI digest flagged rising backlog",
    detail: "Support requests are increasing faster than current routing capacity.",
    tone: "success" as const,
    icon: Sparkles,
  },
]

export const ownershipRouteRules = [
  {
    label: "Customer success request",
    route: "Route to Maya Chen",
    icon: Users,
  },
  {
    label: "Priority approval",
    route: "Escalate to Chris Patel",
    icon: TimerReset,
  },
  {
    label: "Launch dependency",
    route: "Assign to Avery Lopez",
    icon: LayoutTemplate,
  },
]

export const ownershipRoster = [
  {
    name: "Maya Chen",
    focus: "Onboarding owner",
    tasks: "14 active",
    tone: "success" as const,
  },
  {
    name: "Chris Patel",
    focus: "Renewal approvals",
    tasks: "11 active",
    tone: "warning" as const,
  },
  {
    name: "Avery Lopez",
    focus: "Launch workflows",
    tasks: "9 active",
    tone: "info" as const,
  },
]

export const ownershipAutomationNotes = [
  {
    title: "Request routed instantly",
    detail: "Priority rules send the request to the correct owner before follow-up is needed.",
    icon: CheckCheck,
  },
  {
    title: "Manager view stays current",
    detail: "Workload and overdue items update automatically as work moves across teams.",
    icon: BarChart3,
  },
]
