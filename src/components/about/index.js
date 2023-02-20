import Image from 'next/image'
import { AboutContent, AboutUs, AdditionalInfos, ContentAbout } from './styles'

import company01 from '../../assets/clients/Company-01.svg'
import company02 from '../../assets/clients/Company-02.svg'
import company03 from '../../assets/clients/Company-03.svg'
import company05 from '../../assets/clients/Company-05.svg'
import company06 from '../../assets/clients/Company-06.svg'
import company08 from '../../assets/clients/Company-08.svg'
import about from '../../assets/about.png'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const animation = { duration: 20000, easing: t => t }

export function About() {
  const [slideRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 5
    },
    breakpoints: {
      '(min-width: 300px)': {
        slides: { perView: 2, spacing: 5 }
      },
      '(min-width: 1000px)': {
        slides: { perView: 5, spacing: 10 }
      }
    },
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    }
  })

  return (
    <AboutContent id="about">
      <h1>Sobre</h1>
      <ContentAbout>
        <AboutUs>
          <h2>Quem somos</h2>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            egestas odio sapien dis massa massa massa. Accumsan, cras tristique
            adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque
            sed rutrum donec.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            egestas odio sapien dis massa massa massa. Accumsan, cras tristique
            adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque
            sed rutrum donec.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            egestas odio sapien dis massa massa massa. Accumsan, cras tristique
            adipiscing consectetur. Laoreet ante quisque in nulla eleifend neque
            sed rutrum donec.
          </p>
        </AboutUs>
        <Image src={about} alt="" width={500} height={600} />
      </ContentAbout>
      <AdditionalInfos>
        <div ref={slideRef} className="keen-slider">
          <Image
            className="keen-slider__slide"
            src={company01}
            alt=""
            width={150}
            height={70}
          />

          <Image
            className="keen-slider__slide"
            src={company02}
            alt=""
            width={150}
            height={70}
          />

          <Image
            className="keen-slider__slide"
            src={company03}
            alt=""
            width={150}
            height={70}
          />

          <Image
            className="keen-slider__slide"
            src={company05}
            alt=""
            width={150}
            height={70}
          />

          <Image
            className="keen-slider__slide"
            src={company06}
            alt=""
            width={150}
            height={70}
          />

          <Image
            className="keen-slider__slide"
            src={company08}
            alt=""
            width={150}
            height={70}
          />
        </div>
      </AdditionalInfos>
    </AboutContent>
  )
}
