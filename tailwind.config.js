/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BRAND: {
          deepBlue: '#001F3F',
          white: '#FFFFFF',
          teal: '#008080', // Adjust as needed, prompt said Teal/Aqua
          aqua: '#00FFFF',
          gray: '#F3F4F6'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
