import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      title: string
      colors: {
         background: string
         black: string
         white: string
         danger: string
         dangerHover: string
         success: string
         successLight: string
         successLighter: string
         warning: string

         gray: {
            900: string
            800: string
            700: string
            600: string
            500: string
            400: string
            300: string
            200: string
            100: string
            50: string
         }
         brand: {
            50: string
            100: string
            200: string
            300: string
            400: string
            500: string
            600: string
            700: string
            800: string
            900: string
         }
      }
   }

   export interface CustomTheme {
      title: string
      colors: {
         background: string
         black: string
         white: string
         danger: string
         dangerHover: string
         success: string
         successLight: string
         successLighter: string
         warning: string

         gray: {
            900: string
            800: string
            700: string
            600: string
            500: string
            400: string
            300: string
            200: string
            100: string
            50: string
         }
         brand: {
            50: string
            100: string
            200: string
            300: string
            400: string
            500: string
            600: string
            700: string
            800: string
            900: string
         }
      }
   }
}