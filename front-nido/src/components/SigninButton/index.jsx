import React from "react";


class SigninButton extends React.Component {
render() {
    return (
        <button className="stateLogin__button button" onClick="">
        {this.props.text}
        </button>
    );
    }
}
export default SigninButton;