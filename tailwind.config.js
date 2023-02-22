/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
      'sunglow': {
        100: '#ffebc4',
        200: '#fedb92',
        300: '#fecf71',
        400: '#fec44f',
        500: '#feb92f',
        600: '#d59b27',
        700: '#ad7e1f',
        800: '#846018',
        900: '#5b4311',
      }
    },},
  },
  plugins: [],
}
