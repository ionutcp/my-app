import "./Hero.css";
import food from "../../../assets/images/food.jpeg"
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  const goToReserveTable = () => {
    navigate("/booking-page")
  }
  return (
    <section className="hero">
    <div className="mobile-flex grid-container hero-container">
      <div className="hero-text-container">
        <h1>Litte Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla massa.</p>
        <button type="button" className="b-primary" onClick={goToReserveTable}>Reserve a table</button>
      </div>
      <img src={food} alt="food representation" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
