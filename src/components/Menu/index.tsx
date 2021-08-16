import { Header } from './styles'

import * as Unicons from '@iconscout/react-unicons'
import { useState } from 'react'

export function Menu() {
   const [menuIsActive, setMenuIsActive] = useState(false)

   function showMenu(event) {
      event.preventDefault()
   }

   return (
      <Header>
         <nav className="nav container">
            <a href="" className="nav__logo">
               DevLeo
            </a>

            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list grid">
                  <li className="nav__item">
                     <a href="#" className="nav__link">
                        <Unicons.UilEstate /> Home
                     </a>
                  </li>
                  <li className="nav__item">
                     <a href="#" className="nav__link">
                        <Unicons.UilMessage /> Contact
                     </a>
                  </li>
               </ul>
               <Unicons.UilTimes id="nav-close" />
            </div>

            <div className="nav__buttons">
               <div className="nav__toggle" onClick={event => showMenu(event)}>
                  <Unicons.UilApps />
               </div>
            </div>
         </nav>
      </Header>
   )
}
