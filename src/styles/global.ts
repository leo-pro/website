import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   html{
      scroll-behavior: smooth;
   }

   body{
      margin: 0 0 3rem 0;
      background-color: ${props => props.theme.colors.background};
      color: ${props =>
         props.theme.title === 'dark'
            ? props.theme.colors.white
            : props.theme.colors.black};
      font-size: 1rem;
      font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
   }

   h1,h2,h3,h4{
      color: ${props => props.theme.colors.title};
      font-weight: ${props => props.theme.typography.fontWeight.semiBold};
   }

   ul{
      list-style: none;
   }

   a{
      text-decoration: none;
   }
`
