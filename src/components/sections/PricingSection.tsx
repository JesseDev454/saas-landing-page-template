import { useState } from "react"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { BillingToggle, PricingCard, PricingTrustBadge } from "@/components/sections/PricingPrimitives"
import { Reveal } from "@/components/ui/reveal"
import { type BillingCycle, pricingPlans, pricingTrustItems } from "@/lib/pricing-content"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")

  return (
    <Section id="pricing" tone="muted" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-8 -z-10 h-56 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06),transparent_40%)]" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-2xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Plans that scale with your team."
            description="Start simple, then upgrade when you need more automation, visibility, or support."
            className="max-w-2xl"
          />
        </Reveal>

        <Reveal delay={120} direction="left" className="flex flex-col gap-3 sm:items-start lg:items-end">
          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">Save 20% with annual billing.</p>
        </Reveal>
      </div>

      <div className="mt-content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} delay={100 + index * 90} distance="sm" className="h-full">
            <PricingCard plan={plan} billingCycle={billingCycle} />
          </Reveal>
        ))}
      </div>

      <div className="mt-content grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTrustItems.map((item, index) => (
          <Reveal key={item.label} delay={220 + index * 50} distance="sm">
            <PricingTrustBadge item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
