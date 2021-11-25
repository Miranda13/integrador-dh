import "./SuccessfulBooking.css";
import { useNavigate } from "react-router-dom";
export default function SuccessfulBooking() {
    const history = useNavigate();
    const handleButtonHome = () => {
        history("/");
    }
    return (
        <div className="successful-booking">
            <i className="successful-booking-icon fas fa-check-circle"></i>
            <h2>¡Muchas gracias!</h2>
            <p>Su reserva se ha realizado con éxito</p>
            <button className="successful-booking-button button-1" onClick={handleButtonHome}>Ok</button>
        </div>
    )
}