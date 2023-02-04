/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hDarkBlue: "#012e3b",
        hBlue: "#03475A",
        hLight: "#c9c5c6",
      },
      fontFamily: {
        dune: ["Dune"],
        reospec: ["Reospec"],
        rubic: ["Rubic"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
