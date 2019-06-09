import React from 'react';
import withTimer from './withTimer.js';

function Ticker({ ticks }) {
  return (
    <div>{ticks} Ticks</div>
  );
}

export default withTimer(Ticker);
