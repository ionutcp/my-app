import "./Testimonials.css";
import person from "../../../assets/images/person.jpeg"
import SvgIcon from '../../../assets/icons/SvgIcon';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="mobile-flex grid-container title-testimonials-container">
        <h2>Testimonials</h2>
      </div>
      <div className="mobile-flex grid-container ratings-container">
        <div className="rating1">
          <div className="rating-stars">
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
          </div>
          <div className="rating-body">
            <div className="mobile-flex grid-container ratings-user">
              <img src={person} alt="a great dish" className="user-image"/>
              <h6 className="user-name">Greek salad</h6>
            </div>
            <p>Donec facilisis diam non neque placerat volutpat vitae eget justo.</p>
          </div>
        </div>
        <div className="rating2">
          <div className="rating-stars">
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#aaa" width="1em" height='1em' />
          </div>
          <div className="rating-body">
            <div className="mobile-flex grid-container ratings-user">
              <img src={person} alt="a great dish" className="user-image"/>
              <h6 className="user-name">Greek salad</h6>
            </div>
            <p>Donec facilisis diam non neque placerat volutpat vitae eget justo.</p>
          </div>
        </div>
        <div className="rating3">
          <div className="rating-stars">
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
            <SvgIcon color="#ffff00" width="1em" height='1em' />
          </div>
          <div className="rating-body">
            <div className="mobile-flex grid-container ratings-user">
              <img src={person} alt="a great dish" className="user-image"/>
              <h6 className="user-name">Greek salad</h6>
            </div>
            <p>Donec facilisis diam non neque placerat volutpat vitae eget justo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
