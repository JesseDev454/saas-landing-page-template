import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { FeatureHighlightsSection } from "@/components/sections/FeatureHighlightsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection"
import { SocialProofSection } from "@/components/sections/SocialProofSection"

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
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
