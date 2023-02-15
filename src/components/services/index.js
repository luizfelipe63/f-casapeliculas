import { Buildings, Car, House } from 'phosphor-react'
import { ContentService, Service, ServicesContent } from './styles'

export function Services() {
  return (
    <ServicesContent id="services">
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
    </ServicesContent>
  )
}
