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
      <form onSubmit={getRandomGame} className="randomize-form">
        <button className="randomize-btn">
          Get Random Game!
        </button>
      </form>
      <h1>
        {chosen}
      </h1>
    </div>
  );
}

export default App;
