
import "../HeaderProduct.css";

function HeaderProduct ({ list }) {
  return(
    <div className="product__header">
        <div className="product__header-title-category">
            <p>{list.category?.title}</p>
            <h2>{list.name}</h2>
        </div>
        <div className="product__ubication-back">
            <i class="fas fa-chevron-left"></i>
        </div>
    </div>
)  
}

export default HeaderProduct;