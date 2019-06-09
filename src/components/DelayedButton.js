import React from 'react';

export default function DelayedButton({ ticks }) {
  return (
    <button disabled={ticks < 5}>Click me after 5 seconds</button>
  );
}
