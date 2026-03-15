import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { HeroSection } from "@/components/sections/HeroSection"
import { SectionPlaceholder } from "@/components/sections/SectionPlaceholder"
import { placeholderSections } from "@/lib/site"

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />

        <Section id="section-placeholders" tone="muted">
          <SectionHeader
            eyebrow="Coming next"
            title="The rest of the landing page stays intentionally deferred."
            description="Sprint 2 focuses on the hero and early trust signals. Features, how it works, social proof, pricing, and FAQ remain placeholders until later sprints."
          />

          <div className="mt-content grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {placeholderSections.map((section) => (
              <SectionPlaceholder key={section.id} section={section} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
