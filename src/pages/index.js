import {
  ButtonHighlight,
  ContantFooter,
  ContentFooter,
  ContentHighlight,
  Footer,
  HeaderContainer,
  Highlight,
  Inclination,
  MenuFooter,
  NavContainer,
  NavContent,
  Navigation,
  SeparatorMobile,
  SocialFooter
} from '../styles/pages/home'

import { Services } from '../components/services'
import { About } from '../components/about'
import { Testimonials } from '../components/testimonials'
import bghome from '../assets/bg-home.svg'
import bgincline from '../assets/bg-inclinacao.svg'
import Image from 'next/image'
import { Hamburger, List } from 'phosphor-react'

export default function Home() {
  return (
    <div>
      <HeaderContainer>
        <NavContainer>
          <NavContent>
            <span>Logo</span>
            <Navigation>
              <a href="#">Home</a>
              <a href="#services">Serviços</a>
              <a href="#about">Sobre</a>
              <a href="#testimonials">Depoimentos</a>
              <a href="#contact">Contato</a>
              <List />
            </Navigation>
          </NavContent>
        </NavContainer>
        <Highlight>
          <ContentHighlight>
            <p>Bem vindo à F casa Película.</p>
            <h1>Transformando ações em oportunidades</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              egestas odio sapien dis massa massa massa.
            </p>
            <ButtonHighlight>Agendar horário</ButtonHighlight>
          </ContentHighlight>
          <Image src={bghome} alt="" width={400} height={500} />
        </Highlight>
        <Inclination>
          <Image src={bgincline} alt="" />
        </Inclination>
      </HeaderContainer>

      <Services />
      <About />
      <Testimonials />
      <Footer>
        <ContentFooter>
          <ContantFooter>
            <h2>Logo</h2>
            <span>(61) 0000-0000</span>
            <span>contato@transit.com</span>
          </ContantFooter>
          <MenuFooter>
            <h2>Menu</h2>
            <a href="#">Home</a>
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#">Depoimentos</a>
          </MenuFooter>
          <SocialFooter>
            <h2>Social</h2>
            <a href="#">Instagram</a>
            <a href="#services">Facebook</a>
            <a href="#about">Linkedin</a>
            <a href="#">Twitter</a>
          </SocialFooter>
        </ContentFooter>
        <p>
          Todos os direitos reservados.{' '}
          <a href="https://www.linkedin.com/in/luiz-feliperocha/">
            Luiz Felipe
          </a>
        </p>
      </Footer>
    </div>
  )
}
