import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import { LoginPage } from "../../pages/LoginPage";
import { SigninPage } from "../../pages/SigninPage";
import { useState } from "react";
import { Header } from '../Header';
import { Footer } from '../Footer';
import MenuMobile from "../MenuMobile";
import { useEffect } from "react/cjs/react.development";
import ProductPage from "../../pages/ProductPage";

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
            <Switch>
                <Route exact path="/">
                    <Home toggle={toggle} />
                </Route>
                <Route exact path="/login" >

                    {!isSubmitted ?
                        <LoginPage submitForm={submitForm} />
                        :
                        <>
                            <Redirect to="/" />
                        </>
                    }
                </Route>
                <Route exact path="/signin">
                    {!isSubmitted ?
                        <SigninPage submitForm={submitForm} />
                        :
                        <>
                            <Redirect to="/" />
                        </>
                    }
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route exact path="/product/:id/booking">
                    <BookingPage/>
                </Route>
            </Switch>
            <Footer />
            <MenuMobile />
        </BrowserRouter>
    )
}


export default App;