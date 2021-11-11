import { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import Content from "../components/Content";
import getData from "../assets/js/getData";
export default function Home({ toggle }) {
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    // const [productsFilter, setProductsFilter] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.querySelector(".container-location__title");
        getData(`http://localhost:8080/api/v1/location/${location.getAttribute("id")}`)
            .then((location) => {
                setProducts(location.products);
            })
    }
    const handleClickCategory = (e) => {
        getData(`http://localhost:8080/api/v1/product/category?name=${e.target.id}`)
            .then((data) => {
                setProducts(data);
            })
    }
    useEffect(() => {
        getData("http://localhost:8080/api/v1/product")
            .then((data) => {
                setProducts(data);
            })
        getData("http://localhost:8080/api/v1/category")
            .then((data) => {
                setCategorys(data);
            })
        // setProductsFilter(db)
    }, [])
    useEffect(() => {
        // setProductsFilter([]);
        getData("http://localhost:8080/api/v1/product")
            .then((data) => {
                setProducts(data);
            })
    }, [toggle])
    return (

        <div className="wrapper">
            <SearchForm handleSubmit={handleSubmit} />
            <Content handleClickCategory={handleClickCategory} products={products} categorys={categorys} />
        </div>
    );
}