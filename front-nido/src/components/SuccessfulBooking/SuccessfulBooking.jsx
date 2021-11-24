import "./SuccessfulBooking.css";

export default function SuccessfulBooking  (){
    return(
        <div className="successful-booking">
            <i className="successful-booking-icon fas fa-check-circle"></i>
            <h2>¡Muchas gracias!</h2>
            <p>Su reserva se ha realizado con éxito</p>
            <button className="successful-booking-button button-1">Ok</button>
        </div>
    )
}