import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import "./Header.css";
import { UserLogged } from "../UserLogged";
import useLocalStorage from "../../hooks/useLocalStorage";
function Header({ handleChangePageHome }) {
    const [user, setUser] = useLocalStorage("user", null);
    const handleClickButton = (e) => {
        const links = document.querySelectorAll(".header__buttons a")
        links.forEach(link => {
            link.getAttribute("id") === e.target.getAttribute("id") ? link.classList.add("hidden") : link.classList.remove("hidden")
        })
    }
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
                            {window.innerWidth >= 760 && <UserLogged />}
                        </>
                        :
                        <>
                            <Button
                                name={"Iniciar Sesión"}
                                id={'login'}
                                event={handleClickButton}
                            />
                            <Button
                                name={"Crear cuenta"}
                                id={'signin'}
                                event={handleClickButton}
                            />

                        </>
                }</div>

        </div>);
}

export { Header };