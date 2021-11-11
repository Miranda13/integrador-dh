import React from "react";

import "./MenuMobile.css";

class MenuMobile extends React.Component {
  render() {
    return (

      <React.StrictMode>
        <div id="menu_mini">
          <nav id="menu_sidebar">
            <div className="menu_sidebar__header">
              MENU
            </div>
            <ul>
              <li><a href="/signin">Crear Cuenta</a></li>
              <hr />
              <li><a href="/login">Iniciar Sesión</a></li>
            </ul>

            <div className="menu_sidebar__icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </nav>
          <div id="menu-mobile">
            <a href="#" id="menu_on" className="">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </React.StrictMode>

    );
  }
}

export default MenuMobile;


