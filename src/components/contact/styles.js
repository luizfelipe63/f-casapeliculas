import { styled } from '../../styles'

export const Dvider = styled('div', {
  height: '1px',
  background: '$yellow'
})

export const Contact = styled('section', {
  maxWidth: 1140,
  margin: '0 auto',
  paddingTop: '5rem',

  h1: {
    paddingBottom: '5rem',
    textAlign: 'center',
    color: '$black'
  }
})
export const ContentContant = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$black'
  },

  iframe: {
    border: 0
  }
})
