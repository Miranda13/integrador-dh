import React from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import "./styles/Searcher.css";
import { useState, useEffect } from 'react';
function Searcher() {
    const [hideCalendar, setHideCalendar] = useState(1);
    const handleZindexCalendar = () => {
        var width = window.innerWidth;
        if (width <= 480) {
            setHideCalendar(hideCalendar === -1 ? 1 : -1);
        }
    }
    useEffect(() => {
        const calendar = document.querySelector(".react-datepicker-wrapper");
        calendar.style.zIndex = hideCalendar;
    }, [hideCalendar])
    return (
        <div className="container-searcher">
            <form className="container-searcher__form">
                <Location className="container-searcher__form__location" zIndexCalendar={handleZindexCalendar} />
                <Calendar className="container-searcher__form__calendar" />
                <button className="container-searcher__form__button button-2">Buscar</button>
            </form>
        </div>
    )
}

export default Searcher;