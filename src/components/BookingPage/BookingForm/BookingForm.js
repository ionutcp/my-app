import "./BookingForm.css";

function BookingForm (props) {
  const {values, errors, handleBlur, handleChange, handleSubmit, timeSlots} = props;
  return (
    <>
      <form>
        <div className="reserve-table">
          <div className="input-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.date && <div className="error">{errors.date}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="time">Choose time</label>
            <select id="time" name="time" value={values.time} onChange={handleChange} onBlur={handleBlur}>
              <option value="">Select a time</option>
              {timeSlots.map(timeSlot => <option value={timeSlot.time} key={timeSlot.time}>{timeSlot.time}</option>)}
            </select>
            {errors.time && <div className="error">{errors.time}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              id="guests"
              name="guests"
              type="number"
              value={values.guests}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.guests && <div className="error">{errors.guests}</div>}
          </div>
          <div className="input-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={values.occasion} onChange={handleChange} onBlur={handleBlur}>
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {errors.occasion && <div className="error">{errors.occasion}</div>}
          </div>
        </div>
        <div className="submit-button-row">
          <button className="b-primary" type="button"  onClick={handleSubmit}>
            Make Your reservation
          </button>
        </div>
      </form>
    </>
  );
}

export default BookingForm ;
