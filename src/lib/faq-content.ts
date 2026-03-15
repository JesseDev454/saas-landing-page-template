export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: "setup-time",
    question: "How fast can we get started?",
    answer: "Most teams can get set up in a few hours. More complex rollouts usually take a few days.",
  },
  {
    id: "integrations",
    question: "Will it work with our current tools?",
    answer: "Yes. RelayOps connects with common tools like Slack, Jira, HubSpot, and Google Workspace.",
  },
  {
    id: "free-trial",
    question: "Is there a free trial?",
    answer: "Yes. Every plan includes a 14-day free trial, and no credit card is required.",
  },
  {
    id: "change-plans",
    question: "Can we change plans later?",
    answer: "Absolutely. You can upgrade as your team grows or change plans at the end of your billing cycle.",
  },
  {
    id: "larger-teams",
    question: "Is it a fit for larger teams?",
    answer: "Yes. Team and Business are built for larger groups that need more visibility, controls, and support.",
  },
  {
    id: "demo",
    question: "Can we book a demo first?",
    answer: "Absolutely. You can book a demo anytime before starting a trial.",
  },
]
