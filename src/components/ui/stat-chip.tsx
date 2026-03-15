import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const toneClasses = {
  default: "bg-background/90",
  accent: "bg-chip",
} as const

interface StatChipProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: string
  tone?: keyof typeof toneClasses
}

export function StatChip({
  label,
  value,
  tone = "default",
  className,
  ...props
}: StatChipProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 px-4 py-3 shadow-soft",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      <p className="text-caption font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  )
}
