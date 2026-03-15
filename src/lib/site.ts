import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Blocks,
  Github,
  LayoutTemplate,
  Layers3,
  Linkedin,
  Mail,
  MessageSquareQuote,
  ShieldCheck,
  WalletCards,
  Workflow,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
}

export type FooterLinkGroup = {
  title: string
  links: NavItem[]
}

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export type FoundationPillar = {
  title: string
  description: string
  icon: LucideIcon
}

export type HighlightStat = {
  label: string
  value: string
}

export type PlaceholderSectionContent = {
  id: string
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  icon: LucideIcon
}

export const brand = {
  name: "RelayOps",
  monogram: "RO",
  tagline: "Run recurring work without the follow-up.",
  summary:
    "Fictional workflow operations SaaS used as the product anchor for this portfolio template.",
}

export const navItems: NavItem[] = [
  { label: "Foundation", href: "#foundation" },
  { label: "Tokens", href: "#layout-system" },
  { label: "Placeholders", href: "#section-placeholders" },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: navItems,
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Email", href: "#", icon: Mail },
]

export const foundationHighlights: HighlightStat[] = [
  { label: "Container", value: "1200px max width" },
  { label: "Buttons", value: "4 CTA variants" },
  { label: "Tokens", value: "Type, color, spacing" },
  { label: "Shells", value: "Navbar + footer" },
]

export const foundationPillars: FoundationPillar[] = [
  {
    title: "Design tokens",
    description:
      "Shared color, radius, shadow, spacing, and typography values are centralized before section work begins.",
    icon: Layers3,
  },
  {
    title: "Layout primitives",
    description:
      "Container, Section, and SectionHeader enforce a consistent visual rhythm across future landing page sections.",
    icon: Workflow,
  },
  {
    title: "UI primitives",
    description:
      "Button, Card, Badge, StatChip, and IconContainer create a reusable component baseline for upcoming sprints.",
    icon: Blocks,
  },
  {
    title: "Navigation shell",
    description:
      "Responsive navigation and a structured footer already frame the page, so later sections can focus on content and conversion.",
    icon: LayoutTemplate,
  },
]

export const placeholderSections: PlaceholderSectionContent[] = [
  {
    id: "hero-placeholder",
    eyebrow: "Hero",
    title: "Primary conversion story",
    description:
      "Reserved for the headline, support copy, CTAs, and trust messaging defined in the Sprint 0 blueprint.",
    bullets: ["Headline and subheadline", "Primary and secondary CTA pair", "Trust strip or logo row"],
    icon: LayoutTemplate,
  },
  {
    id: "preview-placeholder",
    eyebrow: "Product Preview",
    title: "Dashboard mockup and proof points",
    description:
      "This section will showcase a believable RelayOps interface and the product-led story around operational visibility.",
    bullets: ["Interface mockup", "Status indicators", "Supporting stat callouts"],
    icon: BarChart3,
  },
  {
    id: "features-placeholder",
    eyebrow: "Features",
    title: "Benefits and capability framing",
    description:
      "Future feature cards will connect workflow automation, intake, handoffs, and reporting to concrete outcomes.",
    bullets: ["Outcome-led feature cards", "Operational use cases", "Clear benefit copy"],
    icon: Blocks,
  },
  {
    id: "proof-placeholder",
    eyebrow: "Social Proof",
    title: "Trust-building section",
    description:
      "Testimonials, logo treatments, and outcome metrics will be added here once the product story is in place.",
    bullets: ["Customer proof", "Result-oriented metrics", "Credibility cues"],
    icon: MessageSquareQuote,
  },
  {
    id: "pricing-placeholder",
    eyebrow: "Pricing",
    title: "Plan comparison and CTA logic",
    description:
      "The pricing area is intentionally deferred so the shared card system and CTA hierarchy are already established first.",
    bullets: ["Plan cards", "Most popular emphasis", "Monthly and annual toggle"],
    icon: WalletCards,
  },
  {
    id: "faq-placeholder",
    eyebrow: "FAQ",
    title: "Objection handling and reassurance",
    description:
      "An accordion-based FAQ will live here in a later sprint to handle setup, integrations, support, and commitment questions.",
    bullets: ["Accordion behavior", "Objection handling", "Conversion support"],
    icon: ShieldCheck,
  },
]
