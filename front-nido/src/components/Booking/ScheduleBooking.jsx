import "./ScheduleBooking.css"

export default function ScheduleBooking() {
    return (
        <div className="booking-schedule">
            <div className="booking-schedule-join">
                <i className="booking-schedule-icon far fa-check-circle"></i>
                <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
            </div>
            <p>Indicá tu horario estimado de llegada</p>
            <div className="booking-schedule-time">
                <input placeholder="10:00 AM" name="time" id="time" type="text" className="booking-schedule-time-input"/>
                <i className="booking-schedule-time-icon fas fa-chevron-down"></i>
                <li className="container-booking-time-item" key="" >
                    <ul value="time">01:00 AM</ul>
                    <ul value="time">02:00 AM</ul>
                    <ul value="time">03:00 AM</ul>
                    <ul value="time">04:00 AM</ul>
                    <ul value="time">05:00 AM</ul>
                    <ul value="time">06:00 AM</ul>
                    <ul value="time">07:00 AM</ul>
                    <ul value="time">08:00 AM</ul>
                    <ul value="time">09:00 AM</ul>
                    <ul value="time">10:00 AM</ul>
                    <ul value="time">11:00 AM</ul>
                    <ul value="time">12:00 AM</ul>
                    <ul value="time">01:00 PM</ul>
                    <ul value="time">02:00 PM</ul>
                    <ul value="time">03:00 PM</ul>
                    <ul value="time">04:00 PM</ul>
                    <ul value="time">05:00 PM</ul>
                    <ul value="time">06:00 PM</ul>
                    <ul value="time">07:00 PM</ul>
                    <ul value="time">08:00 PM</ul>
                    <ul value="time">09:00 PM</ul>
                    <ul value="time">10:00 PM</ul>
                    <ul value="time">11:00 PM</ul>
                    <ul value="time">12:00 PM</ul>
                </li>
            </div>
        </div>
    )
}