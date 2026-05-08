/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tonBlue: '#0088CC',
        darkCard: '#1a1f2e',
        darkBg: '#0f141f',
      }
    },
  },
  plugins: [],
}