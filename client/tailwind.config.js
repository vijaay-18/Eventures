/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors:{
        primary: '#338A29',
        secondary: '#3D062A',
        tertiary : '#FFF8F8',
      }
    },
  },
  plugins: [],
}