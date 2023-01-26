/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors : {
        'hMint':'#00e5b3',
        'hGreen':'#1f8368',
        'hDarkGreen':'#172c35',
        'hWhite':'#eef0e1'
      },
    }
  },
  plugins: [
    
  ],
}