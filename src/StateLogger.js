import React, { useState, useEffect } from 'react';

const StateLogger = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`Nilai state berubah: ${value}`);
  }, [value]);

  return (
    <div>
      <p>Nilai saat ini: {value}</p>
      <button onClick={() => setValue(value + 1)}>Tambah Nilai</button>
    </div>
  );
};

export default StateLogger;
