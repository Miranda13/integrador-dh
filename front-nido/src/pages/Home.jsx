import { useState, useEffect, useRef } from "react";
import { SearchForm } from "../components/SearchForm";
import Content from "../components/Content";
import db from "../components/Recomendations/cards.json";
export default function Home({ toggle }) {
    const [products, setProducts] = useState([]);
    // const [productsFilter, setProductsFilter] = useState([]);
    const handleLocation = (e) => {
        if (e.target.childNodes[1]?.textContent !== undefined && e.target.childNodes[3]?.textContent !== undefined) {
            setProducts(
                db.filter((product) => {
                    return product.location.includes("" + e.target.childNodes[1]?.textContent + ", " + e.target.childNodes[3]?.textContent)
                }
                ));
        }
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
            <SearchForm handleLocation={handleLocation} />
            <Content handleClickCategory={handleClickCategory} products={products} />
        </div>
    );
}