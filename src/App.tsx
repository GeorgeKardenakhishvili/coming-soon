import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={require('./logo.png')} alt="" />
      </header>
      
      <main>
        <h1>In Progress</h1>
        <img src={require('./micro.png')} alt="" />
      </main>
    </div>
  );
}

export default App;
