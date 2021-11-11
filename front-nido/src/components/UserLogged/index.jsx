import React from "react";
import { Link } from "react-router-dom";

class UserLogged extends React.Component {
    handleLogout = () => {
        localStorage.removeItem("user");
        window.location.assign("/");
    }
    render() {
        return (
            <React.StrictMode>
                <div className="user-logged">
                    <div className="user-logged__close">
                        <Link to="/" onClick={this.handleLogout}><i className="fas fa-times"></i></Link>
                    </div>
                    <div className="user-logged__container">
                        <div className="user-logged__container__avatar">
                            BR
                        </div>
                        <div className="user-logged__container__name">
                            <p><span>Hola,</span></p>
                            <p>Bruno Rodriguez</p>
                        </div>
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}
export { UserLogged };