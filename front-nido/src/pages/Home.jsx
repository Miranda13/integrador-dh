import { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import Content from "../components/Content";
import db from "../components/Recomendations/cards.json";
export default function Home({ toggle }) {
    const [products, setProducts] = useState([]);
    // const [productsFilter, setProductsFilter] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.querySelector(".container-location__title");
        /* console.log(location.textContent.split(", "));*/
        const locationFilter = db.filter((product) => {
            return product.location.includes(location.textContent)
        })
        setProducts(locationFilter);
    }
    const handleClickCategory = (e) => {
        const productsFilter = db.filter((product) => product.category.toLowerCase() === e.target.id.toLowerCase());
        setProducts(productsFilter);
    }
    useEffect(() => {
        // fetch("API")
        //     .then(response => response.json())
        //     .then(data => setProducts(data.results));
        setProducts(db);
        // setProductsFilter(db)
    }, [])
    useEffect(() => {
        // setProductsFilter([]);
        setProducts(db);
    }, [toggle])
    return (

        <div className="wrapper">
            <SearchForm handleSubmit={handleSubmit} />
            <Content handleClickCategory={handleClickCategory} products={products} />
        </div>
    );
}