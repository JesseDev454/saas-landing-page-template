import type { KeyboardEvent } from "react"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { BillingCycle, PricingPlan, PricingTrustItem } from "@/lib/pricing-content"
import { yearlySavingsLabel } from "@/lib/pricing-content"

function formatAnnualBilled(price: number) {
  return `$${price * 12} billed yearly`
}

function getYearlySavings(plan: PricingPlan) {
  return (plan.monthlyPrice - plan.yearlyPrice) * 12
}

function handleToggleKeyDown(
  event: KeyboardEvent<HTMLButtonElement>,
  onChange: (value: BillingCycle) => void,
) {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
    return
  }

  event.preventDefault()

  if (event.key === "ArrowLeft") {
    onChange("monthly")
    return
  }

  onChange("yearly")
}

export function BillingToggle({
  billingCycle,
  onChange,
}: {
  billingCycle: BillingCycle
  onChange: (value: BillingCycle) => void
}) {
  const isYearly = billingCycle === "yearly"

  return (
    <div className="inline-flex items-center rounded-full border border-border/70 bg-background/88 p-1 shadow-soft">
      <div role="radiogroup" aria-label="Billing frequency" className="flex items-center gap-1">
        <button
          type="button"
          role="radio"
          aria-checked={!isYearly}
          tabIndex={!isYearly ? 0 : -1}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            !isYearly
              ? "bg-card text-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => onChange("monthly")}
          onKeyDown={(event) => handleToggleKeyDown(event, onChange)}
        >
          Monthly
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={isYearly}
          tabIndex={isYearly ? 0 : -1}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isYearly
              ? "bg-foreground text-background shadow-soft"
              : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => onChange("yearly")}
          onKeyDown={(event) => handleToggleKeyDown(event, onChange)}
        >
          Yearly
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-caption font-semibold transition-colors",
              isYearly ? "bg-background/16 text-background" : "bg-secondary/10 text-secondary",
            )}
          >
            {yearlySavingsLabel}
          </span>
        </button>
      </div>
    </div>
  )
}

export function PricingCard({
  plan,
  billingCycle,
}: {
  plan: PricingPlan
  billingCycle: BillingCycle
}) {
  const isYearly = billingCycle === "yearly"
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
  const savings = getYearlySavings(plan)

  return (
    <Card
      className={cn(
        "interactive-card flex h-full flex-col border-border/70 bg-card/96 shadow-card",
        plan.popular
          ? "border-secondary/40 bg-[linear-gradient(180deg,rgba(240,249,255,0.92),rgba(255,255,255,0.98))] ring-1 ring-secondary/20"
          : undefined,
      )}
    >
      <CardHeader className="gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <CardTitle>{plan.name}</CardTitle>
              {plan.popular ? <Badge variant="brand">Most Popular</Badge> : null}
            </div>
            <CardDescription>{plan.description}</CardDescription>
          </div>
        </div>

        <div
          key={`${plan.name}-${billingCycle}`}
          aria-live="polite"
          className="space-y-2 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300"
        >
          <div className="flex items-end gap-2">
            <span className="font-heading text-[2.8rem] font-semibold leading-none tracking-tight text-foreground tabular-nums">
              ${price}
            </span>
            <span className="pb-1 text-sm text-muted-foreground">/month</span>
          </div>
          <p className="text-caption text-muted-foreground">
            {isYearly ? `${formatAnnualBilled(plan.yearlyPrice)} | Save $${savings}/year` : "Billed monthly"}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-body leading-7 text-muted-foreground">
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                  plan.popular ? "bg-secondary/12 text-secondary" : "bg-muted text-foreground/70",
                )}
                aria-hidden="true"
              >
                <Check className="size-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-2">
        <Button asChild variant={plan.ctaVariant} className="w-full">
          <a href={plan.ctaHref}>{plan.ctaLabel}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function PricingTrustBadge({ item }: { item: PricingTrustItem }) {
  const Icon = item.icon

  return (
    <div className="flex min-h-[3rem] items-center gap-2 rounded-full border border-border/70 bg-background/84 px-4 py-2 text-sm text-foreground shadow-soft">
      <Icon className="size-4 text-secondary" aria-hidden="true" />
      <span>{item.label}</span>
    </div>
  )
}
