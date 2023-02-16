import Image from 'next/image'
import { styled } from '..'

export const HeaderContainer = styled('header', {
  background: '$green',
  marginBottom: '5rem',
  height: '100vh'
})

export const Content = styled('div', {
  maxWidth: 1140,
  margin: '0 auto'
})

export const Dvider = styled('div', {
  height: '1px',
  background: '$yellow'
})

export const Navigation = styled('nav', {
  background: '$green',
  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // position: 'fixed',
  width: '100%',
  zIndex: 100,

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
