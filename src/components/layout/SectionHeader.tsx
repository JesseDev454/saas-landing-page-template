import type { HTMLAttributes } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const alignments = {
  left: "items-start text-left",
  center: "items-center text-center",
} as const

const sizes = {
  default: "text-heading sm:text-display-md",
  compact: "text-heading",
} as const

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: string
  align?: keyof typeof alignments
  size?: keyof typeof sizes
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-4 sm:gap-5", alignments[align], className)} {...props}>
      {eyebrow ? <Badge variant="surface">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className={cn("font-heading leading-[1.02] tracking-tight text-foreground", sizes[size])}>
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[44rem] text-body-lg leading-8 text-muted-foreground",
              align === "center" ? "mx-auto" : undefined,
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
