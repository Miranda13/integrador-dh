import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import "./Header.css";
import { UserLogged } from "../UserLogged";
import useLocalStorage from "../../hooks/useLocalStorage";
function Header({ onClick }) {
    const [user, setUser] = useLocalStorage("user", null);
    return (
        <div className="header">
            <div className="identity">
                <Link to="/">
                    <img src={logo} alt="Logo" className="identity__logo" />
                </Link>
                <Link to="/">
                    <p className="identity__slogan">Sentite como en tu hogar</p>
                </Link>
            </div>
            <div className="header__buttons">
            {
                user !== null && user !== undefined ?
                    <>
                        <UserLogged />
                    </>
                    :
                    <>
                        <Button
                            name={"Iniciar Sesión"}
                            id={'login'}
                            onClick={onClick}
                        />
                        <Button
                            name={"Crear cuenta"}
                            id={'signin'}
                            onClick={onClick}
                        />

                    </>
            }</div>

        </div>);
}

export { Header };