/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily : {
      'sans': ['Noto Sans',"Padauk", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('preline/plugin'),],
}

