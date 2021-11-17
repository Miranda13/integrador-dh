import HeaderProduct from "../HeaderProduct";
import Policies from "../Policy"
import "./index.css"


function Booking ({list}) {
    return(
        <div className="booking">
            <h2 className="booking-title">Completá tus datos</h2>
            <form action="" className="booking-form">
                <label htmlFor="name" className="booking-form__label">Nombre</label>
                <input id="name" name="name" type="text" onChange={handleChange} className="bookig-form__input"/>
                <label htmlFor="surname" className="booking-form__label">Apellido</label>
                <input id="surname" name="surname" type="text" onChange={handleChange} className="bookig-form__input"/>
                <label htmlFor="email" className="bookig-form__label">Correo electrónico</label>
                <input id="email" name="email" type="email" onChange={handleChange} value={values.email} className="booking-form__input" />
                <label htmlFor="city" className="booking-form__label">Ciudad</label>
                <input id="city" name="city" type="text" onChange={handleChange} className="booking-form__input" />                   
            </form>
            <h2 className="booking-title">Seleccioná tu fecha de reserva</h2>
            {/*calendario de jhoni*/}
            <h2 className="booking-title">Tu horario de llegada</h2>
            <div className="booking-schedule">
                <i className="booking-schedule-icon far fa-check-circle"></i>
                <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
                <p>Indicá tu horario estimado de llegada</p>
                <select name="time" id="time">
                    <option value="time">01:00 AM</option>
                    <option value="time">02:00 AM</option>
                    <option value="time">03:00 AM</option>
                    <option value="time">04:00 AM</option>
                    <option value="time">05:00 AM</option>
                    <option value="time">06:00 AM</option>
                    <option value="time">07:00 AM</option>
                    <option value="time">08:00 AM</option>
                    <option value="time">09:00 AM</option>
                    <option value="time">10:00 AM</option>
                    <option value="time">11:00 AM</option>
                    <option value="time">12:00 AM</option>
                    <option value="time">01:00 PM</option>
                    <option value="time">02:00 PM</option>
                    <option value="time">03:00 PM</option>
                    <option value="time">04:00 PM</option>
                    <option value="time">05:00 PM</option>
                    <option value="time">06:00 PM</option>
                    <option value="time">07:00 PM</option>
                    <option value="time">08:00 PM</option>
                    <option value="time">09:00 PM</option>
                    <option value="time">10:00 PM</option>
                    <option value="time">11:00 PM</option>
                    <option value="time">12:00 PM</option>
                </select>
            </div>
            <div className="booking-details">
                <h2 className="booking-title">Detalle de la reserva</h2>
                <img src="" alt="" />
                <div className="booking-details__product"> 
                    <h3 className="booking-details__product__category">{card.category.title}</h3>
                    <h2 className="booking-details__product__title">{card.name}</h2>
                    <div className="booking-details__product__score">
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                        <i className="booking-details__product__icon fas fa-star"></i>
                    </div>
                    <div className="booking-details__product__location">
                        <i className="booking-details__product__location__icon fas fa-map-marker-alt"></i>
                        <div className="booking-details__product__location__title">{card.location.city}, {card.location.country}</div>
                    </div>
                </div>
                <div className="booking-details-check">
                     <h3>Check in</h3>
                     <p>23/11/2021</p>
                </div>
                <div className="booking-details-check">
                    <h3>Check out</h3>
                    <p>27/11/2021</p>
                </div>
                <button type="submit" className="booking-details-button button-1" id="booking__button">Confirmar reserva</button>
            </div>
        </div>        
    )
}

export default Booking;