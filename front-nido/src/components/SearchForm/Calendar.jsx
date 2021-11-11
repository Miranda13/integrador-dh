import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';

const Calendar = () => {
    registerLocale('es', es)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [showCalendar, setShowCalendar] = useState();
    const onChange = (dates) => {
        setDateRange(dates);
    }
    const closeCalendar = (e) => {
        if (startDate !== null && endDate !== null) {
            const inputCalendar = document.querySelector(".calendar__date");
            const iconCalendar = document.querySelector(".react-datepicker-wrapper");
            iconCalendar.style.color = "var(--dark-color)";
            inputCalendar.style.color = "var(--dark-color)";
        }

        setShowCalendar(!showCalendar);
    }
    function clearDaysOutsideMonth() {
        const dayOutsideMonth = document.querySelectorAll(".react-datepicker__day--outside-month");
        dayOutsideMonth.forEach(day => {
            day.innerHTML = "";
        })
    }
    function editNamesDaysWeek() {
        // const namesMonth = document.querySelectorAll(".react-datepicker__current-month");
        const namesDaysWeek = document.querySelectorAll(".react-datepicker__day-name");
        namesDaysWeek.forEach(name => {
            name.innerHTML = name.textContent.substring(0, 1).toUpperCase();
        })
        // namesMonth.forEach(name => {
        //     name.innerHTML = name.textContent.charAt(0).toUpperCase() + name.textContent.slice(1);
        // })
    }
    const handleOnChangeMonth = () => {
        editNamesDaysWeek();
        clearDaysOutsideMonth();
    }
    useEffect(() => {
        const datepicker = document.querySelector(".react-datepicker-wrapper");
        datepicker.addEventListener("click", () => {
            setShowCalendar(!showCalendar);
        })
    }, [])
    useEffect(() => {
        if (showCalendar) {
            editNamesDaysWeek();
        }
    }, [showCalendar, startDate, endDate])
    return (
        <>
            <DatePicker
                placeholderText="Check in - Check out"
                className="calendar__date"
                selectsRange={true}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                monthsShown={2}
                dateFormat="dd MMM."
                locale="es"
                // onMonthChange={handleOnChangeMonth}
                open={showCalendar}
                shouldCloseOnSelect={false}
                onClickOutside={closeCalendar}
                dateFormatCalendar={"MMMM"}
            >
                <button className="calendar__date-btn button-1" onClick={closeCalendar}>Aplicar</button>
            </DatePicker>
        </>
    );
};

export default Calendar;

