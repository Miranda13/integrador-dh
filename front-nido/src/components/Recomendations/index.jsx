import cards from './cards.json';
import Card from "./Card";
import './styles/Cards.css';
import Calendar from "../CalendarReserve/index";
function Recomendations() {
    return (
        <>
            <div className="cards">
                {
                    cards.map(card => {
                        return (<Card key={card.id} card={card} />)
                    })}
                <Calendar />
            </div>

        </>
    )
}

export default Recomendations;