import "./Specials.css";
import plate from "../../../assets/images/plate.jpg"
import { useNavigate } from 'react-router-dom';

function Specials() {
  const navigate = useNavigate();
  const goToReserveTable = () => {
    navigate("/booking-page")
  }
  return (
    <section className="specials">
      <div className="mobile-flex grid-container title-action-container">
        <h2 className="specials-title">Specials</h2>
        <div className="specials-reserve"><button className="b-primary" type="button" onClick={goToReserveTable}>Reserve a table</button></div>
      </div>
      <div className="mobile-flex grid-container articles-container">
        <article className="article1">
          <img src={plate} alt="a great dish" className="article-image"/>
          <div className="article-body">
            <div className="mobile-flex grid-container special-container">
              <h6 className="special-title">Greek salad</h6>
              <span className="special-price">$ 12.43</span>
            </div>
            <p>Donec facilisis diam non neque placerat volutpat vitae eget justo.</p>
            <button className="b-text" type="button">Order a delivery</button>
          </div>
        </article>
        <article className="article2">
          <img src={plate} alt="a great dish" className="article-image"/>
          <div className="article-body">
            <div className="mobile-flex grid-container special-container">
              <h6 className="special-title">Greek salad</h6>
              <span className="special-price">$ 12.43</span>
            </div>
            <p>Donec facilisis diam non neque placerat volutpat vitae eget justo.</p>
            <button className="b-text" type="button">Order a delivery</button>
          </div>
        </article>
        <article className="article3">
          <img src={plate} alt="a great dish" className="article-image"/>
          <div className="article-body">
            <div className="mobile-flex grid-container special-container">
              <h6 className="special-title">Greek salad</h6>
              <span className="special-price">$ 12.43</span>
            </div>
            <p>Donec facilisis diam non neque placerat volutpat vitae eget justo.</p>
            <button className="b-text" type="button">Order a delivery</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
