import React from "react";
import Map from "./Map";
import credentials from "./credentials";

import "./Product.css";
import wifi from "../../assets/images/icons/wifi.svg";
import paw from "../../assets/images/icons/paw.svg";
import parking from "../../assets/images/icons/parking.svg";
import air from "../../assets/images/icons/air.svg";
import kitchen  from "../../assets/images/icons/kitchen.svg";
import swim from "../../assets/images/icons/tv.svg";
import tv from "../../assets/images/icons/tv.svg";
import product from "./product.json";

class Product  extends React.Component {
    
    render() {
        return (
            <React.StrictMode>
                <div className="product-content">
                    <div className="product__header">
                        <div  className="product__header-title-category">
                            <p>{product.category}</p>
                            <h2>{product.name}</h2>
                        </div>
                        <div className="product__ubication-back">
                        <i class="fas fa-chevron-left"></i>
                        </div>
                    </div>
                    <div className="product__ubication-ratings">
                        <div className="product__ubication">
                            <i class="fas fa-map-marker-alt"></i> {product.location.direccion}
                        </div>
                        <div className="product__ratings">
                            <div className="product__ratings-E">
                                <div>{product.raiting}</div>
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
                        gallery
                    </div>
                    <div className="product__description">
                        <h2>{product.title}</h2><hr/>
                        <p>{product.description}</p>
                    </div>
                    <div className="product__features">
                        <h2>¿Qué ofrece este lugar?</h2><hr/>
                    <div className="product__features-amenities"> 
                            <div>
                                <img src={kitchen}/>Cocina
                            </div>
                            <div>
                                <img src={parking}/>Estacionamiento gratuito
                            </div>
                            <div>
                                <img src={tv}/>Televisor
                            </div>
                            <div>
                                <img src={swim}/> Pileta
                            </div>
                                <img src={air}/>Aire acondicionado
                            </div>
                            <div>
                                <img src={wifi}/>WiFi
                            </div>
                            <div>
                            <img src={paw}/>Apto mascotas
                            </div>
                   
                    </div>
                    <div className="product__availability">
                        <h2>Fechas disponibles</h2><hr/>
                        availability

                    </div>
                    <div className="product__ubication-map">
                        <h2>¿Dónde vas a estar?</h2>
                        <hr/>  
                        <p>{product.location.provincia}, {product.location.pais}</p>   
                        <div  id={"mapa"}>                 
                            <Map
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}`}
                                containerElement={<div style={{ height: '394px' }}/>}
                                mapElement={<div style={{ height: `100%` }} />}
                                loadingElement={<div style={{ height: `100%` }} />}
                                lat= {parseFloat(product.location.lat)}
                                lng={parseFloat(product.location.lng)}                  
                            />
                        </div>
                    </div>
                   
                    <div className="product__toknow">
                        <h2>Qué tenes que saber</h2><hr/>
                        <h3>Normas de la casa</h3>
                        <p>das</p>
                        <h3>Salud y seguridad</h3>
                        <p>das</p>
                        <h3>Política de cancelación</h3>
                        <p>das</p>
                    </div>
                </div>               
            </React.StrictMode>
        )
    }
} 


export default Product;
