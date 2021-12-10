import MyBooking from "../components/MyBooking";
import SubHeader from "../components/SubHeader";
import { useEffect, useState, useContext } from "react";
import SessionContext from "../context/sessionContext";
import { useParams } from "react-router-dom";

export default function MyBookingPage() {

    const { id } = useParams();
    const { user, token } = useContext(SessionContext);
    const [reservesLocal, setReservesLocal] = useState([]);
    function getReserves() {
        fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/reserve/user/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReservesLocal(data);
            })
    }
    useEffect(() => {
        getReserves();
    }, [])

    return (
        <div className="wrapper">
            <div className="container-my-booking">
                <SubHeader product={"Mis Reservas"} pathGoBack="/" />
                <MyBooking booking={reservesLocal} getReserves={getReserves} />
            </div>

        </div>
    )
}