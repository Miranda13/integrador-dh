import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Product from "../components/Product";
import getData from "../assets/js/getData";
export default function ProductPage() {
    const { id } = useParams();
    const [list, setList] = useState({});
    useEffect(() => {
        getData(`http://localhost:8080/api/v1/product/${id}`)
            .then(data => setList(data))
    }, [])
    return (
        <>
            <div className="wrapper">
                <div className="container-producto">
                    <Product list={list} />
                </div>
            </div>
        </>
    );
}

