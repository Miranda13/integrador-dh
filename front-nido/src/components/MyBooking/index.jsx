import DetailBooking from "../Booking/DetailBooking";
import "./MyBooking.css";
import { useEffect, useState, useContext } from "react";


export default function MyBooking({booking, dateIn, dateOut}){
    const buttonText = "Editar reserva"
    return(
        <div>
            {booking.map(
                b => { 
                    return(
                            <DetailBooking product={b.product} startDate={dateIn} endDate={dateOut} buttonText={buttonText}/>
                )}
            )}
        </div>
    )
}