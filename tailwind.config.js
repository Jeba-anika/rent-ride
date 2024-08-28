/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "darkBg": '#231A31',
        "rrSkyBlue": "#8AB2FF",
        "rrWineRed": "#E42F45",
        "rrMaroon": "#B42B3F"
      }
    },
  },
  plugins: [],
}

