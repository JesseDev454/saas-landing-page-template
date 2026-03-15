import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlightsSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder"
import { sprint4PlaceholderSections } from "@/lib/site"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <ProductShowcaseSection />
        <FeatureHighlightsSection />
        <FeaturesSection />

        <Section id="section-placeholders" tone="muted">
          <SectionHeader
            eyebrow="Still to build"
            title="The remaining landing sections stay deferred for later sprints."
            description="Sprint 4 focuses on explaining product value. Pricing and FAQ remain placeholders until their dedicated implementation passes."
          />

          <div className="mt-content grid gap-6 lg:grid-cols-2">
            {sprint4PlaceholderSections.map((section) => (
              <SectionPlaceholder key={section.id} section={section} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
