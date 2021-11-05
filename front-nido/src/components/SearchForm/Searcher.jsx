import React from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import "./Searcher.css";
import { useState, useEffect } from 'react';
function Searcher() {
    const [hideCalendar, setHideCalendar] = useState(1);
    const handleZindexCalendar = () => {
        var width = window.innerWidth;
        if (width <= 760) {
            setHideCalendar(hideCalendar === -1 ? 1 : -1);
        }
    }
    useEffect(() => {
        const calendar = document.querySelector(".react-datepicker-wrapper");
        calendar.style.zIndex = hideCalendar;
    }, [hideCalendar])
    return (
        <div className="container-searcher">
            <h1 className="container-searcher__title">Busca ofertas en hoteles, cabañas y mucho más!</h1>
            <form className="container-searcher__form">
                <Location className="container-searcher__form__location" zIndexCalendar={handleZindexCalendar} />
                <Calendar className="container-searcher__form__calendar" />
                <button className="container-searcher__form__button button-1">Buscar</button>
            </form>
        </div>
    )
}

export default Searcher;