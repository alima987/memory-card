import './Header.scss';

interface HeaderProps {
    score: number;
    bestScore: number;
}
const Header = ({score, bestScore}: HeaderProps) => {
    return (
        <>
        <div className="header">
        <h2 className="header-title">Memory Game</h2>
        <p className="text">Get points by clicking on an image but don't click on any more than once!</p>
        <h3 className='score'>Score: {score}</h3>
        <h3 className='best-score'>Best score: {bestScore}</h3>
        </div>
        </>
    )
}
export default Header