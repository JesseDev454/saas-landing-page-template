import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import {
  LogoCloudItem,
  OutcomeStatCard,
  TestimonialCard,
} from "@/components/sections/SocialProofPrimitives"
import { outcomeStats, socialLogos, testimonials } from "@/lib/social-proof-content"

export function SocialProofSection() {
  return (
    <Section id="social-proof" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-14 -z-10 h-56 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06),transparent_42%)]" />

      <SectionHeader
        eyebrow="Trusted by operations teams"
        align="center"
        title="Credibility built on clearer ownership and faster operational cycles."
        description="RelayOps helps teams reduce coordination overhead, route work faster, and keep recurring workflows moving with less manual follow-up."
        className="mx-auto"
      />

      <div className="mt-content">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {socialLogos.map((logo) => (
            <LogoCloudItem key={logo.name} logo={logo} />
          ))}
        </div>
      </div>

      <div className="mt-content grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {outcomeStats.map((stat) => (
          <OutcomeStatCard key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="mt-content grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={`${testimonial.name}-${testimonial.company}`} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  )
}
