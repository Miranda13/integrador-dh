import { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import Content from "../components/Content";
import getData from "../assets/js/getData";
export default function Home({ toggle }) {
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
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
        getData("http://localhost:8080/api/v1/product")
            .then((data) => {
                setProducts(data);
                setIsLoadingProducts(false);
            })
        getData("http://localhost:8080/api/v1/category")
            .then((data) => {
                setCategorys(data);
                setIsLoading(false);
            })
        // setProductsFilter(db)
    }, [])
    // useEffect(() => {
    //     setI
    //     setIsLoadingProducts(true);
    // }, [products])
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
            <Content handleClickCategory={handleClickCategory} products={products} categorys={categorys} isLoading={isLoading} isLoadingProducts={isLoadingProducts} />
        </div>
    );
}