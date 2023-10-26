import "./About.css";
import drink from "../../../assets/images/drink.jpeg"

function About() {
  return (
    <section className="about">
    <div className="mobile-flex grid-container about-container">
      <div className="about-text-container">
        <h1>Litte Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae fringilla massa.</p>
      </div>
      <img src={drink} alt="food representation" className="about-image" />
      </div>
    </section>
  );
}

export default About;
