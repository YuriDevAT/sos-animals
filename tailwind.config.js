module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'footprint': "url('./img/footprint.png')",
        'footprints': "url('/img/footprints.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
