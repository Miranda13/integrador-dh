import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Booking from "../components/Booking";
import getData from "../assets/js/getData";

export default function BookingPage() {
    const { id } = useParams();
    const [list, setList] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/product/${id}`)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    useEffect(() => {
        console.log(list)
    }, [list])
    return (
        <>
            <div className="wrapper">
                <div className="container-booking">
                    <HeaderProduct list={list}/>
                    <Booking list={list} />
                    <Policy/>
                </div>
            </div>
        </>
    );
}
