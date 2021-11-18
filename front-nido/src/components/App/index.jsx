import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import { LoginPage } from "../../pages/LoginPage";
import { SigninPage } from "../../pages/SigninPage";
import { useState } from "react";
import { Header } from '../Header';
import { Footer } from '../Footer';
import MenuMobile from "../MenuMobile";
import { useEffect } from "react/cjs/react.development";
import ProductPage from "../../pages/ProductPage";
import BookingPage from "../../pages/BookingPage";

function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [toggle, setToggle] = useState();
    const handleChangePageHome = () => {
        setToggle(!toggle);
        const links = document.querySelectorAll(".header__buttons a")
        links.forEach(link => {
            link.classList.remove("hidden")
        })
    }
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <BrowserRouter>
            <Header handleChangePageHome={handleChangePageHome} />
            <Routes>
                <Route exact path="/" element = {<Home toggle={toggle} />} />
                <Route exact path="/login" element =

                    {!isSubmitted ?
                        <LoginPage submitForm={submitForm} />
                        :
                        <>
                            <Navigate to="/" />
                        </>
                    } />
                <Route exact path="/signin" element =
                    {!isSubmitted ?
                        <SigninPage submitForm={submitForm} />
                        :
                        <>
                            <Navigate to="/" />
                        </>
                    } />
                 <Route exact path="/product/:id" element = {<ProductPage />} />
                <Route exact path="/product/:id/booking" element = {<BookingPage/>}/>
            </Routes>
            <Footer />
            <MenuMobile />
        </BrowserRouter>
    )
}


export default App;