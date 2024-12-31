// import { transformWithEsbuild } from 'vite';

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {

//       animation:{
//         slide:"slide 1s ease-in-out"
//       },
//       keyframes:{
//         slide:{
//           '0%':{transform:'translate(1000px)'}
//         }
//         slideleft:{
//         '0%':{
//           transform:'translatex(100%)',

//         },
//         '100':{
//           transform: 'translateX(0)',
//         }
//         }
//       }
    
    
//     },


    
//   },
//   plugins: [],
// }


//  @type {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     animation: {
        slideright: "slideright 1s ease-in-out",
        slideleft: "slideleft 0.5s ease-in-out",
      },
      keyframes: {
        slideright: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideleft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }, 
    },
  },
  plugins: [],
};
