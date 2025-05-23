/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'custom-bg': '#c4c6f6',
        'gradient-start': '#fdfdff',
        'gradient-mid': '#e0dee5',
        'gradient-end': '#ebc9d5',
        'button-bg': '#d8d9f4',
      },
    },
  },
 plugins: [tailwindScrollbarHide],
}
