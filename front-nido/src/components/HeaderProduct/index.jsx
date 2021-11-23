import "./HeaderProduct.css";

function HeaderProduct({ product }) {
    return (
        <div className="product__header">
            <div className="product__header-title-category">
                {/* <p>{product.category?.title}</p> */}
                {/* <h2>{product.name}</h2> */}
            </div>
            <div className="product__ubication-back">
                <i class="product__ubication-back-icon fas fa-chevron-left"></i>
            </div>
        </div>
    )
}

export default HeaderProduct;