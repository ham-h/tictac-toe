import { useState } from "react";
import "./Styles.scss";
import Board from "./Compo/Board";
import { calculateWinner } from "./winner";
import Statusmsg from "./Compo/Statusmsg";
import History from "./Compo/History";
// import Prop from './Prop'

function App() {
  const [history, sethistory] = useState([
    { squares: Array(9).fill(null), isXnext: false },
  ]); //after this v'll comment below once
  // const [squares, setsquares] = useState(Array(9).fill(null));
  // const [isXnext, setisXnext] = useState(false);
  const [currentmove, setcurrentmove] = useState(0);
  const gamingboard = history[currentmove];
  // const nextPlayer=isXnext ? 'X':'O'; //this is a derived value from State
  // const winner=calculateWinner(squares);//after setting curentmove
  const winner = calculateWinner(gamingboard.squares);
  console.log({historyLength:history.length,currentmove});//here put it in {}as objs to view clg better,not necessary
  // const statusMsg=winner ? `winner is ${winner}`:`next player is ${nextPlayer}`;//moving to  statsmsg compo
  const handlesquareClick = (clickedPosition) => {
    if (gamingboard.squares[clickedPosition] || winner) {
      return; //makes it not to click again once clicked and stop if there is winnner
    }
    sethistory((currenthistory) => {
      const isTraversing=currentmove + 1 !==currenthistory.length;
      console.log(isTraversing);
      //setsquares bfore history //currentsquares
      //   return currentsquares.map((squareVal, position) => {
      //     if (clickedPosition == position) {
      //       // return 'X';
      //       return isXnext ? "X" : "O";
      //     }
      //     return squareVal;
      //   });
      // setisXnext((currentisXnext) => !currentisXnext);
      const lastgamingstate = isTraversing ?  currenthistory[currentmove] :currenthistory[currenthistory.length - 1];
      const nextsquaresstate = lastgamingstate.squares.map(
        (squareVal, position) => {
          if (clickedPosition == position) {
            return lastgamingstate.isXnext ? "X" : "O";
          }
          return squareVal;
        }
      );
      const base= isTraversing ? currenthistory.slice(0,currenthistory.indexOf(lastgamingstate)+1) : currenthistory;
      // return currenthistory.concat({
        return base.concat({
        squares: nextsquaresstate,
        isXnext: !lastgamingstate.isXnext,
      });
    });

    setcurrentmove((move) => move + 1);
  };
  // const [counter,setCounter]=useState(1);
  // let counter=1;//after usestate v dontneed  this
  // const onBtnClick=()=>{
  // setCounter(counter+1);
  // setCounter(currentCounter=>{
  //   return currentCounter+1;
  // })//the answer will be same  bt  this callback aproach isbetter
  // counter=counter+1;//after usestate v dontneed  this
  // this will work onlyin plian js not in react,it wont update coz inreact
  // v hav to make changes as states
const moveTo= move =>{
setcurrentmove(move);
}
  return (
    <div className="app">
      {/* <Prop name="ham" >
  <div>jhadsh</div>
  <h1>dfhh</h1>
</Prop>
<Prop name="3"/>
<Prop name="...."/>    */}
      {/* <h1>Next player is {nextPlayer}</h1> */}
      {/* <h1>{statusMsg}</h1> */}
      <Statusmsg winner={winner} gamingboard={gamingboard} />
      {/* isXnext={isXnext} squares={squares} removed after gaming board*/}
      {/* //now this has access to state */}
      <Board
        squares={gamingboard.squares}
        handlesquareClick={handlesquareClick}
      />

      <History history={history} moveTo={moveTo} currentMove={currentmove}/>
      {/* <button onClick={()=>{console.log("hlo")}}>click</button> */}
      {/* <button onClick={(event)=>{console.log("hlo",event)}}>click</button> */}
      {/* gives syntaticevents */}
      {/* <button onClick={onBtnClick}>click</button>
<div>{counter}</div> */}
    </div>
  );
}

export default App;
