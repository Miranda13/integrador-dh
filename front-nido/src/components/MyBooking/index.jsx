import DetailBooking from "../Booking/DetailBooking";
import "./MyBooking.css";
import "../Booking/DetailBooking.css";
import { useContext, useState, useEffect } from "react";
import ReserveContext from "../../context/reserveContext";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import SessionContext from "../../context/sessionContext";
export default function MyBooking({ booking, getReserves }) {
    const { user, token } = useContext(SessionContext);
    const [active, setActive] = useState(false);
    const [reloadScore, setReloadScore] = useState(false);
    const history = useNavigate();
    const { reserve, setReserve } = useContext(ReserveContext);
    const [myReserveLocal, setMyReserveLocal] = useState({});
    const buttonText = "Editar reserva";
    const [toggleSelectStar, setToggleSelectStar] = useState(false);
    const handleClickEditReserve = (e) => {
        setReserve(booking.find(b => b.reservationId == e.target.id));
    }
    useEffect(() => {
        JSON.stringify(reserve) !== "{}" && history(`/product/${reserve.product.productId}/booking`);
    }, [reserve])
    const toggle = (e) => {
        setMyReserveLocal(booking.find(b => b.reservationId == e.target.id));
    }
    useEffect(() => {
        if (JSON.stringify(myReserveLocal) !== "{}") {
            setActive(!active);
            setToggleSelectStar(false);
        }
    }, [myReserveLocal])
    const handleHoverStarSelect = (e, idx) => {
        if (!toggleSelectStar) {
            const listIconStars = document.querySelectorAll(".modal-score__stars__star");
            listIconStars.forEach((icon, index) => {
                if (index <= idx) {
                    icon.style.color = "var(--main-color)"
                } else {
                    icon.style.color = "var(--dark-color)"
                }
            })
        }
    }
    const handleOutHoverStarSelect = (e) => {
        if (!toggleSelectStar) {
            const listIconStars = document.querySelectorAll(".modal-score__stars__star");
            listIconStars.forEach(icon => {
                icon.style.color = "var(--dark-color)"
            })
        }

    }
    const handleClickScore = (e, idx) => {
        setToggleSelectStar(true);
        const listIconStars = document.querySelectorAll(".modal-score__stars__star");
        listIconStars.forEach((icon, index) => {
            if (index <= idx) {
                icon.style.color = "var(--main-color)"
            } else {
                icon.style.color = "var(--dark-color)"
            }
        })
    }
    const handleClickSubmitScore = (e) => {
        const listIconStars = document.querySelectorAll(".modal-score__stars__star");
        let score = 0;
        listIconStars.forEach((icon, index) => {
            if (icon.style.color == "var(--main-color)") {
                score = score + 1;
            }
        })
        const payload = {
            score: score,
            user: {
                userId: user.userId
            },
            product: {
                productId: myReserveLocal?.product?.productId
            }
        }
        fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/score/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.status == 201) {
                    setReloadScore(true);
                }
                return res.text()
            })
            .then(data => {
                setMyReserveLocal({});
                setActive(false);
                setToggleSelectStar(false)
<<<<<<< HEAD
            }).catch(error => console.log(error))
=======
            }).catch(error => {
                console.log(error)
            })
>>>>>>> creacion-producto
    }
    useEffect(() => {
        getReserves();
    }, [reloadScore])
    return (
        <div className="my-booking-card">
            <h2 className="my-booking-card__title">Proximas reservas</h2>
            <div className="my-booking-card__section">
                {booking.map(
                    b => {
                        let dateInAux = new Date(b.dateIn.split("-")[0], b.dateIn.split("-")[1] - 1, b.dateIn.split("-")[2])
                        return (
                            <>
                                {
                                    dateInAux >= new Date() ?
                                        <DetailBooking bookingId={b.reservationId} product={b.product} startDate={b.dateIn} endDate={b.dateOut} buttonText={buttonText} handleEventButton={handleClickEditReserve} />
                                        :
                                        ""
                                }
                            </>
                        )
                    }
                )}

            </div>
            <h2 className="my-booking-card__title">Reservas pasadas</h2>
            <div className="my-booking-card__section">
                {booking.map(
                    b => {
                        let dateInAux = new Date(b.dateIn.split("-")[0], b.dateIn.split("-")[1] - 1, b.dateIn.split("-")[2])
                        return (
                            <>
                                {
                                    dateInAux < new Date() ?
                                        <DetailBooking bookingId={b.reservationId} product={b.product} startDate={b.dateIn} endDate={b.dateOut} buttonText={"Votar"} handleEventButton={toggle} />
                                        :
                                        ""
                                }
                            </>
                        )
                    }
                )}
            </div>
            <Modal active={active} toggle={toggle}>
                <div className="modal-score">
                    <h3 className="modal-score__title">Valorá el servicio</h3>
                    <div className="modal-score__stars">
                        <div className="modal-score__stars_face">
                            <div>
                                <span className="modal-score__stars_icon_face"><i class="far fa-frown"></i></span>
                            </div>
                            <div>
                                <span className="modal-score__stars_icon_face"><i class="far fa-grin-beam"></i></span>
                            </div>
                        </div>
                        <div className="modal-score__stars_2">
                            {
                                [1, 2, 3, 4, 5].map((i, index) => {
<<<<<<< HEAD
=======
                                    // let colorIcon = i <= Math.round(myReserveLocal?.product?.avgScore) ? "fas fa-star icon-color" : " fas fa-star";
>>>>>>> creacion-producto
                                    return (
                                        <span className="modal-score__stars__star" onClick={(e) => { handleClickScore(e, index) }} onMouseEnter={(e) => { handleHoverStarSelect(e, index) }} onMouseLeave={handleOutHoverStarSelect}><i className="fas fa-star" ></i></span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <button className="booking-details-button__cancel button-1" onClick={handleClickSubmitScore}>Enviar</button>
                </div>
            </Modal>
        </div >
    )
}