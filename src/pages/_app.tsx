import { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import * as themes from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
   const [theme, setTheme] = useState(themes.dark)

   return (
      <ThemeProvider theme={theme}>
         <Component {...pageProps} />
         <GlobalStyle />
      </ThemeProvider>
   )
}

export default MyApp
