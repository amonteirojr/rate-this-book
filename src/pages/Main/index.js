import React, { useState } from 'react';
import Results from './Results';

import Scanner from './Scanner';

function Main() {
  // eslint-disable-next-line
  const [isbn, setIsbn] = useState('');

  return (
    <>
      <Scanner onScan={setIsbn} />
      {isbn && <Results isbn={isbn} />}
    </>
  );
}

export default Main;
