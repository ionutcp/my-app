import './Header.css';
import logo from "../../assets/images/logo.png"
function Header() {
  return (
    <>
      <header className='mobile-flex grid-container header'>
        <img src={logo} alt="little lemon logo" className='logo' />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/home">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      </>
  );
}

export default Header;
