import { Clock, Envelope, PhoneCall } from 'phosphor-react'
import { Contact, ContentContant } from './styles'

export function Contacts() {
  return (
    <Contact id="contant">
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
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9115.584196509251!2d-47.95093338945616!3d-16.13638454747536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359852cc2bffd25%3A0xe68a7b729263ece8!2sPosto%20Petrobras%20-%20Posto%20Machado!5e0!3m2!1spt-BR!2sbr!4v1676287420970!5m2!1spt-BR!2sbr"
          width="600"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </ContentContant>
    </Contact>
  )
}
