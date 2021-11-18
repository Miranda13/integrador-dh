import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Booking from "../components/Booking";
import HeaderProduct from "../components/HeaderProduct";
import Policy from "../components/Policy";
import getData from "../assets/js/getData";
import "./BookingPage.css";

export default function BookingPage() {
    const { id } = useParams();
    const [list, setList] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/product/3`)
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
