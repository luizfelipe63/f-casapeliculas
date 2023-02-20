import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  createTheme,
  getCssText
} = createStitches({
  theme: {
    colors: {
      whith: '#fff',
      black: '#1B1B1B',

      green: '#008B2E',
      gray: '#F8F8F8',
      yellow: '#FFF200'
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',

      h6: '3.0625rem'
    }
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(max-width: 1120px)'
  }
})
