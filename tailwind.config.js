module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto'],
      'roboto-mono': ['Roboto Mono'],
      'raleway': ['Raleway'],
    },
    backgroundColor: {
      'primary': '#EDEDED',
      'secondary': '#C4C4C4',
      'nav': '#FAEDBE',
      'point': '#FF6666',
    },
    textColor: {
      'secondary': '#C4C4C4',
      'point': '#FF6666',
    },
    letterSpacing: {
      'square': '1em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
