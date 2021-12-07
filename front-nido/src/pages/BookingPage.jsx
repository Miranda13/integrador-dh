import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Booking from "../components/Booking";
import SubHeader from "../components/SubHeader";
import Policy from "../components/Policy";
import getData from "../assets/js/getData";
import SessionContextProvider from '../context/sessionContext.js';
import ReserveContext from ".././context/reserveContext";
export default function BookingPage() {
    const location = useLocation();
    const { reserve, setReserve } = useContext(ReserveContext);
    const history = useNavigate();
    const { user, token } = useContext(SessionContextProvider);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (token === null || token === undefined) {
            history("/login", { state: { idProduct: id, auth: "Necesitas estar logueado para reservar un hotel" } });
        }
        if (JSON.stringify(reserve) == "{}") {
            getData(`/api/v1/product/${id}`)
                .then(data => {
                    setProduct(data)
                    setIsLoading(false)
                })
        }
        else {
            setProduct(reserve.product)
            setIsLoading(false)
        }
    }, [])
    useEffect(() => {
        return () => { setReserve({}) }
    }, [location])
    return (
        <>
            {
                isLoading ? "cargando"
                    :
                    <div className="wrapper">
                        <div className="container-booking">
                            <SubHeader product={product} pathGoBack={`/product/${id}`} />
                            <Booking product={product} />
                            <Policy />
                        </div>
                    </div>
            }

        </>
    );
}
