import React from "react";
import {CategoryCard} from "../CategoryCard/index";
import "./Content.css";

class Content  extends React.Component {
render(){    
    return (
        <React.StrictMode>
            <div className="content-superior">
            <h2>Buscar por Categorías</h2>
                <div className="content_cards">           
                    <CategoryCard 
                        title={"Una estrella"}  
                        image={"https://i.blogs.es/73f834/bunker/1366_2000.jpg"}
                        cantidad={"896502 "}
                    />
                    <CategoryCard 
                        title={"Dos estrellas"}  
                        image={"https://cdn.atrapalo.com/hoteles/picture/s/4819/5/8/0.jpg"}
                        cantidad={"120 "}
                    />
                    <CategoryCard 
                        title={"Tres estrellas"}  
                        image={"https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/91/31/91312_v3.jpeg"}
                        cantidad={"6502 "}
                    />
                    <CategoryCard 
                        title={"Cuatro estrellas"}  
                        image={"https://encancun.com/wp-content/uploads/2018/09/al.jpeg"}
                        cantidad={"56000 "}
                    />
                    <CategoryCard 
                        title={"Cinco estrellas"}  
                        image={"https://i.pinimg.com/originals/8c/ae/12/8cae1241f9a81794ddbd4004ca4149bb.jpg"}
                        cantidad={"802 "}
                    />
                 </div></div>
                <div className="content_recomendaciones">
                    <h2>Recomendaciones</h2>
                </div>
            
        </React.StrictMode>
        );
    }
}

export  {Content};