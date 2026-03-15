import { Container } from "@/components/layout/Container"
import { IconContainer } from "@/components/ui/icon-container"
import { brand, footerLinkGroups, socialLinks } from "@/lib/site"

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/70 bg-card/80 py-12 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="max-w-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/12 font-heading text-sm font-semibold text-secondary">
                {brand.monogram}
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">{brand.name}</p>
                <p className="text-caption leading-6 text-muted-foreground">{brand.tagline}</p>
              </div>
            </div>
            <p className="max-w-md text-body leading-7 text-muted-foreground">{brand.summary}</p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={link.label}
                  >
                    <IconContainer
                      icon={Icon}
                      tone="surface"
                      className="interactive-card-soft"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="inline-flex rounded-md py-1 text-body text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-caption leading-6 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 RelayOps. Workflow operations SaaS landing page template.</p>
          <p>React, Vite, TypeScript, Tailwind CSS, shadcn/ui patterns, lucide-react.</p>
        </div>
      </Container>
    </footer>
  )
}
