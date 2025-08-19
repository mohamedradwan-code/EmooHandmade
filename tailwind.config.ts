import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Egyptian Color Palette
        ivory: "var(--ivory)",
        blush: "var(--blush)",
        "nile-blue": "var(--nile-blue)",
        "gold-thread": "var(--gold-thread)",
        charcoal: "var(--charcoal)",
        "royal-gold": "var(--royal-gold)",
        "egyptian-turquoise": "var(--egyptian-turquoise)",
        "soft-pink": "var(--soft-pink)",
        "sage-green": "var(--sage-green)",
        
        // Base Colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)"],
        english: ["var(--font-english)"],
        display: ["var(--font-display)"],
        sans: ["var(--font-english)"],
        serif: ["var(--font-arabic)"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gentle-glow": {
          "0%": {
            filter: "drop-shadow(0 0 10px hsl(45, 57%, 72%))",
          },
          "100%": {
            filter: "drop-shadow(0 0 20px hsl(45, 57%, 72%))",
          },
        },
        "pulse-green": {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(37, 211, 102, 0.7)",
          },
          "70%": {
            "box-shadow": "0 0 0 10px rgba(37, 211, 102, 0)",
          },
          "100%": {
            "box-shadow": "0 0 0 0 rgba(37, 211, 102, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-glow": "gentle-glow 3s ease-in-out infinite alternate",
        "pulse-green": "pulse-green 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
