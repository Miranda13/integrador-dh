import React from "react";
import './styles/Card.css';



function Card(props) {
    const {card} =props;
    return (
        <div className="card-list">
            <div className="card-list__image">
                 <img src={card.img} alt="" className="card-list__image__jpg" />
                 <i className="card-list__image__icon fas fa-heart"></i>
            </div>
            <div className="card-list__info">
                <div className="card-list__info__category"> 
                    <h3 className="card-list__info__category__title">{card.category}</h3>
                    <i className="card-list__info__category__icon fas fa-star"></i>
                    <i className="card-list__info__category__icon fas fa-star"></i>
                    <i className="card-list__info__category__icon fas fa-star"></i>
                    <i className="card-list__info__category__icon fas fa-star"></i>
                    <i className="card-list__info__category__icon fas fa-star"></i>
                </div>
                <h2 className="card-list__info__title">{card.title}</h2>
                <div className="card-list__info__score">
                    <h3 className="card-list__info__score__number">9</h3>
                    <h3 className="card-list__info__score__title">Excelente</h3>
                </div>
                <div className="card-list__info__location">
                    <i className="card-list__info__location__icon fas fa-map-marker-alt"></i>
                    <div className="card-list__info__location__title">{card.location}</div> 
                    <a href="#" className="card-list__info__location__a">MOSTRAR EN EL MAPA</a>
                </div>
                <div className="card-listo__info__amenities">
                    <i className="card-list__info__amenities__icon fas fa-wifi"></i>
                    <i className="card-list__info__amenities__icon fas fa-swimmer"></i> 
                </div>
                <p className="card-list__info__description">{card.description} <span className="card-list__info__description__more">más..</span> </p>
                <button className="card-list__info__button">Ver más</button>
            </div>
        </div>
    )
}

export default Card;