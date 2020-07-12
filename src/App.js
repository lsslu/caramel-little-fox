import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from './store'
import Info from './components/Info';
import defaultData from './store/defaultData';

function App() {
  console.log(Store)
  return (
    <Store.Provider value={defaultData}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Info />
      </div>
    </Store.Provider>
  );
}

export default App;
