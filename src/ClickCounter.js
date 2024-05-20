import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Jumlah klik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
};

export default ClickCounter;
