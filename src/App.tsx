import React from 'react';
import './App.css';
import Rectangle2Copy from './components/Rectangle2Copy';
import Rectangle from './components/Rectangle';
import { SlowBuffer } from 'buffer';


const App: React.FC = () => {
  return (
    <div className="App">
      <Rectangle2Copy />
      <Rectangle />
      <Rectangle />
    </div>
  );
} 

export default App;