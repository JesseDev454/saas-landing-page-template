import { ArrowRight, Gauge, Sparkles } from "lucide-react"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconContainer } from "@/components/ui/icon-container"
import { StatChip } from "@/components/ui/stat-chip"
import { brand, foundationHighlights, foundationPillars, placeholderSections } from "@/lib/site"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Section id="foundation" spacing="tight" className="pt-10 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <Badge variant="brand">Sprint 1 foundation</Badge>
              <SectionHeader
                eyebrow="Layout system"
                title="The SaaS landing page shell is ready for real sections."
                description="This sprint focuses on the shared design tokens, reusable layout primitives, CTA system, and responsive frame that later marketing sections will plug into."
              />
              <p className="max-w-2xl text-body text-muted-foreground">
                The fictional product anchor remains <span className="font-semibold text-foreground">{brand.name}</span>, but the page intentionally stops at structure and placeholders so Sprint 2 can focus on actual marketing content.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="primary">
                  <a href="#section-placeholders">
                    Primary CTA
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#layout-system">Secondary CTA</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#footer">Outline</a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="#section-placeholders">Ghost</a>
                </Button>
              </div>
            </div>

            <Card className="surface-grid border-border/70 bg-card/90 shadow-card">
              <CardHeader className="gap-5">
                <div className="flex items-start justify-between gap-4">
                  <IconContainer icon={Gauge} />
                  <Badge variant="surface">Shared shell preview</Badge>
                </div>
                <div className="space-y-3">
                  <CardTitle>Foundation layer in progress</CardTitle>
                  <CardDescription>
                    Buttons, cards, navigation, footer, spacing rhythm, and design tokens are established before the hero, pricing, and feature storytelling get built.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {foundationHighlights.map((item, index) => (
                  <StatChip
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    tone={index % 2 === 0 ? "accent" : "default"}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="layout-system" tone="muted">
          <SectionHeader
            eyebrow="Design tokens"
            title="A clean system for spacing, typography, and reusable UI."
            description="The foundation is built around a premium light theme, fluid section spacing, consistent container width, soft-radius surfaces, and a restrained startup SaaS color palette."
          />

          <div className="mt-content grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {foundationPillars.map((pillar) => (
              <Card key={pillar.title} className="border-border/70 bg-card/95 shadow-card">
                <CardHeader className="gap-4">
                  <IconContainer icon={pillar.icon} />
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="section-placeholders">
          <SectionHeader
            eyebrow="Future sections"
            title="Section architecture is mapped without implementing the full landing page."
            description="These cards intentionally stand in for the hero, preview, features, proof, pricing, and FAQ sections that will be built in later sprints."
          />

          <div className="mt-content grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {placeholderSections.map((section) => (
              <SectionPlaceholder key={section.id} section={section} />
            ))}
          </div>
        </Section>

        <Section tone="muted">
          <div className="flex flex-col gap-6 rounded-[32px] border border-border/70 bg-card/90 px-6 py-8 shadow-card md:flex-row md:items-center md:justify-between md:px-8">
            <div className="flex items-start gap-4">
              <IconContainer icon={Sparkles} tone="accent" />
              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  Sprint 1 stops at the shell on purpose.
                </h3>
                <p className="max-w-2xl text-body text-muted-foreground">
                  The next sprint can now focus on real section implementation without re-solving spacing, theming, buttons, or navigation structure.
                </p>
              </div>
            </div>
            <Button asChild variant="secondary">
              <a href="#foundation">Review foundation</a>
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
