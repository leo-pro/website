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
      margin: 0 0 2rem 0;
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
      text-decoration: none !important;
      color: ${props => props.theme.colors.text};
      transition: .3s;

      &:hover{
         color: ${props => props.theme.colors.primary}
      }
   }

   /* Change Autocomplete styles in Chrome */
   input:-webkit-autofill,
   input:-webkit-autofill:hover,
   input:-webkit-autofill:focus,
   textarea:-webkit-autofill,
   textarea:-webkit-autofill:hover,
   textarea:-webkit-autofill:focus,
   select:-webkit-autofill,
   select:-webkit-autofill:hover,
   select:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: ${props => props.theme.colors.text};
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
   }
`
