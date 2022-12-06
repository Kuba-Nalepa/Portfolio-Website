/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'my-own': '0 4px 6px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
}
