/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2A41CB",
        },
        dark: {
          100: "#0D1440",
          200: "#05081A",
        },
        light: {
          100: "#F2F8FF",
          200: "#E6E8F2",
        },
      },
    },
  },
  plugins: [],
};
