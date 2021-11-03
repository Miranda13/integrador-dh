import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import { Button } from "../Button";
import "./Header.css";
import { UserLogged } from "../UserLogged";

function Header({ onClick }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        let userLocal = JSON.parse(localStorage.getItem("user"));

        if (userLocal !== null) {
            setUser(userLocal);
        }
    }, [])
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
            {
                user !== null ?
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
            }

        </div>);
}

export { Header };