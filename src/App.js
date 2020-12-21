import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <h1 className="title">
        Random Game Chooser
      </h1>
      <form className="game-form">
        <input className="game-input" type="text" />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
