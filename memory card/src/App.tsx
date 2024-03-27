import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Hearder/Header'
import { Characters } from './components/Cards/Cards'

function App() {

  const [cards, setCards] = useState<Characters[]>([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedCard, setClickedCard] = useState<number[]>([])

  const getApiData = useCallback(
    async () => {
      try {
        const baseURL = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const cardResult = data.results
        setCards(cardResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, [])

  useEffect(() => {
    getApiData();
  }, [getApiData])

  const shuffle = () => {
    let currentI = cards.length - 1
    let mixedCards = [...cards]
    let j
    while (currentI > 0) {
      j = Math.floor(Math.random() * (currentI + 1))
      currentI --
      [mixedCards[currentI], mixedCards[j]] = [mixedCards[j], mixedCards[currentI]]
    }
    return setCards(mixedCards)
  }
  const currScore = (id: number) => {
    if (clickedCard.length === 2) {
      if (clickedCard[0] === clickedCard[1]) {
        setScore(0); 
      } else {
        setScore(score + 1);
      }
      setClickedCard([]);
    } else {
      setClickedCard([...clickedCard, id]);
    }
  }

  const handleClick = (id: number) => {
      shuffle();
      currScore(id);
  }


  return (
    <>
    <Header/>
    <h3>Score: {score}</h3>
    <h3>Best score:</h3>
    <Cards cards={cards} onCardClick={(id: number) => handleClick(id)}/>
    </>
  )
}

export default App
