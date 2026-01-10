/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        apple: {
          bg: '#000000',
          dark: '#1d1d1f',
          gray: '#86868b',
          blue: '#0066cc',
          text: '#f5f5f7'
        }
      }
    },
  },
  plugins: [],
}
