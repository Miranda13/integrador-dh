import React from "react";

import "./CategoryCard.css";

class CategoryCard extends React.Component {
    render() {
        return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={this.props.image} width='100%' />                 
                </div>
                <div className="card__content">
                  <h4>{this.props.title}</h4>  
                  <p className="card_content-hoteles">{this.props.cantidad}hoteles</p>
                </div>
            </div>
        </>
        );
    }
}

export {CategoryCard};