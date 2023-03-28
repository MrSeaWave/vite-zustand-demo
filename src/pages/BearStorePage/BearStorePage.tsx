import React, { memo } from 'react';
import { useBearStore } from '../../store/bookStore';

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  const { list, loading } = useBearStore();
  return (
    <div>
      <strong>{bears}</strong> around here ...
      <div>
        loading: <strong>{String(loading)}</strong>
      </div>
      <section>
        They are: <i>(remember increase bears)</i>
        <pre>
          <code>{JSON.stringify(list, null, '\t')}</code>
        </pre>
      </section>
    </div>
  );
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const { fetchInfo, removeAllBears } = useBearStore();
  return (
    <>
      <button onClick={() => increasePopulation(1)}>one up</button>
      <button onClick={() => fetchInfo()}>fetch info</button>
      <button onClick={removeAllBears}>removeAllBears</button>
    </>
  );
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
