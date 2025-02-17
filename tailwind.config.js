/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f4ebe4",
        secondary: "",
      },
      fontFamily: {
        raleway: ["Raleway"],
        manrope: ["Manrope"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};