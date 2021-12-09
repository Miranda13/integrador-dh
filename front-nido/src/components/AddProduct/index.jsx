import './AddProduct.css';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AddressMap from "./AddressMap";
import { useEffect } from 'react';
import SessionContext from '../../context/sessionContext';
export default function AddProduct({ categorys, locations, features }) {
    const { token } = useContext(SessionContext);
    const [acc, setAcc] = useState(1);
    const history = useNavigate();
    const handleClick = () => {
        history(`/`);
    }
    const [error, setError] = useState('');
    const [address, setAddress] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    function createPreview(file, contenedor, i) {
        var imgCodified = URL.createObjectURL(file);
        var button = document.querySelector("#custom-button");
        var img = '<div class="image-container-' + i + '"> <figure class="m-0"><img class="upload-' + i + '" src="' + imgCodified + '" alt="Foto del usuario"><div class="photo-menu"><i id="borrar-' + i + '" class="far fa-trash-alt"></i></div><figcaption> <i class="icon-cross"></i> </figcaption> </figure> </div>';
        contenedor.innerHTML = img;
        var contenedorImage = document.querySelector('.image-container-' + i);
        var borrar = document.querySelector('#borrar-' + i + '');

        if (contenedorImage != null) {
            borrar.addEventListener("click", function () {
                var padre = document.querySelector(".admin-addphotos");
                elementDelete(padre, contenedorImage);
                if (button != null) {
                    button.disabled = false;
                }
            });
        }
    }
    function elementDelete(padre, contenedor) {
        padre = contenedor.parentNode;
        padre.removeChild(contenedor);
    }

    const handleAddress = (a, longitude, latitude) => {
        setAddress(a);
        setLong(longitude);
        setLat(latitude);
    }
    const handleClickAddImage = (e) => {
        e.preventDefault();
        setAcc(acc + 1);
    }
    useEffect(() => {
        if (acc != 1) {
            const arrayContenedorImagenes = document.querySelectorAll('.add-form-div__images__image');
            arrayContenedorImagenes.forEach((element, idx) => {
                if (idx + 1 <= acc) {
                    element.classList.remove('hidden');
                }
            })
        }
    }, [acc])
    const handleClickUploadImage = (e) => {
        const input = document.querySelector("#imagen-producto-" + e.target.id);
        input.click();
    }
    const handleChangeUploadImage = (e, idx) => {
        var contenedor = document.querySelector(".upload-image-" + idx);
        var files = e.target.files;
        var element;
        for (var i = 0; i < files.length; i++) {
            element = files[i];
            createPreview(element, contenedor, idx);
        }
    }
    const handleSubmitProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const arrayFeatures = Array.from(e.target.feature).filter(f => f.checked)
        const arrayObjectFeatures = arrayFeatures.map(f => {
            return {
                featureId: f.value
            }
        })
        formData.append("body", JSON.stringify({
            name: e.target.name.value,
            description: e.target.description.value,
            subtitle: e.target.subtitle.value,
            policy: e.target.policy.value,
            rule: e.target.rule.value,
            safety: e.target.safety.value,
            address: "Guardia Vieja 1998",
            longitude: -68.90958,
            latitude: -33.00949,
            location: {
                locationId: e.target.city.value
            },
            category: {
                categoryId: e.target.category.value
            },
            features: arrayObjectFeatures
        }))
        for (let i = 1; i <= acc; i++) {
            formData.append("file", e.target[`image${i}`].files[0]);
        }
        fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/product", {
            method: "POST",
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.status === 201) {
                    history("/success-product");
                } else {
                    return Promise.reject(new Error("Lamentablemente el producto no ha podido crearse. Por favor intente más tarde"))
                }
                return res.text()
            })
            .then(data => { })
            .catch(error => setError(error.message));
    }
    return (
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
                    {
                        error && <p>{error}</p>
                    }
                    <form action="" className="add-product__content__general__form" onSubmit={handleSubmitProduct} >
                        <div className="add-form-div">
                            <label htmlFor="name" className="add-form__label">Nombre de la propiedad</label>
                            <input name="name" type="text" className="add-form__input" required />
                        </div>
                        <div className="add-form-div">
                            <label htmlFor="categoy" className="add-form__label">Categoría</label>
                            {/* <input  name="categoy" type="text" className="add-form__input" /> */}
                            <select name="category" className="add-form__input">
                                <option value="" disabled selected>Seleccione una categoría</option>
                                {
                                    categorys.map((category, i) => {
                                        return (
                                            <option key={i + category.categoryId} value={category.categoryId}>{category.title}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="add-form-div">
                            {/* poner aca el mapa, sacar este campo o vincularlo con el input del mapa*/}
                            <label htmlFor="subtitle" className="add-form__label">Subtitulo</label>
                            <input name="subtitle" type="text" className="add-form__input" required />
                        </div>

                        <div className="add-form-div">
                            <label htmlFor="city" className="add-form__label">Ciudad</label>
                            {/* <input  name="city" type="text" className="add-form__input" /> */}
                            <select name="city" className="add-form__input">
                                <option value="" disabled selected>Seleccione una locación</option>
                                {
                                    locations.map((location, i) => {
                                        return (
                                            <option key={i + location.locationId} value={location.locationId}>{location.city}, {location.country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="add-form-div-description">
                            <label htmlFor="description" className="add-form__label">Descripción</label>
                            <textarea required id="description" name="description" type="text" className="add-form__input__textarea" rows="12" cols="12" placeholder="Ingrese el texto" />


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
                            {
                                features.map(feature => {
                                    return (
                                        <div className="add-form-div">
                                            <label htmlFor={feature.name} className="add-form__label">
                                                <i className={feature.icon}></i>
                                                <input id={feature.name} type="checkbox" value={feature.featureId} className="add-form-checkbox" name="feature" />{feature.name}
                                            </label>
                                        </div>
                                    )
                                })
                            }

                        </div>


                        <h3>Políticas del producto</h3>
                        <div className="add-form__policy">
                            <div className="add-form__policy__description">
                                <p className="add-form__policy__description__title">Normas de la Casa</p>
                                <label htmlFor="description" className="add-form__label">Descripción</label>
                                <textarea id="policy-normas" name="rule" type="text" required className="add-form__input__textarea" rows="10" cols="50" />
                            </div>
                            <div className="add-form__policy__description">
                                <p className="add-form__policy__description__title">Salud y seguridad</p>
                                <label htmlFor="description" className="add-form__label">Descripción</label>
                                <textarea id="policy-salud" name="safety" required type="text" className="add-form__input__textarea" rows="10" cols="50" />
                            </div>
                            <div className="add-form__policy__description">
                                <p className="add-form__policy__description__title">Política de cancelación</p>
                                <label htmlFor="description" className="add-form__label">Descripción</label>
                                <textarea required id="policy-cancelacion" name="policy" type="text" className="add-form__input__textarea" rows="10" cols="50" />
                            </div>
                        </div>

                        <h3>Cargar imágenes</h3>
                        <div className="add-form__images">
                            <div className="add-form-div__images">
                                <div className="add-form-div__images__image">
                                    <div className="upload-image-1">
                                    </div>
                                    <input onChange={(e) => { handleChangeUploadImage(e, 1) }} id="imagen-producto-1" name="image1" type="file" className="add-form__input__images" hidden="hidden" />
                                    <img onClick={handleClickUploadImage} id="1" src={require("../../assets/images/placeholder.png").default} className="imagen1" alt="imagen de hotel"></img>
                                </div>
                                <div className="add-form-div__images__image hidden">
                                    <div className="upload-image-2">
                                    </div>
                                    <input onChange={(e) => { handleChangeUploadImage(e, 2) }} id="imagen-producto-2" name="image2" type="file" className="add-form__input__images" hidden="hidden" />
                                    <img onClick={handleClickUploadImage} id="2" src={require("../../assets/images/placeholder.png").default} className="imagen2" alt="imagen de hotel"></img>
                                </div>
                                <div className="add-form-div__images__image hidden">
                                    <div className="upload-image-3">
                                    </div>
                                    <input onChange={(e) => { handleChangeUploadImage(e, 3) }} id="imagen-producto-3" name="image3" type="file" className="add-form__input__images" hidden="hidden" />
                                    <img onClick={handleClickUploadImage} id="3" src={require("../../assets/images/placeholder.png").default} className="imagen3" alt="imagen de hotel"></img>
                                </div>
                                <div className="add-form-div__images__image hidden">
                                    <div className="upload-image-4">
                                    </div>
                                    <input onChange={(e) => { handleChangeUploadImage(e, 4) }} id="imagen-producto-4" name="image4" type="file" className="add-form__input__images" hidden="hidden" />
                                    <img onClick={handleClickUploadImage} id="4" src={require("../../assets/images/placeholder.png").default} className="imagen4" alt="imagen de hotel"></img>
                                </div>
                                <div className="add-form-div__images__image hidden">
                                    <div className="upload-image-5">
                                    </div>
                                    <input onChange={(e) => { handleChangeUploadImage(e, 5) }} id="imagen-producto-5" name="image5" type="file" className="add-form__input__images" hidden="hidden" />
                                    <img onClick={handleClickUploadImage} id="5" src={require("../../assets/images/placeholder.png").default} className="imagen5" alt="imagen de hotel"></img>
                                </div>
                            </div>
                            {acc <= 4 && <button className="add-form__button button-1 animation-button-filled" onClick={handleClickAddImage}>+</button>}
                        </div>


                        <h3>Ubicación</h3>
                        <div className="add-form__map">
                            <p>Ingrese la dirección en el icono de busqueda</p>
                            <hr />
                            {/* <p>{list.location?.city}, {list.location?.country}</p> */}
                            <div id={"mapa"} className="product__ubication-map__map">
                                <AddressMap
                                    id={"location-map"}
                                    interactive={true}
                                    handleAddress={handleAddress}
                                />
                            </div>
                        </div>

                        <button type="submit" className="add-form__submit button-1  animation-button-filled"> Crear Propiedad</button>
                    </form>
                </div>
            </div>
        </>
    )
}
