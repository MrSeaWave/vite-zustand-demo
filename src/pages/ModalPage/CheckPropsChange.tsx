import { memo, useState } from 'react';

function Child(props: any) {
  const [num, setNum] = useState(props.n);

  return (
    <div>
      num:{num},<br /> n:{props.n}{' '}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click num
      </button>
    </div>
  );
}
function Father() {
  console.log('Father');
  const [n, setN] = useState(0);

  return (
    <div>
      Father n:{n}
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        click n
      </button>
      <Child n={n} />
    </div>
  );
}

export default memo(Father);
