import styled from 'styled-components'

export const Container = styled.section`
   min-width: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 4rem 6rem 0 6rem;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2.5rem 2rem;
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
   line-height: 0.5rem;
   margin-bottom: 1.25rem;
   color: ${props => props.theme.colors.subtitle};

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.5rem;
   }
`
export const Wrapper = styled.section`
   width: 100%;
   display: inline-grid;
   grid-template-columns: 1fr 1fr;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

export const Infos = styled.div`
   display: flex;
   flex-direction: row;
   margin-top: 1.5rem;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      justify-content: center;
   }

   ul:nth-child(1) {
      margin-right: 1.25rem;
      li {
         img {
            width: 2.5rem;
            height: auto;
         }

         margin-top: 0.5rem;
      }

      li:nth-child(2) {
         margin-top: 5.2rem;
      }
   }

   ul:nth-child(2) {
      li {
         padding-bottom: 4rem;
      }
   }
`

export const Form = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 1.5rem;

   @media screen and (max-width: ${props => props.theme.breakpoints.md}) {
      justify-content: center;
   }
`

export const InputContent = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 0.5rem;
   background-color: #1d1e26;
   color: ${props => props.theme.colors.lightGrey};
   font-weight: 400;
   padding: 0.8rem 1.2rem;
   border-radius: 0.5rem;

   input {
      width: 100%;
      border: none;
      background: transparent;
      height: 1.5rem;
      outline: none;
      color: ${props => props.theme.colors.text};
      margin-top: 0.3rem;
      font-size: 1.25rem;
      font-weight: 400;
      font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
   }

   textarea {
      min-width: 100%;
      background: transparent;
      border: none;
      outline: none;
      color: ${props => props.theme.colors.text};
      margin-top: 0.3rem;
      font-size: 1.25rem;
      font-weight: 400;
      font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
      resize: vertical;
   }
`
export const Copyright = styled.p`
   margin-top: 3rem;
`
