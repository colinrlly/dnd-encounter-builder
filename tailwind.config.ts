import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4d7c0f",

          secondary: "#4d7c0f",

          accent: "#dc8850",

          neutral: "#2e282a",

          "base-100": "#e4d8b4",

          info: "#2463eb",

          success: "#16a249",

          warning: "#db7706",

          error: "#dc2828",
        },
      },
    ],
  },
};
export default config;
