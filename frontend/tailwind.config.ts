import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-white-100": "#FFFFFF",
        "background-white-200":"#FFF9E9",
        "background-blue-300":"#070425",
        "background-blue-100":"#1700EB",
        "background-blue-200":"#0B0720",
        "yellow-100":"#FFBF00",
        "yellow-200":"#997300",
        "gray-100":"#67737E"
      },
      fontFamily: {
        "helvetica": ['Helvetica', 'sans-serif'],
      },
      fontSize: {
        'heading': '60px',
        'subheading':'24px',
        'body':'18px',
        'cta': '16px',
      },
      borderRadius: {
        "cards-raduis":"8px",
        "cta-raduis":"2px"
      }
    },
  },
  plugins: [],
} satisfies Config;
