/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors:{
        main: '#707afe',
        bgMain: '#1C1D2B',
        bgSecond: '#ffffff1a'
      }
    },
  },
  plugins: [],
}

