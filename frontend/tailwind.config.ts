import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-pink-solution":
          "linear-gradient(to bottom, #3C1750, #BD41AD)",
        "gradient-green-solution":
          "linear-gradient(to bottom, #193844, #29C77C)",
        "gradient-blue-solution":
          "linear-gradient(to bottom, #11015A, #370197)",
        "gradient-gold-solution":
          "linear-gradient(to bottom, #3A2A29, #E4B156)",
        "gradient-primary":
          "linear-gradient(to bottom, #080522, #4031C6)",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      fontSize: {
        largeheading:"60px",
        heading: "48px",
        subheading: "24px",
        body: "18px",
        cta: "16px",
        footer: "14px",
        footersmall: "12px",
        mediumheading: "48px",
        avg: "32px",
      },
      borderRadius: {
        "cards-raduis": "8px",
        "cta-raduis": "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
