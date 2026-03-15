import type { ReactNode } from "react"
import type { FeatureHighlightId } from "@/lib/feature-content"
import {
  automationFlowSteps,
  automationSummaryChips,
  automationTemplates,
  bottleneckList,
  bottleneckSignals,
  ownershipAutomationNotes,
  ownershipRoster,
  ownershipRouteRules,
} from "@/lib/feature-content"
import { Badge } from "@/components/ui/badge"
import { ProgressMeter } from "@/components/ui/progress-meter"
import { StatusPill } from "@/components/ui/status-pill"
import { cn } from "@/lib/utils"

function VisualFrame({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <div className="surface-grid overflow-hidden rounded-[30px] border border-border/70 bg-card/94 p-4 shadow-card sm:p-5">
      <div className="flex items-start justify-between gap-4 rounded-[22px] border border-border/70 bg-background/84 px-4 py-3 shadow-soft">
        <div>
          <p className="font-heading text-base font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-caption text-muted-foreground">{subtitle}</p>
        </div>
        <Badge variant="surface">RelayOps</Badge>
      </div>

      <div className="mt-4">{children}</div>
    </div>
  )
}

function AutomationVisual() {
  return (
    <VisualFrame
      title="Template library"
      subtitle="Recurring work starts from a repeatable playbook."
    >
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-3">
          {automationTemplates.map((template) => (
            <div
              key={template.name}
              className="interactive-card-soft rounded-[22px] border border-border/70 bg-background/84 p-4 shadow-soft"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground">{template.name}</p>
                  <p className="mt-1 text-caption text-muted-foreground">{template.steps}</p>
                </div>
                <StatusPill tone="success">Auto-run</StatusPill>
              </div>
              <p className="mt-3 text-caption text-muted-foreground">{template.automation}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="rounded-[22px] border border-border/70 bg-background/84 p-4 shadow-soft">
            <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Workflow automation
            </p>
            <div className="mt-4 space-y-3">
              {automationFlowSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-secondary/12 text-caption font-semibold text-secondary">
                    {index + 1}
                  </div>
                  <p className="text-sm text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {automationSummaryChips.map((chip) => (
              <div
                key={chip.label}
                className="rounded-[20px] border border-border/70 bg-card/90 px-3 py-3 text-center shadow-soft"
              >
                <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {chip.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">{chip.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  )
}

function BottleneckVisual() {
  return (
    <VisualFrame
      title="Workflow health"
      subtitle="SLA risk and blocked work surfaced before the team falls behind."
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {bottleneckSignals.map((signal) => (
            <div
              key={signal.label}
              className={cn(
                "rounded-[20px] border px-3 py-3 shadow-soft",
                signal.tone === "critical"
                  ? "border-rose-100 bg-rose-50/85"
                  : signal.tone === "warning"
                    ? "border-amber-100 bg-amber-50/85"
                    : "border-emerald-100 bg-emerald-50/85",
              )}
            >
              <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {signal.label}
              </p>
              <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                {signal.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {bottleneckList.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="interactive-card-soft rounded-[22px] border border-border/70 bg-background/84 p-4 shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "rounded-xl p-2",
                      item.tone === "critical"
                        ? "bg-rose-50 text-rose-700"
                        : item.tone === "warning"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-emerald-50 text-emerald-700",
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <StatusPill tone={item.tone === "success" ? "success" : item.tone}>
                        {index === 0 ? "Escalate now" : index === 1 ? "Blocked" : "Recovered"}
                      </StatusPill>
                    </div>
                    <p className="mt-2 text-caption text-muted-foreground">{item.detail}</p>
                    <div className="mt-3">
                      <ProgressMeter
                        value={index === 0 ? 88 : index === 1 ? 62 : 34}
                        tone={item.tone === "success" ? "success" : item.tone}
                        aria-label={`${item.title} risk level`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </VisualFrame>
  )
}

function OwnershipVisual() {
  return (
    <VisualFrame
      title="Routing and ownership"
      subtitle="Requests reach the right owner with workload visibility built in."
    >
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-3">
          <div className="rounded-[22px] border border-border/70 bg-background/84 p-4 shadow-soft">
            <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Routing rules
            </p>
            <div className="mt-4 space-y-3">
              {ownershipRouteRules.map((rule) => {
                const Icon = rule.icon

                return (
                  <div
                    key={rule.label}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-border/70 bg-card/90 px-3 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-secondary/10 p-2 text-secondary">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{rule.label}</p>
                        <p className="mt-1 text-caption text-muted-foreground">{rule.route}</p>
                      </div>
                    </div>
                    <StatusPill tone="info">Active</StatusPill>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[22px] border border-border/70 bg-background/84 p-4 shadow-soft">
            <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Ownership notes
            </p>
            <div className="mt-4 space-y-3">
              {ownershipAutomationNotes.map((note) => {
                const Icon = note.icon

                return (
                  <div key={note.title} className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{note.title}</p>
                      <p className="mt-1 text-caption text-muted-foreground">{note.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[22px] border border-border/70 bg-background/84 p-4 shadow-soft">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-caption font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Assigned owners
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Capacity and ownership stay visible while requests move.
              </p>
            </div>
            <Badge variant="outline">Live roster</Badge>
          </div>

          <div className="mt-4 space-y-3">
            {ownershipRoster.map((owner, index) => (
              <div
                key={owner.name}
                className="interactive-card-soft rounded-2xl border border-border/70 bg-card/90 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{owner.name}</p>
                    <p className="mt-1 text-caption text-muted-foreground">{owner.focus}</p>
                  </div>
                  <StatusPill tone={owner.tone}>{owner.tasks}</StatusPill>
                </div>
                <div className="mt-4">
                  <ProgressMeter
                    value={index === 0 ? 82 : index === 1 ? 68 : 54}
                    tone={owner.tone === "success" ? "success" : owner.tone === "warning" ? "warning" : "brand"}
                    aria-label={`${owner.name} workload status`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  )
}

export function FeatureHighlightVisual({ id }: { id: FeatureHighlightId }) {
  if (id === "automation") {
    return <AutomationVisual />
  }

  if (id === "bottlenecks") {
    return <BottleneckVisual />
  }

  return <OwnershipVisual />
}
