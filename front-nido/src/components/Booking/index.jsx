import FormBooking from "./FormBooking";
import "./Booking.css";
import Schedule from "./ScheduleBooking";
import DetailsBooking from "./DetailBooking";
import CalendarReserve from "../CalendarReserve";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SessionContextProvider from "../../context/sessionContext";
import ReserveContext from "../../context/reserveContext";
function Booking({ product }) {
    const location = useLocation();
    const { reserve, setReserve } = useContext(ReserveContext);
    const history = useNavigate();
    const { token, user } = useContext(SessionContextProvider);
    const [error, setError] = useState("");
    const [errorCalendar, setErrorCalendar] = useState("");
    const [errorTime, setErrorTime] = useState("");
    const [covid, setCovid] = useState(false);
    const [info, setInfo] = useState("");
    const [time, setTime] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [city, setCity] = useState("");
    const handleCity = (city) => {
        if (JSON.stringify(reserve) !== "{}") {
            setReserve({ ...reserve, city: city })
        } else {

            setCity(city);
        }
    }
    const handleCovid = (cov) => {
        if (JSON.stringify(reserve) !== "{}") {
            setReserve({ ...reserve, covid: cov });
        } else {
            setCovid(cov);
        }
    }
    const handleInfo = (inf) => {
        if (JSON.stringify(reserve) !== "{}") {
            setReserve({ ...reserve, info: inf });
        } else {
            setInfo(inf);
        }
    }
    const handleTime = (tim) => {
        if (JSON.stringify(reserve) !== "{}") {
            setReserve({ ...reserve, hourIn: tim });
        } else {
            setTime(tim);
        }
    }
    const handleSelectRangeDate = (dateIn, dateOut) => {
        if (JSON.stringify(reserve) !== "{}") {
            setReserve({ ...reserve, dateIn: dateIn.split("/")[2] + "-" + (dateIn.split("/")[1] < 10 ? "0" + dateIn.split("/")[1] : dateIn.split("/")[1]) + "-" + (dateIn.split("/")[0] < 10 ? "0" + dateIn.split("/")[0] : dateIn.split("/")[0]), dateOut: dateOut.split("/")[2] + "-" + (dateOut.split("/")[1] < 10 ? "0" + dateOut.split("/")[1] : dateOut.split("/")[1]) + "-" + (dateOut.split("/")[0] < 10 ? "0" + dateOut.split("/")[0] : dateOut.split("/")[0]) });
            setStartDate(dateIn);
            setEndDate(dateOut);
        } else {
            setStartDate(dateIn);
            setEndDate(dateOut);
        }

    }
    const handleSubmitReserve = (e) => {
        if (JSON.stringify(reserve) === "{}") {
            if (!startDate || !endDate) {
                setErrorCalendar(<span className="error">Check-in y check-out obligatorios</span>)
            } else {
                setErrorCalendar("");
            }
            if (!time) {
                setErrorTime(<span className="error">Hora de llegada obligatoria</span>)
            } else {
                setErrorTime("");
            }
            if (!errorCalendar && !errorTime) {
                fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/reserve", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        dateIn: startDate.split("/")[2] + "-" + (startDate.split("/")[1] < 10 ? "0" + startDate.split("/")[1] : startDate.split("/")[1]) + "-" + (startDate.split("/")[0] < 10 ? "0" + startDate.split("/")[0] : startDate.split("/")[0]),
                        dateOut: endDate.split("/")[2] + "-" + (endDate.split("/")[1] < 10 ? "0" + endDate.split("/")[1] : endDate.split("/")[1]) + "-" + (endDate.split("/")[0] < 10 ? "0" + endDate.split("/")[0] : endDate.split("/")[0]),
                        hourIn: time,
                        info: info,
                        covid: covid,
                        city: city,
                        user: {
                            userId: user.userId,
                        },
                        product: {
                            productId: product.productId
                        }
                    })
                }).then(res => {
                    if (res.status >= 400 && res.status < 500) {
                        return Promise.reject(new Error("Error en la eleccion de fechas para el hotel"))
                    }
                    if (res.status >= 500) {
                        return Promise.reject(new Error("Lamentablemente no hemos podido guardar su reserva. Porfavor intentelo mas tarde"))
                    }
                    return res.text()
                }).then(data => {
                    history("/success-booking");
                }).catch(error => { setError(error.message) })
            }
        } else {
            fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/reserve", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    reservationId: reserve.reservationId,
                    dateIn: startDate.split("/")[2] + "-" + (startDate.split("/")[1] < 10 ? "0" + startDate.split("/")[1] : startDate.split("/")[1]) + "-" + (startDate.split("/")[0] < 10 ? "0" + startDate.split("/")[0] : startDate.split("/")[0]),
                    dateOut: endDate.split("/")[2] + "-" + (endDate.split("/")[1] < 10 ? "0" + endDate.split("/")[1] : endDate.split("/")[1]) + "-" + (endDate.split("/")[0] < 10 ? "0" + endDate.split("/")[0] : endDate.split("/")[0]),
                    hourIn: reserve.hourIn,
                    info: reserve.info,
                    covid: reserve.covid,
                    city: reserve.city,
                    user: {
                        userId: reserve.user.userId,
                    },
                    product: {
                        productId: reserve.product.productId
                    }
                })
            }).then(res => {
                console.log(res);
                if (res.status >= 400 && res.status < 500) {
                    return Promise.reject(new Error("Error en la eleccion de fechas para el hotel"))
                }
                if (res.status >= 500) {
                    return Promise.reject(new Error("Lamentablemente no hemos podido guardar su reserva. Porfavor intentelo mas tarde"))
                }
                return res.text()
            }).then(data => {
                history("/success-re-booking");
            }).catch(error => { setError(error.message) })
        }

    }
    const handleClickRemoveReserve = () => {
        fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/reserve/delete/${reserve.reservationId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.text())
            .then(data => {
                setReserve({})
                history(`/${user.userId}/mybooking`);
            }).catch(error => console.log(error))
    }
    return (
        <div className="booking">
            <div>
                <h2 className="booking-title">Completá tus datos</h2>
                <FormBooking handleCovid={handleCovid} handleInfo={handleInfo} handleCity={handleCity} />
                <h2 className="booking-title">Seleccioná tu fecha de reserva</h2>
                <CalendarReserve idProduct={product.productId} handleSelectRangeDate={handleSelectRangeDate} error={errorCalendar} />
                <h2 className="booking-title">Tu horario de llegada</h2>
                <Schedule handleTime={handleTime} error={errorTime} />
                {
                    JSON.stringify(reserve) !== '{}' && !location.pathname.includes('/mybooking')
                    &&
                    <button className="booking-details-button__cancel button-2" onClick={handleClickRemoveReserve}>Cancelar reserva</button>
                }
            </div>
            <DetailsBooking bookingId={reserve.reservationId} product={product} startDate={startDate} endDate={endDate} handleEventButton={handleSubmitReserve} error={error} buttonText="Confirmar Reserva" />

        </div>
    )
}

export default Booking;