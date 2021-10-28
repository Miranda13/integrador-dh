import React from "react";

import {Button} from "../Button";
import {UserLogged} from "../UserLogged";

import "./StatusLogin.css";

class StatusLogin extends React.Component {
    

    render() {
   
    return (
        <React.StrictMode>
     
           
            <div className="status-login">
                <Button 
                    name={"Iniciar Sesión"} 
                    id={'login'} 
                    onClick={this.props.onClick}
                /> 
                <Button 
                    name={"Crear cuenta"}  
                    id={'signin'}
                    onClick={this.props.onClick}
                /> 
                <UserLogged/>  
            </div>
        </React.StrictMode>
    );
    }
}
export {StatusLogin};