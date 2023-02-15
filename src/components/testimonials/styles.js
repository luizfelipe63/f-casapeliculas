import { styled } from '../../styles'

export const TestimonialsContent = styled('div', {
  maxWidth: 1140,
  margin: '0 auto',
  color: '$black',
  paddingTop: '5rem',

  h1: {
    paddingBottom: '5rem',
    textAlign: 'center'
  }
})

export const Testimonial = styled('div', {
  background: '$gray',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: 6,

  p: {
    textAlign: 'center'
  }
})

export const ContentTestimonials = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',

  img: {
    width: '5rem',
    height: '5rem',
    clipPath: 'circle()'
  }
})
