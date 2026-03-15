import { useState } from "react"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { BillingToggle, PricingCard, PricingTrustBadge } from "@/components/sections/PricingPrimitives"
import { type BillingCycle, pricingPlans, pricingTrustItems } from "@/lib/pricing-content"

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly")

  return (
    <Section id="pricing" tone="muted" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-8 -z-10 h-56 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06),transparent_40%)]" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Pricing"
          title="Straightforward pricing for operations teams that need better workflow control."
          description="Choose the plan that matches your team size today, then switch to yearly billing when you are ready to lock in a lower monthly rate."
        />

        <div className="flex flex-col gap-3 lg:items-end">
          <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
          <p className="text-sm text-muted-foreground">
            Yearly billing includes a 20% discount on every plan.
          </p>
        </div>
      </div>

      <div className="mt-content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} billingCycle={billingCycle} />
        ))}
      </div>

      <div className="mt-content grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTrustItems.map((item) => (
          <PricingTrustBadge key={item.label} item={item} />
        ))}
      </div>
    </Section>
  )
}
