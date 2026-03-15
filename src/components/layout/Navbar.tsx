import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { brand, navItems } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <Container className="rounded-[28px] border border-border/70 bg-background/85 shadow-soft backdrop-blur-xl">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 py-3">
          <a className="flex items-center gap-3" href="#foundation">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary/12 font-heading text-sm font-semibold text-secondary">
              {brand.monogram}
            </div>
            <div className="space-y-0.5">
              <p className="font-heading text-base font-semibold text-foreground">{brand.name}</p>
              <p className="hidden text-caption text-muted-foreground sm:block">
                Sprint 1 foundation
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild size="sm" variant="outline">
              <a href="#footer">Book Demo</a>
            </Button>
            <Button asChild size="sm" variant="primary">
              <a href="#section-placeholders">Start Free Trial</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            "grid overflow-hidden border-t border-border/70 transition-[grid-template-rows,opacity] duration-300 md:hidden",
            mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Button asChild variant="primary">
                  <a href="#section-placeholders" onClick={() => setMobileMenuOpen(false)}>
                    Start Free Trial
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="#footer" onClick={() => setMobileMenuOpen(false)}>
                    Book Demo
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  )
}
