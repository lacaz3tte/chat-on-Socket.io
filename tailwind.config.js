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
        //light theme
        h1:'#fffbff',
        h2:'#3c3a4d',
        h3:'#454d70',
        h4:'#575ccd',
        h5:'#F0F5FC',
        //dark theme
        hd1:'#0b2031',
        hd2:'#bfe7e7',
        hd3:'#a6bdae',
        hd4:'#39b0b2',
        hd5:'#0E2B42'
      },
      fontFamily: {
        dune: ["Dune"],
        reospec: ["Reospec"],
        rubic: ["Rubic"],
        rubic_light:["Rubic-Light"]
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
