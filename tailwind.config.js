/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: {
          DEFAULT: "#FCBB6B",
          100: "#FDC684",
          200: "#FCC178"
        },
        white: {
          DEFAULT: "#FFF",
          100: "#FFFFFF",
          200: "#F5F5F5"
        },
        gray: {
          100: "#999999",
        },
      },
      fontFamily: {
        sfthin: ["SF Pro Display Thin", "SF Pro Text Thin", "system-ui", "sans-serif"],
        sfultralight: ["SF Pro Display Ultralight", "SF Pro Text Ultralight", "system-ui", "sans-serif"],
        sflight: ["SF Pro Display Light", "SF Pro Text Light", "system-ui", "sans-serif"],
        sfregular: ["SF Pro Display Regular", "SF Pro Text Regular", "system-ui", "sans-serif"],
        sfmedium: ["SF Pro Display Medium", "SF Pro Text Medium", "system-ui", "sans-serif"],
        sfsemibold: ["SF Pro Display Semibold", "SF Pro Text Semibold", "system-ui", "sans-serif"],
        sfbold: ["SF Pro Display Bold", "SF Pro Text Bold", "system-ui", "sans-serif"],
        sfheavy: ["SF Pro Display Heavy", "SF Pro Text Heavy", "system-ui", "sans-serif"],
        sfblack: ["SF Pro Display Black", "SF Pro Text Black", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};