import { useState } from "react";
import "./Styles.scss";
import Board from "./Compo/Board";
import { calculateWinner } from "./winner";
import Statusmsg from "./Compo/Statusmsg";
import History from "./Compo/History";

function App() {
  const [history, sethistory] = useState([
    { squares: Array(9).fill(null), isXnext: false },
  ]);
  const [currentmove, setcurrentmove] = useState(0);
  const gamingboard = history[currentmove];

  const winner = calculateWinner(gamingboard.squares);
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
  return (
    <div className="app">
      
      <Statusmsg winner={winner} gamingboard={gamingboard} />

      <Board
        squares={gamingboard.squares}
        handlesquareClick={handlesquareClick}
      />
<h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentmove} />
    </div>
  );
}

export default App;
