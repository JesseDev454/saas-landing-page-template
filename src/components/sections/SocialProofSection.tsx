import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import {
  LogoCloudItem,
  OutcomeStatCard,
  TestimonialCard,
} from "@/components/sections/SocialProofPrimitives"
import { Reveal } from "@/components/ui/reveal"
import { outcomeStats, socialLogos, testimonials } from "@/lib/social-proof-content"

export function SocialProofSection() {
  return (
    <Section id="social-proof" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-14 -z-10 h-56 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06),transparent_42%)]" />

      <Reveal className="mx-auto">
        <SectionHeader
          eyebrow="Social proof"
          align="center"
          title="Trusted by teams that need clarity at speed."
          description="A quick layer of proof builds confidence without slowing the page down."
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-content">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {socialLogos.map((logo, index) => (
            <Reveal key={logo.name} delay={60 + index * 50} distance="sm">
              <LogoCloudItem logo={logo} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-content grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {outcomeStats.map((stat, index) => (
          <Reveal key={stat.label} delay={120 + index * 70} distance="sm" className="h-full">
            <OutcomeStatCard stat={stat} />
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-content grid max-w-4xl gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={`${testimonial.name}-${testimonial.company}`}
            delay={180 + index * 90}
            distance="sm"
            className="h-full"
          >
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
