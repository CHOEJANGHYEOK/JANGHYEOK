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
    },
    textColor: {
      'secondary': '#C4C4C4',
      'point': '#FF6666',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
