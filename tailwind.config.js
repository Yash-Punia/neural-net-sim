module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: '#f5f5f5',
      darkBlue:'#364F6B',
      primary: '#3FC1C9',
      secondary: '#FC5185',
      white: '#ffffff',
    },
    fontFamily: {
      oswald: ['Oswald'],
      sans: ['Source Sans Pro'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
