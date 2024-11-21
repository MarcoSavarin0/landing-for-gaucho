import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stolzLight: "var(--font-stolzlight)",
        stolzBold: "var(--font-stolzBold)",
        stolzMedium: "var(--font-stolzMedium)",
        stolzRegular: "var(--font-stolzRegular)",
      },
    },
  },
  plugins: [],
} satisfies Config;
