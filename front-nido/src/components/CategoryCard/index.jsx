import React from "react";

import "./CategoryCard.css";

class CategoryCard extends React.Component {
    render() {
        return (
            <>
                <div className="category-card" >
                    <div className="category-card__img">
                        <img src={this.props.image} onClick={this.props.handleClickCategory} id={this.props.title} width='100%' />
                    </div>
                    <div className="category-card__content" >
                        <h4 id={this.props.title} onClick={this.props.handleClickCategory}>{this.props.title}</h4>
                        <p id={this.props.title} onClick={this.props.handleClickCategory} className="category-card_content-hoteles">{this.props.cantidad}hoteles</p>
                    </div>
                </div>
            </>
        );
    }
}

export { CategoryCard };