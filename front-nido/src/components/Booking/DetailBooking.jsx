import "./DetailBooking.css";
import { useNavigate } from "react-router-dom";
import ReserveContext from "../../context/reserveContext";
import { useContext, useEffect, useState } from "react";
import SessionContext from "../../context/sessionContext";
import Score from "../Score";

export default function DetailBooking({ bookingId, product, startDate, endDate, handleEventButton, error, buttonText }) {
    const history = useNavigate();
    const { user, token } = useContext(SessionContext);
    const { reserve, setReserve } = useContext(ReserveContext);
    const [active, setActive] = useState(JSON.stringify(reserve) !== "{}" ? true : false);
    useEffect(() => {
        if (JSON.stringify(reserve) !== "{}") {
            setActive(false);
        }
    }, [startDate, endDate])

    return (
        <div className="booking-details">
            <div className="booking-details-img">
                <h2 className="booking-title">Detalle de la reserva</h2>
                < img src={product.images[0].url} className="booking-details-image" alt="" />
            </div>
            <div className="booking-details-info">
                <div className="booking-details__product">
                    <h3 className="booking-details__product__category">{product.category.title}</h3>
                    <h2 className="booking-details-title">{product.name}</h2>
                    <div className="booking-details__product__score">
                        <Score scores={reserve.product?.score ? reserve.product?.score : product.score} avgScore={reserve.product?.avgScore ? reserve.product?.avgScore : product.avgScore} />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <div className="booking-details__product__location">
                        <i className="booking-details__product__location__icon fas fa-map-marker-alt"></i>
                        <div className="booking-details__product__location__title">{product.location.city}, {product.location.country}</div>
                    </div>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check in</h3>
                    <p>{active ? reserve.dateIn : startDate}</p>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check out</h3>
                    <p>{active ? reserve.dateOut : endDate}</p>
                </div>
                <hr className="booking-details-hr" />
                <button type="submit" className="booking-details-button button-1" id={`${bookingId}`} onClick={handleEventButton}>{buttonText}</button>
            </div>
        </div>
    )

}