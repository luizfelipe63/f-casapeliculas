import { ContentTestimonials, Testimonial, TestimonialsContent } from './styles'

import testimonial01 from '../../assets/testimonials/testemonial-01.webp'
import testimonial02 from '../../assets/testimonials/testemonial-02.webp'
import testimonial03 from '../../assets/testimonials/testemonial-03.webp'
import Image from 'next/image'

export function Testimonials() {
  return (
    <TestimonialsContent id="testimonials">
      <h1>Depoimentos</h1>
      <ContentTestimonials>
        <Testimonial>
          <Image src={testimonial01} alt="" />
          <span>Lorhayne</span>
          <p>
            Fomos atendidos pelo Fábio e Pedro, que nos recepcionaram muito bem,
            pessoas extremamente educadas. Nos mostrou o produto de grande
            qualidade, sem falar do preço que depois de muito pesquisar sem
            dúvida o dele é o melhor. Um ambiente bastante familiar e confiável
          </p>
        </Testimonial>
        <Testimonial>
          <Image src={testimonial02} alt="" />
          <span>Kacau</span>
          <p>
            Atendimento pontual, cordial e bem profissional. A colocação foi bem
            cuidadosa, e saí com comprovante da garantia do produto. Recomendo
          </p>
        </Testimonial>
        <Testimonial>
          <Image src={testimonial03} alt="" />
          <span>Matheus Vieira</span>
          <p>
            Simplesmente excelente! Recomendo demais, atendimento excepcional,
            material original e de qualidade, películas colocadas com maestria!!
          </p>
        </Testimonial>
      </ContentTestimonials>
    </TestimonialsContent>
  )
}
