import React, { useContext } from 'react';

import { ChildContext } from './ChildContext';

const Child = React.memo(() => {
  const data = useContext(ChildContext);
  console.log('child');
  console.log({ data });
  if (Object.keys(data.data).length) {
    return (
      <div>
        <h1>Child</h1>
        <p>{JSON.stringify(data, null, 2)}</p>
      </div>
    );
  } else {
    return '';
  }
});

export default Child;
