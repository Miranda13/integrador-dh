import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

class Button extends React.Component {
    handleClick = e => {
        // console.log("location='."+e.target.id+"'");
    }

    render() {
        return (
            <div>
                <Link to={"/" + this.props.id} onClick={this.props.event} className="button-2 --button-short" id={this.props.id}>
                    {this.props.name}
                </Link>
            </div>
        );
    }
}
export { Button };