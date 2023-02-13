import Image from 'next/image'
import { styled } from '..'

export const Container = styled('header', {})

export const HeaderContainer = styled('header', {
  background: '$green',
  marginBottom: '5rem',
  height: '100vh'
})

export const Content = styled('div', {
  maxWidth: 1140,
  margin: '0 auto'
})

export const Navigation = styled('nav', {
  padding: '2.5rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    gap: '2rem',

    a: {
      color: '$whith',
      textDecoration: 'none',
      transition: 'color 0.2s',

      '&:hover': {
        color: '$yellow'
      }
    }
  }
})

export const ButtonBase = styled('a', {
  background: '$yellow',
  color: '$green',
  fontWeight: 'bold',
  borderRadius: 8,
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '1rem 2rem'
})

export const ButtonNav = styled(ButtonBase, {})
export const ButtonHighlight = styled(ButtonBase, {})

export const Highlight = styled('section', {
  display: 'flex',
  gap: '1rem',
  padding: '2.5rem 0',

  img: {
    borderRadius: 8
  }
})

export const ContentHighlight = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1.25rem',

  p: {
    maxWidth: 479
  },

  h1: {
    fontSize: '$h6'
  }
})

export const Dvider = styled('div', {
  height: '1px',
  background: '$yellow'
})

export const Services = styled('section', {
  maxWidth: 1140,
  margin: '0 auto',
  paddingTop: '5rem',
  marginBottom: '5rem',

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
  gap: '1.25rem'
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

export const About = styled('section', {
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

export const Testimonials = styled('div', {
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

export const AdditionalInfos = styled('div', {
  background: '$green',
  padding: '2rem'
})

export const ContentInfos = styled('div', {
  color: '$green',
  fontWeight: 'bold',
  maxWidth: 1140,
  margin: '0 auto',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',

    h2: {
      fontSize: '$2xl'
    }
  }
})

export const Contant = styled('section', {
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

export const Footer = styled('footer', {
  marginTop: '2rem',
  background: '$green'
})

export const ContentFooter = styled('div', {
  maxWidth: 1140,
  margin: '0 auto',
  padding: '2.5rem 0',
  display: 'flex',
  justifyContent: 'space-between'
})

export const BaseFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  a: {
    color: '$whith',
    textDecoration: 'none',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$yellow'
    }
  }
})

export const ContantFooter = styled(BaseFooter, {})

export const MenuFooter = styled(BaseFooter, {})

export const SocialFooter = styled(BaseFooter, {})
