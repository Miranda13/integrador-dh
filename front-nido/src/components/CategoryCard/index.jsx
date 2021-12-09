import React from "react";

import "./CategoryCard.css";
import { useEffect, useState } from "react";
import getData from "../../assets/js/getData";
export function CategoryCard({ handleClickCategory, category, subtitle }) {
    const [quantity, setQuantity] = useState();
    useEffect(() => {
        getData(`/api/v1/product/category/page/?name=${category.title}&page=0`)
            .then(data => {
                setQuantity(data.totalElements);
            })
    }, [])
    return (
        <>
            <div className="category-card bg-animation-card">
                <div className="category-card__img">
                    <img src={category.urlImage} onClick={handleClickCategory} id={category.title} width='100%' />
                </div>
                <div className="category-card__content" >
                    <h4 id={category.title} onClick={handleClickCategory}>{category.title}</h4>
                    <p id={category.title} onClick={handleClickCategory} className="category-card_content-hoteles">{quantity} {subtitle}</p>
                </div>
            </div>
        </>
    );
}
