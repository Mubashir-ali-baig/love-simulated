/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BA435F",
        secondary: "#F4D2D7",
        background: "#F8E6E9",
      },
    },
  },
  plugins: [],
};
