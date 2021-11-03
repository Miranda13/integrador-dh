import React from "react";
//  import  "./login.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/";
import FormLogin from "../components/FormLogin";
import { Content } from "../components/Content";



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <React.StrictMode>
                <div className="wrapper">
                    <div className="container">
                        <FormLogin submitForm={this.props.submitForm} />
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}

export { LoginPage };
