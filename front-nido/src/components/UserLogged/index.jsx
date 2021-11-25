import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SessionContextProvider from "../../context/sessionContext";
import './UserLogged.css';

export default function UserLogged({ user, setIsSubmitted }) {
    const { setToken } = useContext(SessionContextProvider)
    const history = useNavigate();
    const handleLogout = () => {
        setToken(null);
        setIsSubmitted(false);
        history("/");
    }
    const handleAvatar = () => {
        return user.name.charAt(0).toUpperCase() + user.surname.charAt(0).toUpperCase();
    }
    return (
        <React.StrictMode>
            <div className="user-logged">
                <div className="user-logged__close">
                    <Link to="/" onClick={handleLogout}><i className="fas fa-times"></i></Link>
                </div>
                <div className="user-logged__container">
                    <div className="user-logged__container__avatar">
                        {handleAvatar()}
                    </div>
                    <div className="user-logged__container__name">
                        <p><span>Hola,</span></p>
                        <p>{user.name} {user.surname}</p>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}