import { Buildings, Car, House } from 'phosphor-react'
import { ContentService, Service, ServicesContent } from './styles'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Services() {
  // const [sliderRef] = useKeenSlider({
  //   slides: {
  //     perView: 3,
  //     spacing: 10
  //   }
  // })

  return (
    <ServicesContent id="services">
      <h1>Serviços</h1>
      <ContentService>
        <Service className="keen-slider__slide">
          <House size={90} weight="fill" />
          <h2>Residencial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Service>
        <Service className="keen-slider__slide">
          <Car size={90} weight="fill" />
          <h2>Automotivo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Service>
        <Service className="keen-slider__slide">
          <Buildings size={90} weight="fill" />
          <h2>Predial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Service>
      </ContentService>
    </ServicesContent>
  )
}
