import {
  About,
  AboutUs,
  AdditionalInfos,
  BgHeader,
  ButtonHighlight,
  ButtonNav,
  Container,
  Content,
  ContentAbout,
  ContentHighlight,
  ContentService,
  Footer,
  HeaderContainer,
  Highlight,
  Navigation,
  Service,
  Services
} from '../styles/pages'
import aa from '../assets/destaque.webp'
import bg from '../assets/inclinação.svg'
import about from '../assets/about.png'
import Image from 'next/image'
import { Buildings, Car, House } from 'phosphor-react'

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <Content>
          <Navigation>
            <span>Logo</span>
            <div>
              <a href="#">Home</a>
              <a href="#services">Serviços</a>
              <a href="#about">Sobre</a>
              <a href="#">Depoimentos</a>
            </div>
            <ButtonNav href="#">Contato</ButtonNav>
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
            <Image src={aa} alt="" />
          </Highlight>
        </Content>
        {/* <BgHeader src={bg} alt="" /> */}
      </HeaderContainer>
      <Services id="services">
        <h1>Serviços</h1>
        <ContentService>
          <Service>
            <House size={90} weight="fill" />
            <h2>Residencial</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Service>
          <Service>
            <Car size={90} weight="fill" />
            <h2>Automotivo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Service>
          <Service>
            <Buildings size={90} weight="fill" />
            <h2>Predial</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Service>
        </ContentService>
      </Services>
      <About id="about">
        <h1>Sobre</h1>
        <ContentAbout>
          <AboutUs>
            <h2>Quem somos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              egestas odio sapien dis massa massa massa. Accumsan, cras
              tristique adipiscing consectetur. Laoreet ante quisque in nulla
              eleifend neque sed rutrum donec.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              egestas odio sapien dis massa massa massa. Accumsan, cras
              tristique adipiscing consectetur. Laoreet ante quisque in nulla
              eleifend neque sed rutrum donec.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              egestas odio sapien dis massa massa massa. Accumsan, cras
              tristique adipiscing consectetur. Laoreet ante quisque in nulla
              eleifend neque sed rutrum donec.
            </p>
          </AboutUs>
          <Image src={about} alt="" height={600} />
        </ContentAbout>
        <AdditionalInfos>
          <div>
            <div>
              <h2>2023</h2>
              <span>Ano fundado</span>
            </div>
            <div>
              <h2>2023</h2>
              <span>Ano fundado</span>
            </div>
            <div>
              <h2>2023</h2>
              <span>Ano fundado</span>
            </div>
          </div>
        </AdditionalInfos>
      </About>
      <Footer>
        <Content>oi</Content>
      </Footer>
    </Container>
  )
}
