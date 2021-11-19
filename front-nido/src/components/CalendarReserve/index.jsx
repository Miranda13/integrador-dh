import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "./CalendarReserve.css";
import es from 'date-fns/locale/es';
export default function CalendarReserve({ status, handleSelectRangeDate }) {
    registerLocale('es', es)
    const arrayDates = ["2021-11-11", "2021-12-05", "2021-11-13", "2021-11-14", "2021-11-20", "2021-12-15", "2021-12-17", "2021-12-20"];
    // const [startDate, setStartDate] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const onChange = (dates) => {
        if (status !== "disabled") {
            setDateRange(dates);
        }
    }
    function editNamesDaysWeek() {
        const namesDaysWeek = document.querySelectorAll(".react-datepicker__day-name");
        namesDaysWeek.forEach(name => {
            name.innerHTML = name.textContent.substring(0, 1).toUpperCase();
        })
    }
    function convertFormatArrayDatesForExcludeCalendar() {
        const arrayDatesFormat = [];
        arrayDates.forEach(date => {
            const dateFormat = new Date(date.split("-")[0], date.split("-")[1] - 1, date.split("-")[2]);
            arrayDatesFormat.push(dateFormat);
        })
        return arrayDatesFormat;
    }
    useEffect(() => {
    }, [])
    useEffect(() => {
        editNamesDaysWeek();
        let dateStart = new Date(startDate);
        let dateEnd = new Date(endDate);
        if (endDate !== null && startDate !== null) {
            handleSelectRangeDate(dateStart.toLocaleDateString(), dateEnd.toLocaleDateString());
            console.log(dateStart.toLocaleDateString(), dateEnd.toLocaleDateString());
        }
    }, [startDate, endDate])
    return (
        <div className="calendarReserve">
            <DatePicker
                inline
                locale="es"
                minDate={new Date()}
                excludeDates={convertFormatArrayDatesForExcludeCalendar()}
                calendarClassName={status}
                dateFormat="dd MMM."
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
                            onClick={decreaseMonth}
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
                                month: "long",
                            }).substring(0, 1).toUpperCase() + monthDate.toLocaleString("es-ES", { month: "long" }).slice(1)}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                "react-datepicker__navigation react-datepicker__navigation--next"
                            }
                            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                            onClick={increaseMonth}
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
                startDate={startDate}
                endDate={endDate}
                selected={startDate}
                selectsRange={true}
                onChange={onChange}
                monthsShown={2}
            />
        </div>
    )
}