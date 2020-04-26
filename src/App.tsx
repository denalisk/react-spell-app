import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getSpells } from './services/spell.service';
import SpellItem from './components/spells/spell-item';

function App() {
  function handleClick(e: any) {
    let newVar = e;
  }

  return (
    <div>
      <h1>Spell App</h1>
      { getSpells().map(spell => <SpellItem spell={ spell } />) }
    </div>
  );
}

export default App;
