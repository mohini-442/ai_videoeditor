/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '32px',
      md: '48px',
    },
    extend: {
      fontFamily: {
        'raleway': '"Raleway", sans-serif',
        'plus': '"Plus Jakarta Sans", sans-serif',
      },
      lineHeight: {
        '41': '41.6px',
      },
      colors: {
        offblack: '#4A4A4D',
        purplep: '#625DF5',
        offwhite: '#CBC9F4',
        offwhite2: '#B2B2B2',
        lightgrey: '#2b2b2b',
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)",
      },
      maxWidth: {
        s: '424px',
        sm: '562px',
      },
      width: {
        xxs: '355px',
      },
      backgroundColor: {
        bgSize: '100% 100%'
      }

    },
  },
  plugins: [],
}