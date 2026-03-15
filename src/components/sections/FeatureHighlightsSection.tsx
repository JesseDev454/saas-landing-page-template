import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureHighlightVisual } from "@/components/sections/FeatureHighlightVisuals"
import { featureHighlights } from "@/lib/feature-content"
import { cn } from "@/lib/utils"

export function FeatureHighlightsSection() {
  return (
    <Section id="features" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-20 -z-10 h-64 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06),transparent_45%)]" />

      <SectionHeader
        eyebrow="Why RelayOps"
        align="center"
        title="A clearer way to run recurring operational work."
        description="RelayOps helps teams standardize the work they repeat most, catch problems early, and keep ownership visible from intake to completion."
        className="mx-auto"
      />

      <div className="mt-content space-y-10 lg:space-y-14">
        {featureHighlights.map((item, index) => (
          <div
            key={item.id}
            className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,1fr)] lg:items-center lg:gap-10"
          >
            <div className={cn(index % 2 === 1 ? "lg:order-2" : undefined)}>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.eyebrow}
                </p>
                <div className="space-y-4">
                  <h3 className="max-w-[18ch] font-heading text-heading tracking-tight text-foreground sm:text-[2.15rem]">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl text-body-lg text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-body text-muted-foreground">
                      <span className="mt-2 size-2 rounded-full bg-secondary/80" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={cn(
                "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700",
                index % 2 === 1 ? "lg:order-1" : undefined,
              )}
            >
              <FeatureHighlightVisual id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
