import Head from 'next/head'
import { Menu } from '../components/Menu'

export default function Home(): JSX.Element {
   return (
      <>
         <Head>
            <title>Home | DevLeo</title>
            <meta name="description" content="Devleo website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Menu />
      </>
   )
}
