/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "@primary": "#10b981",
        "@gray-900": "#161819",
        "@gray-600": "#1C1D21",
        "@gray-500": "#29282D",
        "@gray-400": "#313135",
        "@gray-300": "#A0A0A7",
        "@gray-200": "#D5D4D9",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        normal: "Roboto_400Regular",
        medium: "Roboto_500Medium",
        bold: "Roboto_700Bold",
        "font-extrabold": "Roboto_900Black",
      },
    },
  },
  plugins: [],
};
