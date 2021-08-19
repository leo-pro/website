import styled from 'styled-components'

export const Button = styled.button`
   border-radius: 0.5rem;
   border: none;
   color: ${props => props.theme.colors.buttonText};
   min-width: 14.5rem;
   min-height: 4rem;
   margin: 1.25rem 0;
   font-family: ${props => props.theme.typography.fontFamily};
   font-size: 1.375rem;
   font-weight: 500;
   cursor: pointer;
   line-height: 33px;
   letter-spacing: -0.094rem;
   background: linear-gradient(90deg, #00c6c2 0%, #00b0bd 0.01%, #3730a3 100%);
   transition: 0.3s ease;

   &:hover {
      filter: brightness(0.8);
   }

   @media screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      width: 100%;
   }
`
