import React from 'react';
import withTimer from './withTimer.js';

function DelayedButton({ ticks }) {
  return (
    <button disabled={ticks < 5}>Click me after 5 seconds</button>
  );
}

export default withTimer(DelayedButton);
