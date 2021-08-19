import Link from 'next/link'
import {
   Container,
   Title,
   Subtitle,
   Wrapper,
   Infos,
   Form,
   InputContent,
   Copyright,
} from './styles'

import Image from 'next/image'
import { ActionButton } from '../ActionButton'

export function Contact() {
   return (
      <Container id="contact">
         <Title>Contact me</Title>
         <Subtitle>Get in touch</Subtitle>
         <Wrapper>
            <Infos>
               <ul>
                  <li>
                     <Image
                        src="/images/icons/email-icon.png"
                        alt="email icon"
                        width="48"
                        height="36"
                     />
                  </li>
                  <li>
                     <Image
                        src="/images/icons/location-icon.png"
                        alt="location icon"
                        width="25"
                        height="30"
                     />
                  </li>
               </ul>
               <ul>
                  <li>
                     <h2>Email</h2>
                     <Link href="mailto:contato.devleo@gmail.com">
                        <a target="_blank">contato.devleo@gmail.com</a>
                     </Link>
                  </li>
                  <li>
                     <h2>Location</h2>
                     <Link href="#">
                        <a target="_blank">Piracicaba, SP</a>
                     </Link>
                  </li>
               </ul>
            </Infos>
            <Form>
               <form action="">
                  <InputContent>
                     <label htmlFor="">Name</label>
                     <input type="text" name="name" />
                  </InputContent>

                  <InputContent>
                     <label htmlFor="">Email</label>
                     <input type="email" name="email" />
                  </InputContent>

                  <InputContent>
                     <label htmlFor="">Message</label>
                     <textarea name="message" cols={0} rows={4}></textarea>
                  </InputContent>

                  <ActionButton>Send message</ActionButton>
               </form>
            </Form>
         </Wrapper>
         <Copyright>© DevLeo, 2021. All rights reserved.</Copyright>
      </Container>
   )
}
