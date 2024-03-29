import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Hearder/Header'
import { Character } from './components/Cards/Cards'
import Modal from './components/Modal'

function App() {

  const [cards, setCards] = useState<Character[]>([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clickedCard, setClickedCard] = useState<number[]>([])
  const [isGameOver, setGameOver] = useState(false)
  const [isWin, setIsWin] = useState(false)

  const getApiData = useCallback(
    async () => {
      try {
        const baseURL = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const characterData = data.results.slice(0, 12);
        setCards(characterData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, [])

  useEffect(() => {
    getApiData();
  }, [getApiData])

  const shuffle = () => {
    let currentI = cards.length - 1
    const mixedCards = [...cards]
    let j
    while (currentI > 0) {
      j = Math.floor(Math.random() * (currentI + 1))
      currentI --
      [mixedCards[currentI], mixedCards[j]] = [mixedCards[j], mixedCards[currentI]]
    }
    return setCards(mixedCards)
  }
  const currScore = (id: number) => {
    if(clickedCard.includes(id)) {
      if(score > bestScore) {
        setBestScore(score)
      }
      resetGame()
      setGameOver(true)
      setIsWin(false)
      return 
    } else {
      const newScore = score + 1;
      setScore(newScore)
      setClickedCard([...clickedCard, id])
      if (newScore == 12) {
        setGameOver(true);
        setIsWin(true);
        setBestScore(12)
        resetGame()
    }

  }
}

  const resetGame = () => {
    setScore(0)
    setClickedCard([])
  }

  const handleClick = (id: number) => {
      shuffle();
      currScore(id);
  }


  return (
    <>
     <Header score={score} bestScore={bestScore} />
    <Cards cards={cards} onCardClick={(id: number) => handleClick(id)} />
    <Modal isGameOver={isGameOver} setGameOver={setGameOver} isWin={isWin} setIsWin={setIsWin}/> 
    </>
  )
}

export default App
