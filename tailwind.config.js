/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':'#5A87A1',
        'blue-light':'#5A87A11A',
        'grey':'#00000099'
      }
    },
  },
  plugins: [],
}
