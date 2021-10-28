import React from "react";

import {Button} from "../Button";
import {UserLogged} from "../UserLogged";

import "./StatusLogin.css";


const states = {
    inicial:"inicial",
    login:"login",
    signin:"signin",
    logged:"logged",
  }


class StatusLogin extends React.Component {

    render() {
        if (this.props.status === "inicial") { 
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
                        {/* <UserLogged/>   */}
                    </div>
                </React.StrictMode>
            );
        }
        if (this.props.status === "login") { 
            return (
                <React.StrictMode>               
                    <div className="status-login">
                        {/* <Button 
                            name={"Iniciar Sesión"} 
                            id={'login'} 
                            onClick={this.props.onClick}
                        />  */}
                        <Button 
                            name={"Crear cuenta"}  
                            id={'signin'}
                            onClick={this.props.onClick}
                        /> 
                        {/* <UserLogged/>   */}
                    </div>
                </React.StrictMode>
            );
        }
        if (this.props.status === "signin") { 
            return (
                <React.StrictMode>               
                    <div className="status-login">
                        <Button 
                            name={"Iniciar Sesión"} 
                            id={'login'} 
                            onClick={this.props.onClick}
                        /> 
                        {/* <Button 
                            name={"Crear cuenta"}  
                            id={'signin'}
                            onClick={this.props.onClick}
                        />  */}
                        {/* <UserLogged/>   */}
                    </div>
                </React.StrictMode>
            );
        }
        if (this.props.status === "logged") { 
            return (
                <React.StrictMode>               
                    <div className="status-login">
                    
                        <UserLogged/>  
                    </div>
                </React.StrictMode>
            );
        }
        
    }
}
export {StatusLogin};