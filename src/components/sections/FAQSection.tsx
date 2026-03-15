import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Accordion, type AccordionItemData } from "@/components/ui/accordion"
import { faqItems } from "@/lib/faq-content"

const accordionItems: AccordionItemData[] = faqItems.map((item) => ({
  id: item.id,
  title: item.question,
  content: <p>{item.answer}</p>,
}))

export function FAQSection() {
  return (
    <Section id="faq" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-10 -z-10 h-52 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_44%)]" />

      <SectionHeader
        eyebrow="FAQ"
        align="center"
        title="Straight answers for the questions that usually slow a buying decision."
        description="RelayOps is built for practical evaluation, so the FAQ focuses on setup, integrations, support, and how the platform fits growing operations teams."
        className="mx-auto"
      />

      <div className="mx-auto mt-content max-w-4xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
        <Accordion items={accordionItems} />
      </div>
    </Section>
  )
}
