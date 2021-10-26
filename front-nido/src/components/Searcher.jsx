import React from "react";
import Calendar from "./Calendar";
import Location from "./Location";
import "./styles/Searcher.css";

function Searcher() {
    return (
        <div className="container-searcher">
            <h1 className="container-searcher__titulo">Busca ofertas en hoteles, casas y mucho más</h1>
            <form className="container-searcher__form">
                <Location className="container-searcher__form__location"/>
                <Calendar className="container-searcher__form__calendar"/>
                <button className="container-searcher__form__button">Buscar</button>
            </form>
        </div>
    )
}

export default Searcher;