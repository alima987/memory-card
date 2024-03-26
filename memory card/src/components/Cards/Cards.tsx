export interface Characters {
    id: number;
    image: string;
    name: string;
  }
  interface CardsProps {
    cards: Characters[];
  }
const Cards = ({cards}: CardsProps) => {

    return (
        <div>
            {cards.map((card) => (
                <div key={card.id} className="card">
                <img className="img_card" src={card.image}/>
                <h3>{card.name}</h3>
                </div>
            ))}
        </div>      
    )
}
export default Cards