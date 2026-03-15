import type { HTMLAttributes } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const toneClasses = {
  brand: "bg-secondary/12 text-secondary",
  accent: "bg-primary/12 text-primary",
  surface: "bg-background text-foreground shadow-soft",
} as const

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  tone?: keyof typeof toneClasses
}

export function IconContainer({
  icon: Icon,
  className,
  tone = "brand",
  ...props
}: IconContainerProps) {
  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-2xl border border-border/70",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      <Icon className="size-5" />
    </div>
  )
}
