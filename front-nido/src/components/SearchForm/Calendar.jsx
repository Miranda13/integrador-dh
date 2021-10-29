import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react/cjs/react.development";
import "./Calendar.css";
const Calendar = () => {
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
        const namesDaysWeek = document.querySelectorAll(".react-datepicker__day-name");
        namesDaysWeek.forEach(name => {
            name.innerHTML = name.textContent.substring(0, 1).toUpperCase();
        })
    }
    useEffect(() => {
        const inputCalendar = document.querySelector(".react-datepicker-wrapper");
        inputCalendar.addEventListener("click", () => {
            setShowCalendar(true);
        })
    }, [])
    // Para mas adelante
    // if (showCalendar) {
    //     const buttonPrevMonth = document.querySelector(".react-datepicker__navigation--previous");
    //     const buttonNexMonth = document.querySelector(".react-datepicker__navigation--next");
    //     buttonPrevMonth.addEventListener("click", () => {
    //         clearDaysOutsideMonth();
    //     })
    //     buttonNexMonth.addEventListener("click", () => {
    //         clearDaysOutsideMonth();
    //     })
    // }
    useEffect(() => {
        if (showCalendar) {
            editNamesDaysWeek();
            clearDaysOutsideMonth();
        }
    }, [showCalendar, startDate])
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
                open={showCalendar}
                shouldCloseOnSelect={false}
                dateFormatCalendar={"MMMM"}
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
                        <button
                            aria-label="Previous Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--previous"
                            }
                            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                            onClick={() => {
                                decreaseMonth()
                                setShowCalendar(true);
                            }}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                }
                            >
                                {"<"}
                            </span>
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("es-ES", {
                                month: "long"
                            }).charAt(0).toUpperCase() + monthDate.toLocaleString("es-ES", {
                                month: "long"
                            }).slice(1)}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={() => {
                                increaseMonth()
                                setShowCalendar(true);
                            }}
                        >
                            <span
                                className={
                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                }
                            >
                                {">"}
                            </span>
                        </button>
                    </div>
                )}
            >
                <button className="calendar__date-btn" onClick={closeCalendar}>Aplicar</button>
            </DatePicker>
        </>
        // <DatePicker
        //     selected={startDate}
        //     onChange={(date) => setStartDate(date)}
        //     monthsShown={2}

        // />
    );
};

export default Calendar;