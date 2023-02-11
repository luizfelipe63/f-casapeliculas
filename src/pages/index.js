import {
  About,
  AboutUs,
  AdditionalInfos,
  BgHeader,
  ButtonHighlight,
  ButtonNav,
  Clients,
  Container,
  ContantFooter,
  Content,
  ContentAbout,
  ContentFooter,
  ContentHighlight,
  ContentInfos,
  ContentService,
  Dvider,
  Footer,
  HeaderContainer,
  Highlight,
  MenuFooter,
  Navigation,
  Service,
  Services,
  SocialFooter
} from '../styles/pages'
import aa from '../assets/destaque.webp'
import about from '../assets/about.png'
import company01 from '../assets/clients/Company-01.svg'
import company02 from '../assets/clients/Company-02.svg'
import company03 from '../assets/clients/Company-03.svg'
import company05 from '../assets/clients/Company-05.svg'
import company06 from '../assets/clients/Company-06.svg'
import company07 from '../assets/clients/Company-07.svg'
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
      <Dvider></Dvider>
      <About id="about">
        <h1>Sobre</h1>
        <ContentAbout>
          <AboutUs>
            <h2>Quem somos</h2>
            <div></div>
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
          <ContentInfos>
            <div>
              <Image src={company07} alt="" width={150} height={70} />
              <Image src={company01} alt="" width={150} height={70} />
              <Image src={company02} alt="" width={150} height={70} />
              <Image src={company03} alt="" width={150} height={70} />
              <Image src={company05} alt="" width={150} height={70} />
              <Image src={company06} alt="" width={150} height={70} />
            </div>
          </ContentInfos>
        </AdditionalInfos>
      </About>
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
            <a href="#">Twite</a>
          </SocialFooter>
        </ContentFooter>
      </Footer>
    </Container>
  )
}
