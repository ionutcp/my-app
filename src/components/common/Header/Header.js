import {useState} from "react";
import './Header.css';
import logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";
import BurgerIcon from "../../../assets/icons/BurgerIcon";
import XIcon from "../../../assets/icons/XIcon";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className='mobile-flex grid-container header'>
        <button type="button" onClick={() => setShowMenu(!showMenu)} className="unstyled-button burger-icon">
          {showMenu ? <XIcon  color="#000" width="2em" height="2em"/> : <BurgerIcon color="#000" width="2em" height="2em" />}
        </button>
        <img src={logo} alt="little lemon logo" className='logo' />
        <button type="button"  className="unstyled-button shop-icon"></button>
        <nav className={!showMenu ? "hide-menu-mobile" : "show-menu-mobile"}>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/#home`}>About</Link>
            </li>
            <li>
              <Link to={`/#menu`}>Menu</Link>
            </li>
            <li>
              <Link to={`/booking-page`}>Reservations</Link>
            </li>
            <li>
              <Link to={`/#order`}>Order Online</Link>
            </li>
            <li>
              <Link to={`/#login`}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      </>
  );
}

export default Header;
