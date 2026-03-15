import type { LucideIcon } from "lucide-react"
import { CalendarDays, CreditCard, RefreshCw, ShieldCheck } from "lucide-react"

export type BillingCycle = "monthly" | "yearly"

export type PricingPlan = {
  name: "Starter" | "Team" | "Business"
  description: string
  monthlyPrice: number
  yearlyPrice: number
  ctaLabel: string
  ctaHref: string
  ctaVariant: "primary" | "secondary" | "outline"
  features: string[]
  popular?: boolean
}

export type PricingTrustItem = {
  label: string
  icon: LucideIcon
}

export const yearlySavingsLabel = "Save 20%"

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For small teams standardizing recurring workflows and request intake.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    ctaLabel: "Start Free Trial",
    ctaHref: "#footer",
    ctaVariant: "outline",
    features: [
      "Workflow templates for onboarding, approvals, and launches",
      "Basic request intake and owner assignment",
      "Up to 3 connected integrations",
      "Shared workflow dashboards",
      "Email support",
    ],
  },
  {
    name: "Team",
    description: "For growing operations teams managing cross-functional work at scale.",
    monthlyPrice: 79,
    yearlyPrice: 63,
    ctaLabel: "Start Free Trial",
    ctaHref: "#footer",
    ctaVariant: "primary",
    popular: true,
    features: [
      "Full workflow automation and reusable process templates",
      "SLA monitoring and blocked handoff alerts",
      "Team workload dashboards and routing rules",
      "Slack, Jira, HubSpot, and Google Workspace integrations",
      "AI-generated status summaries",
    ],
  },
  {
    name: "Business",
    description: "For mature operations orgs that need deeper control and advanced reporting.",
    monthlyPrice: 149,
    yearlyPrice: 119,
    ctaLabel: "Book Demo",
    ctaHref: "#footer",
    ctaVariant: "secondary",
    features: [
      "Advanced automations and approval logic",
      "Enterprise integrations and custom routing rules",
      "Priority support and onboarding assistance",
      "Advanced analytics and workflow health reporting",
      "Admin controls and audit visibility",
    ],
  },
]

export const pricingTrustItems: PricingTrustItem[] = [
  { label: "No credit card required", icon: CreditCard },
  { label: "14-day free trial", icon: CalendarDays },
  { label: "Cancel anytime", icon: RefreshCw },
  { label: "Secure infrastructure", icon: ShieldCheck },
]
