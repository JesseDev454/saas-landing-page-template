import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ContainerElement = "div" | "header" | "footer" | "nav" | "main" | "section"

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement
}

export function Container({
  as: Component = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
