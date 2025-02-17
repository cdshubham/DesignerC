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
        "bronze-border-gradient":
          "linear-gradient(to right, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "blue-gradient":
          "linear-gradient(to bottom, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "xandre-experience-gradient":
          "linear-gradient(to bottom, #FFFFFF 0%, #E0EBF5 100%)",
        "blue-gold-gradient": "linear-gradient(to left, #C69A65, #192741)",
        "hotel-info": "linear-gradient(90deg, #ECF0F3 0%, #F9F1E7 100%)",

        "button-gradient": "linear-gradient(to right, #8FC8FF, #F0D2A0)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-intro": "linear-gradient(to right, #8291A0, #FAE2C6)",
        "light-linear-payment-gradient":
          "linear-gradient(to right, #ECF0F3, #F9F1E7)",
        "gradient-text-primary":
          "linear-gradient(270deg, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "gradient-text-secondary":
          "linear-gradient(180deg, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "gradient-dest": "linear-gradient(270deg, #C69A65 0%, #192741 100%)",
        "gradient-glass": "linear-gradient(90deg, #8291A0 0%, #FAE2C6 100%)",
        "gradient-login": `
        radial-gradient(circle at top left, #ffffff, rgba(255, 255, 255, 0) 70%),
        radial-gradient(circle at bottom left, #192741, rgba(25, 39, 65, 0) 70%),
        radial-gradient(circle at top right, #C69A65, rgba(198, 154, 101, 0) 70%)
      `,
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
        "darkblue": "#0E014B",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      fontSize: {
        heading: "60px",
        subheading: "24px",
        body: "18px",
        cta: "16px",
        footer: "14px",
        footersmall: "12px",
        mediumheading: "48px",
      },
      borderRadius: {
        "cards-raduis": "8px",
        "cta-raduis": "2px",
      },
    },
  },
  plugins: [],
} satisfies Config;
