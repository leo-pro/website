import { Header } from './styles'
import Image from 'next/image'

import * as Unicons from '@iconscout/react-unicons'

export function Menu() {
   return (
      <Header>
         <Image
            src="/images/logo-colorfull.svg"
            width="254"
            height="60"
            alt="devleo logo"
         />
      </Header>
   )
}
