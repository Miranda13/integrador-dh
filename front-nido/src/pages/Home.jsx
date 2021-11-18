import { useState, useEffect, useRef } from "react";
import { SearchForm } from "../components/SearchForm";
import Content from "../components/Content";
import db from "../components/Recomendations/cards.json";
export default function Home({ toggle }) {
    const [products, setProducts] = useState([]);
    // const [productsFilter, setProductsFilter] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.querySelector(".container-location__title");
        getData(`http://localhost:8080/api/v1/location/${location.getAttribute("id")}`)
            .then((location) => {
                setProducts(location.products);
                setIsLoadingProducts(false);
            })
    }
    const handleClickCategory = (e) => {
        getData(`http://localhost:8080/api/v1/product/category?name=${e.target.id}`)
            .then((data) => {
                setProducts(data);
                setIsLoadingProducts(false);
            })
    }
    useEffect(() => {
        // fetch("API")
        //     .then(response => response.json())
        //     .then(data => setProducts(data.results));
        setProducts(db);
        // setProductsFilter(db)
    }, [])
    // useEffect(() => {
    //     setI
    //     setIsLoadingProducts(true);
    // }, [products])
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