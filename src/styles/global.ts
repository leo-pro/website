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
      background-color: ${props => props.theme.colors.background};
      color: ${props =>
         props.theme.title === 'dark'
            ? props.theme.colors.white
            : props.theme.colors.black};
      font-size: ${props => props.theme.typography.fontSize.md};
      font-family: ${props => props.theme.typography.bodyType}, sans-serif;
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

   img{
      max-width: 100%;
      height: auto;
   }

   section{
      padding: 2rem 0 4rem;
   }

   .section__title{
      font-size: ${props => props.theme.typography.fontSize.h1};
   }

   .section__subtitle{
      display: block;
      font-size: ${props => props.theme.typography.fontSize.sm};
      margin: 3rem;
   }

   .section__title,
   .section__subtitle{
      text-align: center;
   }

   .container{
      max-width: 768px;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
   }

   .grid{
      display: grid;
      gap: 1.5rem;
   }

`
