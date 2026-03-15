import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressMeter } from "@/components/ui/progress-meter"
import { StatusPill } from "@/components/ui/status-pill"
import {
  bottleneckItems,
  intakeRequest,
  showcaseActivity,
  ShowcaseAlertIcon,
  ShowcaseClockIcon,
  showcaseMeta,
  showcaseSummaryStats,
  showcaseTopNav,
  showcaseWorkflows,
  workloadOwners,
} from "@/lib/product-showcase"
import { cn } from "@/lib/utils"

const progressToneByStatus = {
  success: "success",
  warning: "warning",
  critical: "critical",
  info: "brand",
} as const

const summaryToneClasses = {
  default: "bg-background/78",
  accent: "bg-chip/90",
  critical: "bg-rose-50/90",
} as const

function WorkflowCard({
  name,
  stage,
  owner,
  progress,
  sla,
  status,
  tone,
}: (typeof showcaseWorkflows)[number]) {
  return (
    <div className="interactive-card rounded-[22px] border border-border/70 bg-background/82 p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-caption text-muted-foreground">{stage}</p>
        </div>
        <StatusPill tone={tone}>{status}</StatusPill>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between gap-3 text-caption text-muted-foreground">
          <span>Owner: {owner}</span>
          <span>{progress}% complete</span>
        </div>
        <ProgressMeter
          value={progress}
          tone={progressToneByStatus[tone]}
          aria-label={`${name} progress`}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card/90 px-3 py-2">
        <div className="flex items-center gap-2 text-caption text-muted-foreground">
          <ShowcaseClockIcon className="size-3.5" />
          SLA timer
        </div>
        <span className="text-caption font-semibold text-foreground">{sla}</span>
      </div>
    </div>
  )
}

function WorkloadRow({
  name,
  role,
  utilization,
  activeTasks,
  overdueTasks,
}: (typeof workloadOwners)[number]) {
  return (
    <div className="interactive-card-soft space-y-3 rounded-[22px] border border-border/70 bg-background/82 p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-caption text-muted-foreground">{role}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-foreground">{activeTasks} active</p>
          <p className="text-caption text-muted-foreground">{overdueTasks} overdue</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-caption text-muted-foreground">
          <span>Workload</span>
          <span>{utilization}% capacity</span>
        </div>
        <ProgressMeter
          value={utilization}
          tone={overdueTasks > 1 ? "warning" : "brand"}
          aria-label={`${name} workload`}
        />
      </div>
    </div>
  )
}

export function ProductDashboardCanvas() {
  return (
    <div className="-mx-1 overflow-x-auto px-1 pb-4 sm:mx-0 sm:px-0">
      <div className="min-w-[720px] rounded-[34px] border border-border/70 bg-card/95 p-4 shadow-card sm:p-5">
        <div className="flex flex-col gap-4 rounded-[26px] border border-border/70 bg-background/82 px-4 py-3 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary/12 font-heading text-sm font-semibold text-secondary">
              RO
            </div>
            <div>
              <p className="font-heading text-base font-semibold text-foreground">RelayOps</p>
              <p className="text-caption text-muted-foreground">{showcaseMeta.workspaceLabel}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 xl:flex">
            {showcaseTopNav.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/90 px-3 py-2 text-caption font-semibold text-muted-foreground"
                >
                  <Icon className="size-3.5" />
                  {item.label}
                </div>
              )
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-3 self-stretch sm:self-auto">
            <Badge variant="surface" className="gap-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              {showcaseMeta.liveSyncLabel}
            </Badge>
            <span className="hidden text-caption text-muted-foreground sm:inline">
              {showcaseMeta.updatedLabel}
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          {showcaseSummaryStats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "rounded-[24px] border border-border/70 p-4 shadow-soft lg:col-span-4",
                summaryToneClasses[stat.tone ?? "default"],
              )}
            >
              <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="font-heading text-2xl font-semibold text-foreground">{stat.value}</p>
                <div className="inline-flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-caption font-semibold text-muted-foreground">
                  <CheckCircle2 className="size-3.5 text-secondary" />
                  Live
                </div>
              </div>
              <p className="mt-2 text-caption text-muted-foreground">{stat.detail}</p>
            </div>
          ))}

          <Card className="lg:col-span-7 border-border/70 bg-card/96 shadow-card">
            <CardHeader className="gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-[1.35rem]">Workflow status board</CardTitle>
                  <CardDescription>
                    Recurring work stays visible by owner, progress, SLA timer, and status.
                  </CardDescription>
                </div>
                <Badge variant="outline">{showcaseMeta.attentionLabel}</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {showcaseWorkflows.map((workflow) => (
                <WorkflowCard key={workflow.name} {...workflow} />
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-5 border-border/70 bg-card/96 shadow-card">
            <CardHeader className="gap-3">
              <div className="space-y-1">
                <CardTitle className="text-[1.35rem]">Team workload</CardTitle>
                <CardDescription>
                  A quick read on who is carrying active work and where overdue tasks are building.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {workloadOwners.map((owner) => (
                <WorkloadRow key={owner.name} {...owner} />
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 border-border/70 bg-card/96 shadow-card">
            <CardHeader className="gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-[1.35rem]">Bottleneck alerts</CardTitle>
                  <CardDescription>
                    At-risk workflows, blocked tasks, and pending escalations.
                  </CardDescription>
                </div>
                <div className="rounded-2xl bg-rose-50 p-2 text-rose-700">
                  <ShowcaseAlertIcon className="size-[1.125rem]" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {bottleneckItems.map((item) => (
                <div
                  key={item.title}
                  className="interactive-card-soft rounded-[22px] border border-rose-100 bg-rose-50/80 p-4 shadow-soft"
                >
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-2 text-caption text-muted-foreground">{item.detail}</p>
                  <StatusPill tone="critical" className="mt-3">
                    {item.impact}
                  </StatusPill>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 border-border/70 bg-card/96 shadow-card">
            <CardHeader className="gap-3">
              <div className="space-y-1">
                <CardTitle className="text-[1.35rem]">Request intake</CardTitle>
                <CardDescription>
                  New operational work arrives with enough context to route it quickly.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-[22px] border border-border/70 bg-background/82 p-4 shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-foreground">{intakeRequest.title}</p>
                    <p className="mt-1 text-caption text-muted-foreground">
                      Submitted {intakeRequest.submittedAt}
                    </p>
                  </div>
                  <StatusPill tone={intakeRequest.priority === "High" ? "critical" : "warning"}>
                    {intakeRequest.priority} priority
                  </StatusPill>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-card/90 px-3 py-3">
                    <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Requester
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {intakeRequest.requester}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card/90 px-3 py-3">
                    <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Type
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {intakeRequest.requestType}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-border/70 bg-card/90 px-3 py-3">
                  <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Request details
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{intakeRequest.detail}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 border-border/70 bg-card/96 shadow-card">
            <CardHeader className="gap-3">
              <div className="space-y-1">
                <CardTitle className="text-[1.35rem]">Activity feed</CardTitle>
                <CardDescription>
                  Recent approvals, launches, and team updates flowing through RelayOps.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {showcaseActivity.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="interactive-card-soft flex items-start gap-3 rounded-[22px] border border-border/70 bg-background/82 p-4 shadow-soft"
                  >
                    <div className="rounded-xl bg-secondary/10 p-2 text-secondary">
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <span className="shrink-0 text-caption text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-1 text-caption text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
