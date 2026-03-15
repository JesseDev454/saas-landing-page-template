import { ArrowRight, Check } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { finalCtaContent, finalCtaProofPoints } from "@/lib/final-cta-content"

export function FinalCTASection() {
  return (
    <Section spacing="tight" className="relative pt-0" containerClassName="relative">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(240,249,255,0.94),rgba(255,255,255,0.98))] px-6 py-10 shadow-card sm:px-10 sm:py-12 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.1),transparent_38%)]" />

        <div className="relative mx-auto max-w-3xl text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <div className="flex flex-col items-center gap-5">
            <Badge variant="surface">{finalCtaContent.eyebrow}</Badge>

            <div className="space-y-4">
              <h2 className="font-heading text-heading tracking-tight text-foreground sm:text-display-md">
                {finalCtaContent.title}
              </h2>
              <p className="mx-auto max-w-2xl text-body-lg text-muted-foreground">
                {finalCtaContent.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
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

          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap">
            {finalCtaProofPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/84 px-4 py-2 shadow-soft"
              >
                <Check className="size-4 text-secondary" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
