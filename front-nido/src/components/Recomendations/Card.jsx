import { useNavigate } from "react-router-dom";

function Card(props) {
    const { card } = props;
    const history = useNavigate();
    const handleClickProduct = () => {
        history(`/product/${card.productId}`);
    }
    return (
        <div className="card-list bg-animation-card">
            <div className="card-list__image">
                <img src={card.images[0].url} alt={card.images[0].title} className="card-list__image__jpg" />
                <i className="card-list__image__icon fas fa-heart"></i>
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
                    <a href="#" className="card-list__info__location__a">MOSTRAR EN EL MAPA</a>
                </div>
                <div className="card-listo__info__amenities">
                    <i className="card-list__info__amenities__icon fas fa-wifi"></i>
                    <i className="card-list__info__amenities__icon fas fa-swimmer"></i>
                </div>
                <p className="card-list__info__description">{card.description} <span className="card-list__info__description__more">más..</span> </p>
                <button className="card-list__info__button animation-button-filled" onClick={handleClickProduct}>Ver más</button>
            </div>
        </div>
    )
}

export default Card;