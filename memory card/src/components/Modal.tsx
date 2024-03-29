import won from '../assets/won.gif'
import lost from '../assets/lost.gif'
import './Modal/Modal.scss'

const Content = ({ isWin, setIsWin }: { isWin: boolean, setIsWin: (value: boolean) => void }) => {
  let content;
  if(isWin) {
    setIsWin(true)
    content = (
        <>
            <img src={won}></img>
            You won!
        </>
    )
  } else {
    setIsWin(false)
    content = (
        <>
            <img src={lost}></img>
            <div>Game Over</div>
       </>
    )
}
return (
  <div>
      {content}
  </div>
)
    
}
interface ModalProps {
  isGameOver: boolean;
  setGameOver: (value: boolean) => void;
  isWin: boolean, 
  setIsWin: (value: boolean) => void
}
const Modal = ({isGameOver, setGameOver, isWin, setIsWin}: ModalProps) => {
  if (!isGameOver) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <Content isWin={isWin} setIsWin={setIsWin}/>
        <button onClick={() => setGameOver(false)}>Close</button>
      </div>
    </div>
  );
}

export default Modal