import React, { memo } from 'react';
import { useBearStore } from '../../store/bookStore';

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

export const BearStorePage = memo((props) => {
  return (
    <div>
      BearStore
      <BearCounter />
      <Controls />
    </div>
  );
});

BearStorePage.displayName = 'BearStorePage';
