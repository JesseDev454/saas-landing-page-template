import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const toneClasses = {
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  critical: "bg-rose-50 text-rose-700",
  info: "bg-sky-50 text-sky-700",
} as const

interface StatusPillProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: keyof typeof toneClasses
}

export function StatusPill({
  className,
  tone = "info",
  ...props
}: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-caption font-semibold",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  )
}
