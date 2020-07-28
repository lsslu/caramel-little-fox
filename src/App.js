import React from 'react';
import './App.css';
import { Store } from './store'
import defaultData from './store/defaultData';
import Info from './components/Info';
import Draw from './components/Draw';
import RenderSequence from './components/RenderSequence';
import { ListItem, convert } from './components/HighOrderComponent';

const NewListItem = convert(ListItem);

function App() {
  return (
    <Store.Provider value={defaultData}>
      <div className="App">
        {/* <Info /> */}
        {/* <RenderSequence /> */}
        <NewListItem />
      </div>
    </Store.Provider>
  );
}

export default App;
