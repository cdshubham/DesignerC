import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lap: "1440px",
        xsm: "380",
      },
      backgroundImage: {
        "gradient-pink-solution":
          "linear-gradient(to bottom, #3C1750, #BD41AD)",
        "gradient-green-solution":
          "linear-gradient(to bottom, #193844, #29C77C)",
        "gradient-blue-solution":
          "linear-gradient(to bottom, #11015A, #370197)",
        "gradient-gold-solution":
          "linear-gradient(to bottom, #3A2A29, #E4B156)",
        "gradient-primary": "linear-gradient(to bottom, #080522, #4031C6)",
        "gradient-cmos": "linear-gradient(to bottom, #1201B1, #5C11C4)",
        "gradient-marketingcard":
          "linear-gradient(to bottom right, #F52DD5, #5B6CFF)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "background-white-100": "#FFFFFF",
        "background-white-200": "#FFF9E9",
        "background-blue-300": "#070425",
        "background-blue-100": "#1700EB",
        "background-blue-200": "#0B0720",
        "yellow-100": "#FFBF00",
        "yellow-200": "#997300",
        "gold-yellow": "#FFD97C",
        "gray-100": "#67737E",
        "line-blue": "#D1CCFF",
        "light-violet": "#998FD3",
        "light-violet-text": "#8A7ECD",
        "highlight-purple": "#BF80FF",
        "highlight-green": "#ADFFD8",
        darkblue: "#0E014B",
        "text-grey": "#171A1C",
        "grey-300": "#464D53",
        "gray-200":"#949494",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      fontSize: {
        largeheading: "60px",
        heading: "60px",
        subheading: "24px",
        body: "18px",
        cta: "16px",
        footer: "14px",
        footersmall: "12px",
        mediumheading: "48px",
        avg: "32px",
      },
      borderRadius: {
        cardradius: "4px",
        "cta-raduis": "2px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
