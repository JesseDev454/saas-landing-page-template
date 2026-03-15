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
    description: "A simple starting point for small teams.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    ctaLabel: "Start Free Trial",
    ctaHref: "#footer",
    ctaVariant: "outline",
    features: [
      "Core workflow automation",
      "Basic routing rules",
      "Up to 3 integrations",
      "Shared dashboards",
      "Email support",
    ],
  },
  {
    name: "Team",
    description: "For growing teams that need visibility and control.",
    monthlyPrice: 79,
    yearlyPrice: 63,
    ctaLabel: "Start Free Trial",
    ctaHref: "#footer",
    ctaVariant: "primary",
    popular: true,
    features: [
      "Advanced automation",
      "SLA alerts",
      "Workload dashboards",
      "Popular integrations",
      "Automated updates",
    ],
  },
  {
    name: "Business",
    description: "For larger teams with more complex workflows.",
    monthlyPrice: 149,
    yearlyPrice: 119,
    ctaLabel: "Book Demo",
    ctaHref: "#footer",
    ctaVariant: "secondary",
    features: [
      "Custom workflows",
      "Enterprise integrations",
      "Priority support",
      "Advanced reporting",
      "Admin controls",
    ],
  },
]

export const pricingTrustItems: PricingTrustItem[] = [
  { label: "No credit card required", icon: CreditCard },
  { label: "14-day free trial", icon: CalendarDays },
  { label: "Cancel anytime", icon: RefreshCw },
  { label: "Secure infrastructure", icon: ShieldCheck },
]
