const { join } = require("path");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mail': "url('/images/mail.svg')",
        'github': "url('/images/github-logo.svg')",
        'mail-hover': "url('/images/mail-hover.svg')",
        'github-hover': "url('/images/github-logo-hover.svg')",
        'go-back': "url('/images/go-back-arrow.svg')",
        'liner-web-work': "url(/images/liner-web.svg)",
        'liner-be-work': "url(/images/liner-be.svg)",
        'quantcash-work': "url(/images/quantcash-work.svg)",
        'hlm-work': "url(/images/hlm-work.svg)",
        'pw-work': "url(/images/pw-work.svg)",
        'nav-bg': "url('/images/nav-bg.svg')",
        'liner-web-item': "url(../public/images/liner-web-item.svg)",
        'liner-be-item': "url(../public/images/liner-be-item.svg)",
        'quantcash-item': "url(../public/images/quantcash-item.svg)",
        'show-more': "url('/images/show-more.svg')",
      })
    },
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
      'white': '#000000',
      'secondary': '#C4C4C4',
      'point': '#FF6666',
    },
    letterSpacing: {
      'square': '1em',
    },
    fill: {
      'point': '#FF6666',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '8': '2rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
