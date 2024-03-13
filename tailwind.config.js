/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        "plane" : "linear-gradient(to right bottom, rgba(245, 158, 11, .2), rgba(0,0,0,.6)), url('/src/assets/img/plane_bg.png')",
        "dark-plane" : "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0,0,0,.8)), url('/src/assets/img/plane_bg.png')"
      },
      dropShadow: {
        'black': '0 35px 35px rgba(0, 0, 0, 1)',
        '4xl': [
            '0 4px 5px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}