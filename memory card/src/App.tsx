import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Hearder/Header'
import { Characters } from './components/Cards/Cards'
import RandomCards  from './components/RandomCards/RandomCards'

function App() {

  const [cards, setCards] = useState<Characters[]>([])
  const [randomCards, setRandomCards] = useState<Characters[]>([])

  const getApiData = useCallback( 
    async () => {
        const baseURL = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(baseURL).then((response) => response.json())

        setCards(response.results)

  }, [])

  useEffect(() => {
    getApiData();
  }, [getApiData])

  const randomNum = () => {
    const randomedCards = [...cards].sort(() => Math.random - 0.5)
    setRandomCards(randomedCards)
  }

  return (
    <>
    <Header/>
    <Cards cards={cards} onCardClick={randomNum}/>
    <RandomCards randomCards={randomCards}/>
    </>
  )
}

export default App
