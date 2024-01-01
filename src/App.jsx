import { useState } from "react";
import "./Styles.scss";
import Board from "./Compo/Board";
import { calculateWinner } from "./winner";
// import Prop from './Prop'

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(false);
  const nextPlayer=isXnext ? 'X':'O'; //this is a derived value from State
  const winner=calculateWinner(squares);
  const statusMsg=winner ? `winner is ${winner}`:`next player is ${nextPlayer}`;
  const handlesquareClick = (clickedPosition) => {
    if (squares[clickedPosition] || winner) {
      return; //makes it not to click again once clicked and stop if there is winnner
    }
    setsquares((currentsquares) => {
      return currentsquares.map((squareVal, position) => {
        if (clickedPosition == position) {
          // return 'X';
          return isXnext ? "X" : "O";
        }
        return squareVal;
      });
    });
    setisXnext((currentisXnext) => !currentisXnext);
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

  return (
    <div className="app">
      {/* <Prop name="ham" >
  <div>jhadsh</div>
  <h1>dfhh</h1>
</Prop>
<Prop name="3"/>
<Prop name="...."/>    */}
{/* <h1>Next player is {nextPlayer}</h1> */}
<h1>{statusMsg}</h1>
{/* //now this has access to state */}
      <Board squares={squares} handlesquareClick={handlesquareClick} />
      {/* <button onClick={()=>{console.log("hlo")}}>click</button> */}
      {/* <button onClick={(event)=>{console.log("hlo",event)}}>click</button> */}
      {/* gives syntaticevents */}
      {/* <button onClick={onBtnClick}>click</button>
<div>{counter}</div> */}
    </div>
  );
}

export default App;
