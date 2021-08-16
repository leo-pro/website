import styled from 'styled-components'

export const Container = styled.section`
   display: inline-grid;
   grid-template-columns: 1fr 1fr;
   padding: 3rem 6rem;

   div:nth-child(2) {
      margin: 0 auto;
   }
`

export const Title = styled.h1`
   font-size: 3rem;
   font-weight: 700;
`

export const Subtitle = styled.h3`
   font-size: 2rem;
   font-weight: 400;
   margin-bottom: 1.25rem;
`

export const Biography = styled.p`
   font-size: 1.25rem;
   font-weight: 400;
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
`
