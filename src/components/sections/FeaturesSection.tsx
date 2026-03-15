import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconContainer } from "@/components/ui/icon-container"
import { featureGridItems } from "@/lib/feature-content"

export function FeaturesSection() {
  return (
    <Section id="features-grid" tone="muted">
      <SectionHeader
        eyebrow="Core benefits"
        align="center"
        title="Everything teams need to keep recurring work moving."
        description="RelayOps focuses on the operational details that usually create delays: routing, ownership, follow-up, workload visibility, and stakeholder updates."
        className="mx-auto"
      />

      <div className="mt-content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureGridItems.map((item) => {
          const Icon = item.icon

          return (
            <Card
              key={item.title}
              className="interactive-card h-full border-border/70 bg-card/96 shadow-card"
            >
              <CardHeader className="gap-5">
                <IconContainer icon={Icon} />
                <div className="space-y-3">
                  <CardTitle className="text-[1.35rem]">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
