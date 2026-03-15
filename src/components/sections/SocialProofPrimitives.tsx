import { MessageSquareQuote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { OutcomeStat, SocialLogo, Testimonial } from "@/lib/social-proof-content"

const statToneClasses = {
  default: "bg-card/96",
  accent: "bg-chip/70",
} as const

export function LogoCloudItem({ logo }: { logo: SocialLogo }) {
  return (
    <div className="interactive-card-soft rounded-[24px] border border-border/70 bg-background/82 p-4 shadow-soft">
      <svg
        viewBox="0 0 180 48"
        role="img"
        aria-label={`${logo.name} logo`}
        className="h-10 w-full text-foreground/60 transition-colors duration-300 hover:text-foreground/75"
      >
        <rect x="4" y="6" width="36" height="36" rx="12" fill="currentColor" opacity="0.12" />
        <text
          x="22"
          y="29"
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          fill="currentColor"
        >
          {logo.monogram}
        </text>
        <text x="54" y="29" fontSize="16" fontWeight="700" fill="currentColor">
          {logo.name}
        </text>
      </svg>
      <p className="mt-2 text-caption text-muted-foreground">{logo.industry}</p>
    </div>
  )
}

export function OutcomeStatCard({ stat }: { stat: OutcomeStat }) {
  return (
    <Card
      className={cn(
        "interactive-card h-full border-border/70 shadow-card motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700",
        statToneClasses[stat.tone ?? "default"],
      )}
    >
      <CardHeader className="gap-4">
        <Badge variant={stat.tone === "accent" ? "brand" : "outline"} className="w-fit">
          Operational impact
        </Badge>
        <div className="space-y-2">
          <CardTitle className="font-heading text-[2.2rem] leading-none tracking-tight text-foreground sm:text-[2.6rem]">
            {stat.value}
          </CardTitle>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {stat.label}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-body text-muted-foreground">{stat.detail}</p>
      </CardContent>
    </Card>
  )
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="interactive-card h-full border-border/70 bg-card/96 shadow-card">
      <CardHeader className="gap-5">
        <div className="flex items-center justify-between gap-3">
          <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
            <MessageSquareQuote className="size-[1.125rem]" aria-hidden="true" />
          </div>
          <Badge variant="outline">{testimonial.company}</Badge>
        </div>
        <blockquote className="text-body-lg leading-8 text-foreground">
          "{testimonial.quote}"
        </blockquote>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-caption text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
