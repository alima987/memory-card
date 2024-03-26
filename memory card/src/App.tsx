import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Hearder/Header'
import { Characters } from './components/Cards/Cards'

function App() {

  const [cards, setCards] = useState<Characters[]>([])

  const getApiData = useCallback( 
    async () => {
        const baseURL = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(baseURL).then((response) => response.json())

        setCards(response.results)

  }, [])

  useEffect(() => {
    getApiData();
  }, [getApiData])



  return (
    <>
    <Header/>
    <Cards cards={cards} />
    </>
  )
}

export default App
