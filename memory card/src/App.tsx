import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Hearder/Header'
import { Characters } from './components/Cards/Cards'

function App() {

  const [cards, setCards] = useState<Characters[]>([])

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

  const handleClick = () => {
    shuffle();
  }


  return (
    <>
    <Header/>
    <Cards cards={cards} onCardClick={() => handleClick()}/>
    </>
  )
}

export default App
