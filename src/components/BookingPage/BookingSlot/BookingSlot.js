import "./BookingSlot.css";

function BookingSlot (props) {
  const { timeSlot } = props;
  return (
    <><tr>
    <td>{timeSlot.time}</td>
    <td>{timeSlot.available
      ? <button type="button" className="b-success">available</button>
      : <button type="button" className="b-danger">booked</button>}
    </td></tr></>
  );
}

export default BookingSlot ;
