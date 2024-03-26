import CurrentScore from "../Scoreboard/CurrentScore";

const Header = () => {
    return (
        <>
        <div>
        <h2>Memory Game</h2>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
        <CurrentScore />
        </div>
        </>
    )
}
export default Header