import React from 'react';
import './App.css';
import { Store } from './store'
import Info from './components/Info';
import Draw from './components/Draw';
import defaultData from './store/defaultData';

function App() {
  return (
    <Store.Provider value={defaultData}>
      <div className="App">
        <Info />
        <Draw />
      </div>
    </Store.Provider>
  );
}

export default App;
