import "./Cards.scss";
export interface Characters {
    id: number;
    image: string;
    name: string;
  }
  interface CardsProps {
    cards: Characters[];
    onCardClick: (id: number) => void;
  }
const Cards = ({cards, onCardClick}: CardsProps) => {

    return ( 
          <div className="cards">
            {cards.map((card) => (
                <div key={card.id} className="card" onClick={() => onCardClick(card.id)}>
                <img className="img_card" src={card.image}/>
                <h3>{card.name}</h3>
                </div>
            ))}
          </div>   
    )
}
export default Cards