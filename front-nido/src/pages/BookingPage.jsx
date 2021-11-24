import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Booking from "../components/Booking";
import HeaderProduct from "../components/HeaderProduct";
import Policy from "../components/Policy";
import getData from "../assets/js/getData";
import "./BookingPage.css";
export default function BookingPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getData(`http://localhost:8080/api/v1/product/${id}`)
            .then(data => {
                setProduct(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            {
                isLoading ? "cargando"
                    :
                    <div className="wrapper">
                        <div className="container-booking">
                            <HeaderProduct product={product} />
                            <Booking product={product} />
                            <Policy />
                        </div>
                    </div>
            }

        </>
    );
}
