import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState("Before the call");
  useEffect(() => {
    fetch("http://localhost:8888")
        .then(res => res.text())
        .then(res => {
          setResponse(res)
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">{response}</p>
      </header>
    </div>
  );
}

export default App;
