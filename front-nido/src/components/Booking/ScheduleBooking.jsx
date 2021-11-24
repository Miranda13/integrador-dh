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
                <input placeholder="10:00 AM" name="time" id="time" type="text" className="booking-schedule-time-input" required />
                <i className="booking-schedule-time-icon fas fa-chevron-down"></i>
                <ol className="container-booking-time-item" key="" >
                    <li value="01">01:00 AM</li>
                    <li value="02">02:00 AM</li>
                    <li value="03">03:00 AM</li>
                    <li value="04">04:00 AM</li>
                    <li value="05">05:00 AM</li>
                    <li value="06">06:00 AM</li>
                    <li value="07">07:00 AM</li>
                    <li value="08">08:00 AM</li>
                    <li value="09">09:00 AM</li>
                    <li value="10">10:00 AM</li>
                    <li value="11">11:00 AM</li>
                    <li value="12">12:00 AM</li>
                    <li value="13">01:00 PM</li>
                    <li value="14">02:00 PM</li>
                    <li value="15">03:00 PM</li>
                    <li value="16">04:00 PM</li>
                    <li value="17">05:00 PM</li>
                    <li value="18">06:00 PM</li>
                    <li value="19">07:00 PM</li>
                    <li value="20">08:00 PM</li>
                    <li value="21">09:00 PM</li>
                    <li value="22">10:00 PM</li>
                    <li value="23">11:00 PM</li>
                    <li value="00">12:00 PM</li>
                </ol>
            </div>
        </div>
    )
}