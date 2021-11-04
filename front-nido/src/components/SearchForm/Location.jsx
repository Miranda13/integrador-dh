import React, { Fragment } from "react";
import './Location.css';
import { useState, useEffect } from 'react';

function Location({ zIndexCalendar }) {
    const [showList, setShowList] = useState(false);
    const handleListLocation = (e) => {
        setShowList(!showList);
        zIndexCalendar();
    }
    const handleSelectLocation = (e) => {
        const title_location = document.querySelector(".container-location__title");
        title_location.innerHTML = "" + e.target.childNodes[1]?.textContent + ", " + e.target.childNodes[3]?.textContent;
        title_location.style.color = "var(--dark-color)"
    }
    useEffect(() => {
        window.addEventListener("click", (e) => {
            const inputLocation = document.querySelector(".container-location");
            const titleLocation = document.querySelector(".container-location__title");
            const list = document.querySelector(".container-location__list");

            if (e.target !== inputLocation && e.target !== list && e.target !== titleLocation) {
                setShowList(false);
            }
        })
    }, [])

    useEffect(() => {
        const list = document.querySelector(".container-location__list");

        if (showList) {
            list.classList.remove("hideItem");
        } else {
            list.classList.add("hideItem");
        }
    }, [showList])
    return (
        <div className="container-location" onClick={handleListLocation}>
            <h2 className="container-location__title" >¿A dónde vamos?</h2>
            <ul className="container-location__list hideItem">
                <li className="container-location__list__item" onClick={handleSelectLocation}><i className="fas fa-map-marker-alt"></i><strong>San Carlos de Bariloche</strong><br />Argentina</li>
                <li className="container-location__list__item" onClick={handleSelectLocation}><i className="fas fa-map-marker-alt"></i><strong>Buenos Aires</strong><br />Argentina</li>
                <li className="container-location__list__item" onClick={handleSelectLocation}><i className="fas fa-map-marker-alt"></i><strong>Mendoza</strong><br />Argentina</li>
                <li className="container-location__list__item" onClick={handleSelectLocation}><i className="fas fa-map-marker-alt"></i><strong>Córdoba</strong><br />Argentina</li>
            </ul>
        </div >
    )
}

export default Location;