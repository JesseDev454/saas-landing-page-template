import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { ProductPreviewFrame } from "@/components/sections/ProductPreviewFrame"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { StatChip } from "@/components/ui/stat-chip"
import { brand, heroProofItems } from "@/lib/site"

export function HeroSection() {
  return (
    <Section
      id="hero"
      spacing="tight"
      className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-12"
      containerClassName="relative"
    >
      <div className="absolute inset-x-0 top-[-12rem] -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_36%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_28%)]" />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,40rem)] lg:items-center lg:gap-12">
        <div className="space-y-8">
          <Reveal delay={40} className="space-y-5">
            <Badge variant="surface" className="w-fit gap-2">
              <span className="size-2 rounded-full bg-secondary" />
              {brand.category}
            </Badge>

            <div className="space-y-4">
              <p className="eyebrow-label">{brand.name}</p>
              <h1 className="max-w-[12ch] font-heading text-display-md leading-[0.98] tracking-[-0.04em] text-foreground sm:text-display-lg">
                Keep every project moving without chasing updates.
              </h1>
              <p className="max-w-xl text-body-lg leading-8 text-muted-foreground">
                {brand.name} brings requests, owners, and progress into one calm workspace so teams can move faster with less follow-up.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <a href="#pricing">
                  Start Free Trial
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#footer">Book Demo</a>
              </Button>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              No credit card required. Go live in minutes, not weeks.
            </p>
          </Reveal>

          <div className="grid max-w-2xl gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {heroProofItems.map((item, index) => (
              <Reveal key={item.label} delay={230 + index * 80} distance="sm" className="h-full">
                <StatChip
                  label={item.label}
                  value={item.value}
                  tone={item.tone ?? "default"}
                  className="interactive-card-soft h-full bg-card/82 backdrop-blur"
                />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={180}
          direction="left"
          className="mx-auto w-full max-w-[40rem] lg:ml-auto lg:max-w-[40rem]"
        >
          <ProductPreviewFrame />
        </Reveal>
      </div>
    </Section>
  )
}
