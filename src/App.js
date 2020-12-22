import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {
  
  const [games, setGames] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {initFunction()}, []);

  const initFunction = async () => {
    
  };

  const addGame = e => {
    e.preventDefault();
    setGames(games.concat(input));
    setInput("")
  };

  const updateInput = e => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1 className="title">
        Random Game Chooser
      </h1>
      <form onSubmit={addGame} className="game-form">
        <input className="game-input" type="text" value={input} onChange={updateInput} />
        <button className="add-btn">
          Add
        </button>
      </form>
      <ul>
      {games.map(game => (
        <li>
          {game}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
