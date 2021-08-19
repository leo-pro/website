/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { ActionButton } from '../ActionButton'

import * as Unicons from '@iconscout/react-unicons'

import { Container, Title, Subtitle, Biography, IconsBar } from './styles'

export function Introduction() {
   return (
      <Container>
         <div>
            <Title>Hi, I'm Leonardo Alves</Title>
            <Subtitle>Frontend Engineer</Subtitle>
            <Biography>
               I'm passionate about technology and I really enjoy studying and
               create innovative solutions with a focus on user experience and
               business growth.
            </Biography>
            <ActionButton>Contact me</ActionButton>
            <IconsBar>
               <Link href="https://www.github.com/leo-pro">
                  <a target="blank">
                     <Unicons.UilGithubAlt />
                  </a>
               </Link>
               <Link href="https://www.linkedin.com/in/leonardoalvess/">
                  <a target="blank">
                     <Unicons.UilLinkedinAlt />
                  </a>
               </Link>
               <Link href="https://www.instagram.com/leoalvesrr">
                  <a target="blank">
                     <Unicons.UilInstagram />
                  </a>
               </Link>
            </IconsBar>
         </div>
         <div>
            <Image
               src="/images/profile.svg"
               width="462"
               height="409"
               alt="profile devleo"
            />
         </div>
      </Container>
   )
}
