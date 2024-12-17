/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation:{
        slide:"slide 1s ease-in-out"
      },
      keyframes:{
        slide:{
          '0%':{transform:'translate(1000px)'}
        }
      }
    },
  },
  plugins: [],
}