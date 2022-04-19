import { GrDiamond } from 'react-icons/gr'

import '../styles/components/Navbar.css'


const Navbar = () => {
  return (
    <nav className="Navbar">
        <div className="navbar__logo">
            <span className="navbar__logo__first"><GrDiamond /></span>
            <span className="navbar__logo__second">Usketch</span>
        </div>

        <ul className="navbar__menu">
            <li>Online Courses</li>
            <li>In Person</li>
            <li>Summer Camp</li>
        </ul>

        <button className="navbar__btn">Registration</button>
    </nav>
  )
}

export default Navbar