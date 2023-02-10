import { globalCss } from '.'

export const GlobalStyle = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },

  html: {
    scrollBehavior: 'smooth'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$whith',
    color: '$whith'
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400
  }
})
