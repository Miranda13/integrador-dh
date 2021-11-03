import cards from './cards.json';
import Card from "./Card";
import './styles/Card.css';

function Recomendations(){
    return(
        <div className="recommendation">
        <h2 className="title-recommendation">Recomendaciones</h2>
        <div className="cards">
        {
            cards.map(card => {
            return(<Card key={card.id} card={card}/>)
        })}
        </div>
        </div>
    )
}

export default Recomendations;