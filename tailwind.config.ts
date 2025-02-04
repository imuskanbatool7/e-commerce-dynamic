import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Covers all files inside src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899", // Main pink theme color
        secondary: "#fbcfe8", // Light pink shade
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
  ],
};

export default config;
