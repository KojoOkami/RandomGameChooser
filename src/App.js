import React,{useEffect, useState} from "react";
import './App.css';

const App = () => {
  
  const [games, setGames] = useState([]);
  const [input, setInput] = useState("");
  const [chosen, setChosen] = useState("");

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

  const getRandomGame = e => {
    e.preventDefault();
    if (games.length < 2) {
      setChosen("Not enough games entered!");
    } else {
      setChosen(games[Math.floor(Math.random() * games.length)]);
    }
  }

  return (
    <div className="App">

      <div className="header">
        <h1 className="title">
          Random Game Chooser
        </h1>
      </div>

      <div className="input">
      <form onSubmit={addGame} className="game-form">
        <input className="game-input" type="text" value={input} onChange={updateInput} placeholder="Enter the name of a game and press enter!" />
      </form>
      </div>

      <div className="list">
        {games.map(game => (
          <p>
            {game}
          </p>
        ))}
      </div>

      <div className="output">
        <form onSubmit={getRandomGame} className="randomize-form">
          <button className="randomize-btn">
            <b>Get Random Game!</b>
          </button>
        </form>
        <h3>
        {chosen}
        </h3>
      </div>
      
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
