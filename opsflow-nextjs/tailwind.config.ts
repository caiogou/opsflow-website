import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f2a4a",
          deep: "#0a1f38",
          mid: "#1a3a5c",
        },
        teal: {
          DEFAULT: "#1a9e8f",
          light: "#4ab8ae",
          pale: "#e8f7f4",
          muted: "#9fd8d0",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
