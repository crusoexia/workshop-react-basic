import React from 'react';

export default function DelayedButton({ ticks }) {
  const disabled = ticks < 5;
  return (
    <button disabled={disabled}>
      {
        disabled
          ? `Click me after ${ 5 - ticks } seconds`
          : 'Click me'
      }
    </button>
  );
}
