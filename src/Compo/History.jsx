const History = ({ history, moveTo, currentmove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {/* //to interpolate js to jsx
          // history.map((_,index)=><div key={index}>Move is {index}</div>)//v need to pass key prop coz historyarrays arrays r dynamic,so for react to uniquickly  identify element ,itneed key
          //since there is no obj,tofill syntax v use _. */}
        {history.map((_, index) => (
          <li key={index}>
            {/* v  should pass keyto li whichis  the wrapper not to  button */}
            <button
              type="button"
              className={`btn-move ${currentmove === index ? 'active' : '' }`} //putting in`` help to do js incide it.${currentmove === index ? 'active': ''
              onClick={() => moveTo(index)}
            >
              {index === 0 ? "Go to Game start" : `Go to move ${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
