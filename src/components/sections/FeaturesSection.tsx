import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconContainer } from "@/components/ui/icon-container"
import { Reveal } from "@/components/ui/reveal"
import { featureGridItems } from "@/lib/feature-content"

export function FeaturesSection() {
  return (
    <Section id="features" tone="muted">
      <Reveal className="mx-auto">
        <SectionHeader
          eyebrow="Features"
          align="center"
          title="Everything you need to keep work moving."
          description="From first request to final handoff, RelayOps keeps the work clear, visible, and easy to move forward."
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-content grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featureGridItems.map((item, index) => {
          const Icon = item.icon

          return (
            <Reveal key={item.title} delay={90 + index * 70} distance="sm" className="h-full">
              <Card className="interactive-card h-full border-border/70 bg-card/96 shadow-card">
                <CardHeader className="gap-5">
                  <IconContainer icon={Icon} />
                  <div className="space-y-3">
                    <CardTitle className="text-[1.35rem]">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
