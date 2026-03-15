import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import {
  previewActivityItems,
  previewChartPoints,
  previewMetrics,
  previewWorkflowItems,
} from "@/lib/site"
import { cn } from "@/lib/utils"

const metricToneClasses = {
  default: "bg-background/78",
  accent: "bg-chip/90",
  warning: "bg-primary/10",
} as const

const workflowToneClasses = {
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  muted: "bg-slate-100 text-slate-700",
} as const

export function ProductPreviewFrame() {
  return (
    <div className="relative">
      <div className="absolute inset-x-12 top-10 -z-10 h-40 rounded-full bg-secondary/12 blur-3xl" />

      <Card className="surface-grid interactive-card relative overflow-hidden rounded-[32px] border-border/70 bg-card/92 shadow-card">
        <CardHeader className="gap-6 border-b border-border/60 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <Reveal delay={220} className="space-y-3">
              <Badge variant="surface" className="w-fit gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                Product preview
              </Badge>
              <div className="space-y-2">
                <CardTitle className="max-w-md text-[1.7rem] leading-tight">
                  A workspace your team can read at a glance.
                </CardTitle>
                <CardDescription className="max-w-lg leading-7">
                  Surface progress, owners, and next steps in one polished view.
                </CardDescription>
              </div>
            </Reveal>

            <Reveal delay={300} direction="left">
              <div className="interactive-card-soft rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-soft">
                <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Live workspace
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  6 items need attention today.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {previewMetrics.map((metric, index) => (
              <Reveal key={metric.label} delay={340 + index * 80} distance="sm">
                <div
                  className={cn(
                    "interactive-card-soft rounded-2xl border border-border/70 p-4 shadow-soft",
                    metricToneClasses[metric.tone ?? "default"],
                  )}
                >
                  <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p className="font-heading text-2xl font-semibold text-foreground">{metric.value}</p>
                    <span className="inline-flex items-center gap-1 text-caption font-semibold text-muted-foreground">
                      <ArrowUpRight className="size-3.5" />
                      {metric.change}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-6">
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal delay={260} className="h-full">
              <div className="interactive-card-soft h-full rounded-[24px] border border-border/70 bg-background/78 p-5 shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Weekly activity
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Show momentum with a quick view of what moved this week.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-caption font-semibold text-emerald-700">
                    <TrendingUp className="size-3.5" />
                    +18%
                  </div>
                </div>

                <div className="mt-6 flex h-36 items-end gap-3">
                  {previewChartPoints.map((point, index) => (
                    <Reveal
                      key={point.label}
                      delay={420 + index * 50}
                      distance="sm"
                      className="flex flex-1 flex-col items-center gap-3"
                    >
                      <div className="flex h-full w-full items-end rounded-2xl bg-muted/80 p-2">
                        <div
                          className="w-full rounded-xl bg-gradient-to-t from-secondary to-secondary/55"
                          style={{ height: `${point.value}%` }}
                        />
                      </div>
                      <span className="text-caption font-medium text-muted-foreground">
                        {point.label}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={340} direction="left" className="h-full">
              <div className="interactive-card-soft h-full rounded-[24px] border border-border/70 bg-background/78 p-5 shadow-soft">
                <div>
                  <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Active queue
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Make owners, deadlines, and status easy to understand.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {previewWorkflowItems.map((item, index) => (
                    <Reveal key={item.name} delay={460 + index * 70} distance="sm">
                      <div className="interactive-card-soft rounded-2xl border border-border/70 bg-card/90 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="mt-1 text-caption text-muted-foreground">
                              {item.owner} | Due {item.due}
                            </p>
                          </div>
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-1 text-caption font-semibold",
                              workflowToneClasses[item.tone],
                            )}
                          >
                            {item.status}
                          </span>
                        </div>

                        <div className="mt-4 h-2 rounded-full bg-muted">
                          <div
                            className="h-2 rounded-full bg-secondary"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={420}>
            <div className="interactive-card-soft rounded-[24px] border border-border/70 bg-background/80 p-5 shadow-soft">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Live activity
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A few recent updates make the preview feel alive.
                  </p>
                </div>
                <Badge variant="outline" className="w-fit">
                  Team activity sync
                </Badge>
              </div>

              <div className="mt-5 grid gap-3">
                {previewActivityItems.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <Reveal key={item.title} delay={520 + index * 70} distance="sm">
                      <div className="interactive-card-soft rounded-2xl border border-border/70 bg-card/90 p-4">
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-secondary/10 p-2 text-secondary">
                            <Icon className="size-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">{item.title}</p>
                            <p className="text-caption text-muted-foreground">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </CardContent>
      </Card>
    </div>
  )
}
