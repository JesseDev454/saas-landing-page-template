import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        chip: {
          DEFAULT: "hsl(var(--chip) / <alpha-value>)",
          foreground: "hsl(var(--chip-foreground) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--surface-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 6px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "var(--radius-lg)",
        "2xl": "var(--radius-xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        button: "var(--shadow-button)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["Sora", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "var(--text-display-lg)",
          {
            lineHeight: "1",
            letterSpacing: "-0.04em",
            fontWeight: "600",
          },
        ],
        "display-md": [
          "var(--text-display-md)",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.035em",
            fontWeight: "600",
          },
        ],
        heading: [
          "var(--text-heading)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "var(--text-body-lg)",
          {
            lineHeight: "1.75",
          },
        ],
        body: [
          "var(--text-body)",
          {
            lineHeight: "1.7",
          },
        ],
        caption: [
          "var(--text-caption)",
          {
            lineHeight: "1.4",
          },
        ],
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      spacing: {
        section: "var(--space-section)",
        "section-tight": "var(--space-section-tight)",
        content: "var(--space-content)",
      },
    },
  },
  plugins: [animate],
} satisfies Config

export default config
