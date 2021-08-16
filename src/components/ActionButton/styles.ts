import styled from 'styled-components'

export const Button = styled.button`
   border-radius: 0.5rem;
   border: none;
   color: ${props => props.theme.colors.black};
   width: 233px;
   height: 64px;
   margin: 1.25rem 0;
   font-family: ${props => props.theme.typography.fontFamily};
   font-size: 1.25rem;
   font-weight: 500;
   cursor: pointer;
   line-height: 30px;
   letter-spacing: -1.5px;
   background: linear-gradient(90deg, #00c6c2 0%, #00b0bd 39.58%, #3730a3 100%);
   transition: 0.3s ease;

   &:hover {
      filter: brightness(0.8);
   }
`
