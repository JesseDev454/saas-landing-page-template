import type { HTMLAttributes } from "react"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"

const spacingVariants = {
  default: "py-section",
  tight: "py-section-tight",
  none: "py-0",
} as const

const toneVariants = {
  default: "bg-transparent",
  muted: "bg-muted/45",
  surface: "bg-card/80",
} as const

type SectionElement = "section" | "div"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: SectionElement
  spacing?: keyof typeof spacingVariants
  tone?: keyof typeof toneVariants
  containerClassName?: string
}

export function Section({
  as: Component = "section",
  className,
  containerClassName,
  spacing = "default",
  tone = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("scroll-mt-28 sm:scroll-mt-32", toneVariants[tone], spacingVariants[spacing], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </Component>
  )
}
