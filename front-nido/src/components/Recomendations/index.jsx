
import Card from "./Card";
import './styles/Card.css';

function Recomendations({ products }) {
    return (
        <div className="recommendation">
            <h2 className="title-recommendation">Recomendaciones</h2>
            <div className="cards">
                {
                    products.length === 0 ?
                        <h3 style={{ "color": "var(--medium-color)" }}>Por el momento no contamos con establecimientos con esa caracteristica</h3>
                        :
                        products.map(card => {
                            return (<Card key={card.productId} card={card} />)
                        })
                }
            </div>
        </div>
    )
}

export default Recomendations;