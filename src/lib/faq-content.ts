export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: "setup-time",
    question: "How long does setup usually take?",
    answer:
      "Most teams can get RelayOps running in a few hours. Starter teams usually launch one or two workflows on day one, while larger teams often spend a few days mapping routing rules and integrations.",
  },
  {
    id: "integrations",
    question: "Do you integrate with the tools we already use?",
    answer:
      "Yes. RelayOps connects with tools like Slack, Jira, HubSpot, Google Workspace, and other common operational systems so teams can keep work moving without rebuilding their stack.",
  },
  {
    id: "free-trial",
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan starts with a 14-day free trial, and no credit card is required to explore the core workflow automation and routing experience.",
  },
  {
    id: "cancel",
    question: "Can we cancel anytime?",
    answer:
      "Yes. Monthly plans can be canceled anytime, and annual plans continue through the billed term. We keep the commitment model straightforward so teams can evaluate RelayOps without hidden surprises.",
  },
  {
    id: "larger-teams",
    question: "Is RelayOps suitable for larger teams or multiple departments?",
    answer:
      "It is. Team and Business plans are designed for cross-functional operations, customer success, revenue, and finance workflows where ownership, escalations, and reporting need to stay consistent across more stakeholders.",
  },
  {
    id: "onboarding-support",
    question: "Do you offer onboarding support?",
    answer:
      "Yes. Team plans include guided setup resources, and Business plans add hands-on onboarding support for workflow design, rollout planning, and admin configuration.",
  },
  {
    id: "growing-teams",
    question: "How does pricing work as our team grows?",
    answer:
      "Most teams start on Starter or Team and upgrade when they need more automations, integrations, or admin controls. Annual billing lowers the monthly rate by 20 percent across every plan.",
  },
  {
    id: "demo",
    question: "Can we book a demo before committing?",
    answer:
      "Absolutely. If you want help mapping RelayOps to your existing workflows, you can book a demo and walk through the product with our team before you start a trial.",
  },
]
