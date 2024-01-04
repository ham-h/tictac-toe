const Sqaure = ({ value, onClick, isWinningSquare }) => {
  const colorClass= value === "X" ? "txt-green" : "txt-orange";
  const winningClass=isWinningSquare ? "winning" : "";
  return (
    // <button type="button" className="square" onClick={onClick}>{value}</button>
    <button
      type="button"
      // className={`square ${value === "X" ? "txt-green" : "txt-orange"} ${
      //   isWinningSquare ? "winning" : ""
      // }`}//to make it simpler
      className={`square $ ${colorClass} ${winningClass}
        
      `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Sqaure;
