import './Location.css';
import { useState, useEffect } from 'react';
import getData from '../../assets/js/getData';
function Location({ zIndexCalendar }) {
    const [locations, setLocations] = useState([]);
    const [showList, setShowList] = useState(false);
    const handleListLocation = (e) => {
        setShowList(!showList);
        zIndexCalendar();
    }
    const handleSelectLocation = (e) => {
        const title_location = document.querySelector(".container-location__title");
        if (e.target.childNodes[1]?.textContent !== undefined && e.target.childNodes[3]?.textContent !== undefined) {
            title_location.innerHTML = "" + e.target.childNodes[1]?.textContent + ", " + e.target.childNodes[3]?.textContent;
            title_location.style.color = "var(--dark-color)"
        }
    }
    useEffect(() => {
        getData("http://localhost:8080/api/v1/location")
            .then(data => setLocations(data))
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
            <h2 className="container-location__title">¿A dónde vamos?</h2>
            <ul className="container-location__list hideItem">
                {
                    locations.map((location, index) => {
                        return (
                            <li className="container-location__list__item" key={index} onClick={handleSelectLocation}>
                                <i className="fas fa-map-marker-alt"></i>
                                <span id="city" className="container-location__list-name"><strong>{location.city}</strong></span>
                                <br />
                                <span className="container-location__list-country">{location.country}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Location;