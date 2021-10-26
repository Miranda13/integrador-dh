import React, { Fragment } from "react";
import './styles/Location.css';


function Location() {
    return (
        <div className="container-location">
            <h2 className="container-location__title">¿A dónde vamos?</h2>
            <ul className="container-location__list">
                <li className="container-location__list__item"><a className="container-location__list__item__a" href="#"><strong>San Carlos de Bariloche</strong></a><br />Argentina</li>
                <li className="container-location__list__item"><a className="container-location__list__item__a" href="#"><strong>Buenos Aires</strong></a><br />Argentina</li>
                <li className="container-location__list__item"><a className="container-location__list__item__a" href="#"><strong>Mendoza</strong></a><br />Argentina</li>
                <li className="container-location__list__item"><a className="container-location__list__item__a" href="#"><strong>Córdoba</strong></a><br />Argentina</li>
            </ul>
        </div>

        // <Fragment>
        //     <div className="contendor">
        //         <form action="">
        //             <div className="selectbox">
        //                 <div className="select active" id="select">
        //                     <div className="contenido-select">
        //                         <h1 className="ciudad">¿A dónde vamos?</h1>
        //                         <p className="pais"></p>
        //                     </div>
        //                     <i class="fas fa-map-marker-alt"></i>
        //                 </div>
        //                 <div className="opciones active" id="opciones">
        //                     <a href="#" class="opcion">
        //                         <div className="contenido-opcion">
        //                             <i class="fas fa-map-marker-alt"></i>
        //                             <div className="textos">
        //                                 <div className="ciudad">
        //                                    <h2>San Carlos de Bariloche</h2> 
        //                                    <p className="descripcion">Argentina</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </a>
        //                     <a href="#" class="opcion">
        //                         <div className="contenido-opcion">
        //                             <i class="fas fa-map-marker-alt"></i>
        //                             <div className="textos">
        //                                 <div className="ciudad">
        //                                    <h2>Mendoza</h2> 
        //                                    <p className="descripcion">Argentina</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </a>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </Fragment>



    )
}

export default Location;