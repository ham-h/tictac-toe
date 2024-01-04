import React from "react";

const Statusmsg = ({ winner, gamingboard}) => {
  const{squares,isXnext}=gamingboard;//this alt for gamingboard.squaeres
  const nomovesleft = squares.every((squareVal) => squareVal !== null);
  const nextPlayer = isXnext ? "X" : "O"; //this is a derived value from State

  //   const statusMsg=winner ? `winner is ${winner}`:`next player is ${nextPlayer}`;
  //these are ex: of conditional rendering
  const renderstatusMsg = () => {
    if (winner) {
      return (
        <React.Fragment>
          winner is{" "}
          <span className={winner === "X" ? "txt-green" : "txt-orange"}>
            {winner}
          </span>
        </React.Fragment>
      );
      //inorder tonot towrap these in div vusereactfragment or //v can also keep as empty
    }
    if (!winner && nomovesleft) {
      return (
        <React.Fragment>
          <span className="txt-orange">O</span> and{" "}
          <span className="txt-green">X</span> tied
        </React.Fragment>
      );
    }
    if (!winner && !nomovesleft) {
      return (
        <>
          next player is{" "}
          <span className={isXnext ? "txt-green" : "txt-orange"}>
            {nextPlayer}
          </span>
        </> 
      );
    }
    return null;
  };
  return (
    <h2 className="status-message">
      {/* {winner && <div>winner is ${winner}</div>}{' '}
        {!winner && nomovesleft && <div>hlo</div>} another wayto  use conditional renderingbt winner should be a booleanvalue
        bthere itis somewhat impractical */}
      {renderstatusMsg()}
    </h2>
  );
};

export default Statusmsg;
