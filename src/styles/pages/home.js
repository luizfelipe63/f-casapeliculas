import { styled } from '..'

export const HeaderContainer = styled('header', {
  background: '$green'
})

export const NavContainer = styled('nav', {
  width: '100%',
  position: 'fixed',
  zIndex: 100,
  background: '$green',
  padding: '2rem 0',

  '@bp3': {
    zIndex: 100
  }
})

export const Navigation = styled('div', {
  display: 'flex',
  gap: '2rem',

  a: {
    color: '$whith',
    textDecoration: 'none',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$yellow'
    }
  },

  '@bp3': {
    display: 'none'
  }
})

export const NavContent = styled('div', {
  maxWidth: 1140,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@bp3': {
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column'
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

export const ButtonHighlight = styled(ButtonBase, {})

export const Highlight = styled('section', {
  maxWidth: 1140,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',

  paddingTop: '10rem',

  img: {
    borderRadius: 6
  },

  '@bp3': {
    img: {
      display: 'none'
    },

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  }
})

export const ContentHighlight = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1.25rem',
  maxWidth: 600,
  // p: {},

  h1: {
    fontSize: '$h6'
  },

  '@bp3': {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center'
  }
})

export const Inclination = styled('div', {
  height: '140px',
  width: '100%',

  img: {
    width: '100%',
    fill: '$green'
  },

  '@bp3': {
    height: 94
  }
})

export const Footer = styled('footer', {
  padding: '3.75rem 0 1rem',
  background: '$green',

  a: {
    color: '$whith',
    textDecoration: 'none',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$yellow'
    }
  },

  p: {
    textAlign: 'center'
  }
})

export const ContentFooter = styled('div', {
  maxWidth: 1140,
  margin: '0 auto',
  padding: '2.5rem 0 3rem',
  display: 'flex',
  justifyContent: 'space-between',

  '@bp3': {
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }
})

export const BaseFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

// export const SeparatorMobile = styled('div', {
//   display: 'flex',
//   gap: '2rem',

//   '@bp3': {
//     display: 'flex',
//     justifyContent: 'space-between',
//     paddingBottom: '1.5rem'
//   }
// })

export const ContantFooter = styled(BaseFooter, {})

export const MenuFooter = styled(BaseFooter, {})

export const SocialFooter = styled(BaseFooter, {})
