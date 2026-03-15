import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const toneClasses = {
  brand: "bg-secondary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  critical: "bg-rose-500",
} as const

interface ProgressMeterProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  tone?: keyof typeof toneClasses
}

export function ProgressMeter({
  value,
  tone = "brand",
  className,
  ...props
}: ProgressMeterProps) {
  const safeValue = Math.max(0, Math.min(value, 100))

  return (
    <div
      className={cn("h-2 rounded-full bg-muted", className)}
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className={cn(
          "h-2 rounded-full transition-[width] duration-700 ease-out motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-3",
          toneClasses[tone],
        )}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  )
}
