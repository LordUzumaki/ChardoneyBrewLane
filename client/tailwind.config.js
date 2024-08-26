/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      height: {
        '28': '7rem',
      },
      fontFamily: {
        Young20S: ['Young20S', 'sans-serif'], // Define your custom font here
      },
      
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

