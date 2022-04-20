import { GrDiamond } from 'react-icons/gr'

import '../styles/components/Navbar.css'


const Navbar = ({ handleSubmenu, closeSubmenu }) => {

  const handleClose = e => {
    if (e.target.classList.contains('Navbar')) {
      closeSubmenu()
    }
  }

  return (
    <nav className="Navbar" onMouseOver={ handleClose }>
        <div className="navbar__logo">
            <span className="navbar__logo__first"><GrDiamond /></span>
            <span className="navbar__logo__second">Usketch</span>
        </div>

        <ul className="navbar__menu">
            <li onMouseOver={ handleSubmenu }>Online Courses</li>
            <li onMouseOver={ handleSubmenu }>In Person</li>
            <li onMouseOver={ handleSubmenu }>Summer Camp</li>
        </ul>

        <button className="navbar__btn">Registration</button>
    </nav>
  )
}

export default Navbar