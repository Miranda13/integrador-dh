import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import UserLogged from "../UserLogged";
import "./MenuMobile.css";
import SessionContextProvider from "../../context/sessionContext.js";
export default function MenuMobile({ setIsSubmitted }) {
  const history = useNavigate();
  const { user, setUser, setToken } = useContext(SessionContextProvider);
  const handleLogout = () => {
    localStorage.removeItem('productsFavorites');
    setToken(null);
    setUser(null)
    setIsSubmitted(false);
    history("/");
  }
  return (
    <React.StrictMode>
      <div id="menu_mini">
        <nav id="menu_sidebar">
          <div className="menu_sidebar__header">
            {
              user !== null && user !== undefined ?
                <UserLogged user={user} setIsSubmitted={setIsSubmitted} />
                :
                "MENU"
            }

          </div>


          {
            user !== null && user !== undefined ?
              <>
                <div className="cerrar-sesion-mobile">
                  <div className="menu-mini__nav">
                    <Link to={`/${user.userId}/mybooking`} className="">Mis reservas</Link>
                    <hr />
                    <Link to="/favorite" className="" >Mis favoritos</Link>
                  </div>
                  <div className="menu-mini__logout">
                    <p>¿Desea <span className="logout" onClick={handleLogout}>cerrar sesión</span>?</p>
                    <hr />
                  </div>

                </div>
              </>
              :
              <ul>
                <li><Link to="/signin">Crear Cuenta</Link></li>
                <hr />
                <li><Link to="/login">Iniciar Sesión</Link></li>
              </ul>
          }

          <div className="menu_sidebar__icon">
            <i className="fab fa-facebook" onClick={() => window.open("https://www.facebook.com/digitalhouseschool", "_blank")}></i>
            <i className="fab fa-linkedin-in" onClick={() => window.open("https://www.linkedin.com/school/digital-house-argentina", "_blank")}></i>
            <i className="fab fa-twitter" onClick={() => window.open("https://twitter.com/_digitalhouse", "_blank")}></i>
            <i className="fab fa-instagram" onClick={() => window.open("https://www.instagram.com/_digitalhouse ", "_blank")}></i>
          </div>
        </nav>
        <div id="menu-mobile">
          <Link to="#" id="menu_on" className="">
            <span id="span"></span>
            <span id="span"></span>
            <span id="span"></span>
          </Link>
        </div>
      </div>
    </React.StrictMode>

  );
}




