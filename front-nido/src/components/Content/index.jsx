import { useState, useEffect } from "react";
import { CategoryCard } from "../CategoryCard/index";
import Recomendations from "../Recomendations";
import "./Content.css";
import db from "../Recomendations/cards.json";
export default function Content({ handleClickCategory, products, categorys }) {
    return (
        <>
            <div className="content-superior">
                <div className="content_category-cards-titulo">
                    <h2 >Buscar por tipo de alojamiento</h2>
                </div>
                <div className="content_category-cards">
                    {
                        categorys.map((category) => {
                            return (
                                <CategoryCard
                                    key={category.categoryId}
                                    category={category}
                                    cantidad={"896502"}/*Estaria bueno que devuelva la cantidad desde BACKEND */
                                    handleClickCategory={handleClickCategory}
                                />
                            );
                        })
                    }
                </div>
            </div>
            <div className="content_recomendaciones">
                <Recomendations products={products} />
            </div>
        </>
    );
}
