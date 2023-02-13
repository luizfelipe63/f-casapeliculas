import {
  About,
  AboutUs,
  AdditionalInfos,
  BgHeader,
  ButtonHighlight,
  ButtonNav,
  Container,
  Contant,
  ContantFooter,
  Content,
  ContentAbout,
  ContentContant,
  ContentFooter,
  ContentHighlight,
  ContentInfos,
  ContentService,
  ContentTestimonials,
  Dvider,
  Footer,
  HeaderContainer,
  Highlight,
  MenuFooter,
  Navigation,
  Service,
  Services,
  SocialFooter,
  Testimonial,
  Testimonials
} from '../styles/pages'
import homebg from '../assets/homebg.svg'
import about from '../assets/about.png'
import company01 from '../assets/clients/Company-01.svg'
import company02 from '../assets/clients/Company-02.svg'
import company03 from '../assets/clients/Company-03.svg'
import company05 from '../assets/clients/Company-05.svg'
import company06 from '../assets/clients/Company-06.svg'
import company07 from '../assets/clients/Company-07.svg'

import testimonial01 from '../assets/testimonials/testemonial-01.webp'
import testimonial02 from '../assets/testimonials/testemonial-02.webp'
import testimonial03 from '../assets/testimonials/testemonial-03.webp'
import Image from 'next/image'
import {
  Buildings,
  Car,
  Clock,
  Envelope,
  House,
  PhoneCall
} from 'phosphor-react'

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
      <Testimonials id="testimonials">
        <h1>Depoimentos</h1>
        <ContentTestimonials>
          <Testimonial>
            <Image src={testimonial01} alt="" />
            <span>Lorhayne</span>
            <p>
              Fomos atendidos pelo Fábio e Pedro, que nos recepcionaram muito
              bem, pessoas extremamente educadas. Nos mostrou o produto de
              grande qualidade, sem falar do preço que depois de muito pesquisar
              sem dúvida o dele é o melhor. Um ambiente bastante familiar e
              confiável
            </p>
          </Testimonial>
          <Testimonial>
            <Image src={testimonial02} alt="" />
            <span>Kacau</span>
            <p>
              Atendimento pontual, cordial e bem profissional. A colocação foi
              bem cuidadosa, e saí com comprovante da garantia do produto.
              Recomendo
            </p>
          </Testimonial>
          <Testimonial>
            <Image src={testimonial03} alt="" />
            <span>Matheus Vieira</span>
            <p>
              Simplesmente excelente! Recomendo demais, atendimento excepcional,
              material original e de qualidade, películas colocadas com
              maestria!!
            </p>
          </Testimonial>
        </ContentTestimonials>
      </Testimonials>
      <Contant id="contant">
        <h1>Contato</h1>
        <ContentContant>
          <div>
            <span>
              <PhoneCall size={32} weight="fill" color="#008B2E" />
              (61) 99999-9999
            </span>
            <span>
              <Envelope size={32} weight="fill" color="#008B2E" />
              Contato@gmail.com
            </span>
            <span>
              <Clock size={32} weight="fill" color="#008B2E" />
              Segunda à sexta: 8h00 às 18h
            </span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9115.584196509251!2d-47.95093338945616!3d-16.13638454747536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359852cc2bffd25%3A0xe68a7b729263ece8!2sPosto%20Petrobras%20-%20Posto%20Machado!5e0!3m2!1spt-BR!2sbr!4v1676287420970!5m2!1spt-BR!2sbr"
            width="600"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </ContentContant>
      </Contant>
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
    </Container>
  )
}
