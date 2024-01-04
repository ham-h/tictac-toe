// import { useState } from "react"
import Sqaure from "./Sqaure";

const Board = ({squares, handlesquareClick,winningsquares}) => {
  //         const[squares,setsquares]=useState(Array(9).fill(null))
  //     const[isXnext,setisXnext]=useState(false);
  //         const handlesquareClick=(clickedPosition)=>{
  //                 if(squares[clickedPosition]){
  //                         return;//makes it not to click again once clicked
  //                 }
  //                 setsquares((currentsquares)=>{
  //                         return currentsquares.map((squareVal,position)=>{
  //                         if(clickedPosition==position){
  //                                 // return 'X';
  //                                 return isXnext ? 'X':'O';
  //                         }
  //                         return squareVal;
  //                         })

  //                                   });
  //                                   setisXnext((currentisXnext)=>!currentisXnext)
  //         };//now board component can only have access squares,to make everything accessible to app compo,v paste this to app.jsx
  const renderSquare = (position) => {
    return (
      <Sqaure
        value={squares[position]}
        onClick={() => handlesquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {/* <Sqaure value={0}/> */}
        {/* [[<Sqaure value={squares[0]} onClick={()=>{
        handlesquareClick(0)
}}/>
<Sqaure value={squares[1]} onClick={()=>{
        handlesquareClick(1)
}}/>
<Sqaure value={squares[2]} onClick={()=>{
        handlesquareClick(2)
}}/>]]  to simplify this used renderfunc up*/}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
//0,1,2...represents indexes of box numbers
