import type { LucideIcon } from "lucide-react"
import {
  BellRing,
  Bot,
  CheckCheck,
  CircleAlert,
  ClipboardList,
  Clock3,
  LayoutTemplate,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react"

export type ShowcaseHighlight = {
  label: string
  value: string
}

export type ShowcaseSummaryStat = {
  label: string
  value: string
  detail: string
  tone?: "default" | "accent" | "critical"
}

export type WorkflowStatusTone = "success" | "warning" | "critical" | "info"

export type ShowcaseWorkflow = {
  name: string
  stage: string
  owner: string
  progress: number
  sla: string
  status: string
  tone: WorkflowStatusTone
}

export type WorkloadOwner = {
  name: string
  role: string
  utilization: number
  activeTasks: number
  overdueTasks: number
}

export type BottleneckItem = {
  title: string
  detail: string
  impact: string
}

export type IntakeRequest = {
  title: string
  requester: string
  requestType: string
  priority: "High" | "Medium"
  submittedAt: string
  detail: string
}

export type ShowcaseActivity = {
  title: string
  detail: string
  time: string
  icon: LucideIcon
}

export const showcaseHighlights: ShowcaseHighlight[] = [
  {
    label: "Built for",
    value: "Onboarding, renewals, launches, and approvals",
  },
  {
    label: "Tracks",
    value: "Owners, blockers, and SLA timers in one view",
  },
  {
    label: "Automates",
    value: "Status updates, escalations, and handoff nudges",
  },
]

export const showcaseSummaryStats: ShowcaseSummaryStat[] = [
  {
    label: "Open workflows",
    value: "34",
    detail: "12 need cross-functional handoffs today",
    tone: "accent",
  },
  {
    label: "SLA compliance",
    value: "96.8%",
    detail: "Only 3 workflows currently at risk",
  },
  {
    label: "Overdue tasks",
    value: "07",
    detail: "2 need escalation in the next hour",
    tone: "critical",
  },
]

export const showcaseWorkflows: ShowcaseWorkflow[] = [
  {
    name: "Onboarding workflow",
    stage: "Implementation handoff",
    owner: "Maya Chen",
    progress: 84,
    sla: "1h 24m remaining",
    status: "On track",
    tone: "success",
  },
  {
    name: "Renewal workflow",
    stage: "Finance approval",
    owner: "Chris Patel",
    progress: 58,
    sla: "38m before SLA risk",
    status: "Needs review",
    tone: "warning",
  },
  {
    name: "Launch checklist",
    stage: "Design sign-off",
    owner: "Avery Lopez",
    progress: 73,
    sla: "Blocked for 6h 12m",
    status: "Blocked",
    tone: "critical",
  },
  {
    name: "Approval flow",
    stage: "Legal confirmation",
    owner: "Jordan Kim",
    progress: 91,
    sla: "Completed 14m ago",
    status: "Closed loop",
    tone: "info",
  },
]

export const workloadOwners: WorkloadOwner[] = [
  {
    name: "Maya Chen",
    role: "Implementation",
    utilization: 82,
    activeTasks: 14,
    overdueTasks: 1,
  },
  {
    name: "Chris Patel",
    role: "RevOps",
    utilization: 67,
    activeTasks: 11,
    overdueTasks: 3,
  },
  {
    name: "Avery Lopez",
    role: "Launch PM",
    utilization: 58,
    activeTasks: 9,
    overdueTasks: 0,
  },
  {
    name: "Jordan Kim",
    role: "Legal Ops",
    utilization: 49,
    activeTasks: 7,
    overdueTasks: 2,
  },
]

export const bottleneckItems: BottleneckItem[] = [
  {
    title: "Renewal workflow waiting on Finance",
    detail: "One approver is holding a 38-minute SLA window for a high-value renewal.",
    impact: "Escalation recommended now",
  },
  {
    title: "Launch checklist missing design sign-off",
    detail: "Creative assets are approved in Slack but not reflected in the workflow record yet.",
    impact: "Two downstream tasks remain blocked",
  },
]

export const intakeRequest: IntakeRequest = {
  title: "Enterprise onboarding escalation",
  requester: "Nina Torres",
  requestType: "Customer success request",
  priority: "High",
  submittedAt: "2 minutes ago",
  detail:
    "Security review and implementation kickoff need to happen before Friday's executive check-in.",
}

export const showcaseActivity: ShowcaseActivity[] = [
  {
    title: "Design approved for Launch Workflow",
    detail: "Avery Lopez moved the launch checklist from review into QA.",
    time: "6m ago",
    icon: CheckCheck,
  },
  {
    title: "Customer onboarding started",
    detail: "RelayOps created 12 tasks from the enterprise onboarding template.",
    time: "14m ago",
    icon: Workflow,
  },
  {
    title: "Finance approval requested",
    detail: "Renewal workflow now needs one finance approver before the SLA window closes.",
    time: "27m ago",
    icon: BellRing,
  },
  {
    title: "AI summary pushed to Slack",
    detail: "A stakeholder digest flagged blocked launch tasks and at-risk approvals.",
    time: "1h ago",
    icon: Bot,
  },
]

export const showcaseTopNav = [
  { label: "Workflows", icon: LayoutTemplate },
  { label: "Requests", icon: ClipboardList },
  { label: "Health", icon: TrendingUp },
  { label: "Activity", icon: Sparkles },
]

export const showcaseMeta = {
  liveSyncLabel: "Live sync active",
  workspaceLabel: "Operations workspace",
  updatedLabel: "Updated 2m ago",
  attentionLabel: "2 high-priority issues",
}

export const ShowcaseClockIcon = Clock3
export const ShowcaseAlertIcon = CircleAlert
