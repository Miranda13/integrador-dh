import { useState, useEffect, useContext } from "react";
import { SearchForm } from "../components/SearchForm";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import getData from "../assets/js/getData";
import SessionContext from "../context/sessionContext";
export default function Home({ toggle }) {
    const history = useNavigate();
    const { token } = useContext(SessionContext);
    const [products, setProducts] = useState([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [categorys, setCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    // const [productsFilter, setProductsFilter] = useState([]);
    const handleRangeDates = (dateIn, dateOut) => {
        setStartDate(dateIn);
        setEndDate(dateOut);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.querySelector(".container-location__title");
        if (startDate === "" && endDate === "" && location.value !== "") {
            getData(`/api/v1/location/${location.getAttribute("id")}`)
                .then((location) => {
                    if (location) {
                        setIsLoadingProducts(false);
                    }
                    setProducts(location.products);
                })
        }
        if (startDate !== "" && endDate !== "" && location.value !== "") {
            let auxIn = new Date(startDate);
            let auxOut = new Date(endDate);
            auxIn = auxIn.toLocaleDateString().split("/")[2] + "-" + (auxIn.toLocaleDateString().split("/")[1] < 10 ? "0" + auxIn.toLocaleDateString().split("/")[1] : auxIn.toLocaleDateString().split("/")[1]) + "-" + (auxIn.toLocaleDateString().split("/")[0] < 10 ? "0" + auxIn.toLocaleDateString().split("/")[0] : auxIn.toLocaleDateString().split("/")[0]);
            auxOut = auxOut.toLocaleDateString().split("/")[2] + "-" + (auxOut.toLocaleDateString().split("/")[1] < 10 ? "0" + auxOut.toLocaleDateString().split("/")[1] : auxOut.toLocaleDateString().split("/")[1]) + "-" + (auxOut.toLocaleDateString().split("/")[0] < 10 ? "0" + auxOut.toLocaleDateString().split("/")[0] : auxOut.toLocaleDateString().split("/")[0]);
            getData(`/api/v1/product/search?city=${location.value.split(",")[0]}&dateIn=${auxIn}&dateOut=${auxOut}`)
                .then((data) => {
                    if (data) {
                        setIsLoadingProducts(false);

                    }
                    setProducts(data);
                })
        }

    }
    const handleClickCategory = (e) => {
        fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/product/category/page/?name=${e.target.id}&page=0`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                /*Setear los products que me llegan a product y descomentar los set de abajo*/
                // setPages(data.totalPages);
                // setCurrentPage(data.pageable.pageNumber + 1);                
            })
        getData(`/api/v1/product/category?name=${e.target.id}`)
            .then((data) => {
                if (data) {
                    setIsLoadingProducts(false);
                }
                setProducts(data);
            })
    }
    const handleChangePage = (numberPage) => {
        fetch(`http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/product/page/${numberPage - 1}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                /*Aqui deberia reasignar a products lo q me llega de la pagina 1 */
            })
    }
    useEffect(() => {
        fetch("http://ec2-54-144-29-135.compute-1.amazonaws.com:8080/api/v1/product/page/0", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                /*Aqui deberia asignar lo q me llega en la pagina 0 a product */
                setPages(data.totalPages);
                setCurrentPage(data.pageable.pageNumber + 1);
            })
        getData("/api/v1/product")
            .then((data) => {
                if (data) {
                    setIsLoadingProducts(false);
                }
                setProducts(data);
            })
        getData("/api/v1/category")
            .then((data) => {
                if (data) {
                    setIsLoading(false);

                }
                setCategorys(data);
            })
        // setProductsFilter(db)
    }, [])
    // useEffect(() => {
    //     setI
    //     setIsLoadingProducts(true);
    // }, [products])
    useEffect(() => {
        // setProductsFilter([]);
        getData("/api/v1/product")
            .then((data) => {
                setProducts(data);
            })
    }, [toggle])
    return (

        <div className="wrapper">
            <SearchForm handleSubmit={handleSubmit} handleRangeDates={handleRangeDates} />
            <Content currentPage={currentPage} pages={pages} handleChangePage={handleChangePage} handleClickCategory={handleClickCategory} products={products} categorys={categorys} isLoading={isLoading} isLoadingProducts={isLoadingProducts} />
        </div>
    );
}