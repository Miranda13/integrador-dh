import "./DetailBooking.css";

export default function DetailBooking({ product }) {
    return (
        <div className="booking-details">
            <div className="booking-details-img">
                <h2 className="booking-title">Detalle de la reserva</h2>
                <img src={product.images[0]?.url} className="booking-details-image" alt="" />
            </div>
            <div className="booking-details-info">
                <div className="booking-details__product">
                    <h3 className="booking-details__product__category">{product.category.title}</h3>
                    <h2 className="booking-details-title">{product.name}</h2>
                    <div className="booking-details__product__score">
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                    </div>
                    <div className="booking-details__product__location">
                        <i className="booking-details__product__location__icon fas fa-map-marker-alt"></i>
                        <div className="booking-details__product__location__title">{product.location.city}, {product.location.country}</div>
                    </div>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check in</h3>
                    <p>23/11/2021</p>
                </div>
                <hr className="booking-details-hr" />
                <div className="booking-details-check">
                    <h3>Check out</h3>
                    <p>27/11/2021</p>
                </div>
                <hr className="booking-details-hr" />
                <button type="submit" className="booking-details-button button-1" id="booking__button">Confirmar reserva</button>
            </div>
        </div>
    )

}