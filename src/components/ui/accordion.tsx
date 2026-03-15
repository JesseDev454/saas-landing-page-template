import { useId, useState, type ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export type AccordionItemData = {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItemData[]
  defaultValue?: string
  className?: string
}

export function Accordion({ items, defaultValue, className }: AccordionProps) {
  const rootId = useId()
  const [openValue, setOpenValue] = useState<string | null>(defaultValue ?? items[0]?.id ?? null)

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openValue === item.id
        const triggerId = `${rootId}-${item.id}-trigger`
        const panelId = `${rootId}-${item.id}-panel`

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-[1.6rem] border border-border/70 bg-card/96 shadow-soft transition-all duration-300",
              isOpen ? "shadow-card" : "hover:-translate-y-0.5 hover:shadow-card",
            )}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-7"
                onClick={() => setOpenValue(isOpen ? null : item.id)}
              >
                <span className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </span>

                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/85 text-muted-foreground transition-all duration-300",
                    isOpen ? "rotate-180 bg-secondary/10 text-secondary" : undefined,
                  )}
                  aria-hidden="true"
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h3>

            <div
              className={cn(
                "grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300 ease-out sm:px-7",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70",
              )}
            >
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="overflow-hidden"
              >
                <div className="border-t border-border/70 pb-6 pt-4 text-body text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
