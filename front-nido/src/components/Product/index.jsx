import React from "react";
import Map from "./Map";
// import CalendarReserve from "../components/CalendarReserve";
import credentials from "./credentials";
import CalendarReserve from "../CalendarReserve";

// import ReactGallery from 'reactive-blueimp-gallery'; 
import Slider from 'react-lightbox-slider';
import "./Product.css";
import wifi from "../../assets/images/icons/wifi.svg";
import paw from "../../assets/images/icons/paw.svg";
import parking from "../../assets/images/icons/parking.svg";
import air from "../../assets/images/icons/air.svg";
import kitchen from "../../assets/images/icons/kitchen.svg";
import swim from "../../assets/images/icons/tv.svg";
import tv from "../../assets/images/icons/tv.svg";
import product from "./product.json";
import Gallery from "./Gallery";
import { useState, useEffect } from 'react';
import db from "./product.json";
export default function Product({ list }) {
    const [listProduct, setListProduct] = useState(list.images);
    useEffect(() => {
        setListProduct(list.images);
    }, [list])
    return (
        <React.StrictMode>
            <div className="product-content">
                <div className="product__header">
                    <div className="product__header-title-category">
                        <p>{list.category?.title}</p>
                        <h2>{list.name}</h2>
                    </div>
                    <div className="product__ubication-back">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                </div>
                <div className="product__ubication-ratings">
                    <div className="product__ubication">
                        <i class="fas fa-map-marker-alt"></i> Avenida Siempre Viva, 742
                    </div>
                    <div className="product__ratings">
                        <div className="product__ratings-E">
                            <div>{list.score}</div>
                            <div>
                                <i className="card-list__info__category__icon fas fa-star"></i>
                                <i className="card-list__info__category__icon fas fa-star"></i>
                                <i className="card-list__info__category__icon fas fa-star"></i>
                                <i className="card-list__info__category__icon fas fa-star"></i>
                                <i className="card-list__info__category__icon fas fa-star"></i>
                            </div>
                        </div>
                        <div className="product__ratings-score">
                            <div>9</div>
                        </div>
                    </div>
                </div>
                <div className="product__gallery">
                    <div className="icono-share">
                        <i className="fas fa-share-alt " ></i>
                        <i className="fas fa-heart icono-heart" ></i>
                    </div>
                    <Gallery
                        images={listProduct !== undefined ? listProduct : []}
                    />
                </div>
                <div className="product__description">
                    <h2>{list.name}</h2><hr />
                    <p>{list.description}</p>
                </div>
                <div className="product__features">
                    <h2>¿Qué ofrece este lugar?</h2>

                    <div className="product__features-amenities">
                        {
                            db.amenities.map((amenity, index) => (
                                <div className="product__features-amenities-item" key={index}>
                                    <img src={amenity.icon} />
                                    {amenity.name}
                                </div>
                            ))}
                    </div>
                </div>

                <div className="product__availability">
                    <h2>Fechas disponibles</h2><hr />

                    <CalendarReserve />
                </div>
                <div className="product__ubication-map">
                    <h2>¿Dónde vas a estar?</h2>
                    <hr />
                    <p>{list.location?.city}, {list.location?.country}</p>
                    <div id={"mapa"}>
                        <Map
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}`}
                            containerElement={<div style={{ height: '394px' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            loadingElement={<div style={{ height: `100%` }} />}
                            lat={parseFloat(list.location?.latitude)}
                            lng={parseFloat(list.location?.longitude)}
                        />
                    </div>
                </div>

                <div className="product__toknow">

                    <h2>Qué tenes que saber</h2>
                    <hr />
                    <div className="product__toknow-content">
                        <div className="product__toknow-column">
                            <h3>Normas de la casa</h3>
                            <p>"Check-out:10:00 <br />No se permiten fiestas <br />No fumar"</p>
                        </div>
                        <div className="product__toknow-column">
                            <h3>Salud y seguridad</h3>
                            <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.</p>
                        </div>
                        <div className="product__toknow-column">
                            <h3>Política de cancelación</h3>
                            <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.StrictMode>
    )
}

