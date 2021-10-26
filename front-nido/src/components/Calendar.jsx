import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Calendar.css";

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    return (
        <div className="calendar">
           {/* { <i className="calendar far fa-calendar-alt"></i> */}
            <DatePicker
                className="calendar__date"
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                monthsShown={2}
            />
        </div>

        // <DatePicker
        //     selected={startDate}
        //     onChange={(date) => setStartDate(date)}
        //     monthsShown={2}

        // />
    );
};

export default Calendar;