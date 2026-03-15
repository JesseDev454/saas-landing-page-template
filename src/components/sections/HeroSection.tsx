import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ProductPreviewFrame } from "@/components/sections/ProductPreviewFrame"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StatChip } from "@/components/ui/stat-chip"
import { brand, heroProofItems } from "@/lib/site"

export function HeroSection() {
  return (
    <Section
      id="hero"
      spacing="tight"
      className="relative overflow-hidden pt-8 sm:pt-10 lg:pt-14"
      containerClassName="relative"
    >
      <div className="absolute inset-x-0 top-[-12rem] -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_36%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_28%)]" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.96fr)] lg:items-center">
        <div className="space-y-8 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
          <div className="space-y-5">
            <Badge variant="surface" className="w-fit gap-2">
              <span className="size-2 rounded-full bg-secondary" />
              {brand.category}
            </Badge>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {brand.name}
              </p>
              <h1 className="max-w-[12ch] font-heading text-display-md leading-[0.98] tracking-[-0.04em] text-foreground sm:text-display-lg">
                Recurring operations that move forward without the follow-up.
              </h1>
              <p className="max-w-2xl text-body-lg text-muted-foreground">
                {brand.name} helps operations, customer success, and revenue teams capture recurring requests, automate handoffs, and spot bottlenecks before an SLA slips.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="primary">
                <a href="#pricing">
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#footer">Book Demo</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No credit card required. Setup in under 20 minutes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroProofItems.map((item) => (
              <StatChip
                key={item.label}
                label={item.label}
                value={item.value}
                tone={item.tone ?? "default"}
                className="bg-card/82 backdrop-blur"
              />
            ))}
          </div>
        </div>

        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-700 motion-safe:delay-150">
          <ProductPreviewFrame />
        </div>
      </div>
    </Section>
  )
}
