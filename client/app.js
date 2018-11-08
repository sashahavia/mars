import React from 'react';
import Board from './components/board';
import Legend from './components/legend';

const App = () => {
  return (
    <div className="main">
      <h1>Welcome to Mars!</h1>
      <p>This is a map of mining nodes.</p>
      <Legend />
      <Board />
    </div>
  );
};

export default App;
