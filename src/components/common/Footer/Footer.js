import "./Footer.css";
import logo from "../../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
    <div className="mobile-flex grid-container footer-container">
      <img src={logo} alt="food representation" className="footer-image" />
      <div className="footer-menu-container">
        <h6>Doorbamt</h6>
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
      </div>
      <div className="footer-contact-container">
        <h6>Contact</h6>
        <ul>
            <li>
              <a href="/">Adress</a>
            </li>
            <li>
              <a href="/home">Email</a>
            </li>
            <li>
              <a href="/menu">Phone</a>
            </li>
        </ul>
      </div>
      <div className="footer-social-container">
        <h6>Social media links</h6>
        <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/home">Instagram</a>
            </li>
            <li>
              <a href="/menu">Tiktok</a>
            </li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
