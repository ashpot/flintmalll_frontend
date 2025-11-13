/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#104079',
        primaryLight: '#406694',
        primaryInput: '#708CAF',
        primaryDull: '#9FB3C9',
        secondary: '#00BEF3',
        secondaryLight: '#4CD2F6',
      },
    },
  },
  plugins: [],
}
