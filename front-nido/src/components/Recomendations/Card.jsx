import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import SessionContext from "../../context/sessionContext.js";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import FavoriteContextProvider from "../../context/favoriteContext.js";
function Card({ card, handleToggleAction, setIsLoading }) {
    const location = useLocation();
    const { favorites, setFavorites } = useContext(FavoriteContextProvider);
    const [productsFavoritesLS, setProductsFavoritesLS] = useLocalStorage("productsFavorites", []);
    const { user, token } = useContext(SessionContext);
    const history = useNavigate();
    const colorFavorite = favorites.includes(card.productId) ? "var(--main-color)" : "white";
    useEffect(() => {
        setFavorites(productsFavoritesLS);
    }, [])
    const handleClickProduct = () => {
        history(`/product/${card.productId}/`);
    }
    const handleClickFavorite = (e) => {
        if (location.pathname === "/favorite") {
            setIsLoading(true);
        }
        let myArray = [...favorites]
        let isFavorite = myArray.indexOf(card.productId);
        if (isFavorite >= 0) {
            myArray.splice(isFavorite, 1)
            if (user !== null) {
                fetch(`http://localhost:8080/api/v1/favorite/${user.userId}/${card.productId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then(response => response.text())
                    .then(data => { handleToggleAction() })
            }
        } else {
            myArray.push(card.productId)
            if (user !== null) {
                fetch("http://localhost:8080/api/v1/favorite", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        product: { productId: card.productId },
                        user: { userId: user.userId }
                    })
                }).then(res => res.text())
                    .then(data => { })
            }
        }
        setFavorites(myArray);
        setProductsFavoritesLS(myArray);
    }
    // console.log(card.product.amenities);
    return (
        <div className="card-list bg-animation-card">
            <div className="card-list__image">
                <img src={card.images[0].url} alt={card.images[0].title} className="card-list__image__jpg" />
                <i className="card-list__image__icon fas fa-heart" style={{ "color": colorFavorite }} onClick={handleClickFavorite}></i>

            </div>
            <div className="card-list__info">
                <div className="card-list__header">
                    <div className="class-list__header__score">
                        <div className="card-list__info__category">
                            <h3 className="card-list__info__category__title">{card.category.title}</h3>
                            <i className="card-list__info__category__icon fas fa-star"></i>
                            <i className="card-list__info__category__icon fas fa-star"></i>
                            <i className="card-list__info__category__icon fas fa-star"></i>
                            <i className="card-list__info__category__icon fas fa-star"></i>
                            <i className="card-list__info__category__icon fas fa-star"></i>
                        </div>
                        <div className="card-list__info__score">
                            <h3 className="card-list__info__score__number">9</h3>
                            <h3 className="card-list__info__score__title">Excelente</h3>
                        </div>
                    </div>
                    <h2 className="card-list__info__title">{card.name}</h2>
                </div>
                <div className="card-list__info__location">
                    <i className="card-list__info__location__icon fas fa-map-marker-alt"></i>
                    <div className="card-list__info__location__title">{card.location.city}, {card.location.country}</div>
                    <a href={`/product/${card.productId}#location`} className="card-list__info__location__a">MOSTRAR EN EL MAPA</a>

                </div>
                <div className="card-listo__info__amenities">

                    <i className="card-list__info__amenities__icon fas fa-wifi"></i>
                    <i className="card-list__info__amenities__icon fas fa-swimmer"></i>
                </div>
                <p className="card-list__info__description">{card.description} </p>
                <button className="card-list__info__button animation-button-filled" onClick={handleClickProduct}>Ver más</button>
            </div>
        </div>
    )
}

export default Card;