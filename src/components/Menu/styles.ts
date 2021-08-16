import styled from 'styled-components'

export const Header = styled.header`
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   z-index: 100;
   background-color: ${props => props.theme.colors.background};

   .nav {
      max-width: 968px;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .nav__logo,
   .nav__toggle {
      color: ${props => props.theme.colors.gray[50]};
      font-weight: ${props => props.theme.typography.fontWeight.medium};
   }

   .nav__logo:hover {
      color: ${props => props.theme.colors.brand[500]};
   }

   .nav__toggle {
      font-size: 1.1rem;
      cursor: pointer;

      &:hover {
         color: ${props => props.theme.colors.brand[500]};
      }
   }

   @media screen and (max-width: 767px) {
      .nav__menu {
         position: fixed;
         bottom: 0;
         left: 0;
         width: 100%;
         background-color: ${props =>
            props.theme.title === 'dark'
               ? props.theme.colors.white
               : props.theme.colors.black};
         color: '#333333';
         padding: 2rem;
         box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
         border-radius: 1.5rem 1.5rem 0 0;
         transition: 0.3s;
      }
   }

   .nav__list {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
   }

   .nav__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${props => props.theme.typography.fontSize.sm};
      color: ${props => props.theme.colors.title};
      font-weight: ${props => props.theme.typography.fontWeight.medium};

      &:hover {
         color: ${props => props.theme.colors.brand[500]};
      }

      i {
         font-size: 1.2rem;
      }
   }

   .nav__close {
      position: absolute;
      right: 1.3rem;
      bottom: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${props => props.theme.colors.brand[500]};

      &:hover {
         color: ${props => props.theme.colors.brand[900]};
      }
   }
`
