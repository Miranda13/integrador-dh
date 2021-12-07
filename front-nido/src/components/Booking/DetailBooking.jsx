import "./DetailBooking.css";
import { useNavigate, useLocation } from "react-router-dom";
import ReserveContext from "../../context/reserveContext";
import { useContext, useEffect, useState } from "react";
import SessionContext from "../../context/sessionContext";
import Score from "../Score";

export default function DetailBooking({ bookingId, product, startDate, endDate, handleEventButton, error, buttonText }) {
    const history = useNavigate();

    const [productLocal, setProductLocal] = useState({});
    const { user, token } = useContext(SessionContext);
    const { reserve, setReserve } = useContext(ReserveContext);
    const location = useLocation();
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
    useEffect(() => {
        fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/reserve/${bookingId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProductLocal(data.product);
            }).catch(error => console.log(error))
    }, [])

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
                        <Score scores={productLocal?.score ? productLocal?.score : product.score} avgScore={productLocal?.avgScore ? productLocal?.avgScore : product.avgScore} />
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
                    <p>{startDate}</p>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check out</h3>
                    <p>{endDate}</p>
                </div>
                <hr className="booking-details-hr" />
                <button type="submit" className="booking-details-button button-1" id={`${bookingId}`} onClick={handleEventButton}>{buttonText}</button>
                {
                    JSON.stringify(reserve) !== '{}' && !location.pathname.includes('/mybooking')
                    &&
                    <button className="booking-details-button__cancel button-1" onClick={handleClickRemoveReserve}>Cancelar reserva</button>
                }
            </div>
        </div>
    )

}