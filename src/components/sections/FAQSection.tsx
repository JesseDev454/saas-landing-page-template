import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Accordion, type AccordionItemData } from "@/components/ui/accordion"
import { Reveal } from "@/components/ui/reveal"
import { faqItems } from "@/lib/faq-content"

const accordionItems: AccordionItemData[] = faqItems.map((item) => ({
  id: item.id,
  title: item.question,
  content: <p>{item.answer}</p>,
}))

export function FAQSection() {
  return (
    <Section id="faq" tone="muted" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-10 -z-10 h-52 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_44%)]" />

      <Reveal className="mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          align="center"
          title="Questions, answered."
          description="A few quick answers for the buying questions that come up most often."
          className="mx-auto"
        />
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-content max-w-4xl">
        <Accordion items={accordionItems} />
      </Reveal>
    </Section>
  )
}
