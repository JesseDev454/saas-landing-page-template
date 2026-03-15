import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type RevealDirection = "up" | "left" | "right" | "none"
type RevealDistance = "sm" | "md" | "lg"

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
  duration?: number
  direction?: RevealDirection
  distance?: RevealDistance
  once?: boolean
  threshold?: number
}

const offsets: Record<RevealDirection, Record<RevealDistance, { x: string; y: string }>> = {
  up: {
    sm: { x: "0px", y: "18px" },
    md: { x: "0px", y: "28px" },
    lg: { x: "0px", y: "38px" },
  },
  left: {
    sm: { x: "18px", y: "0px" },
    md: { x: "28px", y: "0px" },
    lg: { x: "38px", y: "0px" },
  },
  right: {
    sm: { x: "-18px", y: "0px" },
    md: { x: "-28px", y: "0px" },
    lg: { x: "-38px", y: "0px" },
  },
  none: {
    sm: { x: "0px", y: "0px" },
    md: { x: "0px", y: "0px" },
    lg: { x: "0px", y: "0px" },
  },
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}

export function Reveal({
  className,
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  distance = "md",
  once = true,
  threshold = 0.18,
  style,
  ...props
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const node = elementRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(node)
          }

          return
        }

        if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -12% 0px",
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, prefersReducedMotion, threshold])

  const offset = offsets[direction][distance]
  const isShown = prefersReducedMotion || isVisible
  const motionStyle = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-x": offset.x,
    "--reveal-y": offset.y,
    ...style,
  } as CSSProperties

  return (
    <div
      ref={elementRef}
      className={cn("reveal", isShown && "is-visible", className)}
      style={motionStyle}
      {...props}
    >
      {children}
    </div>
  )
}
