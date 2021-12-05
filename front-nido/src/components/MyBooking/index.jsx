import DetailBooking from "../Booking/DetailBooking";
import "./MyBooking.css";
import "../Booking/DetailBooking.css";


export default function MyBooking({booking, dateIn, dateOut}){
    const buttonText = "Editar reserva"
    return(
        <div className="my-booking-card">
            {booking.map(
                b => { 
                    return(
                            <DetailBooking product={b.product} startDate={dateIn} endDate={dateOut} buttonText={buttonText} />
                )}
            )}
        </div>
    )
}