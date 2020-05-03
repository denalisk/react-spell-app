import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpellBook from './components/spell-book/spell-book';

function App() {
  function handleClick(e: any) {
    let newVar = e;
  }

  return (
    <SpellBook></SpellBook>
  );
}

export default App;
