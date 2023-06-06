import React from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import { store } from './components/store/store';

function App() {
  console.log('store', store.getState);
  return (
    <div>
      <Add />
      <List />
    </div>
  );
}

export default App;
