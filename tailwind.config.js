/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./store/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      md: "768px",
      lg: "1280px",
    },
  },
  colors: {
    primary: {
      DEFAULT: colors.neutral["700"],
      dark: colors.neutral["300"],
    },
    secondary: {
      DEFAULT: "#06b6d4",
      dark: "#0e7490",
    },
  },
  darkMode: "class",
  plugins: [],
}
