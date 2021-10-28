import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

class Button extends React.Component {
    handleClick = e => {
        // console.log("location='."+e.target.id+"'");
        console.log(e.target.id);
    }
    
render() {
    return (
        <div>
        {/* <button className="button-2 --button-short" id={this.props.id} onClick={this.handleClick}>
            {this.props.name}
        </button> */}
        <Link to={this.props.id} className="button-2 --button-short" id={this.props.id}>
             {this.props.name}
        </Link>       
        </div>
    );
    }
}
export  {Button};