import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick(e: any) {
    console.log("before the breakpoint");
    let newVar = e;
    console.log("after the breakpoint");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClick}>Try Me</button>>
      </header>
    </div>
  );
}

export default App;
