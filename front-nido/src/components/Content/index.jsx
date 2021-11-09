import { useState, useEffect } from "react";
import { CategoryCard } from "../CategoryCard/index";
import Recomendations from "../Recomendations";
import "./Content.css";
import db from "../Recomendations/cards.json";
export default function Content({ handleClickCategory, products }) {
    return (
        <>
            <div className="content-superior">
                <div className="content_category-cards-titulo">
                    <h2 >Buscar por tipo de alojamiento</h2>
                </div>
                <div className="content_category-cards">
                    <CategoryCard
                        title={"Hotel"}
                        image={"https://encancun.com/wp-content/uploads/2018/09/al.jpeg"}
                        cantidad={"896502 "}
                        handleClickCategory={handleClickCategory}
                    />
                    <CategoryCard
                        title={"Cabaña"}
                        image={"https://http2.mlstatic.com/D_NQ_NP_889471-MLA33060547116_122019-O.jpg"}
                        cantidad={"120 "}
                        handleClickCategory={handleClickCategory}
                    />
                    <CategoryCard
                        title={"Hostel"}
                        image={"https://descubreteviajando.com/wp-content/uploads/2016/09/001.jpg"}
                        cantidad={"6502 "}
                        handleClickCategory={handleClickCategory}
                    />
                    <CategoryCard
                        title={"Departamento"}
                        image={"https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg"}
                        cantidad={"56000 "}
                        handleClickCategory={handleClickCategory}
                    />
                </div>
            </div>
            <div className="content_recomendaciones">
                <Recomendations products={products} />
            </div>
        </>
    );
}
