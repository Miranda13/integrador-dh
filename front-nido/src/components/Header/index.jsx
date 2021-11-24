import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import "./Header.css";
import UserLogged from "../UserLogged";
import { useLocation } from "react-router-dom";
import SessionContext from "../../context/sessionContext.js";
function Header({ handleChangePageHome, setIsSubmitted }) {
    const location = useLocation();
    const { user, setToken } = useContext(SessionContext)

    useEffect(() => {
        if (location.pathname === "/login") {
            const loginButton = document.querySelector("#login")
            const signinButton = document.querySelector("#signin")
            loginButton.classList.add("hidden")
            signinButton.classList.remove("hidden")
        } else if (location.pathname === "/signin") {
            const loginButton = document.querySelector("#login")
            const signinButton = document.querySelector("#signin")
            signinButton.classList.add("hidden")
            loginButton.classList.remove("hidden")
        }
    }, [location])
    return (
        <div className="header">
            <div className="identity">
                <Link to="/" onClick={handleChangePageHome}>
                    <img src={logo} alt="Logo" className="identity__logo" />
                </Link>
                <Link to="/" onClick={handleChangePageHome}>
                    <p className="identity__slogan">Sentite como en tu hogar</p>
                </Link>
            </div>
            <div className="header__buttons">
                {
                    user !== null && user !== undefined ?
                        <>
                            {window.innerWidth >= 760 && <UserLogged setIsSubmitted={setIsSubmitted} user={user} />}
                        </>
                        :
                        <>
                            <Button
                                name={"Iniciar Sesión"}
                                id={'login'}
                            />
                            <Button
                                name={"Crear cuenta"}
                                id={'signin'}
                            />

                        </>
                }</div>

        </div>);
}

export { Header };