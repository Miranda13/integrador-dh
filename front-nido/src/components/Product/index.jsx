import React from "react";
import Map from "./Map";
// import CalendarReserve from "../components/CalendarReserve";
import credentials from "./credentials";
import CalendarReserve from "../CalendarReserve";
import {Link} from "react-router-dom";
// import ReactGallery from 'reactive-blueimp-gallery'; 
import Slider from 'react-lightbox-slider';
import "./Product.css";
import wifi from "../../assets/images/icons/wifi.svg";
import paw from "../../assets/images/icons/paw.svg";
import parking from "../../assets/images/icons/parking.svg";
import air from "../../assets/images/icons/air.svg";
import kitchen  from "../../assets/images/icons/kitchen.svg";
import swim from "../../assets/images/icons/tv.svg";
import tv from "../../assets/images/icons/tv.svg";
import product from "./product.json";
import  Gallery  from "./Gallery";

class Product  extends React.Component {
   

    render() { 

          const image_array = [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ]
        return (
            <React.StrictMode>              
                <div className="product-content">
                    <div className="product__header">
                        <div  className="product__header-title-category">
                            <p>{product.category}</p>
                            <h2>{product.name}</h2>
                        </div>
                        <div className="product__ubication-back">
                           <Link to="/"> <i class="fas fa-chevron-left back"></i></Link>
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
                        <div className="icono-share">
                            <i className="fas fa-share-alt " ></i>   
                            <i className="fas fa-heart icono-heart" ></i>
                        </div>
                     
                            <Gallery 
                            images={image_array}                            
                            />
                    </div>
                    <div className="product__description">
                        <h2>{product.title}</h2><hr/>
                        <p>{product.description}</p>
                    </div>
                    <div className="product__features">
                        <h2>¿Qué ofrece este lugar?</h2><hr/>
                       
                        <div className="product__features-amenities">                    
                            {
                            product.amenities.map((amenity, index) => (                         
                                <div className="product__features-amenities-item">
                                    <img  src={amenity.icon}/> 
                                    {amenity.name}                                   
                                </div>
                            ))}  
                      </div>
                    </div>
                 
                    <div className="product__availability">
                        <h2>Fechas disponibles</h2><hr/>
                        
                        <CalendarReserve/>
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
                        
                        <h2>Qué tenes que saber</h2>
                        <hr/>
                        <div className="product__toknow-content">
                            <div className="product__toknow-column">
                                <h3>Normas de la casa</h3>
                                <p>{product.normas}</p>
                            </div>
                            <div className="product__toknow-column">
                                <h3>Salud y seguridad</h3>
                                <p>{product.salud}</p>
                            </div>
                            <div className="product__toknow-column">
                                <h3>Política de cancelación</h3>
                                <p>{product.cancelacion}</p>
                            </div>
                        </div>
                    </div>
                </div>   
                          
            </React.StrictMode>
        )
    }
} 


export default Product;
