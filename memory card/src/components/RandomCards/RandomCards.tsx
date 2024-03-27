import { Characters } from "../Cards/Cards"

interface RandomCardsProps {
    randomCards: Characters[];
}

const RandomCards = ({randomCards}: RandomCardsProps) => {
  return (
    <div className="random-cards">
       {randomCards.map((ranCard) => (
        <div key={ranCard.id}>
          <img className="img_card" src={ranCard.image} alt={ranCard.name}/>
          <h3>{ranCard.name}</h3>
        </div>
       ))}
    </div>

  )
}
export default RandomCards