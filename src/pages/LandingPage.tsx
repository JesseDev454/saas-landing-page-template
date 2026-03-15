import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlightsSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { SocialProofSection } from "@/components/sections/SocialProofSection"
import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder"
import { sprint6PlaceholderSections } from "@/lib/site"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <ProductShowcaseSection />
        <FeatureHighlightsSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />

        <Section id="section-placeholders" tone="muted">
          <SectionHeader
            eyebrow="Still to build"
            title="The remaining landing sections stay deferred for later sprints."
            description="Sprint 6 adds the pricing experience. FAQ remains deferred until its dedicated implementation pass."
          />

          <div className="mt-content max-w-xl">
            {sprint6PlaceholderSections.map((section) => (
              <SectionPlaceholder key={section.id} section={section} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
