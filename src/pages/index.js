import {
  ButtonHighlight,
  ButtonNav,
  ContantFooter,
  Content,
  ContentFooter,
  ContentHighlight,
  Dvider,
  Footer,
  HeaderContainer,
  Highlight,
  MenuFooter,
  Navigation,
  SocialFooter
} from '../styles/pages/home'

import { Services } from '../components/services'
import { About } from '../components/about'
import { Testimonials } from '../components/testimonials'
import { Contacts } from '../components/contact'

export default function Home() {
  return (
    <div>
      <HeaderContainer>
        <Content>
          <Navigation>
            <span>Logo</span>
            <div>
              <a href="#">Home</a>
              <a href="#services">Serviços</a>
              <a href="#about">Sobre</a>
              <a href="#testimonials">Depoimentos</a>
            </div>
            <ButtonNav href="#contant">Contato</ButtonNav>
          </Navigation>
          <Highlight>
            <ContentHighlight>
              <p>Bem vindo à F casa Película.</p>
              <h1>Transformando ações em oportunidades</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
                egestas odio sapien dis massa massa massa. Accumsan, cras
                tristique adipiscing consectetur. Laoreet ante quisque in nulla
                eleifend neque sed rutrum donec.
              </p>
              <ButtonHighlight>Agendar horário</ButtonHighlight>
            </ContentHighlight>
          </Highlight>
        </Content>
      </HeaderContainer>
      <Services />
      <About />
      <Testimonials />
      <Contacts />
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
      </Footer>
    </div>
  )
}
