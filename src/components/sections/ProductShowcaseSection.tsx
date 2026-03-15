import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ProductDashboardCanvas } from "@/components/sections/ProductDashboardCanvas"
import { Badge } from "@/components/ui/badge"
import { showcaseHighlights } from "@/lib/product-showcase"

export function ProductShowcaseSection() {
  return (
    <Section id="product-showcase" className="relative" containerClassName="relative">
      <div className="absolute inset-x-0 top-10 -z-10 h-52 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_42%)]" />

      <SectionHeader
        eyebrow="Product showcase"
        align="center"
        title="A dashboard built for handoffs, workload visibility, and SLA risk."
        description="RelayOps gives operations teams a single interface for recurring workflows, owner accountability, request intake, and bottleneck alerts."
        className="mx-auto"
      />

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {showcaseHighlights.map((item) => (
          <Badge key={item.label} variant="surface" className="px-4 py-2">
            <span className="font-semibold text-foreground">{item.label}:</span>
            <span className="ml-1 text-muted-foreground">{item.value}</span>
          </Badge>
        ))}
      </div>

      <div className="mt-content motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
        <ProductDashboardCanvas />
      </div>
    </Section>
  )
}
