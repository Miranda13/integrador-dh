import React from "react";

import "./CategoryCard.css";

class CategoryCard extends React.Component {
    render() {
        return (
        <>
            <div className="category-card">
                <div className="category-card__img">
                    <img src={this.props.image} width='100%' />                 
                </div>
                <div className="category-card__content">
                  <h4>{this.props.title}</h4>  
                  <p className="category-card_content-hoteles">{this.props.cantidad}hoteles</p>
                </div>
            </div>
        </>
        );
    }
}

export {CategoryCard};