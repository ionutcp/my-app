import "./BookingPage.css";
import HeroHeading from "../../components/common/HeroHeading/HeroHeading";
import { useState, useReducer } from "react";
import BookingForm from "./BookingForm/BookingForm";
import BookingSlot from "./BookingSlot/BookingSlot";


function BookingPage() {
    const initialValues = {
        date: "",
        time: "",
        guests: "",
        occasion: "",
    };
    const initialErrors = {
        date: "",
        time: "",
        guests: "",
        occasion: "",
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const isNotValid = {
        'date': (el) => {
            return !values[el] ? "The field should not be empty" : false;
        },
        'time': (el) => {
            return !values[el] ? "The field should not be empty" : false;
        },
        'guests': (el) => {
            return !values[el] || (!isNaN(values[el]) && values[el] === 0) ? "The field should be a number" : false;
        },
        'occasion': (el) => {
            return !values[el] || values[el].length < 1 ? "The field should not be empty" : false;
        },
    };
    const initialState = [];
    const initializeTimes = () => {
        return [
            {time:"17:00", available: true},
            {time:"18:00", available: true},
            {time:"19:00", available: true},
            {time:"20:00", available: true},
            {time:"21:00", available: true},
            {time:"22:00", available: true},
        ];
    }
    const updateTimes = (state, action) => {
        switch (action.type) {
          case "UPDATE_TIME_AVAILABILITY":
            return state.map((timeSlot) =>{
                if (timeSlot.time === action.payload) {
                    return { ...timeSlot, available: !timeSlot.available };
                }
                return { ...timeSlot, available: true };
            }
            );
          default:
            return state;
        }
      };
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initialState, initializeTimes);
    const handleBlur = (e) => {
        const { name } = e.target;
        const shouldSetError = isNotValid[name](name);
        if (shouldSetError) {
            setErrors((prevState) => ({
              ...prevState,
              [name]: isNotValid[name](name),
            }));
        } else {
            setErrors((prevState) => ({
              ...prevState,
              [name]: "",
            }));
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "time") {
            dispatchAvailableTimes({ type: "UPDATE_TIME_AVAILABILITY", payload: value });
        }
        setValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        const shouldSetError = isNotValid[name](name);
        if (!shouldSetError) {
            setErrors((prevState) => ({
              ...prevState,
              [name]: "",
            }));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!(errors.date || errors.time || errors.guests || errors.occasion)
            && (values.date && values.time && values.guests && values.occasion)
        ){
            console.log(values);
        } else {
            handleBlur({target:{name: "date"}});
            handleBlur({target:{name: "time"}});
            handleBlur({target:{name: "guests"}});
            handleBlur({target:{name: "occasion"}});
        }
    }
    return (
        <main>
        <HeroHeading title="Make a Reservation" />
        <BookingForm values={values} errors={errors}
            handleBlur={handleBlur} handleChange={handleChange} handleSubmit={handleSubmit} timeSlots={availableTimes} />
        <h2 className="time-slots-title">Available time slots</h2>
        <table className="time-slots-table">
            <tbody>
            {availableTimes.map((timeSlot) => <BookingSlot key={timeSlot.time} timeSlot={timeSlot} />)}
            </tbody>
        </table>
    </main>
    );
}

export default BookingPage;
