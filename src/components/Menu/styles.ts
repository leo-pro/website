import styled from 'styled-components'

export const Header = styled.header`
   width: 100%;
   height: 96px;
   z-index: 100;
   padding: 1.25rem 6rem;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 2.5rem 2rem;
   }
`
