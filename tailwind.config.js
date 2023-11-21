/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#14b8a6',
      },
    },
  },
  darkMode: 'class',
  important: true,
  plugins: [],
}

