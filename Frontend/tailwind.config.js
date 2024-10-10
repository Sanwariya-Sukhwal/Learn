// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}", // Ensure this covers your project structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'), // Correct way to include daisyUI plugin
//   ],
//   daisyui: {
//     themes: true, // Optionally configure daisyUI themes
//   },
// }

// tailwind.config.js

import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use the imported daisyui here
  ],
}
