import React from "react";
import FormLogin from "../components/FormLogin";
//TODO delete double export changing class component to function component
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.StrictMode>
                <div className="wrapper">
                    <div className="container">
                        <FormLogin submitForm={this.props.submitForm} storeLogin={this.props.storeLogin} />
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}
export { LoginPage };
