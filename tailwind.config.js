/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      
      extend: {
        backgroundImage: {
          //'light-pattern': "url('./images/pattern-light.svg')",
          //'dark-pattern': "url('./images/pattern-dark.svg')",
        },
        screens: {
          '3xl': '1850px',
        },
        colors: {
          //'black': '#1D1D1D',
          //'white': '#f0f0f0',
        },
        fontFamily: {
          'poppins': ['Poppins']
        },
      },
    },
  }