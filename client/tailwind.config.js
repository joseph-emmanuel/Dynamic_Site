/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        light: "#3b3b3b",
        medium: "#393c41",
        DEFAULT: "#000000",
      },
      white: {
        pure: "#FFFFFF",
        off: "#F5F5F5",
      },
      red: "#990000",
      primary: "#181A1F",
      secondary: "#FFFFFF",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
