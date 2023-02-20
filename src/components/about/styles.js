import { styled } from '../../styles'

export const AboutContent = styled('section', {
  padding: '10rem 0',

  h1: {
    fontSize: '$2xl',
    paddingBottom: '5rem',
    color: '$black',
    textAlign: 'center'
  }
})

export const ContentAbout = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',

  '@bp3': {
    img: {
      height: 450,
      maxWidth: '100vw'
    },
    display: 'flex',
    flexDirection: 'column-reverse'
  }
})

export const AboutUs = styled('div', {
  maxWidth: 1140,
  margin: '0 auto',
  color: '$black',

  h2: {
    marginBottom: '1.25rem'
  },

  p: {
    maxWidth: 632,
    marginBottom: '0.625rem'
  },

  '@bp3': {
    padding: '1.5rem 1rem'
  }
})

export const AdditionalInfos = styled('div', {
  background: '$green',
  padding: '2rem 0'
})
