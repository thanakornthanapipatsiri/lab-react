import React from 'react';
import './App.css';
import CharacterCard from './Character.Card';
import WordCard from './WordCard';

const word = "Thanakorn"
function App() {
  return (
    <div>
      {
        <WordCard value={word}/>
      }
      </div>
  );
}

export default App;
