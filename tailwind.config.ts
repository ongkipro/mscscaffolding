import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        safety: {
          DEFAULT: "#ea580c", // orange-600
          hover: "#c2410c",   // orange-700
          light: "#ffedd5",   // orange-100
        },
        k3: {
          DEFAULT: "#10b981", // emerald-500
          dark: "#059669",    // emerald-600
          light: "#d1fae5",   // emerald-100
        },
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
