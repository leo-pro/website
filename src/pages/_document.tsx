import React from 'react'

import Document, {
   DocumentContext,
   DocumentInitialProps,
   Html,
   Head,
   Main,
   NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
   static async getInitialProps(
      ctx: DocumentContext,
   ): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: App => props =>
                  sheet.collectStyles(<App {...props} />),
            })

         const initialProps = await Document.getInitialProps(ctx)
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         }
      } finally {
         sheet.seal()
      }
   }

   render() {
      return (
         <Html lang="pt-BR">
            <Head>
               <meta charSet="utf-8" />
               <meta name="theme-color" content="#14141B" />
               <meta name="author" content="Leonardo Alves" />
               <meta
                  name="keywords"
                  content="developer, desenvolvedor, frontend, front-end, desiger, websites, desenvolvedor web, web developer"
               />
               <meta
                  name="description"
                  content="I'm Leonardo Alves, Frontend Engineer and UX/UI Designer."
               />
               <meta name="robots" content="index,follow" />
               <meta name="googlebot" content="index,follow" />
               <meta property="og:type" content="website" />
               <meta property="og:url" content="https://devleo.com.br" />
               <meta
                  property="og:title"
                  content="DevLeo - Frontend Engineer & UX/UI Designer"
               />
               <meta
                  property="og:image"
                  content="https://devleo.com.br/images/preview.png"
               />
               <meta
                  property="og:site-name"
                  content="DevLeo - Frontend Engineer & UX/UI Designer"
               />

               <link
                  rel="shortcut icon"
                  href="/images/favicon/favicon.ico"
                  type="image/x-icon"
               />
               <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/images/favicon/apple-touch-icon.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/images/favicon/favicon-32x32.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/images/favicon/favicon-16x16.png"
               />
               <link
                  rel="manifest"
                  href="/images/favicon/site.webmanifest"
               ></link>

               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin=""
               />
               <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                  rel="stylesheet"
               />

               {/* Global site tag (gtag.js) - Google Analytics */}
               <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
               />
               <script
                  dangerouslySetInnerHTML={{
                     __html: `
                           window.dataLayer = window.dataLayer || [];
                           function gtag(){dataLayer.push(arguments);}
                           gtag('js', new Date());

                           gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                              page_path: window.location.pathname,
                           });`,
                  }}
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}
