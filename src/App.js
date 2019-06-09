import React from 'react';
import Ticker from './components/Ticker.js';
import DelayedButton from './components/DelayedButton.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div className="App">
      <Timer render={Ticker} />
      <Timer render={DelayedButton} />
    </div>
  );
}

export default App;
