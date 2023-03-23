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
        hd1:'#2b353a',
        hd2:'#ffdf9e',
        hd3:'#b38645',
        hd4:'#0092b3',
        hd5:'#21282c'
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
