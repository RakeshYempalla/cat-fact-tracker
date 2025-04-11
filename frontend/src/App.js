import React from 'react';
import CatFacts from './components/CatFacts';       
import RandomCatFact from './components/RandomCatFact';  
import AddCatFact from './components/AddCatFact';       

function App() {
  return (
    <div>
      <h1>Cat Fact Tracker</h1>
      <RandomCatFact />
      <CatFacts />
      <AddCatFact />
    </div>
  );
}

export default App;

