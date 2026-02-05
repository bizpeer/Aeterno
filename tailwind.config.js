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
        header: ['Inter', '"Space Grotesk"', 'sans-serif'],
        body: ['Pretendard', '"Noto Sans KR"', 'sans-serif'],
        serif: ['Inter', '"Space Grotesk"', 'sans-serif'],
        sans: ['Pretendard', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
