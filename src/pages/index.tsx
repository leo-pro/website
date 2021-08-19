import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Introduction } from '../components/Introduction'
import { Menu } from '../components/Menu'

export default function Home(): JSX.Element {
   return (
      <>
         <Head>
            <meta charSet="utf-8" />
            <meta name="language" content="en" />
            <title>DevLeo - Frontend Engineer & UX/UI Designer</title>
         </Head>
         <Menu />
         <Introduction />
         <Contact />
      </>
   )
}
