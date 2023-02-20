import { styled } from '../../styles'

export const ServicesContent = styled('section', {
  maxWidth: 1140,
  margin: '0 auto',
  padding: '10rem 0',

  h1: {
    fontSize: '$2xl',
    marginBottom: '5rem',
    color: '$black',
    textAlign: 'center'
  }
})

export const ContentService = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.25rem',

  '@bp3': {
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: '1fr'
  }
})

export const Service = styled('div', {
  color: '$whith',
  background: '$green',
  borderRadius: 16,
  padding: '2rem',
  marginBottom: '5rem',
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.625rem',

  h2: {
    fontSize: '$2xl'
  },

  svg: {
    color: '$yellow'
  }
})
