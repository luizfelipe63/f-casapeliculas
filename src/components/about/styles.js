import { styled } from '../../styles'

export const AboutContent = styled('section', {
  paddingTop: '5rem',

  h1: {
    fontSize: '$2xl',
    paddingBottom: '5rem',
    color: '$black',
    textAlign: 'center'
  }
})
export const ContentAbout = styled('div', {
  display: 'flex',
  alignItems: 'flex-start'
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
  }
})

export const AdditionalInfos = styled('div', {
  background: '$green',
  padding: '2rem 0'
})
