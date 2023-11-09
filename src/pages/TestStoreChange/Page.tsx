import React, { memo } from 'react';
import { usePersonStore } from './store';

const FirstNameChild = memo(() => {
  const firstName = usePersonStore((state) => state.firstName);
  console.log('🚀 ~ file: Page.tsx:6 ~ FirstNameChild ~ firstName:', firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);
  return (
    <div>
      <h2>Child1</h2>
      <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>
      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </div>
  );
});

const LastNameChild = memo(() => {
  const lastName = usePersonStore((state) => state.lastName);
  console.log('🚀 ~ file: Page.tsx:27 ~ LastNameChild ~ lastName:', lastName);
  const updateLastName = usePersonStore((state) => state.updateLastName);
  return (
    <div>
      <h2>Child2</h2>
      <label>
        LastName name
        <input
          // Update the "lastName" state
          onChange={(e) => updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>
      <p>
        Hello,<strong>{lastName}!</strong>
      </p>
    </div>
  );
});

const LastNameChild2 = memo(() => {
  const { lastName } = usePersonStore((state) => ({
    lastName: state.lastName,
  }));
  console.log(
    '%c 🚀 ~ file: Page.tsx:27 ~ LastNameChild ~ lastName:',
    'color:red',
    lastName
  );
  const updateLastName = usePersonStore((state) => state.updateLastName);
  return (
    <div>
      <h2>Child2</h2>
      <label>
        LastName name
        <input
          // Update the "lastName" state
          onChange={(e) => updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>
      <p>
        Hello,<strong>{lastName}!</strong>
      </p>
    </div>
  );
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Page: React.FC<Props> = memo((props) => (
  <div>
    测试Zustand的state变化，是否会影响非监听state数据值的组件渲染
    （它是比较函数返回值的变化，如第一个组件改变数据，第二个组件里不会重新渲染，但是第三个组件会重新渲染）
    <FirstNameChild />
    <LastNameChild />
    <LastNameChild2 />
  </div>
));

Page.displayName = 'Page';
