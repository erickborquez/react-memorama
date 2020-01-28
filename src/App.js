import React from 'react';
import Game from './components/game'



import './App.css';

function App() {
  return (
    <div className="App">
      <Game isReproducing={true} />
    </div>
  );
}

export default App;
