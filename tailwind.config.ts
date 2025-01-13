/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT :"#030516"
        },
        secondary:{
          DEFAULT :"#1f3449",
          dark:"#030516"
        },
        accent:{
          DEFAULT:"#60a6e7",
          light:"rgb(179 208 242)",
          dark:"#0c2645"
        },
        "light-grey":"#e6e0e9",
        "dark-grey":"#aea9b1"
      },
      boxShadow: {
        dotted: '0 0 0 3px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}