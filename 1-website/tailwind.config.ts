import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#F3F3F3",
      foreground: "#121212",
      yellow: "#FFCD00",
      green: "#0E9749",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
