import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // New violet/cyan accent colors
        violet: {
          DEFAULT: "hsl(262 83% 58%)",
          light: "hsl(262 83% 68%)",
          dark: "hsl(262 83% 48%)",
        },
        cyan: {
          DEFAULT: "hsl(186 100% 42%)",
          light: "hsl(186 100% 52%)",
          dark: "hsl(186 100% 32%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
        'glow-violet': '0 0 40px hsl(262 83% 58% / 0.25)',
        'glow-cyan': '0 0 40px hsl(186 100% 42% / 0.25)',
        'glow-lg': '0 0 60px hsl(262 83% 58% / 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotateX(0)" },
          "50%": { transform: "translateY(-15px) rotateX(2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "tilt-in": {
          from: { opacity: "0", transform: "perspective(1000px) rotateX(-15deg) translateY(30px)" },
          to: { opacity: "1", transform: "perspective(1000px) rotateX(0) translateY(0)" },
        },
        "flip-in": {
          from: { opacity: "0", transform: "perspective(1000px) rotateY(-30deg) translateX(-50px)" },
          to: { opacity: "1", transform: "perspective(1000px) rotateY(0) translateX(0)" },
        },
        "zoom-rotate": {
          from: { opacity: "0", transform: "scale(0.8) rotate(-5deg)" },
          to: { opacity: "1", transform: "scale(1) rotate(0)" },
        },
        "slide-up-3d": {
          from: { opacity: "0", transform: "perspective(1000px) translateZ(-100px) translateY(50px)" },
          to: { opacity: "1", transform: "perspective(1000px) translateZ(0) translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(262 83% 58% / 0.2)" },
          "50%": { boxShadow: "0 0 60px hsl(262 83% 58% / 0.4)" },
        },
        "glow-pulse-cyan": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(186 100% 42% / 0.2)" },
          "50%": { boxShadow: "0 0 60px hsl(186 100% 42% / 0.4)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "tilt-in": "tilt-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "flip-in": "flip-in 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "zoom-rotate": "zoom-rotate 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "slide-up-3d": "slide-up-3d 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glow-pulse-cyan": "glow-pulse-cyan 2s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "border-flow": "border-flow 3s linear infinite",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;