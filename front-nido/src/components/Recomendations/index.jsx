
import Card from "./Card";
import './styles/Card.css';

function Recomendations({ products }) {
    return (
        <div className="recommendation">
            <h2 className="title-recommendation">Recomendaciones</h2>
            <div className="cards">
                {
                    products.map(card => {
                        return (<Card key={card.productId} card={card} />)
                    })
                }
            </div>
        </div>
    )
}

export default Recomendations;