import React from "react";
import CalendarReserve from "../CalendarReserve";
import { Link } from "react-router-dom";
import "./Product.css";
import Gallery from "./Gallery";
import { useState, useEffect, useContext } from 'react';
import db from "./product.json";
import MapView from "./Map";
import "./Map.css"
import SubHeader from "../SubHeader";
import Policy from "../Policy";
import { useNavigate } from "react-router-dom";
import FavoriteContext from "../../context/favoriteContext";
import SessionContext from "../../context/sessionContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Score from "../../components/Score";
import Share from "../../components/Share";
import wifi from "../../assets/images/icons/wifi.svg";
import paw from "../../assets/images/icons/paw.svg";
import parking from "../../assets/images/icons/parking.svg";
import air from "../../assets/images/icons/air.svg";
import kitchen from "../../assets/images/icons/kitchen.svg";
import swim from "../../assets/images/icons/tv.svg";
import tv from "../../assets/images/icons/tv.svg";
export default function Product({ list }) {
    const { favorites, setFavorites } = useContext(FavoriteContext);
    const { user, token } = useContext(SessionContext);
    const colorFavorite = favorites.includes(list.productId) ? "var(--main-color)" : "white";
    const history = useNavigate();
    const [listProduct, setListProduct] = useState(list.images);
    const [productsFavoritesLS, setProductsFavoritesLS] = useLocalStorage("productsFavorites", []);
    useEffect(() => {
        if (JSON.stringify(list) !== "{}") {
            setListProduct(list.images);
        }
    }, [list])
    // const handleBack = () => {
    //     history.goBack();
    // }
    const handleClickReserve = () => {
        history(`/product/${list.productId}/booking`)
    }
    const handleClickFavorite = (e) => {
        let myArray = [...favorites]
        let isFavorite = myArray.indexOf(list.productId);
        if (isFavorite >= 0) {
            myArray.splice(isFavorite, 1)
            if (user !== null) {
                fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/favorite/${user.userId}/${list.productId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then(response => response.text())
                    .then(data => { })
            }
        } else {
            myArray.push(list.productId)
            if (user !== null) {
                fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/favorite", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        product: { productId: list.productId },
                        user: { userId: user.userId }
                    })
                }).then(res => res.text())
                    .then(data => { })
            }
        }
        setFavorites(myArray);
        setProductsFavoritesLS(myArray);
    }
    const handleClickShare = (e) => {

    }
    return (
        <React.StrictMode>
            <div className="product-content" id={"start"}>
                <SubHeader product={list} pathGoBack="/" />
                <div className="product__ubication-ratings">
                    <div className="product__ubication">
                        <i class="fas fa-map-marker-alt"></i>{list.address} - {list.location?.city}, {list.location?.country}
                    </div>
                    <div className="product__ratings">
                        <div className="product__ratings-E">
                            <div></div>
                            <Score avgScore={list.avgScore} scores={list.score} />

                        </div>
                    </div>
                </div>
                <div className="product__gallery">
                    <div className="icono-share">
                        <Share url={`http://ec2-54-144-29-135.compute-1.amazonaws.com/product/'${list.productId}`} />
                        {/* <i className="fas fa-share-alt " onClick={handleClickShare}></i> */}
                        <i className="fas fa-heart icono-heart" style={{ "color": colorFavorite }} onClick={handleClickFavorite}></i>
                    </div>
                    <Gallery
                        images={listProduct !== undefined ? listProduct : []}
                    />
                </div>
                <div className="product__description">
                    <h2>{list.subtitle}</h2>
                    <p>{list.description}</p>
                </div>
                <div className="product__features">
                    <h2>¿Qué ofrece este lugar?</h2><hr />
                    <div className="product__features-amenities">
                        {
                            list?.features !== undefined ?
                                list?.features.map((feature, index) => (
                                    <div className="product__features-amenities-item" key={index}>
                                        <i className={feature.icon} style={{ "color": "var(--main-color)" }}></i>    {feature.name}
                                    </div>
                                )) : ""
                        }
                    </div>
                </div>

                <div className="product__availability">
                    <h2>Fechas disponibles</h2>

                    <CalendarReserve status="disabled" idProduct={list.productId} />
                    <div className="product__availability-reserve">
                        <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
                        <button className="product__availability-reserve-button button-search" onClick={handleClickReserve}>Iniciar reserva</button>
                    </div>
                </div>
                <div className="product__ubication-map">
                    <h2>¿Dónde vas a estar?</h2>
                    <hr />
                    <p>{list.location?.city}, {list.location?.country}</p>

                    {list.longitude !== undefined && list.latitude !== undefined &&
                        <div id={"mapa"} className="product__ubication-map__map">
                            <MapView id={"location-map"} lat={parseFloat(list.longitude)} lng={parseFloat(list.latitude)} category={list.category?.title} productName={list.name} />

                        </div>}
                </div>
                <Policy list={list} />
            </div>

        </React.StrictMode>

    )
}

