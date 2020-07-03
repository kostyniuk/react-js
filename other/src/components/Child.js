import React, { useContext } from 'react';

const Child = React.memo(({data}) => {
  console.log('child');
  console.log({ data });
  if (Object.keys(data).length) {
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
