import { Container } from "@/components/layout/Container"
import { IconContainer } from "@/components/ui/icon-container"
import { brand, footerLinkGroups, socialLinks } from "@/lib/site"

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/70 bg-card/75 py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-md space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/12 font-heading text-sm font-semibold text-secondary">
                {brand.monogram}
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">{brand.name}</p>
                <p className="text-caption text-muted-foreground">{brand.tagline}</p>
              </div>
            </div>
            <p className="text-body text-muted-foreground">{brand.summary}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={link.label}
                  >
                    <IconContainer
                      icon={Icon}
                      tone="surface"
                      className="transition-transform hover:-translate-y-0.5"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a className="text-body text-foreground/80 hover:text-foreground" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-caption text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RelayOps. Portfolio template foundation for Sprint 1.</p>
          <p>React, Vite, TypeScript, Tailwind CSS, shadcn/ui patterns, lucide-react.</p>
        </div>
      </Container>
    </footer>
  )
}
