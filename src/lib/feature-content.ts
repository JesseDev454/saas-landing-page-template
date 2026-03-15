import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  ClipboardList,
  Clock3,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react"

export type FeatureGridItem = {
  title: string
  description: string
  icon: LucideIcon
}

export const featureGridItems: FeatureGridItem[] = [
  {
    title: "Workflow automation",
    description: "Put repeatable work on rails so your team spends less time managing process by hand.",
    icon: Workflow,
  },
  {
    title: "Smart routing",
    description: "Every request lands with the right owner automatically, so nothing gets stuck in triage.",
    icon: ClipboardList,
  },
  {
    title: "Deadline visibility",
    description: "Spot risk early and keep important work on track before deadlines start to slip.",
    icon: Clock3,
  },
  {
    title: "Team visibility",
    description: "See who owns what, what is moving, and where the next handoff needs help.",
    icon: BarChart3,
  },
  {
    title: "Automatic updates",
    description: "Keep stakeholders in the loop with progress updates that happen in the background.",
    icon: MessageSquareText,
  },
  {
    title: "Connect your stack",
    description: "Fit into the tools your team already uses so adoption feels easy from day one.",
    icon: Sparkles,
  },
]
