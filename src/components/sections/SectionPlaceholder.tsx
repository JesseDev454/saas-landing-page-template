import type { PlaceholderSectionContent } from "@/lib/site"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconContainer } from "@/components/ui/icon-container"

interface SectionPlaceholderProps {
  section: PlaceholderSectionContent
}

export function SectionPlaceholder({ section }: SectionPlaceholderProps) {
  return (
    <Card className="h-full border-border/70 bg-card/95 shadow-card">
      <CardHeader className="gap-5">
        <div className="flex items-start justify-between gap-4">
          <IconContainer icon={section.icon} />
          <Badge variant="outline">Planned for later sprint</Badge>
        </div>
        <div className="space-y-3">
          <p className="text-caption font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {section.eyebrow}
          </p>
          <CardTitle>{section.title}</CardTitle>
          <CardDescription>{section.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-body text-muted-foreground">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-2 size-2 rounded-full bg-secondary/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
