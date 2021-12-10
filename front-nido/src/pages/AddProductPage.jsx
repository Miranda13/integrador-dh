import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Policy from "../components/Policy";
// import HeaderProduct from "../components/HeaderProduct";
import AddProduct from "../components/AddProduct";
import SessionContext from "../context/sessionContext";
import getData from '../assets/js/getData';
export default function AddProductPage() {
    const { token } = useContext(SessionContext);
    const [categorys, setCategorys] = useState([]);
    const [locations, setLocations] = useState([]);
    const [features, setFeatures] = useState([])
    useEffect(() => {
        getData("/api/v1/category")
            .then(data => {
                setCategorys(data);
            })
        getData("/api/v1/location")
            .then(data => {
                setLocations(data);
            })
        fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/feature", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setFeatures(data);
            })
    }, [])

    return (
        <>
            {

                <div className="wrapper">
                    <div className="container-add">
                        {/* <HeaderProduct product="asd" pathGoBack={`/`} /> */}

                        <AddProduct categorys={categorys} locations={locations} features={features} />
                    </div>

                </div>
            }

        </>
    );
}
