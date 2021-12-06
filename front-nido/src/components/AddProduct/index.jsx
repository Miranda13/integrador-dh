import './AddProduct.css';
import { useNavigate } from "react-router-dom";
import AddressMap from "./AddressMap";
// import "./Map.css";

export default function AddProduct() {
  

    const history = useNavigate();
    const handleClick = () => {
        history(`/`);
    }

    return(
       <>
            <div className="add-product__header">
                <div className="add-product__header-title-category">                                  
                    <h2>Administración</h2>
                </div>
                <div className="add-product__ubication-back">
                    <i class="add-product__ubication-back-icon fas fa-chevron-left" onClick={handleClick}></i>
                </div>
            </div>
            <div className="add-product__content">
                <h2>Crear propiedad</h2>
                <div className="add-product__content__general">                
                    
                    <form action="" className="add-product__content__general__form">
                        <div className="add-form-div">
                            <label htmlFor="name" className="add-form__label">Nombre de la propiedad</label>
                            <input  name="name" type="text" className="add-form__input" />
                        </div>
                        <div className="add-form-div">
                            <label htmlFor="categoy" className="add-form__label">Categoría</label>
                            <input  name="categoy" type="text" className="add-form__input" />
                        </div>
                        <div className="add-form-div">
                            <label htmlFor="address" className="add-form__label">Dirección</label>
                            <input  name="address" type="text" className="add-form__input" />
                        </div>
                       
                        <div className="add-form-div">
                            <label htmlFor="city" className="add-form__label">Ciudad</label>
                            <input  name="city" type="text" className="add-form__input" />
                        </div>
                        <div className="add-form-div-description">
                            <label htmlFor="description" className="add-form__label">Descripción</label>
                            <textarea  id="description" name="description" type="text" className="add-form__input__textarea" rows="100" cols="50" />
                        </div>
                        
                                                                                                                                   
                  
                        <h3>Agregar atributos</h3>
                        <div className="add-product__content__general__atributos">
                            {/* <div className="add-form-div">
                                <label htmlFor="atribute" className="add-form__label">Nombre</label>
                                <input  name="atribute" type="text" className="add-form__input" />
                            </div>
                            <div className="add-form-div">
                                <label htmlFor="icon" className="add-form__label">Ícono</label>
                                <input  name="icon" type="text" className="add-form__input" />
                            </div>
                            <button className="add-form__button button-1"> +</button> */}
                            <div className="add-form-div">
                                <label htmlFor="" className="add-form__label">
                                    <input  type="checkbox" value="" className="add-form-checkbox" />Wifi
                                </label>
                            </div>
                            <div className="add-form-div">
                              <label htmlFor="" className="add-form__label">
                                  <input  id="" type="checkbox" value="" className="add-form-checkbox" />TV
                             </label>
                            </div>
                            <div className="add-form-div">
                                <label htmlFor="" className="add-form__label ">
                                    <input  id="" type="checkbox" value="" className="add-form-checkbox" />Aire
                                </label>
                            </div>
                            <div className="add-form-div">
                                <label htmlFor="" className="add-form__label ">
                                    <input  id="" type="checkbox" value="" className="add-form-checkbox" />Pileta
                                </label>
                            </div>
                            <div className="add-form-div">
                                <label htmlFor="" className="add-form__label ">
                                    <input  id="" type="checkbox" value="" className="add-form-checkbox" />Garage
                                </label>
                            </div>
                            <div className="add-form-div">
                                <label htmlFor="" className="add-form__label ">
                                    <input  id="" type="checkbox" value="" className="add-form-checkbox" />Garage
                                </label>
                            </div>
                            <div className="add-form-div">
                                <label htmlFor="" className="add-form__label ">
                                    <input  id="" type="checkbox" value="" className="add-form-checkbox" />Garage
                                </label>
                            </div>
                            
                        </div>
                       
                   
                        <h3>Políticas del producto</h3>
                        <div className="add-form__policy">
                            <div className="add-form__policy__description">
                                <h3>Normas de la Casa</h3>
                                <label htmlFor="description" className="add-form__label">Descripción</label>
                                <textarea  id="policy-normas" name="description" type="text" className="add-form__input__textarea" rows="10" cols="50" />
                            </div>
                            <div className="add-form__policy__description">
                                <h3>Salud y seguridad</h3>
                                <label htmlFor="description" className="add-form__label">Descripción</label>
                                <textarea  id="policy-salud" name="description" type="text" className="add-form__input__textarea" rows="10" cols="50"  />
                            </div>
                            <div className="add-form__policy__description">
                                <h3>Política de cancelación</h3>
                                <label htmlFor="description" className="add-form__label">Descripción</label>
                                <textarea  id="policy-cancelacion" name="description" type="text" className="add-form__input__textarea" rows="10" cols="50" />
                            </div>
                        </div>

                        <h3>Cargar imágenes</h3>
                        <div className="add-form__images">
                            <div className="add-form-div__images">
                                <label htmlFor="atribute" className="add-form__label">Nombre</label>
                                <input  name="atribute" type="file" className="add-form__input__images" />
                            </div>                          
                            <button className="add-form__button button-1 animation-button-filled"> +</button>                         
                        </div> 
              

                        <h3>Coordenadas</h3>
                        <div className="add-form__map">
                            <p>Ingrese la dirección</p>
                            <hr />
                            {/* <p>{list.location?.city}, {list.location?.country}</p> */}

                          
                                <div id={"mapa"} className="product__ubication-map__map">
                                    <AddressMap 
                                        id={"location-map"}
                                        interactive={true}
                                       
                                    />
                                </div>
                        </div>

                        <button className="add-form__submit button-1  animation-button-filled"> Crear Propiedad</button>   
                    </form> 
                </div>
            </div>
        </> 
    )
}
