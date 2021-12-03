import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Score from "../Score/index";
function Card(props) {
    const { card } = props;
    const history = useNavigate();
    const handleClickProduct = () => {
        history(`/product/${card.productId}/`);
    }
    // console.log(card.product.amenities);
    return (
        <div className="card-list bg-animation-card">
            <div className="card-list__image">
                <img src={card.images[0].url} alt={card.images[0].title} className="card-list__image__jpg" />
                <i className="card-list__image__icon fas fa-heart"></i>
            </div>
            <div className="card-list__info">
                <div className="card-list__header">
                    <div className="card-list__info__category">
                        <h3 className="card-list__info__category__title">{card.category.title.toUpperCase()}</h3>
                    </div>

                    <Score avgScore={card.avgScore} scores={card.score} />
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