import Image from 'next/image'
import { styled } from '..'

export const Container = styled('header', {})

export const HeaderContainer = styled('header', {
  position: 'relative',
  background: '$green',
  marginBottom: '5rem'
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

export const BgHeader = styled(Image, {
  position: 'absolute',
  top: '-10px',
  width: '100%'
})

export const Services = styled('section', {
  maxWidth: 1140,
  margin: '0 auto',

  h1: {
    color: '$black',
    marginBottom: '5rem',
    paddingTop: '5rem',
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
  h1: {
    color: '$black',
    marginBottom: '5rem',
    paddingTop: '5rem',
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

  p: {
    maxWidth: 632,
    marginBottom: '0.625rem'
  }
})

export const AdditionalInfos = styled('div', {
  background: '$yellow',

  div: {
    display: 'flex',
    color: '$green',
    fontWeight: 'bold',
    maxWidth: 1140,
    margin: '0 auto'
  }
})

export const Footer = styled('footer', {
  background: '$green'
})
