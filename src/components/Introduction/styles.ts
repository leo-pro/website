import styled from 'styled-components'

export const Container = styled.section`
   display: inline-grid;
   grid-template-columns: 1fr 1fr;
   padding: 4rem 6rem;

   div:nth-child(2) {
      margin: 0 auto;
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2.5rem 2rem;

      div:nth-child(1) {
         order: 2;
         display: flex;
         flex-direction: column;
      }

      div:nth-child(2) {
         order: 1;
         margin-bottom: 2rem;

         img {
            width: 90%;
            height: auto;
         }
      }
   }
`

export const Title = styled.h1`
   font-size: 3rem;
   font-weight: 700;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2rem;
   }
`

export const Subtitle = styled.h3`
   font-size: 2rem;
   font-weight: 400;
   margin-bottom: 1.25rem;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.5rem;
   }
`

export const Biography = styled.p`
   font-size: 1.25rem;
   font-weight: 400;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1rem;
   }
`
export const IconsBar = styled.div`
   display: flex;
   align-items: center;
   margin-top: 2rem;

   a svg {
      color: ${props => props.theme.colors.white};
      width: 32px;
      height: 32px;
      margin-top: 1.25rem;
      margin-right: 4rem;

      &:hover {
         color: ${props => props.theme.colors.primary};
      }
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      display: inline-grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;

      a svg {
         margin-right: 0;
      }
   }
`
