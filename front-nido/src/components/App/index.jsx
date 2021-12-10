import React from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import LoginPage from "../../pages/LoginPage";
import { SigninPage } from "../../pages/SigninPage";
import { useState } from "react";
import { Header } from '../Header';
import { Footer } from '../Footer';
import MenuMobile from "../MenuMobile";
import ProductPage from "../../pages/ProductPage";
import BookingPage from "../../pages/BookingPage";
import SuccessfulMessagePage from "../../pages/SuccessfulMessagePage";
import { SessionContextProvider } from '../../context/sessionContext.js';
import { FavoriteContextProvider } from '../../context/favoriteContext.js';
import { ReserveContextProvider } from "../../context/reserveContext.js";
import FavoritePage from "../../pages/FavoritePage";
import MyBookingPage from "../../pages/MyBookingPage";
import NotFoundPage from "../../pages/NotFoundPage";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import PrivateAdminRoute from "../../routes/PrivateAdminRoute";
import AddProductPage from "../../pages/AddProductPage";

export default function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [toggle, setToggle] = useState();
    const handleChangePageHome = () => {
        setToggle(!toggle);
    }
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <BrowserRouter>
            <FavoriteContextProvider>
                <SessionContextProvider>
                    <ReserveContextProvider>
                        <Header handleChangePageHome={handleChangePageHome} setIsSubmitted={setIsSubmitted} />
                        <Routes>
                            <Route exact path="/" element={<Home toggle={toggle} />} />
                            <Route exact path="/login" element={<PublicRoute />} >
                                <Route exact path="/login" element=
                                    {!isSubmitted ?
                                        <>
                                            <LoginPage submitForm={submitForm} />
                                        </>
                                        :
                                        <>
                                            <Navigate to="/" />
                                        </>
                                    } />
                            </Route>
                            <Route exact path="/signin" element={<PublicRoute />} >
                                <Route exact path="/signin" element=
                                    {!isSubmitted ?
                                        <SigninPage submitForm={submitForm} />
                                        :
                                        <>
                                            <Navigate to="/" />
                                        </>
                                    } />
                            </Route>
                            <Route exact path="/product/:id" element={<ProductPage />} />
                            <Route exact path="/product/:id/booking" element={
                                <BookingPage />
                            } />
                            <Route exact path="/favorite" element={<PrivateRoute />} >
                                <Route exact path="/favorite" element={<FavoritePage />} />
                            </Route>
                            <Route exact path="/success-booking" element={<PrivateRoute />}>
                                <Route exact path="/success-booking" element={<SuccessfulMessagePage message="Su reserva se ha realizado con éxito" button="Ok" />} />
                            </Route>
                            <Route exact path="/success-re-booking" element={<PrivateRoute />}>
                                <Route exact path="/success-re-booking" element={<SuccessfulMessagePage message="Su reserva se ha actualizado con éxito" button="Genial!" />} />
                            </Route>
                            <Route exact path="/success-product" element={<PrivateRoute />} >
                                <Route exact path="/success-product" element={<SuccessfulMessagePage message="Tu propiedad se ha creado con éxito" button="Volver" />} />
                            </Route>
                            <Route exact path="/addProduct" element={<PrivateAdminRoute />} >
                                <Route exact path="/addProduct" element={<AddProductPage />} />
                            </Route>
                            <Route exact path="/:id/mybooking" element={<MyBookingPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                        <Footer />
                        <MenuMobile setIsSubmitted={setIsSubmitted} />
                    </ReserveContextProvider>
                </SessionContextProvider>
            </FavoriteContextProvider>
        </BrowserRouter >
    )
}
