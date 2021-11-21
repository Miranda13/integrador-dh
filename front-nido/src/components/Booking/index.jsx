import FormBooking from "./FormBooking";
import "./Booking.css";
import Schedule from "./ScheduleBooking";
import DetailsBooking from "./DetailBooking";
import CalendarReserve from "../CalendarReserve";


function Booking({ list }) {
    return (
        <div className="booking">
            <div>
                <h2 className="booking-title">Completá tus datos</h2>
                <FormBooking />
                <h2 className="booking-title">Seleccioná tu fecha de reserva</h2>
                <CalendarReserve/>
                <h2 className="booking-title">Tu horario de llegada</h2>
                <Schedule />
            </div>
            <DetailsBooking />
        </div>
    )
}

export default Booking;