import "./SubHeader.css";
import { useNavigate } from "react-router-dom";

export default function SubHeader({ product, pathGoBack }) {
    const history = useNavigate();
    const handleIconGoBack = () => {
        history(pathGoBack);
    }
    return (
        <div className="product__header">
            <div className="product__header-title-category">
                {typeof product === "object"? 
                <>
                <p>{product.category?.title}</p>
                <h2>{product.name}</h2>
                </> :
                <h2 className="sub-header-title">{product}</h2>
                }   
            </div>
            <div className="product__ubication-back">
                <i class="product__ubication-back-icon fas fa-chevron-left" onClick={handleIconGoBack}></i>
            </div>
        </div>
    )
}

