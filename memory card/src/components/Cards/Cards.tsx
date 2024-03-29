import "./Cards.scss";
export interface Character {
    id: number;
    image: string;
  }
  interface CardsProps {
    cards: Character[];
    onCardClick: (id: number) => void;
  }
const Cards = ({cards, onCardClick}: CardsProps) => {

    return ( 
          <div className="cards">
            {cards.map((card) => (
                <div key={card.id} className="card" onClick={() => onCardClick(card.id)}>
                <img className="img_card" src={card.image}/>
                </div>
            ))}
          </div>   
    )
}
export default Cards