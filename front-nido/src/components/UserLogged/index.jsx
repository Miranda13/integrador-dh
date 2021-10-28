import React from "react";


class UserLogged extends React.Component {
render() {
    return (
        <React.StrictMode>
            <div className="user-logged">
                <div className="user-logged__close">
               <a > <i className="fas fa-times"></i></a>
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
export {UserLogged};