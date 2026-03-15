import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  heroCallouts,
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
  const LeadingCalloutIcon = heroCallouts[0].icon
  const TrailingCalloutIcon = heroCallouts[1].icon

  return (
    <div className="relative">
      <div className="absolute inset-x-12 top-10 -z-10 h-40 rounded-full bg-secondary/12 blur-3xl" />

      <div className="absolute -left-5 top-12 hidden max-w-[12rem] rounded-2xl border border-border/70 bg-background/90 p-4 shadow-soft backdrop-blur xl:block">
        <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {heroCallouts[0].label}
        </p>
        <div className="mt-3 flex items-start gap-3">
          <div className="rounded-xl bg-primary/10 p-2 text-primary">
            <LeadingCalloutIcon className="size-4" />
          </div>
          <p className="text-sm font-medium text-foreground">{heroCallouts[0].value}</p>
        </div>
      </div>

      <div className="absolute -right-5 bottom-12 hidden max-w-[12rem] rounded-2xl border border-border/70 bg-background/90 p-4 shadow-soft backdrop-blur xl:block">
        <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {heroCallouts[1].label}
        </p>
        <div className="mt-3 flex items-start gap-3">
          <div className="rounded-xl bg-secondary/10 p-2 text-secondary">
            <TrailingCalloutIcon className="size-4" />
          </div>
          <p className="text-sm font-medium text-foreground">{heroCallouts[1].value}</p>
        </div>
      </div>

      <Card className="surface-grid relative overflow-hidden rounded-[32px] border-border/70 bg-card/92 shadow-card transition-transform duration-300 motion-reduce:transform-none hover:-translate-y-1">
        <CardHeader className="gap-6 border-b border-border/60 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3">
              <Badge variant="surface" className="w-fit gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                Live workflow overview
              </Badge>
              <div className="space-y-2">
                <CardTitle className="max-w-md text-[1.7rem] leading-tight">
                  Keep requests, owners, and SLA risk in one view.
                </CardTitle>
                <CardDescription className="max-w-lg">
                  A product preview teaser for the hero. The full dashboard story and deeper analytics section will land in a later sprint.
                </CardDescription>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-soft">
              <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                RelayOps AI
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                6 workflows need attention today.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {previewMetrics.map((metric) => (
              <div
                key={metric.label}
                className={cn(
                  "rounded-2xl border border-border/70 p-4 shadow-soft transition-transform duration-300 motion-reduce:transform-none hover:-translate-y-0.5",
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
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pt-6">
          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[24px] border border-border/70 bg-background/78 p-5 shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Workflow velocity
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Completed work this week across recurring operational flows.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-caption font-semibold text-emerald-700">
                  <TrendingUp className="size-3.5" />
                  +18%
                </div>
              </div>

              <div className="mt-6 flex h-36 items-end gap-3">
                {previewChartPoints.map((point) => (
                  <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                    <div className="flex h-full w-full items-end rounded-2xl bg-muted/80 p-2">
                      <div
                        className="w-full rounded-xl bg-gradient-to-t from-secondary to-secondary/55"
                        style={{ height: `${point.value}%` }}
                      />
                    </div>
                    <span className="text-caption font-medium text-muted-foreground">
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-border/70 bg-background/78 p-5 shadow-soft">
              <div>
                <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Ownership queue
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The next handoffs, approvals, and launch steps currently moving through the system.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {previewWorkflowItems.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-border/70 bg-card/90 p-4 transition-transform duration-300 motion-reduce:transform-none hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="mt-1 text-caption text-muted-foreground">
                          {item.owner} • Due {item.due}
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
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-border/70 bg-background/80 p-5 shadow-soft">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Live activity
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Recent automation, escalation, and team updates flowing through RelayOps.
                </p>
              </div>
              <Badge variant="outline" className="w-fit">
                Team activity sync
              </Badge>
            </div>

            <div className="mt-5 grid gap-3">
              {previewActivityItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/90 p-4"
                  >
                    <div className="rounded-xl bg-secondary/10 p-2 text-secondary">
                      <Icon className="size-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-caption text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
