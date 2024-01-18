import { useState } from "react";
import "./Styles.scss";
import Board from "./Compo/Board";
import { calculateWinner } from "./winner";
import Statusmsg from "./Compo/Statusmsg";
import History from "./Compo/History";
const NEW_GAME=[
  { squares: Array(9).fill(null), isXnext: false },//FOROPTIMIZATION
]

function App() {
  // const [history, sethistory] = useState([
  //   { squares: Array(9).fill(null), isXnext: false },
  // ]);
  const [history, sethistory] = useState(NEW_GAME);
  const [currentmove, setcurrentmove] = useState(0);
  const gamingboard = history[currentmove];

  // const winner = calculateWinner(gamingboard.squares);
  const {
    winner,
    winningsquares
  } = calculateWinner(gamingboard.squares);
  console.log({ historyLength: history.length, currentmove });
  const handlesquareClick = (clickedPosition) => {
    if (gamingboard.squares[clickedPosition] || winner) {
      return;
    }
    sethistory((currenthistory) => {
      const isTraversing = currentmove + 1 !== currenthistory.length;
      // console.log(isTraversing);

      const lastgamingstate = isTraversing
        ? currenthistory[currentmove]
        : currenthistory[currenthistory.length - 1];
      const nextsquaresstate = lastgamingstate.squares.map(
        (squareVal, position) => {
          if (clickedPosition === position) {
            return lastgamingstate.isXnext ? 'X' : 'O';
          }
          return squareVal;
        }
      );
      const base = isTraversing
        ? currenthistory.slice(0, currenthistory.indexOf(lastgamingstate) + 1)
        : currenthistory;

      return base.concat({
        squares: nextsquaresstate,
        isXnext: !lastgamingstate.isXnext,
      });
    });

    setcurrentmove((move) => move + 1);
  };

  const moveTo = (move) => {
    setcurrentmove(move);
  };
  const onNewGamestart=()=>{
    sethistory(NEW_GAME)//initial state
    setcurrentmove(0);
  }
  return (
    <div className="app">
      
      <h1>TIC <span className="txt-green">TAC</span> TOE</h1>
      <Statusmsg winner={winner} gamingboard={gamingboard} />

      <Board
        squares={gamingboard.squares}
        handlesquareClick={handlesquareClick}
        winningsquares={winningsquares}
      />
      <button type="button" onClick={onNewGamestart} className={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>
<h2 style={{fontWeight:'normal'}}>Current Game History</h2>
{/* fontWeight-camelcase syntax not font-weight */}
      <History history={history} moveTo={moveTo} currentMove={currentmove} />
      <div className="bg-balls"/>
    </div>
  );
}

export default App;
