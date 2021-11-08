import cards from './cards.json';
import Card from "./Card";
import './styles/Cards.css';
function Recomendations() {
    return (
        <>
            <div className="cards">
                {
                    cards.map(card => {
                        return (<Card key={card.id} card={card} />)
                    })}
            </div>
        </>
    )
}

export default Recomendations;